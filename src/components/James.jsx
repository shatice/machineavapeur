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
  const [jamesIsHover, setJamesIsHover] = useState(false);
  const [jamesAnims, setJamesAnims] = useState({});
  const currentRef = ref.current;
  useEffect(() => {
    setJamesAnims({
      filterAnim: gsap.to(currentRef["jamesBody"], {
        filter: "grayscale(0)",
        paused: true,
      }),
      armAnim: gsap.to(currentRef["arm"], {
        rotation: 82,
        x: -100,
        duration: 2,
        transformOrigin: "100% bottom",
        paused: true,
      }),
      headAnim: gsap.to(currentRef["head"], {
        rotation: -15,
        x: -25,
        delay: 0.25,
        duration: 1.75,
        paused: true,
      }),
    });
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
    setJamesIsHover(!jamesIsHover);
  };
  return (
    <JamesContainer>
      <JamesBody
        ref={(element) => {
          currentRef["jamesBody"] = element;
        }}
      >
        <TargetUI
          top={185}
          right={-460}
          isActive={jamesIsHover}
          onMouseEnter={jamesHover}
          onMouseLeave={jamesHover}
        />
        <Head
          ref={(element) => {
            currentRef["head"] = element;
          }}
          src={head}
        />
        <Body src={body} />
        <Arm
          ref={(element) => {
            currentRef["arm"] = element;
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
  bottom: 715px;
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
