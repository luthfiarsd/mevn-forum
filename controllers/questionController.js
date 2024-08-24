import Question from "../models/question.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { checkPermission } from "../middleware/checkPermission.js";

export const createQuestion = asyncHandler(async (req, res) => {
  const { title, question, category } = req.body;

  const newQuestion = await Question.create({
    title,
    question,
    category,
    userId: req.user._id,
  });

  return res.status(200).json({
    message: "Successfully added question",
    data: newQuestion,
  });
});

export const showQuestion = asyncHandler(async (req, res) => {
  const questionData = await Question.find();

  return res.status(200).json({
    message: "All questions showed",
    data: questionData,
  });
});

export const detailQuestion = asyncHandler(async (req, res) => {
  const questionDetail = await Question.findById(req.params.id);

  if (!questionDetail) {
    return res.status(404).json({
      message: "Invalid Question ID",
    });
  }

  return res.status(200).json({
    message: "Detailed question showed",
    data: questionDetail,
  });
});

export const updateQuestion = asyncHandler(async (req, res) => {
  const { title, question, category } = req.body;

  const dataQuestion = await Question.findById(req.params.id);

  checkPermission(req.user, dataQuestion.userId);
  dataQuestion.title = title;
  dataQuestion.question = question;
  dataQuestion.category = category;

  await dataQuestion.save();

  return res.status(200).json({
    message: "Successfully updated question",
    data: dataQuestion,
  });
});

export const deleteQuestion = (req, res) => {
  res.send("Delete pertanyaan");
};
