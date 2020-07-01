import React from "react";
import styled from "styled-components";

const TargetUI = ({ title, isActive }) => {
  return (
    <Container>
      <Target 
      isActive={ isActive }
      />
      <Text>
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

const Target = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#C09C1C" : "#ECECE9")};
  transition: background-color 0.2s ease-out;
`;

const Text = styled.h3`
  max-width: 140px; 
  margin-top: 1rem; 
  font-size: .875rem; 
  text-transform: uppercase; 
  text-align: center; 
`;

export default TargetUI;
