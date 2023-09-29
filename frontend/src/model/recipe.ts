export interface Recipe {
  _id?: string;
  title: string;
  levelOfDifficulty?: number;
  preparationTime?: number;
  ingredients?: string[];
  createdAt?: string;
  updatedAt?: string;
}
