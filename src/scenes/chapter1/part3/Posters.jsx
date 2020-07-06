import React, { } from "react";
import styled from "styled-components";

/***** ASSETS *****/
import trainPoster1 from "../../../assets/img/chap_1/part_3/c1p3_train_poster1.png";
import trainPoster2 from "../../../assets/img/chap_1/part_3/c1p3_train1.png";

const Posters = () => {

  const trainPosters = [
    {
      src: trainPoster1, 
      alt: "poster-de-train"
    },
    {
      src: trainPoster2, 
      alt: "poster-de-train2"
    }
  ]; 

  const listPosters = trainPosters.map(( el ) =>
    <li key={ el.alt }>
      <img 
      src={ el.src } 
      alt={ el.alt }/>
    </li>
  );

  return (
    <Container>
      { listPosters }
    </Container>
  ); 
}

const Container = styled.ul `
  width: 100%;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 

  li {
    grid-column: 1; 
    grid-row: 1; 

    &:nth-child(2) {
      z-index: 2; 
    }
  } 
`

export default Posters; 