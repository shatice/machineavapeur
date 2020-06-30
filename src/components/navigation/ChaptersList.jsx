import React, { useState } from "react";
import styled from "styled-components";
import { chaptersList } from "../../constant";
import UseNavigation from "./use-navigation";

const ChaptersList = () => {
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
    <Container>
      { !isList &&
        chapters.map((chapter) => {
          return (
            chapter.label && (
              <ChapterElem onClick={() => selectChapter2(chapter.value)}>
                { chapter.label }
              </ChapterElem>
            )
          )
      })}
    </Container>
  );
};

const Container= styled.ul`
  transform: translateX(-100%); 
  position: fixed; 
  bottom: 102px; 
  left: 0; 
  width: 272px; 
  padding: 3rem 2rem; 
  background: linear-gradient(3deg, rgba(31,31,33,0.31) 0%, rgba(31,31,33,0.7) 49%, rgba(31,31,33,1) 100%);

  li {
    font-weight: bold; 
    text-transform: uppercase; 
    text-align: left; 
    padding: 1rem 0; 
  }
`;

const ChapterElem = styled.li`
  display: flex;
  align-items: center;
`;

export default ChaptersList;
