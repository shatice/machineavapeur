import React from "react";
import styled from "styled-components";
import useSound from 'use-sound';

const Test = ({ urlSound }) => {

  const [play] = useSound(
    urlSound, 
    { volume: 0.05 }
  );

  return (
    <SoundButton onMouseEnter={play}/>
  );
};

const SoundButton = styled.button `
  width: 100%; 
  height: 100%; 
  position: absolute; 
  top: 0; 
  left: 0; 
`


export default Test;
