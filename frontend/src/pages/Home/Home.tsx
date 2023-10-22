import React from "react";
import { LoginUserForm } from "../../components/Form/LoginUserForm";
import * as Styled from "./Home.style";
import { UserModel } from "../../model/user";

interface HomeProps {
  onHandleLogin?: (userCredentials: UserModel) => Promise<void>;
}

export const Home: React.FC<HomeProps> = ({ onHandleLogin }) => (
  <Styled.FormContainter>
    <Styled.FormGroup>
      <h2>Login</h2>
      <LoginUserForm modalTitle="Login" onHandleLogin={onHandleLogin} />
    </Styled.FormGroup>
  </Styled.FormContainter>
);
