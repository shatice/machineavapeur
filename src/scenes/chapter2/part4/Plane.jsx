import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

let planesData = [];
for (let i = 0; i < getRandomNumber(6, 12); i++) {
  let X = getRandomNumber(0, 100);
  let Y = getRandomNumber(0, 100);
  let width = getRandomNumber(100, 300);
  let delay = getRandomNumber(0, 100);
  planesData.push({ x: X, y: Y, width: width, delay: delay });
}

const PlanesContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0vh;
  left: 0vw;
  z-index: 1;

  .mainPlane {
    transition: transform 2s ease-in-out, filter 0.5s ease-in-out;
    width: 500px;
    margin-top: 30vh;
    filter: grayscale(1);
  }

  .animate {
    transform: translateX(100vw) translateY(-100vh);
    filter: grayscale(0);
  }
`;

const Plane = styled.div`
  position: absolute;
  background-image: url("../assets/img/chap_2/part_4/supersonic_plane.png");
  left: ${({ data }) => data.x - 100}vw;
  top: ${({ data }) => data.y + 100}vh;
  transition: all 2s ease-in-out ${({ data }) => data.delay / 100}s;
  img {
    width: ${({ data }) => data.width}px;
  }
`;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Planes = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  const renderPlanes = function () {
    let planes = [];
    for (let i = 0; i < planesData.length; i++) {
      planes.push(
        <Plane data={planesData[i]} className={hovered ? "animate" : null}>
          <img src="../assets/img/chap_2/part_4/supersonic_plane.png" alt="" />
        </Plane>
      );
    }
    return planes;
  };

  return (
    <PlanesContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[3]?.cards[1].title}
          content={partData[3]?.cards[1].content}
          top="48"
          left="12"
          leftCard="100"
          topCard="30"
        />
      )}

      <img
        className={hovered ? "mainPlane animate" : "mainPlane"}
        src="../assets/img/chap_2/part_4/supersonic_plane.png"
        alt=""
      />
      {renderPlanes().map((c) => {
        return c;
      })}
    </PlanesContainer>
  );
};

export default Planes;
