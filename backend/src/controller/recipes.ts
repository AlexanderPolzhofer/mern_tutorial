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

interface RecipeRequestBody {
  title?: string;
  preparationTime?: string;
  ingredients?: string[];
  image?: string;
}

export const createRecipe: RequestHandler<
  unknown,
  unknown,
  RecipeRequestBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const preparationTime = req.body.preparationTime;
  const ingredients = req.body.ingredients;
  const image = req.body.image;

  try {
    if (!title) {
      throw createHttpError(400, "The recipe needs a title.");
    }

    const newRecipe = await RecipeModel.create({
      title,
      preparationTime,
      ingredients,
      image,
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

interface RecipeRequestParams {
  recipeId?: string;
}

export const updateRecipe: RequestHandler<
  RecipeRequestParams,
  unknown,
  RecipeRequestBody,
  unknown
> = async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;
    const newTitle = req.body.title;
    const newPreparationTime = req.body.preparationTime;
    const newImage = req.body.image;

    if (!newTitle) {
      throw createHttpError(400, "The recipe needs a title.");
    }

    const recipe = await RecipeModel.findById(recipeId).exec();

    if (!recipe) {
      throw createHttpError(404, "No recipe id found.");
    }

    recipe.title = newTitle;
    recipe.preparationTime = newPreparationTime;
    recipe.image = newImage;

    const updatedRecipe = recipe.save();
    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe: RequestHandler = async (req, res, next) => {
  const recipeId = req.params.recipeId;

  try {
    if (!mongoose.isValidObjectId(recipeId)) {
      throw createHttpError(400, "Invalid recipe id.");
    }

    const recipe = await RecipeModel.findById(recipeId).exec();

    if (!recipe) {
      throw createHttpError(404, "Recipe not found.");
    }

    await recipe.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
