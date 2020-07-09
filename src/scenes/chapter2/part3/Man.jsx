import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import man from '../../../assets/img/chap_2/part_3/airport_man.png';

const Man = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  return (
    <ManContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[2]?.cards[1].title}
          content={partData[2]?.cards[1].content}
          bottom="15"
          left="25"
          leftCard="900"
          bottomCard="200"
        />
      )}

      <AnimationContainer>
        <img
          className={hovered ? "animate" : null}
          src={man}
          alt="Homme assis"
        />
        <img
          className={hovered ? "animate" : null}
          src={man}
          alt="Homme assis"
        />
        <img
          className={hovered ? "animate" : null}
          src={man}
          alt="Homme assis"
        />
      </AnimationContainer>
    </ManContainer>
  );
};

const ManContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const AnimationContainer = styled.div`
  img {
    position: absolute;
    transform: scale(1.07);
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
  .animate {
    opacity: 1;
  }
  img:nth-child(1) {
    margin-top: 57vh;
    margin-left: 150px;
  }
  img:nth-child(2) {
    margin-top: 52vh;
    margin-left: 410px;
    z-index: 3;
    transition-delay: 0.3s;
  }
  img:nth-child(3) {
    margin-top: 50vh;
    margin-left: 530px;
    z-index: 2;
    transition-delay: 0.6s;
  }
`;

export default Man;
