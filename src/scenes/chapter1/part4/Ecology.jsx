import React from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Water from "./Water";
import Nature from "./Nature";

const Ecology = ({ partData }) => {
  return (
  <Container>
      <Nature partData={partData} />
      <Water partData={partData} />
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
`;

export default Ecology;
