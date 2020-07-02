import React from "react";
import styled from "styled-components";

const Card = ({ title, content, topCard, bottomCard, rightCard, leftCard }) => {
  return (
    <Container
    topCard={ topCard }
    bottomCard={ bottomCard }
    rightCard={ rightCard }
    leftCard={ leftCard }
    >
      { title && <Title>{ title }</Title> }
      <p>{ content }</p>
    </Container>
  );
};

const Container = styled.article`
  position: absolute; 
  position: absolute;
  top: ${({ topCard }) => topCard}%;
  bottom: ${({ bottomCard }) => bottomCard}%;
  right: ${({ rightCard }) => rightCard}%;
  left: ${({ leftCard }) => leftCard}%;
  width: 40vw; 
  margin-left: 2rem; 
  padding: 2rem; 
  background: linear-gradient(3deg, rgba(31,31,33,0.3071603641456583) 0%, rgba(31,31,33,0.7161239495798319) 34%, rgba(31,31,33,1) 100%);
  box-shadow: 1px 2px 10px black;

  p {
    font-size: .875rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem; 
  font-size: .875rem;
  text-transform: uppercase;
`;

export default Card;
