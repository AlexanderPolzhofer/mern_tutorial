import styled from "@emotion/styled";

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
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding-bottom: 13px;
`;

export const ModalTitle = styled.div`
  border-bottom: 1px solid black;
`;

export const ModalBody = styled.div`
  padding: 13px;
`;
