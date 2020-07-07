import React from "react";
import styled from "styled-components";

const LittleFrame = ({ src, alt, rotate, leftBfr, topBfr }) => {
  return (
    <Container className="hasNet" rotate={rotate} topBfr={topBfr} leftBfr={leftBfr}>
      <img src={ src } alt={ alt } />
    </Container>
  ); 
}

const Container = styled.div `
  width: auto;
  height: 20%; 
  object-fit: contain;
  filter: grayscale(1);
  animation: enterIn .5s ease-out; 

  img {
    width: auto; 
    height: 100%; 
    transform: rotate(${({ rotate }) => rotate}deg); 
  }
`

export default LittleFrame; 