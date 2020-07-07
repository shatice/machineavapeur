import React, { useEffect, useState } from "react";
import "../../../styles/styles.scss";
import styled from "styled-components";

/***** COMPONENTS *****/
import RichardFrame from "./RichardFrame";
import LittleFrame from "./LittleFrame";
import TrainFrame from "./TrainFrame";

/***** ASSETS *****/
import bg from "../../../assets/img/chap_1/part_3/c1p3_background.jpg";
import frameBordeaux from "../../../assets/img/chap_1/part_3/c1p3_frame_bordeaux.png";
import frameSncf from "../../../assets/img/chap_1/part_3/c1p3_frame_sncf.png";

const Chap1Part3 = ({ data }) => {
  const [partData, setPartData] = useState([]);

  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
  }, [data]);

  return (
    <Container>
      <RichardFrame partData={partData} topBfr="-100"/>
      <LittleFrame src={frameBordeaux} alt="Frame Bordeaux Train France" rotate="-15" leftBfr="40"/>
      <LittleFrame src={frameSncf} alt="Frame SNCF France" rotate="2" leftBfr="45"/>
      <TrainFrame partData={partData}/>
    </Container>
  );
};

const Container = styled.ul`
  width: 100%; 
  height: 100%; 
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url('${bg}'); 
`;

export default Chap1Part3;
