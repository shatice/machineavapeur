import React, { } from "react";
import '../../styles/styles.scss'; 
import styled from "styled-components";

/***** COMPONENTS *****/
import BackgroundImage from '../../components/BackgroundImage'; 
import Richard from './Richard'; 
import LittleFrame from './LittleFrame'; 
import Train from './Train'; 

const Chap1Part3 = () => {
  return (
    <Container>
      <BackgroundImage 
      src="assets/img/chap_1/partie_3/c1p3_background.jpg" 
      alt=""/>
      <Richard />
      <LittleFrame 
      src="assets/img/chap_1/partie_3/c1p3_frame_bordeaux.png"
      alt=""
      rotate="10"/>
      <LittleFrame 
      src="assets/img/chap_1/partie_3/c1p3_frame_sncf.png"
      alt=""/>
      <Train />
    </Container>
  ); 
}

const Container = styled.section `
  overflow: hidden; 
  width: 100vw; 
  height: 100vh; 
  padding: 0 10%; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
`

export default Chap1Part3; 