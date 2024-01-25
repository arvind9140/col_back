import mongoose from "mongoose";
import { Chat } from "../../models/chatModels/chat.models.js";
import { ChatMessage } from "../../models/chatModels/message.models.js";
import { emitSocketEvent } from "../../socket/index.js";
import { getLocalPath, getStaticFilePath } from "../../utils/helpers.js";
import { responseData } from "../../utils/respounse.js";
import { ChatEventEnum } from "../../constants.js";

/**
 * @description Utility function which returns the pipeline stages to structure the chat message schema with common lookups
 * @returns {mongoose.PipelineStage[]}
 */
const chatMessageCommonAggregation = () => {
  return [
    {
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
  ];
};

const getAllMessages = (async (req, res) => {
  const { chatId } = req.params;

  const selectedChat = await Chat.findById(chatId);

  if (!selectedChat) {
 
    return responseData(res,"", 404,false, "Chat does not exist");
  }

  // Only send messages if the logged in user is a part of the chat he is requesting messages of
  if (!selectedChat.participants?.includes(req.user?._id)) {
   
    return responseData(res,"", 400,false, "User is not a part of this chat");
  }

  const messages = await ChatMessage.aggregate([
    {
      $match: {
        chat: new mongoose.Types.ObjectId(chatId),
      },
    },
    ...chatMessageCommonAggregation(),
    {
      $sort: {
        createdAt: -1,
      },
    },
  ]);


  responseData(
    res,
    "Messages fetched successfully",
    200,
    true,
    "",
    messages || []
  );
});

const sendMessage = (async (req, res) => {
  const { chatId } = req.params;
  const { content } = req.body;
  

  if (!content && !req.files?.attachments?.length) {
   
    return responseData(res,"", 400,false, "Message content or attachment is required");
  }

  const selectedChat = await Chat.findById(chatId);

  if (!selectedChat) {
  
    return responseData(res,"", 404,false, "Chat does not exist");
  }

  const messageFiles = [];

  if (req.files && req.files.attachments?.length > 0) {
    req.files.attachments?.map((attachment) => {
      messageFiles.push({
        url: getStaticFilePath(req, attachment.filename),
        localPath: getLocalPath(attachment.filename),
      });
    });
  }

  // Create a new message instance with appropriate metadata
  const message = await ChatMessage.create({
    sender: new mongoose.Types.ObjectId(req.user._id),
    content: content || "",
    chat: new mongoose.Types.ObjectId(chatId),
    attachments: messageFiles,
  });

  // update the chat's last message which could be utilized to show last message in the list item
  const chat = await Chat.findByIdAndUpdate(
    chatId,
    {
      $set: {
        lastMessage: message._id,
      },
    },
    { new: true }
  );

  // structure the message
  const messages = await ChatMessage.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(message._id),
      },
    },
    ...chatMessageCommonAggregation(),
  ]);

  // Store the aggregation result
  const receivedMessage = messages[0];


  if (!receivedMessage) {
 
    responseData(res, "", 500, false, "Internal server error");
  }

  // logic to emit socket event about the new message created to the other participants
  chat.participants.forEach((participantObjectId) => {
    // here the chat is the raw instance of the chat in which participants is the array of object ids of users
    // avoid emitting event to the user who is sending the message
    if (participantObjectId.toString() === req.user._id.toString()) return;

    // emit the receive message event to the other participants with received message as the payload
    emitSocketEvent(
      req,
      participantObjectId.toString(),
      ChatEventEnum.MESSAGE_RECEIVED_EVENT,
      receivedMessage
    );
  });


responseData(res, "Message saved successfully", 201, true,"", receivedMessage);
});

export { getAllMessages, sendMessage };
