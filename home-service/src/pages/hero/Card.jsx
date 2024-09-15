import styled from "styled-components";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdDuotone } from "react-icons/pi";
import { FaShuttleVan } from "react-icons/fa";
import { PiPipeFill } from "react-icons/pi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GridWrapper } from "../../components/wrappers";

export const Card = () => {
  const DATA = [
    { svg: <GiVacuumCleaner color="var(--purple)" />, title: "Cleaning" },
    { svg: <GiAutoRepair color="var(--yellow)" />, title: "Repair" },
    {
      svg: <PiPaintBrushHouseholdDuotone color="var(--light-green)" />,
      title: "Painting",
    },
    { svg: <FaShuttleVan color="var(--rose)" />, title: "Shifting" },
    { svg: <PiPipeFill color="var(--orange)" />, title: "Plumbing" },
    {
      svg: <MdOutlineElectricBolt color="var(--blue)" />,
      title: "Electric",
    },
  ];
  return (
    <GridWrapper $margin="50px 0 0" $col="6">
      {DATA.map((item, index) => (
        <CardStyles key={index}>
          {item.svg}
          <p>{item.title}</p>
        </CardStyles>
      ))}
    </GridWrapper>
  );
};

const CardStyles = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: rgba(132, 94, 194, 0.1);
  color: var(--blue);
  svg {
    font-size: 2rem;
  }
  p {
    margin-top: 0.3125rem;
  }
`;
