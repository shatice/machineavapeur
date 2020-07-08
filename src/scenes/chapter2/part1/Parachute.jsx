import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import parachute from '../../../assets/img/chap_2/part_1/parachute.png';

const Parachute = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  return (
    <ParachuteContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[0].cards[2].title}
          content={partData[0].cards[2].content}
          top="25"
          left="25"
          rightCard="250"
          topCard="500"
        />
      )}

      <img
        className={hovered ? "moveParachute" : null}
        src={parachute}
        alt="Parachuteur"
      />
    </ParachuteContainer>
  );
};

const ParachuteContainer = styled.div`
  position: absolute;
  top: 7vh;
  left: 50vw;

  img {
    filter: grayscale(1);
    transition: filter 0.3s ease-in-out, transform 2.5s ease-in-out;
    transform: translateX(0) translateY(0);
  }
  
  .moveParachute {
    filter: grayscale(0);
    transform: translateX(-3vw) translateY(25vw);
  }
`;

export default Parachute;
