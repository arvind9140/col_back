import crypto from "crypto";
import jwt from "jsonwebtoken";
import axios from "axios";
import { serialize } from "cookie";
import { responseData } from "../../utils/respounse.js";
import { User } from "../../models/userModels/users.model.js";
import {
  getLocalPath,
  getStaticFilePath,
  removeLocalFile,
} from "../../utils/helpers.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // attach refresh token to the user document to avoid refreshing the access token with multiple refresh tokens
    user.refreshToken = refreshToken;

    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    //  responseData(
    //   res,
    //   "",
    //   500,
    //   false,
    //   "Something went wrong while generating the access token"
    // );
    // res.send(error)
    console.log(error);
  }
};

export const registerUser = async (req, res) => {
  const { email, username, password, role } = req.body;

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    responseData(
      res,
      "",
      409,
      false,
      "User with this email or username already exits",
      []
    );
  }
  const user = await User.create({
    email,
    password,
    username,
    isEmailVerified: false,
    role: role,
  });

  await user.save();
  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryToken();

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    responseData(
      res,
      "",
      500,
      false,
      "Something went wrong while registering the user"
    );
  }

  responseData(
    res,
    "Users registered successfully and verification email has been sent on your email.",
    201,
    true,
    "",
    createdUser
  );
};

export const loginUser = async (req, res) => {
  const { email, username, password } = req.body;

  if (!username && !email) {
    responseData(res, "", 400, false, "Username or email is required", []);
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    responseData(res, "", 404, false, "User does not exist", []);
  }

  // Compare the incoming password with hashed password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    responseData(res, "", 401, false, "Invalid user credentials", []);
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  // get the user document ignoring the password and refreshToken field
  const loggedInUser = await User.findById(user._id);

  // TODO: Add more options to make cookie more secure and reliable
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  // Serialize cookies using cookie.serialize
  const accessTokenCookie = serialize("accessToken", accessToken, options);
  const refreshTokenCookie = serialize("refreshToken", refreshToken, options);
axios.defaults.headers.common["Authorization"] = `Bearer ${accessTokenCookie}`;
  // Set the cookies in the response headers
  res.setHeader("Set-Cookie", [
    accessTokenCookie,
     refreshTokenCookie]);

  responseData(res, "User logged in successfully", 200, true, "", {
    user,
    accessToken,
    refreshToken,
  });
};

export const refreshAccessToken = async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    // throw new ApiError(401, "Unauthorized request");
    responseData(res, "", 401, false, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      // throw new ApiError(401, "Invalid refresh token");
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // check if incoming refresh token is same as the refresh token attached in the user document
    // This shows that the refresh token is used or not
    // Once it is used, we are replacing it with new refresh token below
    if (incomingRefreshToken !== user?.refreshToken) {
      // If token is valid but is used already
      // throw new ApiError(401, "Refresh token is expired or used");
      // If token is valid and not used
      responseData(res, "", 401, false, "Refresh token is expired or used");
    }
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };
    const accessTokenCookie = serialize("accessToken", accessToken, options);
    const refreshTokenCookie = serialize(
      "refreshToken",
      newRefreshToken,
      options
    );

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    responseData(res, "Access token refreshed", 200, true, "", {
      accessTokenCookie,
      refreshTokenCookie: newRefreshToken,
    });
  } catch (error) {
    res.send(error);
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    responseData(
      res,
      "Current user fetched successfully",
      200,
      true,
      "",
      req.user
    );
  } catch (err) {
    res.send(err);
  }
};
