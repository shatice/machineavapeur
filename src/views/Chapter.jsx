import React from "react";
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

const Chapter = () => {
  const { setNextPart, subChapter, chapter } = UseNavigation();

  const chapterDatas = chaptersData[chapter].data;
  const title = chaptersData[chapter].title;

  return (
    <Layout>
      <button onClick={() => setNextPart("decrement")}>LAST PART</button>
      {title}
      {chapterDatas[subChapter]}
      {/* {React.cloneElement(chaptersData[chapter].elem)} */}
      <button onClick={() => setNextPart("increment")}>NEXT PART</button>
    </Layout>
  );
};

export default Chapter;
