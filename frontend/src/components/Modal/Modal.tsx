import React from "react";
import * as Styled from "./Modal.style";
import { Card } from "../Card/Card.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../Form/Form";

interface ModalProps {
  onClose: () => void;
  modalTitle: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose, modalTitle }) => {
  return (
    <Styled.ModalContainer>
      <Card>
        <Styled.ContentWrapper>
          <Styled.ModalHeader>
            {modalTitle}
            <Styled.IconWrapper onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Styled.IconWrapper>
          </Styled.ModalHeader>
          <Styled.HorizontalRule />
          <Styled.ModalBody>
            <Form onCancel={onClose} />
          </Styled.ModalBody>
        </Styled.ContentWrapper>
      </Card>
    </Styled.ModalContainer>
  );
};
