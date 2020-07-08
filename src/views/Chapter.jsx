import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import chaptersData from "../navDatas";
import { useParams, useLocation } from "react-router-dom";
import context from "../store/context";
import Fetch from "../Fetch";
import Footer from "../components/molecules/Footer";

const Layout = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
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
const NavChapter = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 22px;
  color: black;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  } = useContext(context);

  const { chapterId, partId } = useParams();
  // const [uuid, setUuid] = useState("");
  const [elem, setElem] = useState("");
  const [isScrollable, setIsScrollable] = useState(true);
  const [wheelData, setWheelData] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setPart(Number(chapterId), Number(partId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, chapterId, partId]);

  useEffect(() => {
    const uuid = `chapter${chapter}-subChapter${subChapter}`;
    setElem(
      chaptersData[chapter]?.data?.filter((data) => data.uuid === uuid)?.[0]
        ?.elem
    );
  }, [subChapter, chapter, data]);

  // const handleScroll = (e) => {
  //   console.log(e.wheelDelta);
  //   if (isScrollable) {
  //     if (e.wheelDelta > 100) {
  //       if (e.wheelDelta % 2 === 0) {
  //         console.log(e.wheelDelta);
  //         decrementPart();
  //       }
  //     } else {
  //       if (e.wheelDelta % 2 === 0) {
  //         incrementPart();
  //       }
  //     }
  //   }

  //   setWheelData(null);
  //   setIsScrollable(false);

  //   setTimeout(() => {
  //     setIsScrollable(true);
  //     setWheelData(0);
  //   }, 2000);

  // };

  // useEffect(() => {
  //   if (!isScrollable && wheelData === null) {
  //     return () => {
  //       window.removeEventListener("wheel", handleScroll);
  //     };
  //   } else {
  //     window.addEventListener("wheel", handleScroll);
  //   }
  // }, [isScrollable]);
  return (
    <Layout>
      <NavChapter>{data?.title}</NavChapter>
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
      {elem &&
        React.cloneElement(elem, {
          data: data,
        })}
      {/* <div style={{ zIndex: -1 }}>
        {chaptersData[chapter]?.data[subChapter + 1]?.elem &&
          React.cloneElement(
            chaptersData[chapter]?.data[subChapter + 1]?.elem,
            {
              data: data,
            }
          )}
      </div> */}

      <Footer />
      <Fetch url={chaptersData[chapter].apiUrl} />
    </Layout>
  );
};

export default Chapter;
