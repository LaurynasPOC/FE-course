import styled from "styled-components";

export const Box = styled.div`
  margin: ${({ $margin }) => $margin || ""};
  padding: ${({ $padding }) => $padding || ""};
  position: ${({ $position }) => $position || ""};
  width: ${({ $width }) => $width || ""};
  height: ${({ $height }) => $height || ""};
  max-width: ${({ $maxwidth }) => $maxwidth || ""};
  grid-row: ${({ $gridrow }) => $gridrow || ""};
`;
