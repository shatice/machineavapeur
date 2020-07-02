import React, { } from "react";
import styled from "styled-components";

/***** ASSETS *****/
import trainPoster1 from "./img/c1p3_train_poster1.png";
import trainPoster2 from "./img/c1p3_train_poster2.png";
import trainPoster3 from "./img/c1p3_train_poster3.png";
import trainPoster4 from "./img/c1p3_train_poster4.png";
import trainPoster5 from "./img/c1p3_train_poster5.png";
import trainPoster6 from "./img/c1p3_train_poster6.png";

const Posters = () => {

  const trainPosters = [
    {
      src: trainPoster1, 
      alt: "poster-de-train"
    },
    {
      src: trainPoster2, 
      alt: "poster-de-train2"
    },
    {
      src: trainPoster3,
      alt: "poster-de-train3" 
    },
    {
      src: trainPoster4, 
      alt: "poster-de-train4"
    },
    {
      src: trainPoster5, 
      alt: "poster-de-train5"
    },
    {
      src: trainPoster6, 
      alt: "poster-de-train6"
    },
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

    img {
      width: 100%; 
    }
  } 
`

export default Posters; 