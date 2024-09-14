import styled from "styled-components";
import { mobile } from "../styles/Breakpoints";

const BaseButton = styled.button`
  margin: ${({ $margin }) => $margin || "0"};
  outline: none;
  border: none;
  padding: ${({ $padding }) => $padding || ".75rem 1.5rem"};
  border-radius: 40px;
  appearance: none;
  box-shadow: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.25s ease-out;
  background: ${({ $backgroundColor }) =>
    $backgroundColor || "rgba(0, 0, 0, 0)"};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media ${mobile} {
    padding: 10px 20px;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: var(--purple);

  :hover {
    background-color: var(--blue);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: var(--light-grey);
  color: var(--black);

  :hover {
    background-color: var(--dark-grey);
  }
`;

const DarkButton = styled(BaseButton)`
  background: var(--black);
  color: var(--white);

  :hover {
    background-color: var(--grey);
  }
`;

const Button = ({ variant = "base", children, ...rest }) => {
  if (variant === "primary")
    return <PrimaryButton {...rest}>{children}</PrimaryButton>;

  if (variant === "secondary")
    return <SecondaryButton {...rest}>{children}</SecondaryButton>;

  if (variant === "dark") return <DarkButton {...rest}>{children}</DarkButton>;

  return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;
