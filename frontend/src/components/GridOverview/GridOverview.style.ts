import styled from "@emotion/styled";
import { Breakpoints } from "../../theme/breakpoints";

export const GridOverview = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-row-gap: 0.5em;
  grid-column-gap: 1em;
  padding: 13px;

  @media screen and (max-width: ${Breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${Breakpoints.xs}) {
    grid-template-columns: repeat(1, 233px);
  }

  @media screen and (min-width: ${Breakpoints.lg}) {
    grid-template-columns: repeat(4, 333px);
  }
`;
