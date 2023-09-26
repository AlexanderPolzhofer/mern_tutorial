import { Router } from "express";
import * as RecipesController from "../controller/recipes";

const router = Router();

router.get("/", RecipesController.getRecipe);

export default router;
