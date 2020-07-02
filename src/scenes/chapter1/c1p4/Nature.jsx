import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import nature from "./img/c1p4_nature.png";

const Ecology = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container
    className={ isAnimated ? "isAnimated" : ""}
    >
      <img 
      src={ nature } 
      alt="nature"
      />

      <Infos 
      setIsAnimated={ setIsAnimated }
      title={ "Sols et eaux" }
      content={ "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      bottom="30"
      left="10"
      topCard="150"
      leftCard="-250"
      />
    </Container>
  ); 
}

const Container = styled.div `
  z-index: 2; 
  width: 100%;
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 

  img {
    width: 100%; 
    filter: grayscale(1);
  }

  &.isAnimated img {
    filter: grayscale(0); 
  }
`

export default Ecology; 