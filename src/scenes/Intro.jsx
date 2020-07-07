import React, { useContext } from "react";
import styled from "styled-components";
import context from "../store/context";

const Intro = () => {
  const { data } = useContext(context);
  return (
    <Container>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <aside>Scroller pour découvrir</aside>
    </Container>
  );
};

const Container = styled.section `
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s ease-out;

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    max-width: 45%;
    text-align: center;
    line-height: 1.5;
  }

  h1,
  p {
    margin: 0 auto 2rem;
  }

  aside {
    margin-top: 4rem; 
    font-size: .875rem; 
    text-transform: uppercase; 
    opacity: .5; 
  }
`

export default Intro;
