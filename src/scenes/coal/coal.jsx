import React from "react";
import styled from "styled-components";
import MecaElem from "../../assets/meca.png";

const CoalWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #d8d6c8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Coal = () => {
  return (
    <CoalWrapper>
      <MecaWrapper>
        <img style={{ minWidth: "100px" }} src={MecaElem} alt="meca" />
      </MecaWrapper>
    </CoalWrapper>
  );
};

export default Coal;
