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
  _id?: string;
  title: string;
  preparationTime: string;
  ingredients: string[];
  image?: string;
}

export const createRecipe = async (
  recipe: RecipeModel
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

export const deleteRecipe = async (recipeId: string) => {
  await fetchData(`api/recipes/${recipeId}`, {
    method: "DELETE",
  });
};

export const updateRecipe = async (recipe: RecipeModel) => {
  const response = await fetchData(`api/recipes/${recipe._id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
  return response.json();
};
