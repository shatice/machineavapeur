import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import hat from "../assets/mineur_chapeau.png";
import minor from "../assets/mineur.png";

import Infos from "./molecules/Infos";

import gsap from "gsap";

const Mineur = () => {

  const [display, setDisplay] = useState(false);

  const minorIshover = () => {

    if (display) {
      gsap.to(".minorBg", { filter: "brightness(1)" })
    } else {
      gsap.to(".minorBg", { filter: "brightness(1.6)" })
    }

    setDisplay(!display);
  }


  return (
    <MineurContainer>
      <MineurBody display={display}>
        <Minor src={minor} />
        <Hat src={hat} />
      </MineurBody>
      <Infos
        setIsAnimated={minorIshover}
        title={"Minor"}
        content={"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
        bottom="8"
        left="103"
        leftCard="-1500"
        bottomCard="-100"
      />
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
