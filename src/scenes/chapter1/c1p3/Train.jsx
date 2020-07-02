import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Posters from "./Posters";
import Infos from "../../../components/molecules/Infos";

const Train = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container
    className={ isAnimated ? "isAnimated" : ""}
    >
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

      <Infos 
      setIsAnimated={ setIsAnimated }
      title={ "Le charbon" }
      content={ "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      bottom="-10"
      left="10"
      leftCard="-700"
      bottomCard="-100"
      />
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

  &.isAnimated {
    img {
      filter: grayscale(0);
    }
  }

  img {
    filter: grayscale(1); 
  }


  li,
  ul {
    grid-column: 1; 
    grid-row: 1; 

    img {
      width: 100%; 
    }
  }

  .infos {
    transform: rotate(10deg);
  }
`

export default Train; 