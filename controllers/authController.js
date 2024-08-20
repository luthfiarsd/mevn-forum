import User from "../models/user.js";

export const RegisterUser = async (req, res) => {
  try {
    const createUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({message: 'Register Success', data: createUser
    })
  } catch (error) {
    return res.status(400).json({ message: "Error", error });
  }
};
export const LoginUser = (req, res) => {
  res.send("Login Berhasil");
};
export const LogoutUser = (req, res) => {
  res.send("Logout Berhasil");
};
export const getUser = (req, res) => {
  res.send("Get User Data Berhasil");
};
