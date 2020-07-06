import React from "react";
import styled from "styled-components";

/***** ASSETS *****/
import nature from "../../../assets/img/chap_1/part_4/c1p4_nature.png";

const Ecology = ({ partData }) => {
  return (
    <Container className="nature">
      <img src={nature} alt="nature" />
    </Container>
  );
};

const Container = styled.div`
  z-index: 2;
  width: 100%;
  height: auto;
  grid-column: 1;
  grid-row: 1;
  filter: grayscale(1);

  img {
    width: 100%;
  }
`;

export default Ecology;
