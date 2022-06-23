import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../Models/UserModel";
import { GenerateJsonWebToken } from "./register";

const router = express.Router();

const compareHash = async (Password, hash) => {
  const state = await bcrypt.compare(Password, hash);
  return state;
};

router.post("/", async (req, res) => {
  const { Username, Password } = req.body;
  try {
    const data = await UserModel.findOne({ Username });
    if (data) {
      if (compareHash(Password, data._id)) {
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
          return res.json({ error: false, type: 'None' })
      }
    }
  } catch {
    return res.json({ error: true, type: 'DatabaseClutter' })
  }
});

export default router;