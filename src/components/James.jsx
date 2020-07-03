import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";

import gsap from "gsap";

import head from "../assets/jamesWatt_head_cropped.png";
import body from "../assets/jamesWatt_body_cropped.png";
import arm from "../assets/jamesWatt_arm_cropped.png";

import Infos from "./molecules/Infos";
import store from "../store";

const James = () => {
  /* eslint-disable */
  let ref = useRef([]);
  const [jamesIsHover, setJamesIsHover] = useState(false);
  const [jamesAnims, setJamesAnims] = useState({});
  const [partData, setPartData] = useState([]);

  const { data, subChapter2 } = useContext(store);

  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
  }, [data]);

  if (partData) {
    console.log(partData[0]?.cards);
  }

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
      {partData && (
        <Infos
          setIsAnimated={jamesHover}
          title={partData[0]?.cards[0].title}
          content={partData[0]?.cards[0].content}
          bottom="-100"
          right="-20"
          rightCard="200"
          bottomCard="100"
        />
      )}
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
