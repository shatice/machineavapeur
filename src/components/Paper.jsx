import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import paper from "../assets/paper.png";
import TargetUI from "../components/Target";

import { gsap } from "gsap";
import Card from "./organisms/Card";

const Paper = () => {
  let ref = useRef([]);
  const [paperIsHover, setPaperIsHover] = useState(false);
  const [paperAnim, setPaperAnim] = useState({});

  useEffect(() => {
    setPaperAnim(
      gsap.to(ref.current["paper"], {
        filter: "grayscale(0)",
        y: -250,
        duration: 1,
        ease: "back",
        paused: true,
      })
    );
  }, []);

  const paperHover = () => {
    if (paperIsHover) {
      paperAnim.reverse();
    } else {
      paperAnim.play();
    }
    setPaperIsHover(!paperIsHover);
  };
  const content =
    "La machine à vapeur est un moteur à combustion externe qui transforme l'énergie thermique de la vapeur d'eau en énergie mécanique. C’est la première source d'énergie mécanique maîtrisée par l’homme ; auparavant, l’énergie était d'origine humaine ou animale Elle est essentielle pour les progrès qui vont suivre dans le domaine des transports, comme le bateau à vapeur et surtout le chemin de fer, avec le quasi-monopole des locomotives à vapeur jusque dans la seconde moitié du xxe siècle.";
  const title = "La machine a vapeur";
  return (
    <PaperContainer>
      <TargetUI
        top={155}
        right={195}
        onMouseEnter={paperHover}
        onMouseLeave={paperHover}
        title={title}
      />
      <PaperIMG
        ref={(element) => {
          ref.current["paper"] = element;
        }}
        src={paper}
      />
      {paperIsHover && (
        <Card
          title={title}
          width={"340"}
          content={content}
          top={"-150"}
          left={"0"}
        />
      )}
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
  filter: grayscale(1);a
`;

export default Paper;
