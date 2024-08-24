import express from "express";
const router = express.Router();

import {
  createQuestion,
  showQuestion,
  detailQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/questionController.js";

import {
  authMiddleware,
  permissionUser,
} from "../middleware/authMiddleware.js";

// CRUD QUESTION

// Create Document
// POST /api/v1/question
router.post("/", authMiddleware, createQuestion);

// Read Document
// GET /api/v1/question
router.get("/", showQuestion);
// GET /api/v1/question/:id
router.get("/:id", detailQuestion);

// Update Document
// PUT /api/v1/question/:id
router.put("/:id", authMiddleware, updateQuestion);

// Delete document
// GET /api/v1/question/:id
router.delete("/:id", deleteQuestion);

export default router;
