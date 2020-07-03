import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import chaptersData from "../navDatas";
import { useParams, useLocation } from "react-router-dom";
import UseNavigation from "../components/navigation/use-navigation";
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

const Chapter = ({ history, match }) => {
  const {
    setNextPart,
    subChapter,
    chapter,
    setChapter,
    setSubChapter,
  } = UseNavigation(history, match);

  const location = useLocation();
  const { chapterId, partId } = useParams();
  const { setSubChapter2, data } = useContext(NavStore);
  console.log(data);

  const title = chaptersData[chapter].title;
  const subTitle = chaptersData[chapter].data[subChapter].title;
  const chapterDatas = chaptersData[chapterId].data;

  useEffect(() => {
    setChapter(Number(chapterId));
    setSubChapter(Number(partId));
    setSubChapter2(Number(partId));
  }, [location]);

  return (
    <Layout>
      <NavTemp>
        <button
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 0 && subChapter === 0) {
              return;
            } else setNextPart("decrement");
          }}
        >
          LAST PART
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {title && title}
          {subTitle && subTitle}
        </div>
        <button
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 2 && subChapter === 3) {
              return;
            } else setNextPart("increment");
          }}
        >
          NEXT PART
        </button>
      </NavTemp>
      {chapterDatas[partId].elem &&
        React.cloneElement(chapterDatas[partId].elem)}
      <Fetch url={chaptersData[chapter].apiUrl} />
    </Layout>
  );
};

export default Chapter;
