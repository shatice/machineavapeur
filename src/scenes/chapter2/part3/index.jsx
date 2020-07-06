import React, { useState } from "react";
import styled from "styled-components";
import Ocean from "./Ocean";
import Man from "./Man";
import Clouds from "./Clouds";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .airport {
    z-index: 1;
    transform: translateY(-10vh);
    margin-top: -220px;
    filter: grayscale(1);
  }

  .background {
    position: absolute;
    top: 4vh;
    left: 10vw;
    z-index: -1;
    filter: grayscale(1);
    transition: all 0.5s ease-in-out;
  }

  .animate {
    filter: grayscale(0);
  }
`;


const Chapter2Part3 = () => {
  const [ hovered, setHovered ] = useState(0)
  const isHovered = function(bool) {
    setHovered(bool)
  }

  return (
    <Bg>
      <Ocean isActive={isHovered}/>
      <Clouds isActive={isHovered}/>
      <img className="airport" src="../assets/img/chap_2/part_3/airport.png" alt=""/>
      <img className={hovered ? "animate background" : "background"} src="../assets/img/chap_2/part_3/background.jpg" alt=""/>
      <Man/>
    </Bg>
  );
};

export default Chapter2Part3;