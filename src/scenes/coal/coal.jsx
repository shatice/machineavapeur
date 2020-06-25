import React, { useEffect } from "react";
import MecaSrc from "../../assets/meca.png";
import { useState } from "react";
import {
  InfiniteScroll,
  CoalWrapper,
  MecaContainer,
  MecaWrapper,
  MecaElem,
} from "./coalStyle";

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
    width: "900",
    display: false,
  },
  {
    width: "1200",
    display: false,
  },
];

const Coal = () => {
  const [mecas, setMecas] = useState(mecaSize);

  const addAMeca = (i) => {
    let newMecas = [...mecas, (mecaSize[i].display = true)];
    setMecas(newMecas);
  };

  const removeMeca = (i) => {
    let newMecas = [...mecas, (mecaSize[i].display = false)];
    setMecas(newMecas);
  };

  let lastScroll = 0;

  const handleScroll = () => {
    const position = window.pageYOffset;
    let upDirrection = false;

    if (lastScroll < position) {
      upDirrection = true;
    }

    if (position > 100 && upDirrection) addAMeca(0);
    if (position > 300 && upDirrection) addAMeca(1);
    if (position > 400 && upDirrection) addAMeca(2);
    if (position > 500 && upDirrection) addAMeca(3);
    if (position > 600 && upDirrection) addAMeca(4);

    if (position > 100 && position < 120 && !upDirrection) removeMeca(0);
    if (position > 300 && position < 320 && !upDirrection) removeMeca(1);
    if (position > 400 && position < 420 && !upDirrection) removeMeca(2);
    if (position > 500 && position < 520 && !upDirrection) removeMeca(3);
    if (position > 600 && position < 620 && !upDirrection) removeMeca(4);

    lastScroll = position;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <InfiniteScroll>
      <CoalWrapper>
        <MecaContainer>
          <MecaWrapper>
            {mecas.map((m) => {
              return (
                <MecaElem
                  width={m && m.width}
                  display={m && m.display}
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
