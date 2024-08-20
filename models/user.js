import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username required"],
    unique: [true, "Username has taken"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: [true, "Email has taken"],
    validate: {
      validator: validator.isEmail,
      message: "Must be an email format",
    },
  },
  password: {
    type: String,
    required: [true, "Password required"],
    minLength: 6,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const user = mongoose.model("User", userSchema);

export default user;
