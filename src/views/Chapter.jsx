import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import chaptersData from "../navDatas";
import { useParams, useLocation } from "react-router-dom";
import context from "../store/context";
import Fetch from "../Fetch";
import NavStore from "../store";

const Layout = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  font-size: 52px;
`;

const NavTemp = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 12px;
  color: black;
  z-index: 30;
  background-color: white;
  padding: 10px;
`;

const Chapter = () => {
  const {
    incrementPart,
    decrementPart,
    chapter,
    subChapter,
    setPart,
  } = useContext(context);

  const { chapterId, partId } = useParams();
  const location = useLocation();
  console.log(chapter, subChapter);
  const chapterDatas = chaptersData[chapterId].data;
  useEffect(() => {
    setPart(chapterId, partId);
  }, [location]);

  return (
    <Layout>
      <NavTemp>
        <button
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 0 && subChapter === 0) {
              return;
            } else decrementPart();
          }}
        >
          LAST PART
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* {title && title}
          {subTitle && subTitle} */}
        </div>
        <button
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 2 && subChapter === 3) {
              return;
            } else incrementPart();
          }}
        >
          NEXT PART
        </button>
      </NavTemp>
      {chapterDatas[subChapter].elem &&
        React.cloneElement(chapterDatas[subChapter].elem)}
      <Fetch url={chaptersData[chapter].apiUrl} />
    </Layout>
  );
};

export default Chapter;
