import React, { useState, useEffect } from "react";
import styled from "styled-components";

import emblemImg from "../assets/manhattan_project_emblem.png";
import Infos from "./molecules/Infos";

import gsap from "gsap";

const Embleme = ({ partData }) => {
  const [emblemAnims, setEmblemAnims] = useState();
  const [emblemIsHover, setEmblemIsHover] = useState(false);

  useEffect(() => {
    setEmblemAnims(gsap.to("#emblem", { rotate: 360, scale: 1, paused: true }));
  }, []);

  const EmblemHover = () => {
    if (emblemIsHover) {
      emblemAnims.reverse();
    } else {
      emblemAnims.play();
    }
    setEmblemIsHover(!emblemIsHover);
  };

  console.log(partData);

  return (
    <EmblemContainer>
      <Emblem src={emblemImg} id="emblem" />
      {partData && (
        <Infos
          setIsAnimated={EmblemHover}
          title={partData[1]?.cards[0].title}
          content={partData[1]?.cards[0].content}
          bottom="-14"
          right="-20"
          rightCard="-1720"
          bottomCard="333"
        />
      )}
    </EmblemContainer>
  );
};

export default Embleme;

const EmblemContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  z-index: 2;
`;

const Emblem = styled.img`
  position: absolute;
  transform: scale(0.08);
  top: 48px;
  left: 177px;
`;
