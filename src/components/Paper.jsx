import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import paper from "../assets/paper.png";
import TargetUI from "../components/Target";

import { gsap } from "gsap";

const Paper = () => {
  let ref = useRef([]);
  let paperAnim;
  let paperIsHover = false;

  useEffect(() => {
    paperAnim = gsap.to(ref.current["paper"], {
      filter: "grayscale(0)",
      y: -250,
      duration: 1,
      ease: "back",
      paused: true,
    });
  }, []);

  const paperHover = () => {
    if (paperIsHover) {
      paperAnim.reverse();
    } else {
      paperAnim.play();
    }
    paperIsHover = !paperIsHover;
  };

  return (
    <PaperContainer>
      <TargetUI
        top={155}
        right={195}
        onMouseEnter={paperHover}
        onMouseLeave={paperHover}
      />
      <PaperIMG
        ref={(element) => {
          ref.current["paper"] = element;
        }}
        src={paper}
      />
    </PaperContainer>
  );
};

const PaperContainer = styled.div`
  position: absolute;
  bottom: -145px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const PaperIMG = styled.img`
  filter: grayscale(1);
`;

export default Paper;
