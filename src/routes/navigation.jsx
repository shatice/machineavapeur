import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { NavigationStore } from "./NavigationStore";

//constants
import { chaptersList } from "../constant";

const NavigationWrapper = styled.section`
  width: 100vw;
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
  border: 1px solid blue;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242323;
`;

const ChapterListContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 32px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ChapterElem = styled.div`
  padding-top: 16px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: red;
  }
`;

const Navigation = (
  {
    // isTopBar
  }
) => {
  const { chaptersTitle } = chaptersList;
  const isTopBar = true;
  const {
    selectedChapter: { value: chapterValue, label: chapterLabel },
    selectChapter,
  } = useContext(NavigationStore);

  return (
    <NavigationWrapper>
      {isTopBar && (
        <TopBar>
          <ChapterElem>{chapterLabel}</ChapterElem>
          <ChapterListContainer>
            {chaptersTitle.map((chapter) => {
              return (
                <ChapterElem onClick={() => selectChapter(chapter.value)}>
                  {chapter.label}
                </ChapterElem>
              );
            })}
          </ChapterListContainer>
          <div>mute button</div>
        </TopBar>
      )}

      <BottomBar></BottomBar>
    </NavigationWrapper>
  );
};
export default Navigation;
