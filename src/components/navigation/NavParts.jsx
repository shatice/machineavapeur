import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//assets
import Bullet from "../../assets/Bullet.png";
import ActiveBullet from "../../assets/BulletActif.png";

import UseNavigation from "../navigation/use-navigation";
import chaptersData from "../../navDatas";
import NavStore from "../../store";

const Container = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  align-self: flex-start;
  /* transform: translateY(300%); */
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
  // console.log(totalElem, currentPart);
  return ((0.5 + currentPart) / totalElem) * 100;
};

const ProgressBar = styled.div`
  width: ${({ currentPart, totalElem }) =>
    getProgressBarWidth(totalElem, currentPart)}%;
  height: 100%;
  background-color: #c09c1c;
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
const StyledLink = styled(Link)`
  text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

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
  /* background-color: ${({ isActive }) => getChevron(isActive)}; */
  background-image: ${({ isActive }) => getChevron(isActive)};
`;

const NavParts = ({ history }) => {
  const { chapter, subChapter } = UseNavigation();
  const [displayText, setDisplayText] = useState();
  const { subChapterContext } = useContext(NavStore);
  const progress = 50;
  const subChapters = chaptersData[chapter].data;

  return (
    <Container
      onMouseEnter={() => setDisplayText(true)}
      onMouseLeave={() => setDisplayText(false)}
      className="labelsList"
    >
      <ProgressBarContainer>
        <ProgressBar
          totalElem={subChapters.length}
          currentPart={subChapterContext}
        />
      </ProgressBarContainer>
      <ChevronContainer>
        {subChapters.map((s, i) => {
          return (
            <PartIcon>
              <Chevron isActive={i <= subChapterContext} />
            </PartIcon>
          );
        })}
      </ChevronContainer>
      {!displayText && <TextContainer></TextContainer>}
      {displayText && (
        <TextContainer>
          {subChapters.map(({ path, title }) => {
            return (
              <StyledLink key={path} to={path}>
                {title}
              </StyledLink>
            );
          })}
        </TextContainer>
      )}
    </Container>
  );
};

export default NavParts;

{
  /* <ProgressBarChevronContainer>
          {subChapters.map(({ path, title }) => {
            return (
              <SubChapterContainer>
                <Chevron />
                <li>
                  <Link to={path}>{title}</Link>
                </li>
              </SubChapterContainer>
            );
          })}
        </ProgressBarChevronContainer> */
}
