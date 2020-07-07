import React from "react";
import styled from "styled-components";
import Concorde from "./Concorde";
import Desk from "./Desk";
import Jetliner from "./Jetliner";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/chap_2/part_2/background.jpg");
  background-size: cover;
`;

const Chapter2Part2 = ({ data: { parts } = {} }) => {
  return (
    <Bg>
      <Concorde partData={parts} />
      <Desk partData={parts} />
      <Jetliner partData={parts} />
    </Bg>
  );
};

export default Chapter2Part2;
