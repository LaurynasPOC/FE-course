import styled from "styled-components";
import { desktop, mobile } from "../../styles/Breakpoints";

export const SectionWrapper = styled.section`
  position: "relative";
  padding: 100px 20px;
  background: ${({ $bgcolor }) => $bgcolor || ""};
  @media ${desktop} {
    padding: 80px 20px;
  }
  @media ${mobile} {
    padding: 50px 15px;
  }
`;
