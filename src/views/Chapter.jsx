import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { chaptersData } from "../constant";
import { useParams } from "react-router-dom";
import UseNavigation from "../components/navigation/use-navigation";

const Layout = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  font-size: 52px;
  color: red;
`;

const NavTemp = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 12px;
  color: yellow;
  z-index: 30;
`;

const Chapter = ({ history, match }) => {
  const { setNextPart, subChapter, chapter } = UseNavigation(history, match);
  const { chapterId, partId } = useParams();
  const title = chaptersData[chapter].title;
  const subTitle = chaptersData[chapter].data[subChapter].title;
  const chapterDatas = chaptersData[chapterId].data;

  const setPart = (action) => {
    setNextPart(action);
  };
  return (
    <Layout>
      <NavTemp>
        <button
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 0 && subChapter === 0) {
              return;
            } else setPart("decrement");
          }}
        >
          LAST PART
        </button>
        {title && title}
        {subTitle && subTitle}
        <button
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 2 && subChapter === 3) {
              return;
            } else setPart("increment");
          }}
        >
          NEXT PART
        </button>
      </NavTemp>
      {chapterDatas[partId].elem &&
        React.cloneElement(chapterDatas[partId].elem)}
    </Layout>
  );
};

export default Chapter;
