import React from "react";
import styled from "styled-components";
import Plane from "./Plane";
import Parachute from "./Parachute";
import WrightBrothers from "./WrightBorthers";

/***** ASSETS *****/
import bg from '../../../assets/img/chap_2/part_1/background.jpg';

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url('${bg}');
  background-size: cover;
`;

const Chapter2Part1 = ({ data: { parts } = {} }) => {
  return (
    <Bg>
      <Parachute partData={parts} />
      <Plane partData={parts} />
      <WrightBrothers partData={parts} />
    </Bg>
  );
};

export default Chapter2Part1;
