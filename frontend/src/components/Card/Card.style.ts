import styled from '@emotion/styled';

export const Card = styled.div`
  min-width: 300px;
  min-height: 300px;
  border-radius: 0.4px;
  background-color: #f7fbf5;
  box-shadow: 0.3px 0.5px 1.5px 2px #d3d3d3;

  &:hover {
    box-shadow: 0.3px 0.5px 1.5px 2px #c0c0c0;
    cursor: pointer;
  }
`;
