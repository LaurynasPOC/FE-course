import { SectionWrapper, Container, TextBase } from "../../components/wrappers";
import { Input } from "../../components/Input";
import styled from "styled-components";
import Button from "../../components/Button";
import { IoSearch } from "react-icons/io5";
import { Card } from "./Card";

export const Hero = () => {
  return (
    <StyledHero $bgcolor="linear-gradient(to top, #ffc75f 0%, #f7f4fd 15%);">
      <Container>
        <h1>
          Find Home <span>Service/Repair</span> Near You
        </h1>
        <TextBase $margin="40px 0" $color="var(--grey)">
          Explore Best Home & Repair near you
        </TextBase>
        <form>
          <Input placeholder="Search" />
          <Button
            $padding="0.75rem 0.92rem"
            $margin="0 0 0 30px"
            variant="primary"
          >
            <IoSearch />
          </Button>
        </form>
        <Card />
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled(SectionWrapper)`
  text-align: center;
  h1 {
    margin-top: 50px;
    & > span {
      color: var(--purple);
    }
  }
  form {
    display: flex;
    justify-content: center;
  }
  svg {
    color: var(--white-2);
    vertical-align: middle;
    margin-bottom: 3px;
    transition: none;
    pointer-events: none;
  }
`;
