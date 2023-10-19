import React from "react";
import * as Styled from "./Form.style";
import { UserModel, userInitialValues } from "../../model/user";
import { Button } from "../Button/Button.style";
import { Colors } from "../../theme/colors";

interface LoginUserFormProps {
  onCancel?: () => void;
  onHandleLogin: (userRes: UserModel) => Promise<void>;
}

export const LoginUserForm: React.FC<LoginUserFormProps> = ({
  onCancel,
  onHandleLogin,
}) => {
  const [user, setUser] = React.useState<UserModel>(userInitialValues);

  return (
    <Styled.FormGroup
      onSubmit={(e) => {
        e.preventDefault();
        onHandleLogin(user);
        setUser(userInitialValues);
        onCancel && onCancel();
      }}
    >
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
          disabled={!user.userName || !user.password}
        >
          Submit
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormGroup>
  );
};
