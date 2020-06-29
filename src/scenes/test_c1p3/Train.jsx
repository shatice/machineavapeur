import React, { } from "react";
import styled from "styled-components";

const Train = () => {
  return (
    <Container>
      <li>
        <img 
        src="assets/img/chap_1/partie_3/c1p3_frame_orange.png" 
        alt=""/>
      </li>
      <li>
        <img 
        src="assets/img/chap_1/partie_3/c1p3_train.png" 
        alt=""/>
      </li>
      <li>
        <img 
        src="assets/img/chap_1/partie_3/c1p3_train_poster1.png"
        alt=""/>
      </li>
    </Container>
  ); 
}

const Container = styled.ul `
  width: 35%; 
  height: fit-content; 
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  transform: rotate(-10deg); 

  li {
    grid-column: 1; 
    grid-row: 1; 

    img {
      width: 100%; 
    }
  }
`

export default Train; 