import styled from "styled-components";
import { Box } from "./Box";

export const FlexWrapper = styled(Box)`
  display: "flex";
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  gap: ${({ gap }) => gap || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
`;
