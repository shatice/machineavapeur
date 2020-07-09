import React, { } from "react";
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';
import ctaAduio from '../../assets/img/svg/cta_audio.svg';
import soundFile from '../../assets/sounds/audio_video.mp3'; 

const CtaAudio = () => {
  return (
    <AudioUI >
      <img 
      src={ ctaAduio } 
      alt="Icone Audio"/>
      <ReactAudioPlayer
        src={soundFile}
        autoPlay
        controls
        loop={true}
        volume={.015}
      />
    </AudioUI>
  );
};
const AudioUI = styled.button `
  cursor: pointer; 
  position: absolute; 
  overflow: hidden; 
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

  audio {
    position: fixed; 
    top: 2rem; 
    right: 2rem; 
    opacity: 0; 
    transform: translateX(90%); 
  }
`

export default CtaAudio;
