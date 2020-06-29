import React, { } from "react";
import styled from "styled-components";

const Target = () => {
  return (
    <TargetUI></TargetUI>
  ); 
}

const TargetUI = styled.div `
  cursor: pointer;
  transition: border-color .2s ease-out; 
  width: 24px; 
  height: 24px; 
  opacity: .5; 
  border-radius: 50%;
  border: 7px solid white;
  
  &:hover {
    border-color: #C09C1C;
  }
`

export default Target; 