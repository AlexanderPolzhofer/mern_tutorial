import styled from "@emotion/styled";

interface ButtonProps {
  primaryColor: string;
  secondaryColor: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${({ secondaryColor }) => secondaryColor};
  border-radius: 5px;
  padding: 5px 13px;
  background-color: ${({ primaryColor }) => primaryColor};
  border: ${({ primaryColor }) => primaryColor};

  &:hover:enabled {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
