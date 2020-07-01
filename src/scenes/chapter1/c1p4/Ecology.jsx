import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/organisms/Infos";
import Water from "./Water";
import Nature from "./Nature";

const Ecology = () => {

  return (
    <Container>
      <Nature />
      <Water />
    </Container>
  ); 
}

const Container = styled.section `
  position: relative; 
  width: 56%; 
  height: auto; 
  align-self: center;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
`

export default Ecology; 