import styled from "styled-components";


const TargetUI = styled.div `
  cursor: pointer;
  transition: border-color .2s ease-out; 
  width: 24px; 
  height: 24px; 
  opacity: .5; 
  border-radius: 50%;
  border: 7px solid white;
  position: absolute;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  z-index: 10;
  
  &:hover {
    border-color: #C09C1C;
  }
`

export { TargetUI }; 