import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { chaptersData } from "../constant";
import { generatePath } from "react-router-dom";
import UseNavigation from "../components/navigation/use-navigation";

const Layout = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: red;
`;

const Chapter = ({ history, match: { params }, match }) => {
  const { setNextPart, subChapter, chapter } = UseNavigation(history, match);
  const title = chaptersData[chapter].title;
  const subTitle = chaptersData[chapter].data[subChapter].title;
  const { chapterId, partId } = params;
  const chapterDatas = chaptersData[chapterId].data;

  const setPart = (action) => {
    setNextPart(action);
  };
  return (
    <Layout>
      <div style={{ position: "absolute", zIndex: "1000" }}>
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
      </div>
      {chapterDatas[partId].elem &&
        React.cloneElement(chapterDatas[partId].elem)}
    </Layout>
  );
};

export default Chapter;
