import React from "react";
import "../../../styles/styles.scss";
import styled from "styled-components";

/***** COMPONENTS *****/
import RichardFrame from "./RichardFrame";
import LittleFrame from "./LittleFrame";
import TrainFrame from "./TrainFrame";

/***** ASSETS *****/
import bg from "../../../assets/img/chap_1/part_3/c1p3_background.jpg";
import frameBordeaux from "../../../assets/img/chap_1/part_3/c1p3_frame_bordeaux.png";
import frameSncf from "../../../assets/img/chap_1/part_3/c1p3_frame_sncf.png";
import sncfSound from "../../../assets/sounds/c1p3_sncf_sound.mp3"; 

const Chap1Part3 = ({ data: { parts } }) => {
  return (
    <Container>
      <RichardFrame partData={parts} topBfr="-100" />
      <LittleFrame src={frameBordeaux} alt="Tableau de Train à Bordeaux en France" rotate="-15" leftBfr="40"/>
      <LittleFrame src={frameSncf} alt="Tableau du Logo de la Sncf" rotate="2" leftBfr="45" urlSound={sncfSound}/>
      <TrainFrame partData={parts} />
    </Container>
  );
};

const Container = styled.ul`
  animation: fadeIn 2s ease-out forwards; 
  width: 100%; 
  height: 100%; 
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url('${bg}'); 
  background-size: cover; 
`;

export default Chap1Part3;
