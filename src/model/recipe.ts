import { InferSchemaType, Schema, model } from "mongoose";

const ingredientSchema = new Schema({ name: String, amount: Number });

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    levelOfDifficulty: {
      type: Number,
      min: 1,
      max: 5,
    },
    preparationTime: Number,
    ingredients: [ingredientSchema],
    image: String,
  },
  { timestamps: true }
);

type Recipe = InferSchemaType<typeof recipeSchema>;

export default model<Recipe>("Recipe", recipeSchema);
