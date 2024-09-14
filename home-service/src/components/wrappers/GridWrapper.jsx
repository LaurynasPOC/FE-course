import styled from "styled-components";
import { Box } from "./Box";
import { desktop, tablet, mobile } from "../../styles/Breakpoints";

export const GridWrapper = styled(Box)`
  display: grid;
  grid-template-columns: ${({ col, colExact }) =>
    colExact || (col ? `repeat(${col}, minmax(0, 1fr))` : "")};
  grid-gap: ${({ gap }) => gap || "20px"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  @media ${desktop} {
    grid-template-columns: ${({ colXl, colExactXl }) =>
      colExactXl || (colXl ? `repeat(${colXl}, minmax(0, 1fr))` : "")};
  }
  @media ${tablet} {
    grid-template-columns: ${({ colL, colExactL }) =>
      colExactL || (colL ? `repeat(${colL}, minmax(0, 1fr))` : "")};
  }
  @media ${mobile} {
    grid-template-columns: ${({ colSm, colExactSm }) =>
      colExactSm || (colSm ? `repeat(${colSm}, minmax(0, 1fr))` : "")};
  }
`;
