import { Router } from "express";
import * as RecipesController from "../controller/recipes";

const router = Router();

router.get("/", RecipesController.getRecipe);

router.post("/", RecipesController.createRecipe);

export default router;
