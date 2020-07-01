import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/organisms/Infos";

const Ecology = () => {
  return (
    <Water filter="true">
      <img className="rocks" src="assets/img/chap_1/partie_4/c1p4_rocks.png" 
      alt="ocean"/>
      <img src="assets/img/chap_1/partie_4/c1p4_water.jpg" 
      alt="ocean"/>
    </Water>
  ); 
}

const Water = styled.div `
  position: relative; 
  overflow: hidden; 
  transform: translateY(-10%); 
  transition: transform .2s ease-in-out; 
  width: 90%;
  margin: 0 auto; 
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")}; 

  &:hover {
    transform: translateY(-30%);
    filter: grayscale(0);

    .rocks {
      transform: translateX(0);
    }
  }

  .rocks {
    position: absolute; 
    width:80%; 
    top: 20%; 
    left: 0;
    transform: translateX(-100%); 
    transition: transform .4s .2s ease-out; 
  }
`

export default Ecology; 