import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import chaptersData from "../navDatas";
import { useParams, useLocation } from "react-router-dom";
import context from "../store/context";
import Fetch from "../Fetch";
import Footer from "../components/molecules/Footer";
import Auth from "./Auth";

const Chapter = () => {
  const {
    incrementPart,
    decrementPart,
    chapter,
    subChapter,
    setPart,
    data,
    isAuth,
  } = useContext(context);

  const { chapterId, partId } = useParams();
  const [elem, setElem] = useState("");
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

  let counter = 0;
  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);

    if (delta === 1) {
      counter++;
    } else {
      counter--;
    }

    if (counter > 50) {
      incrementPart();
      counter = 0;
    } else if (counter < -50) {
      decrementPart();
      counter = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
    /* eslint-disable */
  }, []);

  useEffect(() => {
    if (chaptersData[chapter].data[subChapter + 1]) {
      React.lazy(chaptersData[chapter].data[subChapter + 1].elem);
    }
  }, [chapter, subChapter]);

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

      {!isAuth && <Auth />}

      <Footer />
      <Fetch url={chaptersData[chapter].apiUrl} />
    </Layout>
  );
};

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

export default Chapter;
