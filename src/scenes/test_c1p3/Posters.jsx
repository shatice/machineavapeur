import React, { } from "react";
import styled from "styled-components";

const Posters = () => {

  const trainPosters = [
    {
      src: "assets/img/chap_1/partie_3/c1p3_train_poster1.png", 
      alt: "poster-de-train"
    },
    {
      src: "assets/img/chap_1/partie_3/c1p3_train_poster2.png", 
      alt: "poster-de-train2"
    },
    {
      src: "assets/img/chap_1/partie_3/c1p3_train_poster3.png",
      alt: "poster-de-train3" 
    },
    {
      src: "assets/img/chap_1/partie_3/c1p3_train_poster4.png", 
      alt: "poster-de-train4"
    },
    {
      src: "assets/img/chap_1/partie_3/c1p3_train_poster5.png", 
      alt: "poster-de-train5"
    },
    {
      src: "assets/img/chap_1/partie_3/c1p3_train_poster6.png", 
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