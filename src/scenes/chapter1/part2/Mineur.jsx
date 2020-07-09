import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import hat from "../../../assets/img/chap_1/part_2/mineur_chapeau.png";
import minor from "../../../assets/img/chap_1/part_2/mineur.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Mineur = ({ partData }) => {
  const [display, setDisplay] = useState(false);
  const [anim, setAnim] = useState({});

  let ref = useRef([]);
  const currentRef = ref.current;

  useEffect(() => {
    var tl = gsap.timeline({ paused: true });
    tl.fromTo(".minorBg", { filter: "brightness(1)", duration: 0.3 }, { filter: "brightness(1.6)", duration: 0.3 });

    var hat = gsap.timeline({ paused: true });
    tl.to(currentRef["Hat"], { rotation: 20, immediateRender: false, repeat: -1, yoyo: true, ease: "bounce" })
    tl.to(currentRef["Minor"], { opacity: 1, duration: 0 }, 0)
    tl.to(currentRef["Minor"], { scale: 1.1 }, 0)

    setAnim({ bg: tl, hat: hat });
  }, []);

  const minorIshover = () => {
    if (display) {
      anim.bg.reverse();
      anim.hat.reverse();
    } else {
      anim.bg.play();
      anim.hat.play()
    }

    setDisplay(!display);
  };

  return (
    <MineurContainer>
      <MineurBody ref={(element) => {
        currentRef["Minor"] = element;
      }}>
        <Minor src={minor} />
        <Hat src={hat} ref={(element) => {
          currentRef["Hat"] = element;
        }} />
      </MineurBody>
      {partData && (
        <Infos
          setIsAnimated={minorIshover}
          title={partData[1]?.cards[0]?.title}
          content={partData[1]?.cards[0]?.content}
          bottom="20"
          left="-9"
          leftCard="-340"
          bottomCard="140"
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
  opacity: 0;
  transform: scale(0.9);
`;

const Hat = styled.img`
  position: absolute;
  top: -181px;
  left: 80px;
`;

const Minor = styled.img`
  position: absolute;
  top: -150px;
  left: -20px;
`;

export default Mineur;
