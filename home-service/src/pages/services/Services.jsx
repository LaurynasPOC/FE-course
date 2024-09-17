import Button from "../../components/Button";
import { CardsData } from "./CardData";
import {
  SectionWrapper,
  Container,
  GridWrapper,
  Box,
} from "../../components/wrappers";
import styled from "styled-components";

export const Services = () => {
  return (
    <SectionWrapper>
      <Container>
        <h5>Popular bussiness</h5>
        <GridWrapper $margin="20px 0 0" $col={4} $colL={3} $colSm={2}>
          {CardsData.map((item, index) => (
            <ServiceCard key={index}>
              <img src={item.img} alt={item.title} />
              <Box $padding="1rem">
                <h6>{item.category}</h6>
                <h5>{item.name}</h5>
                <p>{item.address}</p>
                <Button>Book Now</Button>
              </Box>
            </ServiceCard>
          ))}
        </GridWrapper>
      </Container>
    </SectionWrapper>
  );
};

const ServiceCard = styled.div`
  border-radius: 0.625rem;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 0 0 10px 2px var(--purple);
    scale: 1.03;
  }
  img {
    aspect-ratio: 16/9;
    max-height: 13rem;
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  h6 {
    background-color: var(--purple-shade);
    color: var(--blue);
    font-size: 0.875rem;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 1.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--dark-grey);
    margin: 5px 0 10px;
  }
`;
