import React, { } from "react";
import styled from "styled-components";

import ctaAduio from '../../assets/svg/cta_audio.svg';

const CtaAudio = () => {
  return (
    <AudioUI src={ ctaAduio }/>
  );
};
const AudioUI = styled.img `
  cursor: pointer; 
  position: absolute; 
  top: 2rem; 
  right: 2rem; 
  width: 2rem; 
  height: 2rem;

  &:hover {
    opacity: .2; 
  }
`

export default CtaAudio;
