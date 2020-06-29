import React, { } from "react";
import '../../styles/styles.scss'; 
import styled from "styled-components";

/***** COMPONENTS *****/
import BackgroundImage from '../../components/BackgroundImage'; 
import Richard from './Richard'; 
import Bordeaux from './Bordeaux'; 
import Sncf from './Sncf'; 
import Train from './Train'; 

const Chap1Part3 = () => {
  return (
    <Container>
      <BackgroundImage 
      src="assets/img/chap_1/partie_3/c1p3_background.jpg" 
      alt=""/>
      <Richard />
      <Bordeaux />
      <Sncf />
      <Train />
    </Container>
  ); 
}

const Container = styled.section `
  overflow: hidden; 
  width: 100vw; 
  height: 100vh; 
  padding: 0 10% 0 15%; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
`

export default Chap1Part3; 