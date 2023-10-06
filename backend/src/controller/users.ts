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

    req.session.userId = newUser._id;

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

interface LoginBody {
  userName?: string;
  password?: string;
}

export const login: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    if (!userName || !password) {
      throw createHttpError(400, "Parameters missing!");
    }

    const user = await UserModel.findOne({ userName })
      .select("+password +email")
      .exec();

    if (!user) {
      throw createHttpError(401, "Invalid credentials.");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw createHttpError(401, "Invalid credentials.");
    }

    req.session.userId = user._id;
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
