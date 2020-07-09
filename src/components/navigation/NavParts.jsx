import React, { useState, useContext } from "react";
import { generatePath } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import context from "../../store/context";

const getChevron = (isActive) => {
  if (isActive) {
    return "white";
  } else return "transparent";
};

const getProgressBarWidth = (totalElem, currentPart) => {
  return ((1 + currentPart) / (totalElem + 2)) * 100;
};

const NavParts = () => {
  const [displayText, setDisplayText] = useState(false);
  const {
    chapter: chapterValue,
    data,
    subChapter,
    setPart,
    history,
    path,
  } = useContext(context);
  const subChapters = data?.parts;

  const changeUrl = (chapter, subChapterVal) => {
    history.replace({
      pathname: generatePath(path, {
        chapterId: Number(chapter),
        partId: Number(subChapterVal),
      }),
    });
    setPart(chapter, subChapterVal);
  };
  return (
    <Container
      onMouseEnter={() => setDisplayText(true)}
      onMouseLeave={() => setDisplayText(false)}
      className="labelsList"
    >
      <ChevronContainer>
        <Chevron>
        </Chevron>
        {subChapters &&
          subChapters.map((s, i) => {
            return (
              <>
                {i === 0 ? (
                  <Chevron isActive={i >= 0} key={subChapter + i + "intro"}>
                  </Chevron>
                ) : null}
                <Chevron isActive={i < subChapter} key={subChapter + i}>
                </Chevron>
                {i === subChapters[chapterValue]?.cards.length + 1 ? (
                  <Chevron>
                  </Chevron>
                ) : null}
              </>
            );
          })}
      </ChevronContainer>
      <ProgressBarContainer>
        <ProgressBar totalElem={subChapters?.length} currentPart={subChapter} />
      </ProgressBarContainer>
      {!displayText && <TextContainer></TextContainer>}
      {displayText && data && (
        <TextContainer>
          <li onClick={() => changeUrl(chapterValue, 0)}>Intro</li>
          {subChapters &&
            subChapters.map(({ title }, i) => {
              return (
                <li
                  key={"title" + i}
                  onClick={() => changeUrl(chapterValue, Number(i + 1))}
                >
                  {title}
                </li>
              );
            })}
          <li
            key={"outro"}
            onClick={() => changeUrl(chapterValue, subChapters.length + 1)}
          >
            Outro
          </li>
        </TextContainer>
      )}
    </Container>
  );
};

const appear = keyframes`
  from {
    opacity: 0; 
  } to {
    opacity: .7; 
  }
`

const Container = styled.ul`
  position: relative;
  width: 90%;
  height: 48px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  transition: height .2s ease-out; 

  &:hover {
    height: 80px; 
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #CACACA;
`;

const ProgressBar = styled.div`
  width: ${({ currentPart, totalElem }) => getProgressBarWidth(totalElem, currentPart)}%;
  height: 100%;
  background-color: #c09c1c;
  transition: width 0.3s ease-out;
`;

const ChevronContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem; 
  display: flex;
  height: fit-content; 
  justify-content: space-between;
`;

const Chevron = styled.div` 
  width: 5px;
  height: 5px;
  background-color: ${({ isActive }) => getChevron(isActive)};
  border: 1px solid white; 
  border-radius: 50%; 
  
  &:first-child {
    opacity: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .5rem; 

  li {
    opacity: .7; 
    cursor: pointer; 
    width: 100%;
    padding: .5rem 1rem 0; 
    font-size: 0.875rem;
    text-align: center;
    transition: opacity 0.2s ease-out;
    animation: ${appear} .8s ease-out; 

    &:hover {
      opacity: 1; 
    }
  }
`;

export default NavParts;
