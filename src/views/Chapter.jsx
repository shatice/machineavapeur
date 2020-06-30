import React, { useEffect } from "react";
import styled from "styled-components";
import { chaptersData } from "../constant";
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
  color: black;
  z-index: -1;
`;

const Chapter = ({ history }) => {
  const { setNextPart, subChapter, chapter } = UseNavigation();

  const title = chaptersData[chapter].title;
  const chapterDatas = chaptersData[chapter].data;
  const subTitle = chaptersData[chapter].data[subChapter].title;

  // useEffect(() => {
  //   history.replace("/chapter", "");
  //   history.push(chapterDatas[subChapter].path);
  // }, []);

  const setPart = (action) => {
    setNextPart(action);
    // history.replace("/chapter", "");
    // history.push(chapterDatas[subChapter].path);
  };
  return (
    <Layout>
      <div style={{ position: "absolute" }}>
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
      {chapterDatas[subChapter].elem &&
        React.cloneElement(chapterDatas[subChapter].elem)}
    </Layout>
  );
};

export default Chapter;
