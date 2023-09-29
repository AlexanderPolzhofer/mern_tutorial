import styled from "@emotion/styled";

export const GridOverview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-row-gap: 0.5em;
  grid-column-gap: 1em;
`;
