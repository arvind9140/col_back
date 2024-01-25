import mongoose from "mongoose";
import { User } from "../../models/userModels/users.model.js";
import { Chat } from "../../models/chatModels/chat.models.js";
import { ChatMessage } from "../../models/chatModels/message.models.js";
import { ChatEventEnum } from "../../constants.js";
import { emitSocketEvent } from "../../socket/index.js";
import { responseData } from "../../utils/respounse.js";

const chatCommonAggregation = () => {
  return [
    {
      // lookup for the participants present
      $lookup: {
        from: "users",
        foreignField: "_id",
        localField: "participants",
        as: "participants",
        pipeline: [
          {
            $project: {
              password: 0,
              refreshToken: 0,
              forgotPasswordToken: 0,
              forgotPasswordExpiry: 0,
              emailVerificationToken: 0,
              emailVerificationExpiry: 0,
            },
          },
        ],
      },
    },
    {
      // lookup for the group chats
      $lookup: {
        from: "chatmessages",
        foreignField: "_id",
        localField: "lastMessage",
        as: "lastMessage",
        pipeline: [
          {
            // get details of the sender
            $lookup: {
              from: "users",
              foreignField: "_id",
              localField: "sender",
              as: "sender",
              pipeline: [
                {
                  $project: {
                    username: 1,
                    avatar: 1,
                    email: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              sender: { $first: "$sender" },
            },
          },
        ],
      },
    },
    {
      $addFields: {
        lastMessage: { $first: "$lastMessage" },
      },
    },
  ];
};

const deleteCascadeChatMessages = async (chatId) => {
  // fetch the messages associated with the chat to remove
  const messages = await ChatMessage.find({
    chat: new mongoose.Types.ObjectId(chatId),
  });

  let attachments = [];

  // get the attachments present in the messages
  attachments = attachments.concat(
    ...messages.map((message) => {
      return message.attachments;
    })
  );

  attachments.forEach((attachment) => {
    // remove attachment files from the local storage
    removeLocalFile(attachment.localPath);
  });

  // delete all the messages
  await ChatMessage.deleteMany({
    chat: new mongoose.Types.ObjectId(chatId),
  });
};

const searchAvailableUsers = async (req, res) => {
  const role = req.query.role;

  if (role == "ADMIN") {
    const users = await User.aggregate([
      {
        $match: {
          _id: {
            $ne: req.user._id, // avoid logged in user
          },
        },
      },
      {
        $project: {
          avatar: 1,
          username: 1,
          email: 1,
        },
      },
    ]);

    responseData(res, "Users fetched successfully", 200, true, "", users);
  } else if (
    role == "CLIENT" ||
    role == "SUPERVISER" ||
    role == "DESIGNER" ||
    role == "VISUALIZER"
  ) {
    const users = await User.aggregate([
      {
        $match: {
          _id: {
            $ne: req.user._id, // avoid logged in user
          },
          role: "ADMIN",
        },
      },
      {
        $project: {
          avatar: 1,
          username: 1,
          email: 1,
        },
      },
    ]);

    responseData(res, "Users fetched successfully", 200, true, "", users);
  } else {
    responseData(res, "", 404, false, "Please select your role");
  }
};

const createOrGetAOneOnOneChat = async (req, res) => {
  const { receiverId } = req.params;

  // Check if it's a valid receiver
  const receiver = await User.findById(receiverId);

  if (!receiver) {
    responseData(res, "", 409, "Receiver does not exist", []);
  }

  // check if receiver is not the user who is requesting a chat
  if (receiver._id.toString() === req.user._id.toString()) {
    responseData(res, "", 400, "You cannot chat with yourself", []);
  }

  const chat = await Chat.aggregate([
    {
      $match: {
        isGroupChat: false, // avoid group chats. This controller is responsible for one on one chats
        // Also, filter chats with participants having receiver and logged in user only
        $and: [
          {
            participants: { $elemMatch: { $eq: req.user._id } },
          },
          {
            participants: {
              $elemMatch: { $eq: new mongoose.Types.ObjectId(receiverId) },
            },
          },
        ],
      },
    },
    ...chatCommonAggregation(),
  ]);

  if (chat.length) {
    // if we find the chat that means user already has created a chat

    responseData(res, "Chat retrieved successfully", 200, true, "", chat[0]);
    return;
  }

  // if not we need to create a new one on one chat
  const newChatInstance = await Chat.create({
    name: "One on one chat",
    participants: [req.user._id, new mongoose.Types.ObjectId(receiverId)], // add receiver and logged in user as participants
    admin: req.user._id,
  });

  // structure the chat as per the common aggregation to keep the consistency
  const createdChat = await Chat.aggregate([
    {
      $match: {
        _id: newChatInstance._id,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = createdChat[0]; // store the aggregation result

  if (!payload) {
    responseData(res, "", 500, false, "", []);
  }

  // logic to emit socket event about the new chat added to the participants
  payload?.participants?.forEach((participant) => {
    if (participant._id.toString() === req.user._id.toString()) return; // don't emit the event for the logged in use as he is the one who is initiating the chat

    // emit event to other participants with new chat as a payload
    emitSocketEvent(
      req,
      participant._id?.toString(),
      ChatEventEnum.NEW_CHAT_EVENT,
      payload
    );
  });

  responseData(res, "Chat retrieved successfully", 200, true, "", payload);
};

const createAGroupChat = async (req, res) => {
  const { name, participants } = req.body;

  // Check if user is not sending himself as a participant. This will be done manually
  if (participants.includes(req.user._id.toString())) {
    responseData(
      res,
      "",
      400,
      false,
      "Participants array should not contain the group creator",
      []
    );
  }

  const members = [...new Set([...participants, req.user._id.toString()])]; // check for duplicates

  if (members.length < 3) {
    // check after removing the duplicate
    // We want group chat to have minimum 3 members including admin
    responseData(
      res,
      "",
      400,
      false,
      "Seems like you have passed duplicate participants.",
      []
    );
  }

  // Create a group chat with provided members
  const groupChat = await Chat.create({
    name,
    isGroupChat: true,
    participants: members,
    admin: req.user._id,
  });

  // structure the chat
  const chat = await Chat.aggregate([
    {
      $match: {
        _id: groupChat._id,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = chat[0];

  if (!payload) {
    responseData(res, "", 500, false, "Internal server error", []);
  }

  // logic to emit socket event about the new group chat added to the participants
  payload?.participants?.forEach((participant) => {
    if (participant._id.toString() === req.user._id.toString()) return; // don't emit the event for the logged in use as he is the one who is initiating the chat
    // emit event to other participants with new chat as a payload
    emitSocketEvent(
      req,
      participant._id?.toString(),
      ChatEventEnum.NEW_CHAT_EVENT,
      payload,
      "xssacsa"
    );
  });

  responseData(res, "Group chat created successfully", 201, true, "", payload);
};

const getGroupChatDetails = async (req, res) => {
  const { chatId } = req.params;
  const groupChat = await Chat.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(chatId),
        isGroupChat: true,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const chat = groupChat[0];

  if (!chat) {
    responseData(res, "", 404, false, "Group chat does not exist", []);
  }

  responseData(res, "Group chat fetched successfully", 200, true, "", chat);
};

const renameGroupChat = async (req, res) => {
  const { chatId } = req.params;
  const { name } = req.body;

  // check for chat existence
  const groupChat = await Chat.findOne({
    _id: new mongoose.Types.ObjectId(chatId),
    isGroupChat: true,
  });

  if (!groupChat) {
    responseData(res, "", 404, false, "Group chat does not exist");
  }

  // only admin can change the name
  if (groupChat.admin?.toString() !== req.user._id?.toString()) {
    responseData(res, "", 404, false, "You are not an admin");
  }

  const updatedGroupChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      $set: {
        name,
      },
    },
    { new: true }
  );

  const chat = await Chat.aggregate([
    {
      $match: {
        _id: updatedGroupChat._id,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = chat[0];

  if (!payload) {
    responseData(res, "", 500, false, "Internal server error");
  }

  // logic to emit socket event about the updated chat name to the participants
  payload?.participants?.forEach((participant) => {
    // emit event to all the participants with updated chat as a payload
    emitSocketEvent(
      req,
      participant._id?.toString(),
      ChatEventEnum.UPDATE_GROUP_NAME_EVENT,
      payload
    );
  });

  responseData(
    res,
    "Group chat name updated successfully",
    200,
    true,
    "",
    chat[0]
  );
};

const deleteGroupChat = async (req, res) => {
  const { chatId } = req.params;

  // check for the group chat existence
  const groupChat = await Chat.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(chatId),
        isGroupChat: true,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const chat = groupChat[0];

  if (!chat) {
    responseData(res, "", 404, false, "Group chat does not exist");
  }

  // check if the user who is deleting is the group admin
  if (chat.admin?.toString() !== req.user._id?.toString()) {
    // throw new ApiError(404, "");
    responseData(res, "", 404, false, "Only admin can delete the group");
  }

  await Chat.findByIdAndDelete(chatId); // delete the chat

  await deleteCascadeChatMessages(chatId); // remove all messages and attachments associated with the chat

  // logic to emit socket event about the group chat deleted to the participants
  chat?.participants?.forEach((participant) => {
    if (participant._id.toString() === req.user._id.toString()) return; // don't emit the event for the logged in use as he is the one who is deleting
    // emit event to other participants with left chat as a payload
    emitSocketEvent(
      req,
      participant._id?.toString(),
      ChatEventEnum.LEAVE_CHAT_EVENT,
      chat
    );
  });

  responseData(res, "", 200, true, "Group chat deleted successfully");
};

const deleteOneOnOneChat = async (req, res) => {
  const { chatId } = req.params;

  // check for chat existence
  const chat = await Chat.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(chatId),
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = chat[0];

  if (!payload) {
    return responseData(res, "", 404, false, "Chat does not exist");
  }

  await Chat.findByIdAndDelete(chatId); // delete the chat even if user is not admin because it's a personal chat

  await deleteCascadeChatMessages(chatId); // delete all the messages and attachments associated with the chat

  const otherParticipant = payload?.participants?.find(
    (participant) => participant?._id.toString() !== req.user._id.toString() // get the other participant in chat for socket
  );

  // emit event to other participant with left chat as a payload
  emitSocketEvent(
    req,
    otherParticipant._id?.toString(),
    ChatEventEnum.LEAVE_CHAT_EVENT,
    payload
  );

  return responseData(res, "", 200, true, "Chat deleted successfully");
};

const leaveGroupChat = async (req, res) => {
  const { chatId } = req.params;

  // check if chat is a group
  const groupChat = await Chat.findOne({
    _id: new mongoose.Types.ObjectId(chatId),
    isGroupChat: true,
  });

  if (!groupChat) {
    return responseData(res, "", 404, false, "Group chat does not exist");
  }

  const existingParticipants = groupChat.participants;

  // check if the participant that is leaving the group, is part of the group
  if (!existingParticipants?.includes(req.user?._id)) {
    return responseData(
      res,
      "",
      400,
      false,
      "You are not a part of this group chat"
    );
  }

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: {
        participants: req.user?._id, // leave the group
      },
    },
    { new: true }
  );

  const chat = await Chat.aggregate([
    {
      $match: {
        _id: updatedChat._id,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = chat[0];

  if (!payload) {
    responseData(res, "", 500, false, "Internal server error");
  }

  return responseData(res, "Left a group successfully", 200, true, "", payload);
};

const addNewParticipantInGroupChat = async (req, res) => {
  const { chatId, participantId } = req.params;

  // check if chat is a group
  const groupChat = await Chat.findOne({
    _id: new mongoose.Types.ObjectId(chatId),
    isGroupChat: true,
  });

  if (!groupChat) {
    // throw new ApiError(404, "Group chat does not exist");
    return responseData(res, "", 404, false, "Group chat does not exist");
  }

  // check if user who is adding is a group admin
  if (groupChat.admin?.toString() !== req.user._id?.toString()) {
    return responseData(res, "", 404, false, "You are not an admin");
  }

  const existingParticipants = groupChat.participants;

  // check if the participant that is being added in a part of the group
  if (existingParticipants?.includes(participantId)) {
    return responseData(
      res,
      "",
      409,
      false,
      "Participant already in a group chat"
    );
  }

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: {
        participants: participantId, // add new participant id
      },
    },
    { new: true }
  );

  const chat = await Chat.aggregate([
    {
      $match: {
        _id: updatedChat._id,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = chat[0];

  if (!payload) {
    return responseData(res, "", 500, false, "Internal server error");
  }

  // emit new chat event to the added participant
  emitSocketEvent(req, participantId, ChatEventEnum.NEW_CHAT_EVENT, payload);

  return responseData(
    res,
    "Participant added successfully",
    200,
    true,
    payload
  );
};

const removeParticipantFromGroupChat = async (req, res) => {
  const { chatId, participantId } = req.params;

  // check if chat is a group
  const groupChat = await Chat.findOne({
    _id: new mongoose.Types.ObjectId(chatId),
    isGroupChat: true,
  });

  if (!groupChat) {
    responseData(res, "", 404, false, "Group chat does not exist");
  }

  // check if user who is deleting is a group admin
  if (groupChat.admin?.toString() !== req.user._id?.toString()) {
    responseData(res, "", 400, false, "You are not an admin", []);
  }

  const existingParticipants = groupChat.participants;

  // check if the participant that is being removed in a part of the group
  if (!existingParticipants?.includes(participantId)) {
    throw new ApiError(400, "Participant does not exist in the group chat");
  }

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: {
        participants: participantId, // remove participant id
      },
    },
    { new: true }
  );

  const chat = await Chat.aggregate([
    {
      $match: {
        _id: updatedChat._id,
      },
    },
    ...chatCommonAggregation(),
  ]);

  const payload = chat[0];

  if (!payload) {
    responseData(res, "", 500, false, "Internal server error", []);
  }

  // emit leave chat event to the removed participant
  emitSocketEvent(req, participantId, ChatEventEnum.LEAVE_CHAT_EVENT, payload);

  responseData(res, "Participant removed successfully", 200, true, "", payload);
};

const getAllChats = async (req, res) => {
  const chats = await Chat.aggregate([
    {
      $match: {
        participants: { $elemMatch: { $eq: req.user._id } }, // get all chats that have logged in user as a participant
      },
    },
    {
      $sort: {
        updatedAt: -1,
      },
    },
    ...chatCommonAggregation(),
  ]);

  responseData(
    res,
    "User chats fetched successfully!",
    200,
    true,
    "",
    chats || []
  );
};

export {
  addNewParticipantInGroupChat,
  createAGroupChat,
  createOrGetAOneOnOneChat,
  deleteGroupChat,
  deleteOneOnOneChat,
  getAllChats,
  getGroupChatDetails,
  leaveGroupChat,
  removeParticipantFromGroupChat,
  renameGroupChat,
  searchAvailableUsers,
};
