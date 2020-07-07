import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

const WrightBrothersContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  .animate {
    .brothers {
      filter: grayscale(0);
    }
    .apple {
      opacity: 0;
      filter: grayscale(0);
    }
    .apple1 {
      transform: rotate(-25deg) scale(0.5);
    }
    .apple2 {
      transform: rotate(25deg) scale(0.5);
    }
  }
`;

const AnimationContainer = styled.div`
  .brothers {
    filter: grayscale(1);
    transition: all 0.5s ease-in-out;
  }
  .apple {
    position: absolute;
    transform: rotate(0);
    filter: grayscale(1);
    transition: filter 0.3s ease-in-out, transform 0.5s ease-in 0.4s,
      opacity 0.5s ease-in-out 0.4s;
  }
  .apple1 {
    top: 30%;
    left: 18%;
  }
  .apple2 {
    top: 6%;
    right: 6%;
  }
`;

const WrightBrother = ({ partData }) => {
  const [hovered, setHovered] = useState(0);
  const isHovered = function (bool) {
    setHovered(bool);
  };

  console.log(hovered);

  return (
    <WrightBrothersContainer>
      {partData && (
        <Infos
          setIsAnimated={isHovered}
          title={partData[0]?.cards[0].title}
          content={partData[0]?.cards[0].content}
          bottom="30"
          right="35"
          rightCard="500"
          bottomCard="100"
        />
      )}

      <AnimationContainer className={hovered ? "animate" : null}>
        <img
          className="brothers"
          src="../assets/img/chap_2/part_1/wright_brothers.png"
          alt="Les frères Wright"
        />
        <img
          className="apple1 apple"
          src="../assets/img/chap_2/part_1/apple.png"
          alt="pomme"
        />
        <img
          className="apple2 apple"
          src="../assets/img/chap_2/part_1/apple.png"
          alt="pomme"
        />
      </AnimationContainer>
    </WrightBrothersContainer>
  );
};

export default WrightBrother;
