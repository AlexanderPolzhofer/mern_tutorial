import { Router } from "express";
import * as RecipesController from "../controller/recipes";

const router = Router();

router.get("/", RecipesController.getRecipes);

router.get("/:recipeId", RecipesController.getRecipe);

router.post("/", RecipesController.createRecipe);

router.patch("/:recipeId", RecipesController.updateRecipe);

router.delete("/:recipeId", RecipesController.deleteRecipe);

export default router;
