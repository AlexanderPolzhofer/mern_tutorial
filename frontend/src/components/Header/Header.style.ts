import styled from "@emotion/styled";
import { Colors } from "../../theme/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px;
  border-bottom: 1px solid #dedede;
`;

export const HeaderImage = styled.img`
  width: 50px;
`;

export const NavElementsContainer = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

export const InteractivityWrapper = styled.div`
  cursor: pointer;
`;

export const VerticalLine = styled.div`
  border: 1px solid ${Colors.Grey};
  border-radius: 4px;
  height: 80%;
`;
