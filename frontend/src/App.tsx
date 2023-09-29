import React from "react";
import { Recipe as RecipeModel } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";
import { Recipe } from "./components/Recipe/Recipe";

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);
  const endpoint = "/api/recipes";

  React.useEffect(() => {
    loadRecipes(endpoint, "GET", setRecipes);
  }, []);

  return (
    <>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id} />
      ))}
    </>
  );
};

export default App;
