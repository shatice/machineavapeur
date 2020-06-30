import React, { useEffect } from "react";
import MecaSrc from "./assets/gear4.png";

import { useState } from "react";
import {
  InfiniteScroll,
  CoalWrapper,
  MecaContainer,
  MecaWrapper,
  MecaElem,
  CoalImage,
} from "./CoalStyle";

let initialMeca = [
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
  {
    width: "1400",
    display: false,
  },
];

let initialCoalImage = [
  {
    width: "100",
    path: 1,
    display: false,
  },
  {
    width: "200",
    path: 2,
    display: false,
  },
  {
    width: "400",
    path: 3,
    display: false,
  },
  {
    width: "600",
    path: 4,
    display: false,
  },
];

const Coal = () => {
  const [mecas, setMecas] = useState(initialMeca);
  const [coalImage, setCoalImage] = useState(initialCoalImage);
  const [average, setAverage] = useState(0);
  let lastScroll = 0;

  const addAMeca = (i, image) => {
    let newImages, newMecas;

    if (initialCoalImage[image]) {
      newImages = [...coalImage, (initialCoalImage[image].display = true)];
    }
    if (initialMeca[i]) {
      newMecas = [...mecas, (initialMeca[i].display = true)];
    }

    setMecas(newMecas);
    setCoalImage(newImages);
  };

  const removeMeca = (i, image) => {
    let newImages, newMecas;

    if (i < 5 && initialCoalImage[image]) {
      newImages = [...coalImage, (initialCoalImage[image].display = false)];
    }
    if (initialMeca[i]) {
      newMecas = [...mecas, (initialMeca[i].display = false)];
    }

    setMecas(newMecas);
    setCoalImage(newImages);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    let upDirrection = false;
    const total = window.innerHeight;
    let myScroll = window.pageYOffset;
    if (myScroll >= total) {
      myScroll = total;
    }
    const average = myScroll / total;
    setAverage(average);

    if (lastScroll < position) {
      upDirrection = true;
    }

    if (position > 100 && upDirrection) addAMeca(0, 0);
    if (position > 300 && upDirrection) addAMeca(1, 0);
    if (position > 400 && upDirrection) addAMeca(2, 0);
    if (position > 500 && upDirrection) addAMeca(3, 1);
    if (position > 600 && upDirrection) addAMeca(4, 0);
    if (position > 600 && upDirrection) addAMeca(5, 2);
    if (position > 600 && upDirrection) addAMeca(6, 3);

    if (position > 100 && position < 120 && !upDirrection) removeMeca(0, null);
    if (position > 300 && position < 320 && !upDirrection) removeMeca(1, 0);
    if (position > 400 && position < 420 && !upDirrection) removeMeca(2, 1);
    if (position > 500 && position < 520 && !upDirrection) removeMeca(3, 2);
    if (position > 600 && position < 620 && !upDirrection) removeMeca(4, 3);

    lastScroll = position;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(coalImage);
  return (
    <InfiniteScroll>
      <CoalWrapper>
        <MecaContainer>
          <MecaWrapper>
            {mecas &&
              mecas.map((m) => {
                return (
                  <MecaElem
                    width={m && m.width}
                    display={m && m.display}
                    src={MecaSrc}
                    alt="meca"
                  />
                );
              })}
            {coalImage &&
              coalImage.map((c) => {
                return (
                  <CoalImage
                    display={c && c.display}
                    width={c && c.width}
                    average={average}
                    src={
                      c.path !== undefined
                        ? require(`./assets/coal${c.path}.png`)
                        : null
                    }
                  />
                );
              })}
            {/* <CoalImage width="200" src="../../assets/coal/coal1.png" /> */}
          </MecaWrapper>
        </MecaContainer>
      </CoalWrapper>
    </InfiniteScroll>
  );
};

export default Coal;
