import React, { useEffect, useState, useContext } from "react";
import "../../../styles/styles.scss";
import styled from "styled-components";

/***** COMPONENTS *****/
import BackgroundImage from "./BackgroundImage";
import Richard from "./Richard";
import LittleFrame from "./LittleFrame";
import Train from "./Train";
import store from "../../../store";

/***** ASSETS *****/
import bg from "./img/c1p3_background.jpg";
import frameBordeaux from "./img/c1p3_frame_bordeaux.png";
import frameSncf from "./img/c1p3_frame_sncf.png";

const Chap1Part3 = () => {
  const [partData, setPartData] = useState([]);
  const { data, subChapter2 } = useContext(store);

  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
  }, [data]);

  return (
    <Container>
      <BackgroundImage src={bg} alt="" />
      <Richard partData={partData} />
      <LittleFrame src={frameBordeaux} alt="" rotate="10" />
      <LittleFrame src={frameSncf} alt="" />
      <Train partData={partData} />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Chap1Part3;
