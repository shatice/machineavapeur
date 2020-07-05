import React, { useState, useEffect, useContext } from "react";
import "../../../styles/styles.scss";
import styled from "styled-components";

/***** COMPONENTS *****/
import CoalTowers from "./CoalTowers";
import BackgroundImage from "./BackgroundImage";
import Ecology from "./Ecology";
import store from "../../../store";

/***** ASSETS *****/
import bg from "./img/c1p4_background.jpg";

const Chap1Part4 = () => {
  const [partData, setPartData] = useState([]);
  const { data } = useContext(store);
  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
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
