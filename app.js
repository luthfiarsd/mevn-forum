import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Router
import authRouter from "./router/authRouter.js";
import questionRouter from "./router/questionRouter.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
const app = express();
const port = 3000;

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connection DB
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database error connection");
  });

// Parent Router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/question", questionRouter);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running in localhost ${port}`);
});
