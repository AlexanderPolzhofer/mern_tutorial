import styled from "@emotion/styled";
import { Colors } from "../../theme/colors";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 95vh;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  font-size: 28px;
  color: ${Colors.DarkGrey};
`;
