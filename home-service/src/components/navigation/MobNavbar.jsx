import { Link } from "../links/Link";
import styled from "styled-components";
import { NavbarData } from "./NavbarData";
import { AiFillGitlab } from "react-icons/ai";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const MobNavbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarController>
      <Link to="/">
        <AiFillGitlab size={30} />
      </Link>
      <HamburgerMenu>
        <input
          type="checkbox"
          id="menu-toggle"
          aria-label="Toggle navigation menu"
        />
        <label htmlFor="menu-toggle">
          <div></div>
        </label>
        <ul>
          {NavbarData.map(({ to, text }, index) => (
            <li key={index}>
              <Link color={"var(--purple)"} to={to}>
                {text}
              </Link>
            </li>
          ))}
          <li>
            <Button $margin="20px 0 0" onClick={() => navigate("/login")}>
              Login/Register
            </Button>
          </li>
        </ul>
      </HamburgerMenu>
    </NavbarController>
  );
};

export default MobNavbar;

const NavbarController = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--white-2);
  position: relative;
  border: 5px solid var(--purple);
`;

const HamburgerMenu = styled.div`
  position: relative;
  z-index: 99;

  label {
    position: relative;
    width: 30px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 99;

    div {
      position: relative;
      width: 100%;
      height: 3px;
      background-color: var(--black);
      border-radius: 3px;
      transition: all 0.3s ease;
    }

    div::before,
    div::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: var(--black);
      border-radius: 3px;
      transition: all 0.3s ease;
    }

    div::before {
      top: -8px;
    }

    div::after {
      bottom: -8px;
    }
  }

  input {
    display: none;
  }

  input:checked + label div {
    background-color: transparent;
  }

  input:checked + label div::before {
    transform: rotate(45deg);
    top: 0;
  }

  input:checked + label div::after {
    transform: rotate(-45deg);
    bottom: 0;
  }

  ul {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: var(--white-2);
    width: 250px;
    padding: 20px;
    transform: translateX(115%);
    transition: transform 0.3s ease;
    z-index: 99;
    border: 5px solid var(--purple);
    li {
      list-style: none;
      margin: 5px 0;
    }
  }

  input:checked ~ ul {
    transform: translateX(12%);
  }
`;
