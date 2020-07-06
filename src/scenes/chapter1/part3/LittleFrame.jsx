import React, { useState } from "react";
import styled, { keyframes }from "styled-components";

const LittleFrame = ({
  src, 
  alt, 
  rotate, 
  rotateBfr, 
  leftBfr, 
  topBfr
}) => {
  const [isAnimated] = useState(false);
  return (
    <Image 
    rotate= { rotate }
    topBfr= { topBfr }
    leftBfr= { leftBfr }
    className={isAnimated ? "isAnimated hasNet" : "hasNet"}>
      <img 
      src={ src }
      alt={ alt }
      />
    </Image>
  ); 
}

const enterIn = keyframes`
  0% {
    transform: translateY(-100%);
  } 100% {
    transform: translateY(0);
  }
`

const Image = styled.div `
  width: auto;
  height: 20%; 
  object-fit: contain;
  filter: grayscale(1);
  animation: ${enterIn} .5s ease-out; 
  transition: rotate .6s .6s ease-out; 

  img {
    width: auto; 
    height: 100%; 
    transform: rotate(${({ rotate }) => rotate}deg); 
  }
`

export default LittleFrame; 