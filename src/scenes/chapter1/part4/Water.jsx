import React from "react";
import styled from "styled-components";

/***** ASSETS *****/
import water from "../../../assets/img/chap_1/part_4/c1p4_water.jpg";
import rocks from "../../../assets/img/chap_1/part_4/c1p4_rocks.png";

const Ecology = ({ partData }) => {

  return (
    <Container className="water">
      <div filter="true">
        <img className="rocks" src={rocks} alt="Rochers" />
        <img src={water} alt="Océan" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  transform: translateY(-10%);
  transition: transform 0.2s ease-in-out;
  width: 90%;
  margin: 0 auto;
  height: auto;
  grid-column: 1;
  grid-row: 1;
  filter: grayscale(1); 

  img {
    width: 100%; 
  }

  .rocks {
    position: absolute;
    width: 80%;
    top: 20%;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.4s 0.2s ease-out;
  }
`;

export default Ecology;
