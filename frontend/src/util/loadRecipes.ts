import { Recipe as RecipeModel } from "../model/recipe";

export const loadRecipes = async (
  host: string,
  requestMethod: string,
  setState: React.Dispatch<React.SetStateAction<RecipeModel[]>>
) => {
  try {
    const response = await fetch(host, { method: requestMethod });
    const data: RecipeModel[] = await response.json();
    setState(data);
  } catch (error) {
    console.error(error);
  }
};
