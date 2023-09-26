import { RequestHandler } from "express";
import RecipeModel from "../model/recipe";

export const getRecipe: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await RecipeModel.find().exec();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};
