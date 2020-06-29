import React, { } from "react";
import styled from "styled-components";

const CoalTowers = () => {

  return (
    <TowersContainer
    className="coalTowers"
    filter={true}> 
      <Tower>
        <ul>
          {/* <li><img src="assets/img/chap_1/partie_4/c1p4_cloud4.png" alt=""/></li> */}
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud3.png" alt=""/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud2.png" alt=""/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud1.png" alt=""/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt=""/>
      </Tower>
      <Tower>
        <ul>
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud4.png" alt=""/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud3.png" alt=""/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud2.png" alt=""/></li>
          <li><img src="assets/img/chap_1/partie_4/c1p4_cloud1.png" alt=""/></li>
        </ul>
        <img src="assets/img/chap_1/partie_4/c1p4_tower.png" alt=""/>
      </Tower>
    </TowersContainer>
  ); 
}

const TowersContainer= styled.section`
  z-index: 10; 
  width: 25%; 
  height: fit-content; 
  display: flex; 
  justify-content: space-between; 
  align-self: flex-end;
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")};

  &:hover {
    filter: grayscale(0); 
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
      grid-column: 1;
      grid-row: 1;
    }

    img {
      width: 400%;;
    }
  }
`

export default CoalTowers; 