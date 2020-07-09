import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import context from "../store/context";

import chaptersData from "../navDatas";

const Outro = () => {
  const { 
    data, 
    chapter,
    // incrementPart 
  } = useContext(context);
  const { outro } = data;
  const bgImg = chaptersData[chapter].conclusionImg;

  return (
    <Container>
      <BackgroundImage src={bgImg} alt="Image"/>
      {/* <h1>Conclusion</h1> */}
      <p>{outro}</p>
      {/* {chapter !== 2 && <div onClick={incrementPart}>Continuer</div>} */}
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

const BackgroundImage = styled.img `
  position: absolute; 
  width: 100%; 
  height: 100%; 
  top: 0; 
  left: 0; 
  object-fit: cover; 
  z-index: -10; 
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

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    max-width: 50%;
    text-align: center;
    line-height: 2;
    font-size: .875rem;
  }

  h1,
  p {
    margin: 0 auto 2rem;
    z-index: 2; 
  }

  div {
    font-size: 0.875rem;
    margin: 2rem auto;
    color: #C09C1C; 
    text-transform: uppercase;
    text-decoration: underline;
    transition: letter-spacing 0.2s ease-out;
    cursor: pointer;

    &:hover {
      letter-spacing: 0.05rem;
    }
  }
`;

export default Outro;
