import React, { useContext } from "react";
import styled from "styled-components";
import context from "../store/context";

const Outro = () => {
  const { data} = useContext(context);

  return (
    <Container>
      <p>{data.outro}</p>
      <p>Continuer</p>
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

  p {
    margin: 0 auto 2rem;
    max-width: 50%;
    text-align: center;
    line-height: 1.5;
  }

  a {
    font-size: .875rem; 
    margin: 4rem auto;
    text-transform: uppercase;
    text-decoration: underline;
    transition: letter-spacing 0.2s ease-out;

    &:hover {
      letter-spacing: 0.05rem;
    }
  }
`

export default Outro;
