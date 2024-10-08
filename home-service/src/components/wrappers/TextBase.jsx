import styled from "styled-components";
import { desktop, mobile } from "../../styles/Breakpoints";

export const TextBase = styled.p`
  margin: ${({ $margin }) => $margin || ""};
  padding: ${({ $padding }) => $padding || ""};
  font-size: 24px;
  line-height: ${({ $lineHeight }) => $lineHeight || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || 400};
  color: ${({ $color }) => $color || ""};
  text-align: ${({ $textAlign }) => $textAlign || ""};

  @media ${desktop} {
    font-size: 20px;
  }

  @media ${mobile} {
    font-size: 16px;
  }
`;
