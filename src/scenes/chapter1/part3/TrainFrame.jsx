import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";
import Train from "./Train";

/***** ASSETS *****/
import frameOrange from "../../../assets/img/chap_1/part_3/c1p3_frame_orange.png";
import trainPoster1 from "../../../assets/img/chap_1/part_3/c1p3_train_poster1.png";

const TrainFrame = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container className={isAnimated ? "isAnimated hasNet" : "hasNet"}>
      <li>
        <img src={frameOrange} alt="Cadre Orange"/>
      </li>
      <li>
        <img src={trainPoster1} alt="Vieux Poster d'un Train Canadien"/>
      </li>
      <Train className={isAnimated ? "isAnimated" : ""}/>
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
  position: relative; 
  width: 35%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  animation: enterIn .5s ease-out;
  
  li {
    grid-column: 1;
    grid-row: 1;
    transform: rotate(-10deg);

    img {
      width: 100%;
      filter: grayscale(1);
    }
  }

  &.isAnimated li:not(:first-child) img {
    filter: grayscale(0);
  }
`;

export default TrainFrame;
