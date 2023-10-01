import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  border-radius: 0.4px;
  background-color: #ffffff;
  box-shadow: 0.3px 0.5px 1.5px 2px #d3d3d3;
  padding-bottom: 13px;
  margin-bottom: 21px;

  &:hover {
    box-shadow: 0.3px 0.5px 1.5px 2px #c0c0c0;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
`;

export const Subheading = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ingredient = styled.span`
  display: flex;
  justify-content: center;
`;

export const IconInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 13px;
`;

export const IconWrapper = styled.div`
  padding: 5px;
`;
