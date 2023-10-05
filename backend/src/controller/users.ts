import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../model/user";
import bcrypt from "bcrypt";

interface SignUpBody {
  userName?: string;
  email?: string;
  password?: string;
}

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const rawPassword = req.body.password;

  try {
    if (!userName || !email || !rawPassword) {
      throw createHttpError(
        400,
        "Please check you input. It seems, that some parameters are missing."
      );
    }

    const existingUsername = await UserModel.findOne({ userName }).exec();

    if (existingUsername) {
      throw createHttpError(409, "Username already in use. Please log in.");
    }

    const existingEmail = await UserModel.findOne({ email }).exec();

    if (existingEmail) {
      throw createHttpError(
        409,
        "Email address already in use. Please log in."
      );
    }

    const passwordHashed = await bcrypt.hash(rawPassword, 10);

    const newUser = await UserModel.create({
      userName,
      email,
      password: passwordHashed,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
