import React from "react";
import { Recipe as RecipeModel, recipeInitialState } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";
import { Recipe } from "./components/Recipe/Recipe";
import * as Styled from "./components/GridOverview/GridOverview.style";
import * as RecipesAPI from "./network/recipesApi";
import { LoginModal, RecipeModal } from "./components/Modal/Modal";
import { Navbar } from "./components/Navbar/Navbar";
import { UserModel } from "./model/user";

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [recipeToBeEdited, setRecipeToBeEdited] =
    React.useState<RecipeModel>(recipeInitialState);
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);
  const [loginModalVisible, setLoginModalVisible] = React.useState(false);

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

  const handleLogout = async () => {
    await RecipesAPI.logout();
  };

  const handleLogin = async (user: UserModel) => {
    const res = await RecipesAPI.login(user);
    if (res) {
      setUserAuthenticated(true);
    }
  };

  return (
    <>
      <Navbar
        setRecipeToBeEdited={setRecipeToBeEdited}
        setModalVisible={setModalVisible}
        setLoginModalVisible={setLoginModalVisible}
        userAuthenticated={userAuthenticated}
        setUserAuthenticated={setUserAuthenticated}
        handleLogout={handleLogout}
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
        <RecipeModal
          modalTitle="Add new recipe"
          onClose={() => setModalVisible(false)}
          recipeToBeEdited={recipeToBeEdited}
        />
      )}
      {loginModalVisible && (
        <LoginModal
          onClose={() => setLoginModalVisible(false)}
          modalTitle={"Login"}
          onHandleLogin={handleLogin}
        />
      )}
    </>
  );
};

export default App;
