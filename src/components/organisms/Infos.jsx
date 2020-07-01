import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Target from "../Target"; 
import Card from "./Card"; 

const Infos = ({ setIsAnimated, title, content, top, bottom, right, left, topCard, bottomCard, rightCard, leftCard }) => {

  const [isCard, setIsCard] = useState(false);

  return (
    <Container
    top={ top }
    bottom={ bottom }
    right={ right }
    left={ left }
    onMouseEnter={ () => { setIsCard(true); setIsAnimated( true );  } }
    onMouseLeave={ () => { setIsCard(false); setIsAnimated( false ); } }
    >
      {/**
       * Au survol de Target, Card apparaît
       */}
      <Target 
      title={ title }
      isActive={ isCard }
      />
      {isCard && (
        <Card 
        title={ title }
        content={ content }
        topCard={ topCard }
        bottomCard={ bottomCard }
        rightCard={ rightCard }
        leftCard={ leftCard }
        />
      )}
    </Container>
  );
};

const Container = styled.article`
  cursor: pointer;
  width: fit-content; 
  position: absolute;
  top: ${({ top }) => top}%;
  bottom: ${({ bottom }) => bottom}%;
  right: ${({ right }) => right}%;
  left: ${({ left }) => left}%;
  display: flex; 
`

export default Infos;
