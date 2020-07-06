import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

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

const Parachute = () => {
  const [ hovered, setHovered ] = useState(0)
  const isHovered = function(bool) {
    setHovered(bool)
  }

  console.log(hovered)

  return (
    <ParachuteContainer>
      <Infos
        setIsAnimated={isHovered}
        title="Armée de l'air"
        content="Lorem ipsum dolor"
        top="25"
        left="25"
        rightCard="250"
        topCard="500"
      />
      <img className={hovered ? "moveParachute" : null} src="../assets/img/chap_2/part_1/parachute.png" alt="parachuteur"/>
    </ParachuteContainer>
  );
};

export default Parachute;
