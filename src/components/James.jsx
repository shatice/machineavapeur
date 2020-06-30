import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import gsap from "gsap";

import head from "../assets/jamesWatt_head_cropped.png";
import body from "../assets/jamesWatt_body_cropped.png";
import arm from "../assets/jamesWatt_arm_cropped.png";

import TargetUI from "../components/Target";
import Card from "../components/organisms/Card";

const James = () => {
  let ref = useRef([]);
  let jamesIsHover = false;
  let jamesAnims = {};

  useEffect(() => {
    jamesAnims = {
      filterAnim: gsap.to(ref.current["jamesBody"], {
        filter: "grayscale(0)",
        paused: true,
      }),
      armAnim: gsap.to(ref.current["arm"], {
        rotation: 82,
        x: -100,
        duration: 1,
        transformOrigin: "100% bottom",
        paused: true,
      }),
      headAnim: gsap.to(ref.current["head"], {
        rotation: -15,
        x: -25,
        delay: 0.5,
        duration: 0.5,
        paused: true,
      }),
    };
  }, []);

  const jamesHover = () => {
    if (jamesIsHover) {
      for (const key in jamesAnims) {
        eval(`jamesAnims.${key}.reverse()`);
      }
    } else {
      for (const key in jamesAnims) {
        eval(`jamesAnims.${key}.play()`);
      }
    }
    jamesIsHover = !jamesIsHover;
  };

  return (
    <JamesContainer>
      <JamesBody
        ref={(element) => {
          ref.current["jamesBody"] = element;
        }}
      >
        <TargetUI
          top={185}
          right={-460}
          onMouseEnter={jamesHover}
          onMouseLeave={jamesHover}
        />
        <Head
          ref={(element) => {
            ref.current["head"] = element;
          }}
          src={head}
        />
        <Body src={body} />
        <Arm
          ref={(element) => {
            ref.current["arm"] = element;
          }}
          src={arm}
        />
      </JamesBody>
    </JamesContainer>
  );
};

export default James;

const JamesContainer = styled.div`
  position: absolute;
  right: 741px;
  bottom: 802px;
`;

const JamesBody = styled.div`
  position: relative;
  filter: grayscale(1);
`;

const Head = styled.img`
  position: absolute;
  top: -125px;
  left: 277px;
`;

const Body = styled.img`
  position: absolute;
  top: 20px;
  left: 15px;
`;

const Arm = styled.img`
  position: absolute;
  top: 215px;
  left: -120px;
`;
