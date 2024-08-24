import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"],
      unique: [true, "Title has been asked before"],
    },
    question: {
      type: String,
      required: [true, "Question required"],
    },
    category: {
      type: String,
      enum: ["General", "Programming", "Coding"],
      required: [true, "Question must be in the category"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Invalid UserId"],
    },
    countVote: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const question = mongoose.model("Question", questionSchema);

export default question;
