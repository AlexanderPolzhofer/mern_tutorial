import { Recipe } from "../model/recipe";

export const loadRecipes = async (
  host: string,
  method: string,
  setState: React.Dispatch<React.SetStateAction<Recipe[]>>
) => {
  try {
    const response = await fetch(host, {method: method});
    const data: Recipe[] = await response.json();
    setState(data);
  } catch (error) {
    console.error(error);
  }
};
