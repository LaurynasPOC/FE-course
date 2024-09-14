import styled from "styled-components";
import { Box } from "./Box";

export const FlexWrapper = styled(Box).attrs(() => ({
  flexDirection: undefined,
  justifyContent: undefined,
  alignItems: undefined,
  flexWrap: undefined,
  gap: undefined,
}))`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  gap: ${({ gap }) => gap || "0"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
`;
