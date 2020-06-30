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
  background-color: lightcoral;
  z-index: -1;
`;

const Chapter = ({ history }) => {
  const { setNextPart, subChapter, chapter, path } = UseNavigation();

  const chapterDatas = chaptersData[chapter].data;
  const title = chaptersData[chapter].title;

  useEffect(() => {
    history.replace("/chapter", "");
    history.push(chapterDatas[subChapter].path);
  }, []);

  const setPart = (action) => {
    setNextPart(action);
    history.replace("/chapter", "");
    history.push(chapterDatas[subChapter].path);
  };
  return (
    <Layout>
      <div style={{ position: "absolute" }}>
        <button style={{ zIndex: 1000 }} onClick={() => setPart("decrement")}>
          LAST PART
        </button>
        {title}
        {chapterDatas[subChapter].title}
        <button style={{ zIndex: 1000 }} onClick={() => setPart("increment")}>
          NEXT PART
        </button>
      </div>
      {React.cloneElement(chapterDatas[subChapter].elem)}
    </Layout>
  );
};

export default Chapter;
