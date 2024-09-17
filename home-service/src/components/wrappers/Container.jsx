import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || "1300px"};
  margin-left: auto;
  margin-right: auto;
`;
