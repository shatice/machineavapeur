import React from "react";
import styled, { keyframes } from "styled-components";
import "./style.scss";

/***** ASSETS *****/
import coinQueen from "../../../assets/img/chap_1/part_3/c1p3_coin_queen.png";
import coinWagon from "../../../assets/img/chap_1/part_3/c1p3_coin_wagon.png";

const Richard = ({ className }) => {

  return (
    <Container className={className}>
      <div className="coin">
        <div className="coin__card">
          <img
            src={coinQueen}
            alt="Pièce Anglaise"
            className="coin__side coin__side--queen"
          />
          <img
            src={coinWagon}
            alt="Pièce Anglaise"
            className="coin__side coin__side--wagon"
          />
        </div>
      </div>
    </Container>
  );
};

const flipping = keyframes `
  0% {
    transform: translateY(0) translateX(0);
    width: 5%; 
  }
  50% {
    transform: translateY(-500px) translateX(10px) scale(2);
  }
  100% {
    transform: translateY(40px) translateX(50px) scale(2);
    width: 10%;
  }
`

const Container = styled.div`

  .coin {
    position: absolute;
    bottom: 40%;
    left: 62%;
    width: fit-content; 
    height: auto;
    perspective: 500px;
    perspective-origin: 100px 100px;
  }

  .coin__card {
    position: relative;
    width: 20px;
    height: 20px;
    transform-style: preserve-3d;
    transition: all 1.5s;
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

  &.isAnimated {

    .coin__card {
      width: 70px;
      height: 70px;
      transform: rotateY(180deg);
    }

    .coin {
      animation: ${flipping} 1s alternate forwards;
    }
  }
`;

export default Richard;
