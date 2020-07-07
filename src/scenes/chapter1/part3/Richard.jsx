import React, { useState } from "react";
import styled from "styled-components";
import "./style.scss";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import frameRichard from "../../../assets/img/chap_1/part_3/c1p3_frame_richard.png";
import richard from "../../../assets/img/chap_1/part_3/c1p3_richard.png";
import coinQueen from "../../../assets/img/chap_1/part_3/c1p3_coin_queen.png";
import coinWagon from "../../../assets/img/chap_1/part_3/c1p3_coin_wagon.png";

const Richard = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container className={isAnimated ? "isAnimated hasNet" : "hasNet"}>
      <img src={frameRichard} alt="" />
      <img src={richard} alt="" className="richard" />
      <div className="scene">
        <div className="coin">
          <div className="coin__card">
            <img
              src={coinQueen}
              alt="coin-queen"
              className="coin__side coin__side--queen"
            />
            <img
              src={coinWagon}
              alt="coin-wagon"
              className="coin__side coin__side--wagon"
            />
          </div>
        </div>
      </div>

      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[2]?.cards[0].title}
          content={partData[2]?.cards[0].content}
          top="15"
          left="55"
          leftCard="100"
          bottomCard="20"
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 35%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  animation: enterIn .5s ease-out;

  img {
    filter: grayscale(1);
    transform: rotate(5deg);
  }

  &.isAnimated {
    z-index: 10;

    img {
      filter: grayscale(0);
    }

    .coin__card {
      width: 70px;
      height: 70px;
      transform: rotateY(180deg);
    }

    .richard {
      transform: scale(3);
      transition: all 0.5s linear;
    }

    .coin {
      animation: flipping 1s forwards;
    }
  }

  img {
    width: 100%;
    grid-column: 1;
    grid-row: 1;
  }

  .coin {
    grid-column: 1;
    grid-row: 1;
    width: 5%;
    height: auto;
    position: absolute;
    bottom: 40%;
    left: 62%;

    img {
      width: 100%;
    }
  }

  .coin {
    perspective: 500px;
    perspective-origin: 100px 100px;
  }

  .coin__card {
    position: relative;
    transform-style: preserve-3d;
    width: 20px;
    height: 20px;
    transition: transform 1.5s;
  }

  .coin__side {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .coin__side--wagon {
    transform: rotateY(180deg);
  }
`;

export default Richard;
