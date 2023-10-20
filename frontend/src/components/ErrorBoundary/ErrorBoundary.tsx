import React from "react";
import * as Styled from "./ErrorBoundary.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../theme/colors";

export const ErrorBoundary: React.FC = () => (
  <Styled.ErrorPageContainer>
    <FontAwesomeIcon icon={faCoffee} color={Colors.Grey} size="xl" />
    <Styled.ErrorMessage>
      Something went wrong. An unexpected error occurs. Grab a coffee and try
      again later.
    </Styled.ErrorMessage>
  </Styled.ErrorPageContainer>
);
