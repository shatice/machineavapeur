import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Posters from "./Posters";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import frameOrange from "./img/c1p3_frame_orange.png";
import train1 from "./img/c1p3_train1.png";

const Train = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <Container className={isAnimated ? "isAnimated" : ""}>
      <li>
        <img src={frameOrange} alt="" />
      </li>
      <li>
        <img src={train1} alt="" />
      </li>
      <Posters />
      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[2]?.cards[1].title}
          content={partData[2]?.cards[1].content}
          bottom="-10"
          left="10"
          leftCard="-700"
          bottomCard="-100"
        />
      )}
    </Container>
  );
};

const Container = styled.ul`
  width: 35%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transform: rotate(-10deg);

  &.isAnimated {
    img {
      filter: grayscale(0);
    }
  }

  img {
    filter: grayscale(1);
  }

  li,
  ul {
    grid-column: 1;
    grid-row: 1;

    img {
      width: 100%;
    }
  }

  .infos {
    transform: rotate(10deg);
  }
`;

export default Train;
