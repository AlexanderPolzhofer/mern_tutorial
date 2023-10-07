export interface Recipe {
  _id?: string;
  title: string;
  preparationTime?: string;
  ingredients?: string[];
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const recipeInitialState = {
  _id: "",
  title: "",
  preparationTime: "",
  ingredients: [""],
  image: "",
};