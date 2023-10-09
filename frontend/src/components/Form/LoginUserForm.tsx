import React from "react";
import * as Styled from "./Form.style";
import * as RecipesAPI from "./../../network/recipesApi";
import { UserModel } from "../../model/user";
import { Button } from "../Button/Button.style";
import { Colors } from "../../theme/colors";

interface LoginUserFormProps {
  user: UserModel;
  setUser: React.Dispatch<React.SetStateAction<UserModel>>;
  onCancel: () => void;
}

export const LoginUserForm: React.FC<LoginUserFormProps> = ({
  user,
  setUser,
  onCancel,
}) => {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    user: UserModel
  ) => {
    e.preventDefault();
    RecipesAPI.login(user);
    onCancel();
  };

  return (
    <Styled.FormGroup onSubmit={(e) => handleSubmit(e, user)}>
      <Styled.FormControl
        placeholder="Username"
        type="text"
        required
        name="userName"
        value={user.userName}
        onChange={(e) =>
          setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.FormControl
        placeholder="Password"
        type="password"
        required
        name="password"
        value={user.password}
        onChange={(e) =>
          setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.ButtonContainer>
        <Button
          primaryColor={Colors.Red}
          secondaryColor={Colors.White}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          primaryColor={Colors.Green}
          secondaryColor={Colors.White}
        >
          Submit
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormGroup>
  );
};
