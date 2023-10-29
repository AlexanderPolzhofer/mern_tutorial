import React from "react";
import { Recipe as RecipeModel } from "./../../model/recipe.ts";
import * as Styled from "./../../components/GridOverview/GridOverview.style.ts";
import * as RecipesAPI from "./../../network/recipesApi.ts";
import { Recipe } from "../../components/Recipe/Recipe.tsx";
import { loadRecipes } from "../../util/loadRecipes.ts";
import { useCurrentUserContext } from "../../context/UserContext.tsx";
import { Button } from "../../components/Button/Button.style.ts";
import { ButtonContainer } from "./RecipesOverviewMapper.style.ts";
import { useNavigate } from "react-router-dom";
import { RecipeModal } from "../../components/Modal/Modal.tsx";

export const RecipesOverviewMapper: React.FC = () => {
  const [recipes, setRecipes] = React.useState<RecipeModel[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const { user } = useCurrentUserContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    loadRecipes(RecipesAPI.fetchRecipes, setRecipes);
  }, [recipes]);

  const handleDelete = async (recipe: RecipeModel) => {
    recipe._id && (await RecipesAPI.deleteRecipe(recipe._id));
    recipes.filter((recipeModel) => recipe._id !== recipeModel._id);
  };

  return (
    <>
      {user ? (
        <Styled.GridOverview>
          {recipes.map((recipe) => (
            <Recipe
              recipe={recipe}
              key={recipe._id}
              onDeleteRecipe={() => handleDelete(recipe)}
              onHandleUpdateRecipe={() => setModalVisible(true)}
            />
          ))}
        </Styled.GridOverview>
      ) : (
        <ButtonContainer>
          <Button
            primaryColor="#28a745"
            secondaryColor="#fff"
            onClick={() => navigate("/")}
          >
            Please login
          </Button>
        </ButtonContainer>
      )}
      {modalVisible && (
        <RecipeModal
          modalTitle="Add new recipe"
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
};
