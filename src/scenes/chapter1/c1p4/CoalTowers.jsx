import React, { useState } from "react";
import styled from "styled-components";
import './style.scss'; 

/***** COMPONENTS *****/
import Card from "../../../components/organisms/Card";
import Target from "../../../components/Target";

const CoalTowers = () => {
  const [isCard, setIsCard] = useState(false);

  return (
    <Container className={ isCard ? "isSmoking" : ""}> 
      {isCard && (
        <Card
        title="Le charbon"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        width={"340"}
        bottom={"100"}
        left={"200"}
        />
      )}
      <Target
      title="Le charbon"
      bottom="300"
      left="0"
      isActive={ isCard }
      onMouseEnter={ () => setIsCard(true) }
      onMouseLeave={ () => setIsCard(false) }
      />
      {/** TO BE LOOPED */}
      <Tower
      filter={ isCard ? true : false }>
        <ul>
          {/* <li><img src="assets/img/chap_1/partie_4/c1p4_smoke4.png" alt="fumee"/></li> */}
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke3.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke2.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke1.png" alt="fumee"/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt="tour-usine-charbon"/>
      </Tower>
      <Tower
      filter={ isCard ? true : false }>
        <ul>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke4.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke3.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke2.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke1.png" alt="fumee"/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt="tour-usine-charbon"/>
      </Tower>
    </Container>
  ); 
}

const Container= styled.section`
  position: relative; 
  z-index: 10; 
  width: 25%; 
  height: fit-content; 
  display: flex; 
  justify-content: space-between; 
  align-self: flex-end;

  /** TO BE LINKED WITH TARGET ON HOVER */
  &.isSmoking {

    ul li {
      opacity: 1;
      animation: floating 2s .6s alternate infinite linear; 

      &:first-child {
        transition: opacity .2s .6s ease-out;
      }

      &:nth-child(2) {
        transition: opacity .2s .4s ease-out;
      }

      &:nth-child(3) {
        transition: opacity .2s .2s ease-out;
      }

      &:nth-child(4) {
        transition: opacity .2s ease-out; 
      }
    }
  }
`

const Tower = styled.section `
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
      width: 400%;;
    }
  }
`

export default CoalTowers; 