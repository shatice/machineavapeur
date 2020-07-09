import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import concorde from '../../../assets/img/chap_2/part_2/concorde.png';

const Concorde = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  return (
    <ConcordeContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[1]?.cards[2].title}
          content={partData[1]?.cards[2].content}
          top="50"
          left="30"
          leftCard="250"
          bottomCard="200"
        />
      )}

      <img
        className={hovered ? "animate" : null}
        src={concorde}
        alt="Avion Concorde"
      />
    </ConcordeContainer>
  );
};

const ConcordeContainer = styled.div`
  height: 100vh;
  perspective: 50vw;
  perspective-origin: 30vw 50vh;
  img {
    filter: grayscale(1);
    margin: 20vh;
    height: 60vh;
    transform: rotateX(20deg);
    transition: all 1s ease-in-out, filter 0.3s ease-in-out;
    border-radius: 5px;
  }
  .animate {
    filter: grayscale(0);
    margin: 20px;
    height: calc(100vh - 102px);
    transform: rotateX(0deg);
  }
`;

export default Concorde;
