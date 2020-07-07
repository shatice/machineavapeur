import React from "react";
import styled from "styled-components";
import Plane from "./Plane";
import Flower from "./Flower";

const Bg = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/chap_2/part_4/background.jpg");
  background-size: cover;
  overflow: hidden;
`;

const Chapter2Part4 = ({ data: { parts } = {} }) => {
  return (
    <Bg>
      <Plane partData={parts} />
      <Flower partData={parts} />
    </Bg>
  );
};

export default Chapter2Part4;
