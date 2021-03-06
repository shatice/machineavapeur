import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import chaptersData from "../navDatas";
import { useParams, useLocation } from "react-router-dom";
import context from "../store/context";
import Fetch from "../Fetch";
import Footer from "../components/molecules/Footer";


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
  const [elem, setElem] = useState("");
  const location = useLocation();

  const renderButtonIncrement = () => {
    if (subChapter === data?.parts?.length + 1 && chapter === 3) {
      return "";
    } else if (subChapter === data?.parts?.length + 1 && chapter !== 3)
      return "Chapitre suivante";
    else return "Partie suivante";
  };
  const renderButtonDecrement = () => {
    if (subChapter === 0 && chapter === 1) {
      return "";
    } else if (subChapter === 0 && chapter !== 1) return "Chapitre précédent";
    else return "Partie précédent";
  };

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
        <NavDecrement
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 0 && subChapter === 0) {
              return;
            } else decrementPart();
          }}
        >
          {renderButtonDecrement()}
        </NavDecrement>
        <NavIncrement
          style={{ zIndex: 1000 }}
          onClick={() => {
            if (chapter === 2 && subChapter === 3) {
              return;
            } else incrementPart();
          }}
        >
          {renderButtonIncrement()}
        </NavIncrement>
      </NavTemp>
      {elem &&
        React.cloneElement(elem, {
          data: data,
        })}
      <Footer />
      <Fetch />
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
  height: 40px;
  position: absolute;
  left: 0;
  bottom: 120px;
  font-size: 14px;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  bottom: 45%;
  text-shadow: 1px 1px 2px black;
`;

const NavDecrement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  transition: 0.6s all ease-in-out;
  position: absolute;
  left: -2rem;
  :hover {
    cursor: pointer;
  }
`;

const NavIncrement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  position: absolute;
  right: -1.3rem;
  :hover {
    cursor: pointer;
  }
  & > span {
    margin-radius: 50%;
    padding: 5px 6px;
    width: 10px;
    height: 10px; 
    background-color: white;
  }
`;


const NavChapter = styled.section`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 18px;
  color: white;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: 'din_bold';
  text-shadow: -2px -2px 15px #000000;
  text-transform: uppercase;
`;

export default Chapter;
