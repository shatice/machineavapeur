import React, { } from "react";
import styled from "styled-components";

import ctaAduio from '../../assets/img/svg/cta_audio.svg';

const CtaAudio = () => {
  return (
    <AudioUI >
      <img 
      src={ ctaAduio } 
      alt="Icone Audio"/>
    </AudioUI>
  );
};
const AudioUI = styled.button `
  cursor: pointer; 
  position: absolute; 
  top: 2rem; 
  right: 2rem; 
  width: 1.4rem; 
  height: 1.4rem;
  z-index: 2; 

  &:hover {
    opacity: .2; 
  }

  img {
    width: 100%; 
  }
`

export default CtaAudio;
