import React, { } from "react";
import styled from "styled-components";

const LittleFrame = ({
  src, 
  alt, 
  rotate, 
  audio
}) => {
  return (
    <Image 
    src={ src }
    alt={ alt }
    rotate= { rotate }
    className="littleFrame"/>
  ); 
}

const Image = styled.img `
  width: auto;
  height: 20%; 
  object-fit: contain;
`

export default LittleFrame; 