import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Card from "../../../components/organisms/Infos";
import Target from "../../../components/Target";

const Ecology = () => {
  const [isCard, setIsCard] = useState(false);

  return (
    <Container>
      <Nature 
      src="assets/img/chap_1/partie_4/c1p4_nature.png" 
      alt="nature"
      filter="true"/>
      <Water filter="true">
        <img className="rocks" src="assets/img/chap_1/partie_4/c1p4_rocks.png" 
        alt="ocean"/>
        <img src="assets/img/chap_1/partie_4/c1p4_water.jpg" 
        alt="ocean"/>
      </Water>
      {isCard && (
        <Card
        title="Le charbon"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        width={"340"}
        bottom={"100"}
        left={"200"}
        />
      )}
      <Target
      title="Le charbon"
      bottom="30"
      left="0"
      isActive={ isCard }
      onMouseEnter={ () => setIsCard(true) }
      onMouseLeave={ () => setIsCard(false) }
      />
    </Container>
  ); 
}

const Container = styled.section `
  position: relative; 
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
const Water = styled.div `
  position: relative; 
  overflow: hidden; 
  transform: translateY(-10%); 
  transition: transform .2s ease-in-out; 
  width: 90%;
  margin: 0 auto; 
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")}; 

  &:hover {
    transform: translateY(-30%);
    filter: grayscale(0);

    .rocks {
      transform: translateX(0);
    }
  }

  .rocks {
    position: absolute; 
    width:80%; 
    top: 20%; 
    left: 0;
    transform: translateX(-100%); 
    transition: transform .4s .2s ease-out; 
  }
`

export default Ecology; 