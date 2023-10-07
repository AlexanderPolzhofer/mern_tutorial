import React from "react";
import { Recipe as RecipeModel, recipeInitialState } from "../../model/recipe";
import { Header, HeaderImage } from "../Header/Header.style";
import { Button } from "../Button/Button.style";

interface NavbarProps {
  setRecipeToBeEdited: (value: React.SetStateAction<RecipeModel>) => void;
  setModalVisible: (value: React.SetStateAction<boolean>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  setRecipeToBeEdited,
  setModalVisible,
}) => {
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
    </>
  );
};
