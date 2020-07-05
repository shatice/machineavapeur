import React, { useState, useEffect, useContext } from "react";
// import "../../../styles/styles.scss";
import styled from "styled-components";

/***** COMPONENTS *****/
import CoalTowers from "./CoalTowers";
import BackgroundImage from "./BackgroundImage";
import Ecology from "./Ecology";

/***** ASSETS *****/
import bg from "../../../assets/img/chap_1/part_4/c1p4_background.jpg";
import context from "../../../store/context";

const Chap1Part4 = ({ data }) => {
  const [partData, setPartData] = useState([]);
  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
    console.log(data);
  }, [data]);

  return (
    <Container>
      <BackgroundImage partData={partData} src={bg} alt="nuages" />
      <CoalTowers partData={partData} />
      <Ecology partData={partData} />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding: 0 10% 0 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Chap1Part4;
