import React from "react";
import { LoginUserForm } from "../../components/Form/LoginUserForm";
import * as Styled from "./Home.style";
import {} from "../../model/user";
import { useCurrentUserContext } from "../../context/UserContext";
import { RecipesOverviewMapper } from "../RecipesOverviewMapper/RecipesOverviewMapper";

export const Home: React.FC = () => {
  const { user } = useCurrentUserContext();

  return (
    <>
      <Styled.FormContainter>
        <Styled.FormGroup>
          <h2>Login</h2>
          <LoginUserForm modalTitle="Login" />
        </Styled.FormGroup>
      </Styled.FormContainter>
      {user && <RecipesOverviewMapper />}
    </>
  );
};
