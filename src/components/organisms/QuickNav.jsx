import React, { useContext } from "react";
import styled from "styled-components";

import chaptersData from "../../navDatas";
import UseNavigation from "../../components/navigation/use-navigation";
import context from "../.././store/context";
import { Link } from "react-router-dom";

const Container = styled.section`
  position: absolute;
  bottom: 80px;
  width: 100%;
  height: 32px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  button {
    color: black;
  }
`;

const QuickNav = () => {
  const { chapter, subChapter, incrementPart, decrementPart } = useContext(
    context
  );

  return (
    <Container>
      <div onClick={decrementPart}>Preview</div>
      <div onClick={incrementPart}>Next</div>
    </Container>
  );
};

export default QuickNav;
