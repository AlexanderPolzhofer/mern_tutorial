import React from "react";
import { Recipe as RecipeModel } from "./../../model/recipe";
import * as Styled from "../Card/Card.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";

interface RecipeProps {
  recipe: RecipeModel;
}

export const Recipe: React.FC<RecipeProps> = ({ recipe }) => (
  <Styled.Card>
    <Styled.Title>{recipe.title}</Styled.Title>
    <Styled.IconInfoContainer>
      <Styled.Subheading>
        <u>level:</u>
        <Styled.IconWrapper>
          <FontAwesomeIcon icon={faStar} size="xl" />
        </Styled.IconWrapper>
      </Styled.Subheading>
      <Styled.Subheading>
        <Styled.IconWrapper>
          <FontAwesomeIcon icon={faClock} size="xl" />
        </Styled.IconWrapper>
        {`${recipe.preparationTime} min.`}
      </Styled.Subheading>
    </Styled.IconInfoContainer>
    <Styled.Subheading>
      <u>Ingredients:</u>
    </Styled.Subheading>
    {recipe.ingredients!.map((ingredient) => (
      <Styled.Ingredient key={ingredient}>{ingredient}</Styled.Ingredient>
    ))}
  </Styled.Card>
);
