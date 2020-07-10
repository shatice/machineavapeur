import React from "react";
import styled from "styled-components";

const Card = ({ title, content, topCard, bottomCard, rightCard, leftCard }) => {
  return (
    <Container
      topCard={topCard}
      bottomCard={bottomCard}
      rightCard={rightCard}
      leftCard={leftCard}
    >
      {title && <Title>{title}</Title>}
      <p>{content}</p>
    </Container>
  );
};

const Container = styled.article`
  position: absolute; 
  top: ${({ topCard }) => topCard}%;
  bottom: ${({ bottomCard }) => bottomCard}%;
  right: ${({ rightCard }) => rightCard}%;
  left: ${({ leftCard }) => leftCard}%;
  width: 40vw; 
  padding: 2rem; 
  background: linear-gradient(3deg, rgba(31,31,33,0.3071603641456583) 0%, rgba(31,31,33,0.7161239495798319) 34%, rgba(31,31,33,1) 100%);
  box-shadow: 1px 2px 10px black;
  line-height: 1.2;
  animation: fadeIn .5s ease-out;
  border-radius: 2px;
  p {
    font-size: .875rem;
  }
`;

const Title = styled.h4`
  margin-bottom: 0.7rem; 
  font-size: 2rem;
  text-transform: uppercase;
`;

export default Card;
