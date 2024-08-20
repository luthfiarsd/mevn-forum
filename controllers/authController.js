import User from "../models/user.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  const cookieOpt = {
    expire: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    security: false,
  };

  res.cookie("jwt", token, cookieOpt);

  user.password = undefined;

  res.status(statusCode).json({
    data: user,
  });
};

export const RegisterUser = asyncHandler(async (req, res) => {
  const createUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  createSendToken(createUser, 201, res);
});

export const LoginUser = asyncHandler(async (req, res) => {
  // Error val if email/password null
  if (!req.body.email || !req.body.password) {
    res.status(400);
    throw new Error("Email or password cannot be empty");
  }

  // Error val if email is not in db
  const userData = await User.findOne({
    email: req.body.email,
  });

  if (userData && (await userData.comparePassword(req.body.password))) {
    createSendToken(userData, 200, res);
  } else {
    res.status(400);
    throw new Error("Invalid user or password");
  }
});

export const LogoutUser = async (req, res) => {
  res.send("Logout Berhasil");
};
export const getUser = async (req, res) => {
  res.send("Get User Data Berhasil");
};
