import React, { } from "react";
import '../../../styles/styles.scss'; 
import styled from "styled-components";

/***** COMPONENTS *****/
import CoalTowers from './CoalTowers'; 
import BackgroundImage from '../../../components/atoms/BackgroundImage'; 
import Ecology from './Ecology'; 

const Chap1Part4 = () => {
  return (
    <Container>
      <BackgroundImage 
      src="assets/img/chap_1/partie_4/c1p4_background.jpg" 
      alt="nuages"/>
      <CoalTowers />
      <Ecology />
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

export default Chap1Part4; 