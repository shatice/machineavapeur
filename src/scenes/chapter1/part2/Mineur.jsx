import React, { useState } from "react";
import styled from "styled-components";

import hat from "../../../assets/img/chap_1/part_2/mineur_chapeau.png";
import minor from "../../../assets/img/chap_1/part_2/mineur.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Mineur = ({ partData }) => {
  const [display, setDisplay] = useState(false);

  const minorIshover = () => {
    if (display) {
      gsap.to(".minorBg", { filter: "brightness(1)" });
    } else {
      gsap.to(".minorBg", { filter: "brightness(1.6)" });
    }

    setDisplay(!display);
  };

  return (
    <MineurContainer>
      <MineurBody display={display}>
        <Minor src={minor} />
        <Hat src={hat} />
      </MineurBody>
      {partData && (
        <Infos
          setIsAnimated={minorIshover}
          title={partData[1]?.cards[0]?.title}
          content={partData[1]?.cards[0]?.content}
          bottom="8"
          left="103"
          leftCard="50"
          bottomCard="-100"
        />
      )}
    </MineurContainer>
  );
};

const MineurContainer = styled.div`
  position: absolute;
  top: 267px;
  left: 1111px;
  transform: scale(1.4);
  width: 300px;
  height: 300px;
`;

const MineurBody = styled.div`
  position: relative;
  display: ${({ display }) => (display ? "block" : "none")};
`;

const Hat = styled.img`
  position: absolute;
  top: -153px;
  left: 375px;
`;

const Minor = styled.img`
  position: absolute;
  top: -125px;
  left: 277px;
`;

export default Mineur;
