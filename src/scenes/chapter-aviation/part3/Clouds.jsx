import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

const CloudsContainer = styled.div`
    position: absolute;
    top: -10vh;
    left: 0vw;
    img {
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }
    .animate {
      opacity: 0.7;
    }
`;

const Clouds = ({ isActive }) => {
  const [ hovered, setHovered ] = useState(0)
  const isHovered = function(bool) {
    setHovered(bool)
    isActive(bool)
  }

  return (
    <CloudsContainer>
      <Infos
        setIsAnimated={isHovered}
        title="Pollution Atmosphérique"
        content="Lorem ipsum dolor"
        top="45"
        left="45"
        leftCard="200"
        topCard="0"
      />
      <img className={hovered ? "animate" : null} src="../assets/img/chap_2/part_3/clouds.jpg" alt=""/>
    </CloudsContainer>
  );
};

export default Clouds;
