import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import paper from "../assets/paper.png";

import { gsap } from "gsap";
import Infos from "./molecules/Infos";

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

  return (
    <PaperContainer>
      <PaperIMG
        ref={(element) => {
          ref.current["paper"] = element;
        }}
        src={paper}
      />
      <Infos
        setIsAnimated={paperHover}
        title={"Paper"}
        content={"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
        bottom="50"
        left="0"
        leftCard="-600"
        bottomCard="800"
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
