import { Recipe as RecipeModel } from "../model/recipe";

export const loadRecipes = async (
  fetchRecipes: () => Promise<RecipeModel[]>,
  setState: React.Dispatch<React.SetStateAction<RecipeModel[]>>
) => {
  try {
    const data = await fetchRecipes();
    setState(data);
  } catch (error) {
    console.error(error);
  }
};
