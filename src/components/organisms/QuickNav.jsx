import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import chaptersData from "../../navDatas";
import UseNavigation from "../../components/navigation/use-navigation";
import store from "../.././store";
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
  const { setNextPart } = UseNavigation();
  const { chapterContext, subChapterContext } = useContext(store);

  const incrementPath =
    chaptersData[chapterContext].data[subChapterContext + 1].path;
  const decrementPath =
    chaptersData[chapterContext].data[subChapterContext + 1].path;
  return (
    <Container>
      <Link to={incrementPath}>Preview</Link>
      <Link to={decrementPath}>Next</Link>
    </Container>
  );
};

export default QuickNav;
