import React, { useContext } from "react";
import styled from "styled-components";
import context from "../store/context";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Outro = () => {
  const { data, chapter, incrementPart } = useContext(context);
  const { outro } = data;

  return (
    <Container>
      <h1>Outro</h1>
      <br />
      <p>{outro}</p>
      {chapter !== 2 && <div onClick={incrementPart}>Continuer</div>}
    </Container>
  );
};

const Container = styled.section`
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
    font-size: 0.875rem;
    margin: 4rem auto;
    text-transform: uppercase;
    text-decoration: underline;
    transition: letter-spacing 0.2s ease-out;

    &:hover {
      letter-spacing: 0.05rem;
    }
  }
`;

export default Outro;
