import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import chaptersData from "../../navDatas";
import UseNavigation from "../navigation/use-navigation";
import NavStore from "../../store";

const Container = styled.ul`
  width: 70%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  align-self: flex-start;
  transform: translateY(300%);
  transition: transform 0.3s ease-out;

  li {
    width: 100%;
    padding-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    transition: letter-spacing 0.2s ease-out;
  }
`;
const TimelineContainer = styled.div`
  width: 90%;
  height: 50%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  position: relative;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2px;
  top: 20px;
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
  background-color: yellow;
`;

const Chevron = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: orange;
`;

const ChevronContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

// const PartContainer = styled.div`
//   display: flex;
// `;

const PartIcon = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  margin-bottom: 10px;
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

  /* padding-left: 20px;
  border-left: 0.5px solid #ecece9; */
`;

const NavParts = ({ history }) => {
  const { chapter, subChapter } = UseNavigation();
  const { subChapter2 } = useContext(NavStore);
  const progress = 50;
  const subChapters = chaptersData[chapter].data;

  const chevrons = () => {
    const arr = [];
    for (let i = 0; i < subChapters.length + 1; i++) {
      arr.push(<PartIcon />);
    }
    return arr;
  };
  console.log(subChapter2);
  // useEffect(() => {
  // }, [location]);
  // console.log(subChapter2);

  return (
    <Container className="labelsList">
      <ProgressBarContainer>
        <ProgressBar totalElem={subChapters.length} currentPart={subChapter2} />
      </ProgressBarContainer>
      <ChevronContainer>
        {chevrons().map((c) => {
          return c;
        })}
      </ChevronContainer>
      <TextContainer>
        {subChapters.map(({ path, title }) => {
          return <StyledLink to={path}>{title}</StyledLink>;
        })}
      </TextContainer>
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
