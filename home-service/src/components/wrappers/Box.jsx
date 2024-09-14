import styled from "styled-components";

export const Box = styled.div`
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  border: ${({ border }) => border || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  position: ${({ position }) => position || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  grid-row: ${({ gridRow }) => gridRow || ""};
`;
