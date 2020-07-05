import React, { useState } from "react";
import styled from "styled-components";

import hat from "../assets/mineur_chapeau.png";
import minor from "../assets/mineur.png";

import Infos from "./molecules/Infos";

import gsap from "gsap";

const Mineur = ({ partData }) => {
  console.log(partData);
  const [display, setDisplay] = useState(true);

  const minorIshover = () => {
    if (display) {
      gsap.to(".minorBg", { filter: "brightness(1)" });
    } else {
      gsap.to(".minorBg", { filter: "brightness(1.6)" });
    }

    setDisplay(!display);
  };
  console.log(display);
  return (
    <MineurContainer>
      {display && (
        <MineurBody
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
        >
          <Minor src={minor} />
          <Hat src={hat} />
        </MineurBody>
      )}

      {partData && (
        <Infos
          title={partData[1]?.cards?.[0].title}
          content={partData[1]?.cards?.[0].content}
          isActive={display}
          bottom="8"
          left="103"
          leftCard="-1500"
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
  z-index: 100000;
`;

const Hat = styled.img`
  position: absolute;
  top: -153px;
  left: 375px;
  z-index: 100000;
`;

const Minor = styled.img`
  position: absolute;
  top: -125px;
  left: 277px;
  z-index: 100000;
`;

export default Mineur;
