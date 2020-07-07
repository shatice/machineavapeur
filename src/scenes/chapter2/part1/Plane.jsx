import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

const PlaneContainer = styled.div`
  position: absolute;
  top: 20vh;
  left: -5vw;

  .movePlane {
    transform: translateX(60vw);
    filter: grayscale(0);

    .box {
      transform: translateX(-400%) translateY(100vh) rotate(150deg);
      opacity: 1;
    }
  }
`;

const AnimationContainer = styled.div`
  filter: grayscale(1);
  transform: translateX(0%);
  transition: filter 0.3s ease-in-out, transform 2s ease-in-out;

  .box {
    opacity: 0;
    transform: translateX(-200%) translateY(-90%) rotate(0deg);
    transition: transform 2s ease-in-out 0.5s, opacity 0.3s ease;
  }
`;

const Plane = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  return (
    <PlaneContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[0].cards[1].title}
          content={partData[0].cards[1].content}
          top="0"
          left="25"
          leftCard="100"
          topCard="500"
        />
      )}

      <AnimationContainer className={hovered ? "movePlane" : null}>
        <img
          className="plane"
          src="../assets/img/chap_2/part_1/plane.png"
          alt="avion postal"
        />
        <img
          className="box"
          src="../assets/img/chap_2/part_1/box.png"
          alt="colis"
        />
      </AnimationContainer>
    </PlaneContainer>
  );
};

export default Plane;
