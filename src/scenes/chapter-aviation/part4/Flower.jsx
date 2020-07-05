import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

const FlowersContainer = styled.div`
  position: absolute;
  bottom: -20px;
  right: 10vw;

  .animate {
    img {
      filter: grayscale(0);
    }
    .yellowFlower{
      filter: grayscale(0);
    }
    .greenFlower {
      transform: translateY(0px);
    }
    .inverted{
      transform: translateY(20px) rotateY(180deg);
    }
  }
`;

const AnimationContainer = styled.div`
  img {
    filter: grayscale(1);
    transition: filter 0.5s ease-in-out;
  }
  .yellowFlower{
    width: 200px;
    transition: transform 2s ease-in-out;
  }
  .greenFlower {
    transition: transform 2s ease-in-out;
    transform: rotateZ(30deg) translateY(400px);
    width: 150px;
  };
  .inverted {
    transition: transform 2s ease-in-out 0.3s;
    transform: rotateY(180deg) rotateZ(30deg) translateY(400px);
  }
`;

const Flowers = () => {
  const [ hovered, setHovered ] = useState(0)
  const isHovered = function(bool) {
    setHovered(bool)
  }

  return (
    <FlowersContainer>
      <Infos
        setIsAnimated={isHovered}
        title="Accords de 2016"
        content="Lorem ipsum dolor"
        top="48"
        left="20"
        rightCard="-300"
        bottomCard="500"
      />
      <AnimationContainer className={hovered ? "animate" : "mainPlane"}>
        <img className="greenFlower inverted" src="../assets/img/chap_2/part_4/flower_green.png" alt=""/>
        <img className="yellowFlower" src="../assets/img/chap_2/part_4/flower_yellow.png" alt=""/>
        <img className="greenFlower" src="../assets/img/chap_2/part_4/flower_green.png" alt=""/>
      </AnimationContainer>
    </FlowersContainer>
  );
};

export default Flowers;
