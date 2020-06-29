import React, { } from "react";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <Image 
    src="assets/img/chap_1/partie_4/c1p4_background.jpg"
    alt=""
    filter={true}
    className="backgroundImage"/>
  ); 
}

const Image = styled.img `
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