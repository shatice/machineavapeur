import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import context from "../store/context";

import chaptersData from "../navDatas";

const Intro = ( ) => {
  const { data, chapter } = useContext(context);
  const { intro, title } = data;
  const video = chaptersData[chapter].videoUrl;

  console.log(data); 
  return (
    <Container>
      <video autoPlay="autoplay" loop="loop">
        <source src={video} type="video/mp4"/>
      </video>
      <h1>{title}</h1>
      <p>{intro}</p>
    </Container>
  );
};

const bgAppear = keyframes `
  from {
    background-color: rgba(0, 0, 0, 1);
  } to {
    background-color: rgba(0, 0, 0, .4);
  }
`
const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${bgAppear} 2s ease-out forwards; 

  video {
    z-index: -10; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    object-fit: cover;  
  }

  h1, 
  p {
    z-index: 2; 
    opacity: 0; 
    animation: fadeIn 2s 1.5s ease-out forwards;
    margin: 0 auto 2rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    max-width: 55%;
    text-align: center;
    line-height: 1.5;
    font-size: 0.875rem;
  }
`;

export default Intro;
