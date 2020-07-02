import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Target from "../organisms/Target"; 
import Card from "../organisms/Card"; 

const Infos = ({ setIsAnimated, title, content, top, bottom, right, left, topCard, bottomCard, rightCard, leftCard }) => {

  const [isCard, setIsCard] = useState(false);

  return (
    <Container
    top={ top }
    bottom={ bottom }
    right={ right }
    left={ left }
    className="infos"
    >
      {/**
       * Au survol de Target, Card apparaît
       */}
      <Target 
      title={ title }
      isActive={ isCard }
      onMouseEnter={ () => { setIsCard(true); setIsAnimated( true );  } }
      onMouseLeave={ () => { setIsCard(false); setIsAnimated( false ); } }
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
