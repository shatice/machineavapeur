import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import BackgroundImage from "./BackgroundImage";
import Richard from "./Richard";
import LittleFrame from "./LittleFrame";
import Train from "./Train";

import context from "../../../store/context";

/***** ASSETS *****/
import bg from "../../../assets/img/chap_1/part_3/c1p3_background.jpg";
import frameBordeaux from "../../../assets/img/chap_1/part_3/c1p3_frame_bordeaux.png";
import frameSncf from "../../../assets/img/chap_1/part_3/c1p3_frame_sncf.png";

const Chap1Part3 = () => {
  const [partData, setPartData] = useState([]);
  const { data } = useContext(context);

  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
  }, [data]);

  return (
    <Container>
      <BackgroundImage src={bg} alt=""/>
      <Richard partData={partData} topBfr="-100"/>
      <LittleFrame 
      src={frameBordeaux} 
      alt="" 
      rotate="-15"
      leftBfr="40"/>
      <LittleFrame 
      src={frameSncf} 
      alt="" 
      rotate="2"
      leftBfr="45"/>
      <Train partData={partData}/>
    </Container>
  );
};

const Container = styled.ul`
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
