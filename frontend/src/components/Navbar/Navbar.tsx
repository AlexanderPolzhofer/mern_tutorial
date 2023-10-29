import React from "react";
import * as Styled from "../Header/Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "../../theme/colors";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../../context/UserContext";
import * as RecipesAPI from "./../../network/recipesApi";

export const Navbar: React.FC = () => {
  const { user, setUser } = useCurrentUserContext();

  return (
    <Styled.Header>
      <Styled.HeaderImage src="/family_icon.png" alt="image family of four" />
      {user && (
        <>
          <Styled.NavElementsContainer>
            <Styled.VerticalLine />
            <Link
              to="/"
              onClick={async () => {
                await RecipesAPI.logout();
                setUser(null);
              }}
            >
              <Styled.InteractivityWrapper>
                <FontAwesomeIcon
                  icon={faSignOut}
                  color={Colors.DarkGrey}
                  size="lg"
                />
              </Styled.InteractivityWrapper>
            </Link>
          </Styled.NavElementsContainer>
        </>
      )}
    </Styled.Header>
  );
};
