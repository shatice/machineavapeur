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
        <Lantern src={lantern} top={270} left={-162} />
        <Lantern src={lantern} top={205} left={-98} />
        <Lantern src={lantern} top={210} left={9} />
      </LanternsWrapper>
      {partData && (
        <Infos
          setIsAnimated={lanternIsHover}
          title={partData[1]?.cards[1]?.title}
          content={partData[1]?.cards[1]?.content}
          bottom="30"
          left="10"
          leftCard="-1000"
          bottomCard="-400"
        />
      )}
    </LanternContainer>
  );
};

const LanternContainer = styled.div`
  position: absolute;
  top: 348px;
  left: 1048px;
`;

const LanternsWrapper = styled.div`
  position: relative;
  display: ${({ display }) => (display ? "block" : "none")};
`;

const Lantern = styled.img`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

export default Lanterns;