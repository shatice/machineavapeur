import React, { useContext } from "react";
import styled from "styled-components";
import context from "../store/context";

const Outro = () => {
  const { data, chapter, incrementPart } = useContext(context);
  const { outro } = data;

  return (
    <Container>
      <h1>Conclusion</h1>
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


  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }


  p {
    max-width: 65%;
    text-align: center;
    line-height: 1.5;
    font-size: 0.875rem;
  }

  h1,
  p {
    margin: 0 auto 2rem;
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
