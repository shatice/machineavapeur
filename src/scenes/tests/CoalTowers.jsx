import React, { } from "react";
import styled from "styled-components";
import './style.scss'; 

const CoalTowers = () => {
  return (
    <Container filter={true}> 
      {/** TO BE LOOPED */}
      <Tower>
        <ul>
          {/* <li><img src="assets/img/chap_1/partie_4/c1p4_smoke4.png" alt="fumee"/></li> */}
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke3.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke2.png" alt="fumee"/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_smoke1.png" alt="fumee"/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt="tour-usine-charbon"/>
      </Tower>
      <Tower>
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
  z-index: 10; 
  width: 25%; 
  height: fit-content; 
  display: flex; 
  justify-content: space-between; 
  align-self: flex-end;
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")};

  /** TO BE LINKED WITH TARGET ON HOVER */
  &:hover {
    filter: grayscale(0); 

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