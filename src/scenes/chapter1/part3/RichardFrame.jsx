import React, { useState } from "react";
import styled from "styled-components";
import "./style.scss";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";
import Coins from "./Coins";
import Test from "./Richard";

/***** ASSETS *****/
import frameRichard from "../../../assets/img/chap_1/part_3/c1p3_frame_richard.png";

const Richard = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container className={isAnimated ? "isAnimated hasNet" : "hasNet"}>
      <img src={frameRichard} alt="Cadre doré" />
      <Test className={isAnimated ? "isAnimated" : ""} />
      <Coins className={isAnimated ? "isAnimated" : ""} />
      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[2]?.cards[0].title}
          content={partData[2]?.cards[0].content}
          top="15"
          left="55"
          leftCard="100"
          bottomCard="-200"
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 35%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  animation: enterIn .5s ease-out;

  img {
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    filter: grayscale(1);
    transform: rotate(5deg);
  }

  &.isAnimated img {
    filter: grayscale(0);
  }
`;

export default Richard;
