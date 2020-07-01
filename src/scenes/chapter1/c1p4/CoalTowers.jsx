import React, { useState } from "react";
import styled from "styled-components";
import './style.scss'; 

/***** COMPONENTS *****/
import Infos from "../../../components/organisms/Infos";

const CoalTowers = ( ) => {

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container 
    className={ isAnimated ? "isSmoking" : ""}
    > 
      <Tower
      filter={ isAnimated ? true : false }
      >
        <ul>
          {/* <li><img src="assets/img/chap_1/partie_4/c1p4_smoke4.png" alt="fumee"/></li> */}
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke3.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke2.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke1.png" alt="fumee"/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt="tour-usine-charbon"/>
      </Tower>
      <Tower
      filter={ isAnimated ? true : false }
      >
        <ul>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke4.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke3.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke2.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke1.png" alt="fumee"/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt="tour-usine-charbon"/>
      </Tower>

      <Infos 
      setIsAnimated={ setIsAnimated }
      title={ "Le charbon" }
      content={ "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      bottom="30"
      left="10"
      leftCard="200"
      bottomCard="20"
      />
    </Container>
  ); 
}

const Container= styled.section`
  position: relative;  
  width: 25%; 
  height: fit-content; 
  display: flex; 
  justify-content: space-between; 
  align-self: flex-end;
  
  &.isSmoking {
    z-index: 10;

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