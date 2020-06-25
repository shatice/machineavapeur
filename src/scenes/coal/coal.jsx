import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import MecaSrc from "../../assets/meca.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const InfiniteScroll = styled.section`
  height: 300vh;
  z-index: -1000;
`;

const CoalWrapper = styled.section`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background-color: #d8d6c8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaElem = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  display: ${({ display }) => (display ? "flex" : "none")};
  transform: scale(0.8);
`;
let mecaSize = [
  {
    width: "100",
    display: false,
  },
  {
    width: "200",
    display: false,
  },
  {
    width: "400",
    display: false,
  },
  {
    width: "600",
    display: false,
  },
  {
    width: "800",
    display: false,
  },
  {
    width: "1100",
    display: false,
  },
];

const Coal = () => {
  const [mecas, setMecas] = useState([]);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [tempScrollPosition, setTempSrollPosition] = useState(0);

  const addAMeca = () => {
    let len = mecas.length;
    let mecaSave = mecas;
    mecaSave.push(mecaSize[len]);
    setMecas(mecaSave);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
    debugger;
    setTempSrollPosition(position);
    debugger;
    console.log(position);
    debugger;

    console.log(tempScrollPosition);
    debugger;

    if (tempScrollPosition > position) console.log("bottom");
    console.log(scrollPosition);
    if (position > 100 && position < 120) addAMeca();
    if (position > 300 && position < 320) addAMeca();
    if (position > 400 && position < 420) addAMeca();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   tl.to(container, {
  //     x: 100,
  //     duration: 2,
  //   });
  // }, []);

  return (
    <InfiniteScroll>
      <CoalWrapper>
        <MecaContainer>
          <MecaWrapper>
            {mecas.map((m) => {
              return (
                <MecaElem
                  width={m && m.width}
                  display={m && !m.display}
                  src={MecaSrc}
                  alt="meca"
                />
              );
            })}
          </MecaWrapper>
        </MecaContainer>
      </CoalWrapper>
    </InfiniteScroll>
  );
};

export default Coal;
