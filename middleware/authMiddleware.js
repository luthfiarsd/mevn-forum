import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authMiddleware = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (!token) {
    return next(
      res.status(401).json({
        message: "Unauthorized",
      })
    );
  }

  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(
      res.status(401).json({
        message: "Invalid token",
      })
    );
  }

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      res.status(401).json({
        message: "User not found",
      })
    );
  }

  req.user = currentUser;

  next();
};

export const permissionUser = (...roles) => {
  return (req, res, next) => {
    // ['admin', 'maintainer']
    if (!roles.includes(req.user.role)) {
      return next(res.status(403).json({ message: "Access denied" }));
    }
    next();
  };
};
