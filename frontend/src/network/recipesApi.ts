import { Recipe as RecipeModel } from "../model/recipe";

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
};

export const fetchRecipes = async (): Promise<RecipeModel[]> => {
  const response = await fetchData("api/recipes", { method: "GET" });
  return response.json();
};

export interface CreateRecipeModel {
  title: string;
  levelOfDifficulty: number;
  preparationTime: number;
  ingredients: string[];
}

export const createRecipe = async (
  recipe: CreateRecipeModel
): Promise<RecipeModel> => {
  const response = await fetchData("api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  return response.json();
};
