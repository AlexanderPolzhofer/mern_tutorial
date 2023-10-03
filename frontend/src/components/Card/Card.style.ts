import styled from "@emotion/styled";
import { Colors } from "../../theme/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  border-radius: 0.4px;
  background-color: ${Colors.White};
  box-shadow: 0.3px 0.5px 1.5px 2px ${Colors.Grey};
  padding-bottom: 13px;
  margin-bottom: 21px;

  &:hover {
    box-shadow: 0.3px 0.5px 1.5px 2px ${Colors.Green};
  }
`;
