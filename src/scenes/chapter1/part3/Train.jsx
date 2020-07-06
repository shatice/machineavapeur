import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Posters from "./Posters";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import frameOrange from "../../../assets/img/chap_1/part_3/c1p3_frame_orange.png";

const Train = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <Container className={isAnimated ? "isAnimated hasNet" : "hasNet"}>
      <li>
        <img src={frameOrange} alt="frame-orange"/>
      </li>
      <Posters />
      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[2]?.cards[1].title}
          content={partData[2]?.cards[1].content}
          bottom="5"
          left="90"
          leftCard="-800"
          bottomCard="400"
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
  animation: enterIn .5s ease-out;
  position: relative; 

  img {
    filter: grayscale(1);
    transform: rotate(-10deg);
  }

  li,
  ul {
    grid-column: 1;
    grid-row: 1;

    img {
      width: 100%;
    }
  }

  &.isAnimated {
    ul li {

      &:nth-child(2) {
        animation: moving 0.5s alternate infinite linear;
      }
      
      img {
        filter: grayscale(0);
      }
    }
  }
`;

export default Train;
