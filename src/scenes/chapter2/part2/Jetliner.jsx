import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import jetliner from '../../../assets/img/chap_2/part_2/jetliner.png';

const JetlinerContainer = styled.div`
  position: absolute;
  top: 10vh;
  right: 10vw;
  img {
    filter: grayscale(1);
    width: 15vw;
    transition: all 1.5s ease-in-out, filter 0.3s ease-in-out;
  }
  .animate {
    filter: grayscale(0);
    transform: translateX(-20vw) translateY(-5vh) scale(1.3);
  }
`;

const Jetliner = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  return (
    <JetlinerContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[1]?.cards[1].title}
          content={partData[1]?.cards[1].content}
          bottom="0"
          left="0"
          rightCard="100"
          topCard="100"
        />
      )}

      <img
        className={hovered ? "animate" : null}
        src={jetliner}
        alt="Avion de Ligne"
      />
    </JetlinerContainer>
  );
};

export default Jetliner;
