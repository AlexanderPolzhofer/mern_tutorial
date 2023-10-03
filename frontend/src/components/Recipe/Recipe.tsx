import React from "react";
import { Recipe as RecipeModel } from "./../../model/recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import * as Styled from "./Recipe.style";
import { Card } from "../Card/Card.style";
import { Colors } from "../../theme/colors";
import { HorizontalRule } from "../Modal/Modal.style";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";

interface RecipeProps {
  recipe: RecipeModel;
  handleDelete: () => void;
}

export const Recipe: React.FC<RecipeProps> = ({ recipe, handleDelete }) => (
  <Card>
    {recipe.image ? (
      <Styled.RecipeImage
        src={recipe.image}
        alt="dynamically imported image"
      />
    ) : (
      <Styled.DefaultImageIcon>
        <FontAwesomeIcon icon={faUtensils} size="xl" color={Colors.DarkGrey} />
      </Styled.DefaultImageIcon>
    )}
    <Styled.Container justifyContent="space-between">
      <Styled.RecipeText fontSize="18px">{recipe.title}</Styled.RecipeText>
      <Styled.InteractiveIconWrapper>
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          onClick={handleDelete}
          color={Colors.Red}
        />
      </Styled.InteractiveIconWrapper>
    </Styled.Container>
    <HorizontalRule />
    <Styled.Container gap="8px">
      <FontAwesomeIcon icon={faClock} size="lg" />
      {recipe.preparationTime}
    </Styled.Container>
    <HorizontalRule />
    <Styled.Container alignItems="start" gap="8px">
      <Styled.RecipeText fontSize="14px">Prepare: </Styled.RecipeText>
      {recipe.ingredients!.map((ingredient) => (
        <Styled.RecipeText fontSize="14px">{ingredient}</Styled.RecipeText>
      ))}
    </Styled.Container>
  </Card>
);
