import React from "react";
import styled from "styled-components";
import Concorde from "./Concorde";
import Desk from "./Desk";
import Jetliner from "./Jetliner";

/***** ASSETS *****/
import bg from '../../../assets/img/chap_2/part_2/background.jpg';

const Chapter2Part2 = ({ data: { parts } = {} }) => {
  return (
    <Bg>
      <Concorde partData={parts} />
      <Desk partData={parts} />
      <Jetliner partData={parts} />
    </Bg>
  );
};

const Bg = styled.section`
  animation: fadeIn 2s ease-out forwards; 
  width: 100%;
  height: 100%;
  background-image: url("${bg}");
  background-size: cover;
`;

export default Chapter2Part2;
