import React, { useState } from "react";
import styled from "styled-components";

import lantern from "../../../assets/img/chap_1/part_2/lantern.png";

import Infos from "../../../components/molecules/Infos";
const Lanterns = ({ partData }) => {
  const [display, setDisplay] = useState(false);

  const lanternIsHover = () => {
    setDisplay(!display);
  };

  return (
    <LanternContainer>
      <LanternsWrapper display={display}>
        <Lantern src={lantern} top={284} left={-364} />
        <Lantern src={lantern} top={268} left={-211} />
        <Lantern src={lantern} top={204} left={-165} />
        <Lantern src={lantern} top={215} left={-78} />
      </LanternsWrapper>
      {partData && (
        <Infos
          setIsAnimated={lanternIsHover}
          title={partData[1]?.cards[1]?.title}
          content={partData[1]?.cards[1]?.content}
          top="20"
          left="-50"
          leftCard="-740"
          bottomCard="-50"
        />
      )}
    </LanternContainer>
  );
};

const LanternContainer = styled.div`
  position: absolute;
  top: 268px;
  left: 858px;
`;

const LanternsWrapper = styled.div`
  position: relative;
  opacity: ${({ display }) => (display ? "1" : "0")};
`;

const Lantern = styled.img`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

export default Lanterns;
