import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

/***** ASSETS *****/
import nature from "./img/c1p4_nature.png";

const Ecology = ({ partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container className={isAnimated ? "isAnimated" : ""}>
      <img src={nature} alt="nature" />

      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[3]?.cards[2].title}
          content={partData[3]?.cards[2].content}
          bottom="30"
          left="10"
          topCard="150"
          leftCard="-250"
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  z-index: 2;
  width: 100%;
  height: auto;
  grid-column: 1;
  grid-row: 1;

  img {
    width: 100%;
    filter: grayscale(1);
  }

  &.isAnimated img {
    filter: grayscale(0);
  }
`;

export default Ecology;
