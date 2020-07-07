import React, { useState, useContext } from "react";
import { generatePath } from "react-router-dom";
import styled from "styled-components";

//assets
import Bullet from "../../assets/Bullet.png";
import ActiveBullet from "../../assets/BulletActif.png";

import context from "../../store/context";

const Container = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  align-self: flex-start;
  transition: transform 0.3s ease-out;
  transform: translateY(0);
  width: 90%;
  height: 100%;
  display: flex;
  align-items: space-between;
  position: relative;

  li {
    width: 100%;
    padding-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    transition: letter-spacing 0.2s ease-out;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2px;
  top: 15px;
  background-color: white;
  position: relative;
`;

const getProgressBarWidth = (totalElem, currentPart) => {
  // console.log(((0.5 + currentPart) / totalElem) * 100);
  // console.log(((0.5 + currentPart) / totalElem) * 50);
  return ((0.5 + currentPart) / totalElem) * 100;
};

const ProgressBar = styled.div`
  width: ${({ currentPart, totalElem }) =>
    getProgressBarWidth(totalElem, currentPart)}%;
  height: 100%;
  background-color: #c09c1c;
  transition: width 0.3s ease-out;
`;

const ChevronContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-4px);
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  min-height: 15px;
  margin-top: 10px;
`;

const PartIcon = styled.div`
  width: auto;
  height: auto;
  &:first-child {
    opacity: 0;
  }
`;

// const StyledLink = styled(Link)`
//   text-align: center;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 20px;
//   padding-left: 15px;
//   padding-right: 15px;
// `;

const getChevron = (isActive) => {
  if (isActive) {
    return `url(${ActiveBullet})`;
  } else return `url(${Bullet})`;
};

const Chevron = styled.div`
  width: auto;
  min-width: 5px;
  height: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2px;
  background-image: ${({ isActive }) => getChevron(isActive)};
`;

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
  const subChapters = data?.parts?.[chapterValue]?.cards;

  const changeUrl = (chapter, subChapterVal) => {
    history.replace({
      pathname: generatePath(path, {
        chapterId: Number(chapter),
        partId: Number(subChapterVal),
      }),
    });
    setPart(chapter, subChapterVal);
  };
  console.log(subChapters?.length);
  return (
    <Container
      onMouseEnter={() => setDisplayText(true)}
      onMouseLeave={() => setDisplayText(false)}
      className="labelsList"
    >
      <ProgressBarContainer>
        <ProgressBar totalElem={subChapters?.length} currentPart={subChapter} />
      </ProgressBarContainer>
      <ChevronContainer>
        <PartIcon>
          <Chevron />
        </PartIcon>
        {subChapters &&
          subChapters.map((s, i) => {
            return (
              <>
                {i === 1 ? (
                  <PartIcon>
                    <Chevron isActive={i <= subChapter} />
                  </PartIcon>
                ) : null}
                <PartIcon>
                  <Chevron isActive={i <= subChapter} />
                </PartIcon>
              </>
            );
          })}
        <PartIcon>
          <Chevron />
        </PartIcon>
      </ChevronContainer>
      {!displayText && <TextContainer></TextContainer>}
      {displayText && (
        <TextContainer>
          <li onClick={() => changeUrl(chapterValue, 0)}>Intro</li>
          {subChapters &&
            subChapters.map(({ title }, i) => {
              return (
                <li onClick={() => changeUrl(chapterValue, Number(i + 1))}>
                  {title}
                </li>
              );
            })}
          <li onClick={() => changeUrl(chapterValue, subChapters.length + 2)}>
            Outro
          </li>
        </TextContainer>
      )}
    </Container>
  );
};

export default NavParts;
