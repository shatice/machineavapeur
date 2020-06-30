import React, { useState } from "react";
import styled from "styled-components";
import { chaptersList } from "../../constant";

import UseNavigation from "./use-navigation";

const NavChapters = () => {
  const [isList, setIsList] = useState(false);

  const {
    selectChapter,
    setChapter,
    selectedChapter: { label: chapterLabel },
  } = UseNavigation();

  const { chapters } = chaptersList;

  const selectChapter2 = (value) => {
    selectChapter(value);
    setChapter(value);
    setIsList(!isList);
  };

  return (
    <ChapterListContainer>
      <ChapterElem onClick={() => setIsList(!isList)}>
        {chapterLabel}
      </ChapterElem>

      { isList &&
        chapters.map((chapter) => {
          return (
            chapter.label !== chapterLabel && (
              <ChapterElem onClick={() => selectChapter2(chapter.value)}>
                { chapter.label }
              </ChapterElem>
            )
          );
      })}
    </ChapterListContainer>
  );
};

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

export default NavChapters;
