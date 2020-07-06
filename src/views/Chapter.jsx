import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import chaptersData from "../navDatas";
import { useParams, useLocation } from "react-router-dom";
import context from "../store/context";
import Fetch from "../Fetch";
import Footer from "../components/molecules/Footer";
import Chapter2Part4 from "../scenes/chapter-aviation/part4";

const Layout = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  font-size: 52px;
`;

const NavTemp = styled.section`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 80px;
  font-size: 12px;
  color: black;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  padding: 3px;
  background-color: white;
`;

const Chapter = () => {
  const {
    incrementPart,
    decrementPart,
    chapter,
    subChapter,
    setPart,
    data,
    chapters,
  } = useContext(context);

  const { chapterId, partId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setPart(Number(chapterId), Number(partId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, chapterId, partId]);

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
      {chaptersData[chapter]?.data[subChapter]?.elem &&
        React.cloneElement(chaptersData[chapter]?.data[subChapter]?.elem, {
          data: data,
        })}
      <Footer />
      <Fetch url={chaptersData[chapter].apiUrl} />
    </Layout>
  );
};

export default Chapter;
