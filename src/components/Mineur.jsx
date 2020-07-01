import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import hat from "../assets/mineur_chapeau.png";
import minor from "../assets/mineur.png";
import TargetUI from "./Target";
import Card from "./organisms/Card";

import gsap from "gsap";

const Mineur = () => {

  const [display, setDisplay] = useState(false);

  let content = "MINOR MINOR MINOR"

  const minorIshover = () => {

    if (display) {
      gsap.to(".minorBg", {filter: "brightness(1)"})
    } else {
      gsap.to(".minorBg", {filter: "brightness(1.6)"})
    }

    setDisplay(!display);
  }


  return (
    <MineurContainer>
      <MineurBody display={display}>
        <Minor src={minor} />
        <Hat src={hat} />
      </MineurBody>
      <TargetUI
        top={185}
        right={-460}
        title="Mineur"
        isActive={display}
        onMouseEnter={minorIshover}
        onMouseLeave={minorIshover}
      />

      {display && (
        <Card
          title="Industrialisation"
          width={"340"}
          content={content}
          top={"240"}
          left={"70"}
        />
      )}
    </MineurContainer>
  );
};

const MineurContainer = styled.div`
  position: absolute;
  top: 215px;
  left: 1048px;
  transform: scale(1.4);
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
