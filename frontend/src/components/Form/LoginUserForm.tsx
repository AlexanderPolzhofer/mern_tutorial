import React from "react";
import * as Styled from "./Form.style";
import { Button } from "../Button/Button.style";
import { Colors } from "../../theme/colors";
import { useCurrentUserContext } from "../../context/UserContext";
import * as RecipesAPI from "./../../network/recipesApi";
import { useNavigate } from "react-router-dom";

interface LoginUserFormProps {
  onCancel?: () => void;
  modalTitle?: string;
}

export const LoginUserForm: React.FC<LoginUserFormProps> = ({
  onCancel,
  modalTitle,
}) => {
  const [loginUser, setLoginUser] = React.useState<{
    userName: string;
    password: string;
  }>({ userName: "", password: "" });

  const { setUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (userCredentials: {
    userName: string;
    password: string;
  }) => {
    const response = await RecipesAPI.login(userCredentials);

    if (response !== null) {
      setUser({ _id: response._id, userName: response.userName });
      navigate("/recipes");
    }
  };

  return (
    <Styled.FormGroup
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(loginUser);
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
        >
          {modalTitle ?? "Submit"}
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormGroup>
  );
};
