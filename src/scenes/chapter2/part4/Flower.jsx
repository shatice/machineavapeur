import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import flowerGreen from '../../../assets/img/chap_2/part_4/flower_green.png';
import flowerYellow from '../../../assets/img/chap_2/part_4/flower_yellow.png';

const Flowers = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  return (
    <FlowersContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[3]?.cards[0].title}
          content={partData[3]?.cards[0].content}
          top="48"
          left="20"
          rightCard="-300"
          bottomCard="500"
        />
      )}

      <AnimationContainer className={hovered ? "animate" : "mainPlane"}>
        <img
          className="greenFlower inverted"
          src={flowerGreen}
          alt="Fleurs de Pavot"
        />
        <img
          className="yellowFlower"
          src={flowerYellow}
          alt="Fleur de Tournesol"
        />
        <img
          className="greenFlower"
          src={flowerGreen}
          alt="Fleurs de Pavot"
        />
      </AnimationContainer>
    </FlowersContainer>
  );
};

const FlowersContainer = styled.div`
  position: absolute;
  bottom: -20px;
  right: 10vw;
  .animate {
    img {
      filter: grayscale(0);
    }
    .yellowFlower {
      filter: grayscale(0);
    }
    .greenFlower {
      transform: translateY(0px);
    }
    .inverted {
      transform: translateY(20px) rotateY(180deg);
    }
  }
`;

const AnimationContainer = styled.div`
  img {
    filter: grayscale(1);
    transition: filter 0.5s ease-in-out;
  }
  .yellowFlower {
    width: 200px;
    transition: transform 2s ease-in-out;
  }
  .greenFlower {
    transition: transform 2s ease-in-out;
    transform: rotateZ(30deg) translateY(400px);
    width: 150px;
  }
  .inverted {
    transition: transform 2s ease-in-out 0.3s;
    transform: rotateY(180deg) rotateZ(30deg) translateY(400px);
  }
`;

export default Flowers;
