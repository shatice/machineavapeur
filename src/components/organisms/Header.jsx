import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { chaptersList } from "../../constant";

import UseNavigation from "../navigation/use-navigation";

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

const Header = () => {
  const [isList, setIsList] = useState(false);

  const {
    subChapter,
    selectChapter,
    setChapter,
    selectedChapter: { value: chapterValue, label: chapterLabel },
  } = UseNavigation();

  const { chapters } = chaptersList;

  const selectChapter2 = (value) => {
    selectChapter(value);
    setChapter(value);
    setIsList(!isList);
  };

  return (
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
  );
};

export default Header;
