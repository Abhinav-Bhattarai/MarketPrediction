import express from "express";
import bcypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/UserModel.js";
import dotenv from "dotenv";
import { RegisterMiddleware } from "../Middleware/signup-mdl.js";
dotenv.config();

const router = express.Router();

const HashPassword = async (Password) => {
  const hashedPass = await bcypt.hash(Password, 10);
  return hashedPass;
};

const GenerateJsonWebToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_AUTH_TOKEN);
  return token;
};

router.post("/", RegisterMiddleware, async (req, res) => {
  try {
    const { Username, Email } = req.body;
    let { Password } = req.body;
    Password = await HashPassword(Password);

    const model = new UserModel({
      Username,
      Password,
      Email,
    });
    try {
      const data = await model.save();
      const token = GenerateJsonWebToken(data);
      const cookie_option = {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      };
      res.cookie("authToken", token, cookie_option);
      res.cookie("userid", data.UserID, cookie_option);
      res.cookie("id", data._id, cookie_option);
    } catch {
      return res.json({ error: true, type: "DatabaseClutter" });
    }
  } catch {
    return res.json({ error: true, type: "ExceptionError" });
  }
});
