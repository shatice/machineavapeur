import React, { useState } from "react";
import styled from "styled-components";
import "./style.scss";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import smoke1 from "../../../assets/img/chap_1/part_4/c1p4_smoke1.png";
import smoke2 from "../../../assets/img/chap_1/part_4/c1p4_smoke2.png";
import smoke3 from "../../../assets/img/chap_1/part_4/c1p4_smoke3.png";
import smoke4 from "../../../assets/img/chap_1/part_4/c1p4_smoke4.png";
import tower from "../../../assets/img/chap_1/part_4/c1p4_tower.png";

const CoalTowers = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container className={isAnimated ? "isAnimated" : ""}>
      <Tower filter={isAnimated ? true : false}>
        <ul>
          <li>
            <img src={smoke3} alt="fumee" />
          </li>
          <li>
            <img src={smoke2} alt="fumee" />
          </li>
          <li>
            <img src={smoke1} alt="fumee" />
          </li>
        </ul>
        <img src={tower} alt="tour-usine-charbon" />
      </Tower>
      <Tower filter={isAnimated ? true : false}>
        <ul>
          <li>
            <img src={smoke4} alt="fumee" />
          </li>
          <li>
            <img src={smoke3} alt="fumee" />
          </li>
          <li>
            <img src={smoke2} alt="fumee" />
          </li>
          <li>
            <img src={smoke1} alt="fumee" />
          </li>
        </ul>
        <img src={tower} alt="tour-usine-charbon" />
      </Tower>
      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[3]?.cards[1].title}
          content={partData[3]?.cards[1].content}
          bottom="30"
          left="10"
          leftCard="-250"
          topCard="-400"
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 25%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;

  &.isAnimated {
    z-index: 10;

    ul li {
      opacity: 1;
      animation: floating 2s 0.6s alternate infinite linear;

      &:first-child {
        transition: opacity 0.2s 0.6s ease-out;
      }

      &:nth-child(2) {
        transition: opacity 0.2s 0.4s ease-out;
      }

      &:nth-child(3) {
        transition: opacity 0.2s 0.2s ease-out;
      }

      &:nth-child(4) {
        transition: opacity 0.2s ease-out;
      }
    }
  }
`;

const Tower = styled.section`
  filter: ${({ filter }) => (filter ? "grayscale(0)" : "grayscale(1)")};

  &:first-child {
    transform: translateY(14%);
  }

  &:nth-child(2) {
    transform: translateY(2%);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    li {
      opacity: 0;
      grid-column: 1;
      grid-row: 1;
    }

    img {
      width: 400%;
    }
  }
`;

export default CoalTowers;
