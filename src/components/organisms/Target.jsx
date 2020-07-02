import React from "react";
import styled from "styled-components";

const TargetUI = ({ title, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <OuterTarget isActive={ isActive }>
        <InnerTarget isActive={ isActive }></InnerTarget>
      </OuterTarget>
      <Text isActive={ isActive }>
        {title}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-start; 
`;

const OuterTarget = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "rgba(0,0,0,0.4)" : "transparent")};
  transition: background-color 0.2s ease-out;
`;

const InnerTarget = styled.div`
  width: 13px;
  height: 13px;
  margin-top: calc(20px - ( 13px / 2 ) );
  margin-left: calc(20px - ( 13px / 2 ) );
  background-color: ${({ isActive }) => (isActive ? "transparent" : "#C09C1C")};
  box-shadow: ${({ isActive }) => (isActive ? "none" : "1px 2px 5px black")};
  transform: ${({ isActive }) => (isActive ? "scale(2)" : "scale(1)")}; 
  border-radius: 50%;
  transition: all 0.2s ease-out;
`;

const Text = styled.h3`
  max-width: 113px; 
  margin-top: 1rem; 
  font-size: .875rem; 
  text-transform: uppercase; 
  text-align: center;
  color: ${({ isActive }) => (isActive ? "transparent" : "white")};
  transition: all 0.2s ease-out;
`;

export default TargetUI;
