import React, { } from "react";
import styled from "styled-components";

const BackgroundImage = ({
  src, 
  alt
}) => {
  return (
    <Image 
    src={ src }
    alt={ alt }
    filter={true}/>
  ); 
}

const Image = styled.img `
  z-index: -1; 
  width: 100%; 
  height: 100%; 
  position: absolute; 
  top: 0; 
  left: 0; 
  object-fit: cover; 
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")}; 

  &:hover {
    filter: grayscale(0); 
  }
`

export default BackgroundImage; 