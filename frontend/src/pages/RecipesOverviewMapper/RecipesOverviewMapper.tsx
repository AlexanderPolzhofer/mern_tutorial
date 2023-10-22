import React from "react";
import { Recipe as RecipeModel } from "./../../model/recipe.ts";
import * as Styled from "./../../components/GridOverview/GridOverview.style.ts";
import * as RecipesAPI from "./../../network/recipesApi.ts";
import { Recipe } from "../../components/Recipe/Recipe.tsx";
import { loadRecipes } from "../../util/loadRecipes.ts";

interface RecipesOverviewMapperProps {
  handleDelete?: (recipe: RecipeModel) => void;
  handleUpdateRecipe?: (recipe: RecipeModel) => void;
}

export const RecipesOverviewMapper: React.FC<RecipesOverviewMapperProps> = ({
  handleDelete,
  handleUpdateRecipe,
}) => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);

  React.useEffect(() => {
    loadRecipes(RecipesAPI.fetchRecipes, setRecipes);
  }, [recipes]);

  return (
    <Styled.GridOverview>
      {recipes.map((recipe) => (
        <Recipe
          recipe={recipe}
          key={recipe._id}
          onDeleteRecipe={() => handleDelete!(recipe)}
          onHandleUpdateRecipe={handleUpdateRecipe!}
        />
      ))}
    </Styled.GridOverview>
  );
};
