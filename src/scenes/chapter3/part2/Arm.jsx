import React, { useState, useEffect } from "react";
import styled from "styled-components";

import armImg from "../../../assets/img/chap_3/part_2/manhattan_project_arm.png";
import atomicImg from "../../../assets/img/chap_3/part_2/atomic.jpg";
import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Arm = ({ partData }) => {
  const [anims, setAnims] = useState({});
  const [armIsHover, setArmIsHover] = useState(false);

  useEffect(() => {
    setAnims({
      armAnim: gsap.to("#arm", {
        rotate: 10,
        filter: "grayscale(0)",
        transformOrigin: "80% 20%",
        paused: true,
      }),
      atomicAnim: gsap.to("#atomic", { y: "-60vw", paused: true }),
    });
  }, []);

  const ArmisHover = () => {
    if (armIsHover) {
      for (const key in anims) {
        anims[key].reverse();
      }
    } else {
      for (const key in anims) {
        anims[key].play();
      }
    }
    setArmIsHover(!armIsHover);
  };

  return (
    <>
      <AtomicIMG src={atomicImg} id="atomic" />
      <ArmContainer>
        <ArmIMG src={armImg} id="arm" />
        {partData && (
          <Infos
            setIsAnimated={ArmisHover}
            title={partData[1]?.cards[1].title}
            content={partData[1]?.cards[1].content}
            bottom="-45"
            right="-120"
            rightCard="118"
            bottomCard="166"
          />
        )}
      </ArmContainer>
    </>
  );
};

export default Arm;

const ArmContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
`;

const ArmIMG = styled.img`
  position: absolute;
  top: 270px;
  right: -634px;
  filter: grayscale(1);
  z-index: 2;
`;

const AtomicIMG = styled.img`
  position: absolute;
  width: 70vw;
  left: 50%;
  transform: translate(-50%);
  bottom: -60vw;
`;
