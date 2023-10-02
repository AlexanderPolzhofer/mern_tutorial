import React from "react";
import { Recipe as RecipeModel } from "./model/recipe";
import { loadRecipes } from "./util/loadRecipes";
import { Recipe } from "./components/Recipe/Recipe";
import * as Styled from "./components/GridOverview/GridOverview.style";
import * as RecipesAPI from "./network/recipesApi";
import { Button } from "./components/Button/Button.style";
import { Header, HeaderImage } from "./components/Header/Header.style";
import { Modal } from "./components/Modal/Modal";

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    loadRecipes(RecipesAPI.fetchRecipes, setRecipes);
  }, [recipes]);

  const handleDelete = async (recipe: RecipeModel) => {
    RecipesAPI.deleteRecipe(recipe._id!);
    recipes.filter((recipeId) => recipeId._id !== recipe._id);
  };

  return (
    <>
      <Header>
        <HeaderImage src="/family_icon.png" alt="image family of four" />
        <Button
          primaryColor="#28a745"
          secondaryColor="#fff"
          onClick={() => setModalVisible(true)}
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
              handleDelete={() => handleDelete(recipe)}
            />
          ))}
        </Styled.GridOverview>
      )}
      {modalVisible && (
        <Modal
          modalTitle="Add new recipe"
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
};

export default App;