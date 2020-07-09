import React from "react";
import styled from "styled-components";
import Plane from "./Plane";
import Parachute from "./Parachute";
import WrightBrothers from "./WrightBorthers";

/***** ASSETS *****/
import bg from '../../../assets/img/chap_2/part_1/background.jpg';

const Chapter2Part1 = ({ data: { parts } = {} }) => {
  return (
    <Bg>
      <Parachute partData={parts} />
      <Plane partData={parts} />
      <WrightBrothers partData={parts} />
    </Bg>
  );
};

const Bg = styled.section`
  animation: fadeIn 2s ease-out forwards; 
  width: 100%;
  height: 100%;
  background-image: url('${bg}');
  background-size: cover;
`;

export default Chapter2Part1;
