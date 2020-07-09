import React from "react";
import styled, { keyframes } from "styled-components";

/***** ASSETS *****/
import train1 from "../../../assets/img/chap_1/part_3/c1p3_train1.png";

const Train = ({ className }) => {
  return (
    <Container className={className}>
      <img src={train1} alt="Vieux Train Canadien"/>
    </Container>
  );
};

const moving = keyframes `
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-4px)
  }
`

const Container = styled.li`
  &.isAnimated img {
    animation: ${moving} 0.5s alternate infinite linear;
  }
`;

export default Train;
