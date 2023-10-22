import React from "react";
import * as Styled from "./Modal.style";

import { Card } from "../Card/Card.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../Form/Form";
import { Recipe as RecipeModel } from "../../model/recipe";

import { LoginUserForm } from "../Form/LoginUserForm";
import { UserModel } from "../../model/user";

interface ModalProps {
  onClose?: () => void;
  modalTitle: string;
  recipeToBeEdited?: RecipeModel;
}

export const RecipeModal: React.FC<ModalProps> = ({
  onClose,
  modalTitle,
  recipeToBeEdited,
}) => {
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
            <Form onCancel={onClose} recipeToBeEdited={recipeToBeEdited} />
          </Styled.ModalBody>
        </Styled.ContentWrapper>
      </Card>
    </Styled.ModalContainer>
  );
};

interface LoginModalProps extends ModalProps {
  onHandleLogin?: (userRes: UserModel) => Promise<void>;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  modalTitle,
  onClose,
  onHandleLogin,
}) => (
  <Styled.ModalContainer>
    <Card>
      <Styled.ContentWrapper>
        <Styled.ModalHeader>
          {modalTitle}
          {onClose && (
            <Styled.IconWrapper onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Styled.IconWrapper>
          )}
        </Styled.ModalHeader>
        <Styled.HorizontalRule />
        <Styled.ModalBody>
          <LoginUserForm onCancel={onClose} onHandleLogin={onHandleLogin} modalTitle={modalTitle}/>
        </Styled.ModalBody>
      </Styled.ContentWrapper>
    </Card>
  </Styled.ModalContainer>
);
