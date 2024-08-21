import express from "express";
const router = express.Router();

import {
  RegisterUser,
  LoginUser,
  LogoutUser,
  getUser,
} from "../controllers/authController.js";

import {
  authMiddleware,
  permissionUser,
} from "../middleware/authMiddleware.js";

// POST /api/v1/auth/register
router.post("/register", RegisterUser);

// POST /api/v1/auth/login
router.post("/login", LoginUser);

// GET /api/v1/auth/logout
router.get("/logout", LogoutUser);

// GET /api/v1/auth/getuser
router.get("/getuser", authMiddleware, getUser);

// GET /api/v1/auth/test
router.get("/test", authMiddleware, permissionUser("admin"), (req, res) => {
    res.send("Success")
});

export default router;
