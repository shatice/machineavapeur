import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";

import paper from "../assets/paper.png";
import store from "../store";

import { gsap } from "gsap";
import Infos from "./molecules/Infos";

const Paper = () => {
  let ref = useRef([]);
  const [paperIsHover, setPaperIsHover] = useState(false);
  const [paperAnim, setPaperAnim] = useState({});
  const [partData, setPartData] = useState([]);
  const { data, subChapter2 } = useContext(store);
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

  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
  }, [data]);

  const paperHover = () => {
    if (paperIsHover) {
      paperAnim.reverse();
    } else {
      paperAnim.play();
    }
    setPaperIsHover(!paperIsHover);
  };

  return (
    <PaperContainer>
      <PaperIMG
        ref={(element) => {
          ref.current["paper"] = element;
        }}
        src={paper}
      />
      {partData && (
        <Infos
          setIsAnimated={paperHover}
          title={partData[0]?.cards[2].title}
          content={partData[0]?.cards[2].content}
          bottom="50"
          left="0"
          leftCard="-600"
          bottomCard="800"
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
  filter: grayscale(1);
`;

export default Paper;
