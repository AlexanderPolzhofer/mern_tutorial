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

export const createRecipe: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const levelOfDifficulty = req.body.levelOfDifficulty;
  const preparationTime = req.body.preparationTime;
  const ingredients = req.body.ingredients;

  try {
    const newRecipe = await RecipeModel.create({
      title,
      levelOfDifficulty,
      preparationTime,
      ingredients,
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
