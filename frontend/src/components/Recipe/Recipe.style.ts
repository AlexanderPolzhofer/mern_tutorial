import styled from "@emotion/styled";

export const RecipeImage = styled.img`
  width: 100%;
`;

interface RecipeTextProps {
  fontSize: "18px" | "16px" | "14px" | "12px";
}

export const RecipeText = styled.p<RecipeTextProps>`
  font-size: ${({ fontSize }) => fontSize ?? "12px"};
`;

interface ContainerProps {
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  gap: ${({ gap }) => gap ?? ""};
  padding: 0 13px;
`;

export const InteractiveIconWrapper = styled.div`
  cursor: pointer;
`;

export const DefaultImageIcon = styled.div`
  padding: 50px;
  text-align: center;
`;
