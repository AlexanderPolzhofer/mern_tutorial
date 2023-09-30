import { Recipe } from "../model/recipe";

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

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetchData("api/recipes", { method: "GET" });
  return response.json();
};
