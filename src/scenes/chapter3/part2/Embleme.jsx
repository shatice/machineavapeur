import React, { useState, useEffect } from "react";
import styled from "styled-components";

import emblemImg from "../../../assets/img/chap_3/part_2/manhattan_project_emblem.png";
import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Embleme = ({ partData }) => {
  const [emblemAnims, setEmblemAnims] = useState();
  const [emblemIsHover, setEmblemIsHover] = useState(false);

  useEffect(() => {
    setEmblemAnims(gsap.to("#emblem", { rotate: 360, scale: 0.8, paused: true }));
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
          bottom="-23"
          right="32"
          rightCard="-410"
          bottomCard="-90"
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
  top: 90px;
  left: -63px;
`;
