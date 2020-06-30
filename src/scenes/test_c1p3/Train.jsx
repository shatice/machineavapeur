import React, { } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Posters from "./Posters";

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
        src="assets/img/chap_1/partie_3/c1p3_train1.png" 
        alt=""/>
      </li>
      <Posters/>
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

  li,
  ul {
    grid-column: 1; 
    grid-row: 1; 

    img {
      width: 100%; 
    }
  }
`

export default Train; 