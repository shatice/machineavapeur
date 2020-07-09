import React from "react";
import styled from "styled-components";
import Plane from "./Plane";
import Flower from "./Flower";

/***** ASSETS *****/
import bg from '../../../assets/img/chap_2/part_4/background.jpg';

const Chapter2Part4 = ({ data: { parts } = {} }) => {
  return (
    <Bg>
      <Plane partData={parts} />
      <Flower partData={parts} />
    </Bg>
  );
};

const Bg = styled.section`
  animation: fadeIn 2s ease-out forwards; 
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url("${bg}");
  background-size: cover;
  overflow: hidden;
`;

export default Chapter2Part4;
