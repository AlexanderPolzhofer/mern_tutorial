import React from "react";
import { Recipe } from "./model/recipe";

const App = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const endpoint = "/api/recipes";

  React.useEffect(() => {
    const loadRecipes = async () => {
      try {
        const response = await fetch(endpoint, { method: "GET" });
        const fetchedRecipes: Recipe[] = await response.json();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error();
      }
    };
    loadRecipes();
  }, []);

  return <>{JSON.stringify(recipes)}</>;
};

export default App;
