import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import authRouter from "./router/authRouter.js";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Route Endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "Keren" });
});

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

app.listen(port, () => {
  console.log(`Aplikasi berjalan di ${port}`);
});
