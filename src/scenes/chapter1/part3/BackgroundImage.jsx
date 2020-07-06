import React from "react";
import styled from "styled-components";

const BackgroundImage = ({ src, alt }) => {

  return (
    <div>
      <Image 
      src={ src }
      alt={ alt }
      filter="true"/>
    </div>
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
`

export default BackgroundImage; 