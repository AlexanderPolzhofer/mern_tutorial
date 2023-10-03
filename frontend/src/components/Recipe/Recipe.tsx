import React from "react";
import { Recipe as RecipeModel } from "./../../model/recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import * as Styled from "./Recipe.style";
import { Card } from "../Card/Card.style";
import { Colors } from "../../theme/colors";
import { HorizontalRule } from "../Modal/Modal.style";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";

interface RecipeProps {
  recipe: RecipeModel;
  onDeleteRecipe: () => void;
  onHandleRecipeToBeEdited: (recipe: RecipeModel) => void;
}

export const Recipe: React.FC<RecipeProps> = ({
  recipe,
  onDeleteRecipe,
  onHandleRecipeToBeEdited,
}) => (
  <Card>
    {recipe.image ? (
      <Styled.RecipeImage src={recipe.image} alt="dynamically imported image" />
    ) : (
      <Styled.DefaultImageIcon>
        <FontAwesomeIcon icon={faUtensils} size="xl" color={Colors.DarkGrey} />
      </Styled.DefaultImageIcon>
    )}
    <Styled.Container justifyContent="space-between">
      <Styled.RecipeText fontSize="18px">{recipe.title}</Styled.RecipeText>
      <Styled.Container gap="13px">
        <Styled.InteractiveIconWrapper>
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            onClick={onDeleteRecipe}
            color={Colors.Red}
          />
        </Styled.InteractiveIconWrapper>
        <Styled.InteractiveIconWrapper>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            onClick={() => onHandleRecipeToBeEdited(recipe)}
            color={Colors.DarkGrey}
          />
        </Styled.InteractiveIconWrapper>
      </Styled.Container>
    </Styled.Container>
    <HorizontalRule />
    <Styled.Container gap="8px">
      <FontAwesomeIcon icon={faClock} size="lg" color={Colors.DarkGrey} />
      {recipe.preparationTime}
    </Styled.Container>
    <HorizontalRule />
    <Styled.Container alignItems="start" gap="8px">
      <Styled.RecipeText fontSize="14px">Prepare: </Styled.RecipeText>
      {recipe.ingredients!.map((ingredient, idx) => (
        <Styled.RecipeText fontSize="14px" key={idx}>
          {ingredient}
        </Styled.RecipeText>
      ))}
    </Styled.Container>
  </Card>
);
