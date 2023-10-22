import React from "react";
import * as Styled from "./Form.style";
import { UserModel, userInitialValues } from "../../model/user";
import { Button } from "../Button/Button.style";
import { Colors } from "../../theme/colors";

interface LoginUserFormProps {
  onCancel?: () => void;
  onHandleLogin?: (userRes: UserModel) => Promise<void>;
  modalTitle?: string;
}

export const LoginUserForm: React.FC<LoginUserFormProps> = ({
  onCancel,
  modalTitle,
}) => {
  const [loginUser, setLoginUser] =
    React.useState<UserModel>(userInitialValues);

  return (
    <Styled.FormGroup
      onSubmit={(e) => {
        e.preventDefault();

        setLoginUser(userInitialValues);

        onCancel && onCancel();
      }}
    >
      <Styled.FormControl
        placeholder="Username"
        type="text"
        required
        name="userName"
        value={loginUser.userName}
        onChange={(e) =>
          setLoginUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      {modalTitle === "Sign up" && (
        <Styled.FormControl
          placeholder="Email"
          type="text"
          required
          name="email"
          value={loginUser.email}
          onChange={(e) =>
            setLoginUser((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
        />
      )}
      <Styled.FormControl
        placeholder="Password"
        type="password"
        required
        name="password"
        value={loginUser.password}
        onChange={(e) =>
          setLoginUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.ButtonContainer>
        {onCancel && (
          <Button
            primaryColor={Colors.Red}
            secondaryColor={Colors.White}
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          primaryColor={Colors.Green}
          secondaryColor={Colors.White}
          disabled={!loginUser.userName || !loginUser.password}
        >
          {modalTitle ?? "Submit"}
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormGroup>
  );
};
