import React, { } from "react";
import styled from "styled-components";

const Richard = () => {
  return (
    <Container>
      <img 
      src="assets/img/chap_1/partie_3/c1p3_richard.png" 
      alt=""/>
      <img 
      src="assets/img/chap_1/partie_3/c1p3_frame_richard.png" 
      alt=""/>
      <img 
      src="assets/img/chap_1/partie_3/c1p3_coin_queen.png" 
      alt=""
      className="coin"/>
    </Container>
  ); 
}

const Container = styled.div `
  width: 40%; 
  height: fit-content; 
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  position: relative; 

  img {
    width: 100%;
    grid-column: 1; 
    grid-row: 1; 
    
    &.coin {
      width: 5%; 
      height: auto;
      position: absolute;
      bottom: 40%;
      left: 62%;  
    }
  }
`

export default Richard; 