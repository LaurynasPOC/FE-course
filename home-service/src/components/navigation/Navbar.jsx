import { useLayoutEffect, useState } from "react";
import { NavbarData } from "./NavbarData";
import styled from "styled-components";
import { Link } from "../links/Link";
import MobNavbar from "./MobNavbar";
import { useQuery } from "../../styles/Breakpoints";
import { AiFillGitlab } from "react-icons/ai";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isDesktop } = useQuery();
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "0px",
  });
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const activeLink = document.querySelector("nav ul a:first-child");

    if (activeLink && isFirstLoad) {
      activeLink.classList.add("first-load");
      setIndicatorStyle({
        left: `${activeLink.offsetLeft}px`,
        width: `${activeLink.offsetWidth}px`,
      });
    }

    return () => {
      if (activeLink) {
        activeLink.classList.remove("first-load");
      }
    };
  }, [isFirstLoad]);

  const handleLinkBg = (e) => {
    const target = e.currentTarget;
    navigate("/login");
    const firstUl = document.querySelector("nav ul:first-of-type");
    if (firstUl.contains(target)) {
      setIsFirstLoad(false);
      setIndicatorStyle({
        left: `${target.offsetLeft}px`,
        width: `${target.offsetWidth}px`,
      });
    } else {
      setIndicatorStyle({
        left: "0px",
        width: "0px",
      });
    }
  };

  return !isDesktop ? (
    <NavbarStyles>
      <div>
        <Link onClick={handleLinkBg} to="/">
          <AiFillGitlab />
        </Link>
        IpsumText
      </div>
      <nav>
        <ul>
          <div id="indicator" style={indicatorStyle} />
          {NavbarData.map(({ to, text }, index) => (
            <li key={index}>
              <Link onClick={handleLinkBg} to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Button onClick={handleLinkBg}>Login/Register</Button>
          </li>
        </ul>
      </nav>
    </NavbarStyles>
  ) : (
    <MobNavbar />
  );
};

export default Navbar;

const NavbarStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--white-2);
  padding: 0 50px;
  display: flex;
  align-items: center;
  z-index: 10000;
  backdrop-filter: blur(10px);
  border-top: 4px solid var(--purple);
  border-bottom: 4px solid var(--purple);
  & > div {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;
    margin-right: 50px;
    & > a {
      position: relative;
      color: var(--black);
      font-size: 2rem;
      font-weight: 500;
      svg {
        color: var(--purple);
      }
    }
  }

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    ul {
      display: flex;
      gap: 10px;
      li {
        list-style: none;
      }
      a {
        position: relative;

        &.first-load {
          color: var(--white-3);
        }

        &:focus {
          color: var(--white-3);
        }
      }

      #indicator {
        position: absolute;
        width: 70px;
        height: 50px;
        bottom: 0;
        background-color: var(--purple);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        transition: 0.5s;
      }
    }
  }
`;
