import React from "react";
import { Recipe as RecipeModel } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";
import { Recipe } from "./components/Recipe/Recipe";
import * as Styled from "./components/GridOverview/GridOverview.style";
import * as RecipesAPI from "./network/recipesApi";

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);

  React.useEffect(() => {
    loadRecipes(RecipesAPI.fetchRecipes, setRecipes);
  }, []);

  return (
    <Styled.GridOverview>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id} />
      ))}
    </Styled.GridOverview>
  );
};

export default App;
