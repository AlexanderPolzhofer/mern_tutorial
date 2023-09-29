import React from "react";
import { Recipe as RecipeModel } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";


const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);
  const endpoint = "/api/recipes";

  React.useEffect(() => {
    loadRecipes(endpoint, "GET", setRecipes);
  }, []);

  return <>{JSON.stringify(recipes)}</>;
};

export default App;
