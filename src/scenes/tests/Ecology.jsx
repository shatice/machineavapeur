import React, { } from "react";
import styled from "styled-components";

const Ecology = () => {
  return (
    <Container className="ecology">
      <Nature 
      src="assets/img/chap_1/partie_4/c1p4_nature.png" 
      alt=""
      filter={true}/>
      <Water 
      src="assets/img/chap_1/partie_4/c1p4_water.jpg" 
      alt=""
      filter={true}/>
    </Container>
  ); 
}

const Container = styled.section `
  width: 56%; 
  height: auto; 
  align-self: center;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
`
const Nature = styled.img `
  z-index: 2; 
  width: 100%;
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")};

  &:hover {
    filter: grayscale(0); 
  }
`
const Water = styled.img `
  transform: translateY(-10%); 
  transition: transform .2s ease-in-out; 
  width: 90%;
  margin: 0 auto; 
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")}; 

  &:hover {
    transform: translateY(-50%);
    filter: grayscale(0);
  }
`

export default Ecology; 