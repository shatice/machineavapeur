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
    <ChapterListContainer onClick={() => setIsList(!isList)}>
      <h2>Tous les chapitres</h2>

      <ul>
        { isList &&
          chapters.map((chapter) => {
            return (
              chapter.label && (
                <ChapterElem onClick={() => selectChapter2(chapter.value)}>
                  { chapter.label }
                </ChapterElem>
              )
            )
        })}
      </ul>

    </ChapterListContainer>
  );
};

const ChapterListContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 

  h2 {
    width: 100px; 
    margin: 0 2rem;  
    font-size: .875rem; 
    font-weight: bold;
    text-transform: uppercase; 
    text-align: center; 
  }

  ul {
    transform: translateX(-100%); 
    width: 272px; 
    position: fixed; 
    bottom: 102px; 
    left: 0; 
    padding: 3rem 2rem; 
    background: linear-gradient(3deg, rgba(31,31,33,0.31) 0%, rgba(31,31,33,0.7) 49%, rgba(31,31,33,1) 100%);

    li {
      font-weight: bold; 
      text-transform: uppercase; 
      text-align: left; 
      padding: 1rem 0; 
    }
  }
`;

const ChapterElem = styled.li`
  display: flex;
  align-items: center;
  
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: red;
  }
`;

export default NavChapters;
