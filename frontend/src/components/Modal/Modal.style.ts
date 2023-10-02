import styled from "@emotion/styled";
import { Colors } from "../../theme/colors";

export const ModalContainer = styled.div`
  position: absolute;
  width: 555px;
  height: 555px;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

export const ContentWrapper = styled.div`
  padding: 13px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: ${Colors.Black};

  &:hover {
    opacity: 0.5;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px;
`;

export const HorizontalRule = styled.hr`
  width: 95%;
  color: ${Colors.Grey};
  background-color: ${Colors.Grey};
  border: none;
  height: 1px;
`;

export const ModalTitle = styled.div`
  border-bottom: 1px solid ${Colors.Black};
`;

export const ModalBody = styled.div`
  padding: 13px;
`;
