import { RequestHandler } from "express";
import RecipeModel from "../model/recipe";
import mongoose from "mongoose";
import createHttpError from "http-errors";

export const getRecipe: RequestHandler = async (req, res, next) => {
  const recipeId = req.params.recipeId;

  try {
    if (!mongoose.isValidObjectId(recipeId)) {
      throw createHttpError(400, "Invalid recipe id.");
    }

    const recipe = await RecipeModel.findById(recipeId).exec();

    if (!recipe) {
      throw createHttpError(404, "No recipe id found.");
    }

    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

export const getRecipes: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await RecipeModel.find().exec();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

interface CreateRecipeBody {
  title?: string;
  levelOfDifficulty?: number;
  preparationTime?: number;
  ingredients?: string[];
}

export const createRecipe: RequestHandler<
  unknown,
  unknown,
  CreateRecipeBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const levelOfDifficulty = req.body.levelOfDifficulty;
  const preparationTime = req.body.preparationTime;
  const ingredients = req.body.ingredients;

  try {
    if (!title) {
      throw createHttpError(400, "The recipe needs a title.");
    }

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
