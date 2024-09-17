import styled from "styled-components";
import { Box } from "./Box";
import { desktop, tablet, mobile } from "../../styles/Breakpoints";

export const GridWrapper = styled(Box)`
  display: grid;
  grid-template-columns: ${({ $col, $colExact }) =>
    $colExact ? $colExact : $col ? `repeat(${$col}, minmax(0, 1fr))` : ""};
  grid-gap: ${({ $gap }) => $gap || "20px"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};

  @media ${desktop} {
    grid-template-columns: ${({ $colL, $colExactL }) =>
      $colExactL
        ? $colExactL
        : $colL
        ? `repeat(${$colL}, minmax(0, 1fr))`
        : ""};
  }

  @media ${tablet} {
    grid-template-columns: ${({ $colM, $colExactM }) =>
      $colExactM
        ? $colExactM
        : $colM
        ? `repeat(${$colM}, minmax(0, 1fr))`
        : ""};
    grid-gap: ${({ $gapM }) => $gapM || "15px"};
  }

  @media ${mobile} {
    grid-template-columns: ${({ $colSm, $colExactSm }) =>
      $colExactSm
        ? $colExactSm
        : $colSm
        ? `repeat(${$colSm}, minmax(0, 1fr))`
        : ""};
  }
`;
