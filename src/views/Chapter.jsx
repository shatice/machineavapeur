import React from "react";
import styled from "styled-components";
import { chaptersData } from "../constant";
import UseNavigation from "../components/navigation/use-navigation";

const Layout = styled.section`
  position: absolute;
  left: 0;
  top: 65px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: black;
  z-index: 300;
`;

const Chapter = () => {
  const { setNextPart, subChapter, chapter } = UseNavigation();
  const chapterSelected = chaptersData;
  const chapterDatas = chapterSelected[chapter].data;
  const title = chapterSelected[chapter].title;
  console.log(chapterDatas[subChapter]);
  console.log(subChapter);

  return (
    <Layout>
      <button onClick={() => setNextPart("decrement")}>LAST PART</button>
      {title}
      {chapterDatas[subChapter]}
      <button onClick={() => setNextPart("increment")}>NEXT PART</button>
    </Layout>
  );
};

export default Chapter;
