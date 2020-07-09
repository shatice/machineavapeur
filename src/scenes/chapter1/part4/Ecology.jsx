import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Water from "./Water";
import Nature from "./Nature";
import Infos from "../../../components/molecules/Infos";

const Ecology = ({ partData }) => {

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container className={isAnimated ? "isAnimated" : ""}>
      <Nature partData={partData} />
      <Water partData={partData} />

      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          title={partData[3]?.cards[2].title}
          content={partData[3]?.cards[2].content}
          bottom="30"
          left="10"
          topCard="-250"
          leftCard="-260"
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 56%;
  height: auto;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  &.isAnimated {
    .water, 
    .nature {
      filter: grayscale(0); 
    }

    .water {
      transform: translateY(-30%);
      filter: grayscale(0);

      .rocks {
        transform: translateX(0);
      }
    }
  }
`;

export default Ecology;
