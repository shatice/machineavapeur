import React from "react";
import styled, { keyframes } from "styled-components";

const TargetUI = ({ title, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <OuterTarget isActive={isActive}>
        <InnerTarget isActive={isActive}></InnerTarget>
      </OuterTarget>
      <Text isActive={isActive}>
        {title}
      </Text>
    </Container>
  );
};

const lighting = keyframes`
  from {
    background-color: rgba(0,0,0,0.4); 
  } to {
    background-color: rgba(0, 0, 0, 0.267);
  }
`

const Container = styled.div`
  width: fit-content; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  z-index: 100;
`;

const OuterTarget = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.4)")};
  transition: background-color 0.2s ease-out;
  animation: ${lighting} .5s alternate infinite ease-out;
  filter: blur(.5px); 
`;

const InnerTarget = styled.div`
  width: 12px;
  height: 12px;
  margin-top: calc(20px - ( 12px / 2 ) );
  margin-left: calc(20px - ( 12px / 2 ) );
  background-color: ${({ isActive }) => (isActive ? "transparent" : "white")};
  box-shadow: ${({ isActive }) => (isActive ? "none" : "1px 2px 5px black")};
  transform: ${({ isActive }) => (isActive ? "scale(2)" : "scale(1)")}; 
  border-radius: 50%;
  transition: all 0.2s ease-out;
`;

const Text = styled.h4`
  display: none;
  max-width: 200px; 
  margin-top: 1rem; 
  font-size: 1.1rem; 
  text-transform: uppercase; 
  text-align: center;
  color: ${({ isActive }) => (isActive ? "transparent" : "white")};
  transition: all 0.2s ease-out;
  text-shadow: 2px 2px 5px black;
  font-family: 'din_bold_condensed';
`;

export default TargetUI;
