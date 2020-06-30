import React, { } from "react";
import styled from "styled-components";

import ctaAduio from '../../assets/svg/cta_audio.svg';

const CtaAudio = () => {
  return (
    <AudioUI >
      <img 
      src={ ctaAduio } 
      alt=""/>
    </AudioUI>
  );
};
const AudioUI = styled.button `
  cursor: pointer; 
  position: absolute; 
  top: 2rem; 
  right: 2rem; 
  width: 2rem; 
  height: 2rem;

  &:hover {
    opacity: .2; 
  }

  img {
    width: 100%; 
  }
`

export default CtaAudio;
