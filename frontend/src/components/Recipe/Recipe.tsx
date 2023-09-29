import React from "react";
import { Recipe as RecipeModel } from "./../../model/recipe";
import { Card } from "../Card/Card.style";

interface RecipeProps {
  recipe: RecipeModel;
}

export const Recipe: React.FC<RecipeProps> = ({ recipe }) => (
  <Card>{JSON.stringify(recipe)}</Card>
);
