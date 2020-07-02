import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import gsap from "gsap";

import head from "../assets/jamesWatt_head_cropped.png";
import body from "../assets/jamesWatt_body_cropped.png";
import arm from "../assets/jamesWatt_arm_cropped.png";

import Infos from "./molecules/Infos";

const James = () => {
  /* eslint-disable */
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
  const content =
    "Ingénieur écossais, il fait breveter en 1769 la chambre de condensation séparée pour la machine à vapeur et crée une entreprise à Soho, en Angleterre, pour produire sa machine à vapeur améliorée. C’est la source d’énergie principale de la révolution industrielle naissante, dont elle a considérablement accru la capacité de production. En 1800, environ 500 de ses machines à vapeur sont en service.";
  return (
    <JamesContainer>
      <JamesBody
        ref={(element) => {
          currentRef["jamesBody"] = element;
        }}
      >
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
      <Infos
        setIsAnimated={jamesHover}
        title={"James"}
        content={"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
        bottom="-100"
        right="-20"
        rightCard="200"
        bottomCard="100"
      />
    </JamesContainer>
  );
};

export default James;

const JamesContainer = styled.div`
  position: absolute;
  right: 446px;
  bottom: 710px;
  width: 400px;
  height: 400px;
`;

const JamesBody = styled.div`
  position: relative;
  filter: grayscale(1);
  left: 100px;
  top: 400px;
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
