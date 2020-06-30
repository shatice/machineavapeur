import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// navigation-hooks
import UseNavigation from "./use-navigation";

//constants
import { chaptersList } from "../../constant";

const NavigationWrapper = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TopBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid white;
  background-color: transparent;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242323;
  z-index: 100;
`;

const ChapterListContainer = styled.div`
  width: auto;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ChapterElem = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: red;
  }
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 45px;
  margin-left: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navigation = () => {
  const [isList, setIsList] = useState(false);
  const { chapters } = chaptersList;
  const isTopBar = true;
  const {
    subChapter,
    selectChapter,
    setChapter,
    selectedChapter: { value: chapterValue, label: chapterLabel },
  } = UseNavigation();

  const selectChapter2 = (value) => {
    selectChapter(value);
    setChapter(value);
    setIsList(!isList);
  };

  return (
    <NavigationWrapper>
      {isTopBar && (
        <TopBar>
          <ChapterListContainer>
            <ChapterElem onClick={() => setIsList(!isList)}>
              {chapterLabel}
            </ChapterElem>
            {isList &&
              chapters.map((chapter) => {
                return (
                  chapter.label !== chapterLabel && (
                    <ChapterElem onClick={() => selectChapter2(chapter.value)}>
                      {chapter.label}
                    </ChapterElem>
                  )
                );
              })}
          </ChapterListContainer>
          <div>mute button</div>
        </TopBar>
      )}

      <BottomBar>
        <LogoWrapper>Logo</LogoWrapper>
        {chapters[chapterValue].subtitles.map((subtitle) => {
          return <div style={{ color: "white" }}>{subtitle}</div>;
        })}
      </BottomBar>
    </NavigationWrapper>
  );
};
export default Navigation;
