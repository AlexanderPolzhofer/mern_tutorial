import React from "react";
import { Recipe as RecipeModel } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";
import { Recipe } from "./components/Recipe/Recipe";
import * as Styled from "./components/GridOverview/GridOverview.style";
import * as RecipesAPI from "./network/recipesApi";
import { Button } from "./components/Button/Button.style";
import { Header, HeaderImage } from "./components/Header/Header.style";
import { Modal } from "./components/Modal/Modal";

const recipeInitialState = {
  _id: "",
  title: "",
  preparationTime: "",
  ingredients: [""],
  image: "",
};

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
      <Header>
        <HeaderImage src="/family_icon.png" alt="image family of four" />
        <Button
          primaryColor="#28a745"
          secondaryColor="#fff"
          onClick={() => {
            setRecipeToBeEdited(recipeInitialState);
            setModalVisible(true);
          }}
        >
          Add new recipe
        </Button>
      </Header>

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
