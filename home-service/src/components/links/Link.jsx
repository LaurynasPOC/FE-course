import { Link as _Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyles = styled(_Link)`
  color: ${({ color }) => color || "var(--purple)"};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || "12px 20px"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  letter-spacing: 0.2em;
  transition: color 0.5s ease;
  ${({ button }) =>
    button &&
    `
    display: inline-block;
    padding: 10px 20px;
    color: var(--white-1);
    background-color: var(--purple);
    border: none;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: var(--purple);
      opacity: 0.9;
    }
  `}
`;

export const Link = ({ to, children, button, ...rest }) => (
  <LinkStyles button={button ? 1 : 0} to={to} {...rest}>
    {children}
  </LinkStyles>
);
