import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

const OceanContainer = styled.div``;

const AnimationContainer = styled.div`
  position: absolute;
  top: 15vh;
  left: -45vw;

  img {
    position: absolute;
    transform: scale(0);
    transition: all 1.5s ease-out;
  }

  img:first-child {
    margin-left: 25vw;
  }

  .animate {
    transform: scale(0.9) translateX(40vw);
  }
`;

const Ocean = ({ isActive, partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
    isActive(bool);
  };

  return (
    <OceanContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[2]?.cards[2].title}
          content={partData[2]?.cards[2].content}
          top="40"
          left="14"
          leftCard="400"
          bottomCard="200"
        />
      )}

      <AnimationContainer>
        <img
          className={hovered ? "animate" : null}
          src="../assets/img/chap_2/part_3/wave.png"
          alt=""
        />
        <img
          className={hovered ? "animate" : null}
          src="../assets/img/chap_2/part_3/wave.png"
          alt=""
        />
      </AnimationContainer>
    </OceanContainer>
  );
};

export default Ocean;
