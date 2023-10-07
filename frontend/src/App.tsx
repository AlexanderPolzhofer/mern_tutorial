import React from "react";
import { Recipe as RecipeModel, recipeInitialState } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";
import { Recipe } from "./components/Recipe/Recipe";
import * as Styled from "./components/GridOverview/GridOverview.style";
import * as RecipesAPI from "./network/recipesApi";
import { Modal } from "./components/Modal/Modal";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [recipeToBeEdited, setRecipeToBeEdited] =
    React.useState<RecipeModel>(recipeInitialState);
  React.useEffect(() => {
    loadRecipes(RecipesAPI.fetchRecipes, setRecipes);
  }, [recipes]);

  const handleDelete = async (recipe: RecipeModel) => {
    RecipesAPI.deleteRecipe(recipe._id!);
    recipes.filter((recipeId) => recipeId._id !== recipe._id);
  };

  const handleRecipeEdit = (recipe: RecipeModel) => {
    setModalVisible(true);
    setRecipeToBeEdited(recipe);
  };

  return (
    <>
      <Navbar
        setRecipeToBeEdited={setRecipeToBeEdited}
        setModalVisible={setModalVisible}
      />
      {!modalVisible && (
        <Styled.GridOverview>
          {recipes.map((recipe) => (
            <Recipe
              recipe={recipe}
              key={recipe._id}
              onDeleteRecipe={() => handleDelete(recipe)}
              onHandleRecipeToBeEdited={handleRecipeEdit}
            />
          ))}
        </Styled.GridOverview>
      )}
      {modalVisible && (
        <Modal
          modalTitle="Add new recipe"
          onClose={() => setModalVisible(false)}
          recipeToBeEdited={recipeToBeEdited}
        />
      )}
    </>
  );
};

export default App;
