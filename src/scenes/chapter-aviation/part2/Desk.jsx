import React, { useState } from "react";
import styled from "styled-components";
import Infos from "../../../components/molecules/Infos";

const ConcordeContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  img {
    width: 60vw;
    transition: all 0.3s ease-in-out;
  }
  .animate {
    transform: scale(1.05);
    filter: sepia(40%);
  }
`;

const Concorde = () => {
  const [ hovered, setHovered ] = useState(0)
  const isHovered = function(bool) {
    setHovered(bool)
  }

  return (
    <ConcordeContainer>
      <Infos
        setIsAnimated={isHovered}
        title="Le moteur à réaction"
        content="Lorem ipsum dolor"
        top="13"
        left="40"
        leftCard="-400"
        bottomCard="200"
      />
      <img className={hovered ? "animate" : null} src="../assets/img/chap_2/part_2/desk.png" alt=""/>
    </ConcordeContainer>
  );
};

export default Concorde;
