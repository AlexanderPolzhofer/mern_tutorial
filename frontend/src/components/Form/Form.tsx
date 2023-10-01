import React from "react";
import * as Styled from "./Form.style";

export const Form: React.FC = () => {
  return <Styled.FormControl placeholder="Recipe title" required />;
};
