import React from "react";
import { Recipe as RecipeModel, recipeInitialState } from "../../model/recipe";
import * as Styled from "../Header/Header.style";
import { Button } from "../Button/Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Colors } from "../../theme/colors";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  setRecipeToBeEdited: (value: React.SetStateAction<RecipeModel>) => void;
  setModalVisible: (value: React.SetStateAction<boolean>) => void;
  setLoginModalVisible: (value: React.SetStateAction<boolean>) => void;
  userAuthenticated: boolean;
  setUserAuthenticated: (value: React.SetStateAction<boolean>) => void;
  handleLogout: () => Promise<void>;
}

export const Navbar: React.FC<NavbarProps> = ({
  setRecipeToBeEdited,
  setModalVisible,
  setLoginModalVisible,
  userAuthenticated,
  setUserAuthenticated,
  handleLogout,
}) => (
  <Styled.Header>
    <Styled.HeaderImage src="/family_icon.png" alt="image family of four" />
    <Styled.NavElementsContainer>
      {userAuthenticated ? (
        <>
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
          <Styled.VerticalLine />
          <Styled.InteractivityWrapper
            onClick={() => {
              handleLogout();
              setUserAuthenticated(false);
            }}
          >
            <FontAwesomeIcon
              icon={faSignOut}
              color={Colors.DarkGrey}
              size="lg"
            />
          </Styled.InteractivityWrapper>
        </>
      ) : (
        <Styled.InteractivityWrapper onClick={() => setLoginModalVisible(true)}>
          <FontAwesomeIcon icon={faUser} color={Colors.DarkGrey} size="lg" />
        </Styled.InteractivityWrapper>
      )}
    </Styled.NavElementsContainer>
  </Styled.Header>
);
