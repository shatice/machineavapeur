import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import chaptersData from "../../navDatas";
import UseNavigation from "../navigation/use-navigation";

const Container = styled.ul`
  width: 70%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  transform: translateY(300%);
  transition: transform 0.3s ease-out;

  li {
    width: 100%;
    padding-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    transition: letter-spacing 0.2s ease-out;

    &:not(:first-child) {
      border-left: 0.5px solid #ecece9;
    }

    &:hover {
      letter-spacing: 0.01rem;
    }
  }
`;
const TimelineContainer = styled.div`
  width: 100%;
  height: 50%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const ProgressBarChevronContainer = styled.div`
  width: 90%;
  height: 10px;
  margin-bottom: 8px;
  padding-left: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProgressBarContainer = styled.div`
  width: 90%;
  height: 2px;
  background-color: white;
  position: relative;
`;
const ProgressBar = styled.div`
  width: 50%;
  height: 100%;
  background-color: yellow;
  position: absolute;
  left: 0;
  top: 0;
`;
const Chevron = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: orange;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 50%;
  /* border: 1px solid blue; */
`;

const NavParts = () => {
  const { chapter } = UseNavigation();

  const subChapters = chaptersData[chapter].data;

  return (
    <Container className="labelsList">
      <TimelineContainer>
        <ProgressBarChevronContainer>
          <Chevron />
          <Chevron />
          <Chevron />
          <Chevron />
        </ProgressBarChevronContainer>
        <ProgressBarContainer>
          <ProgressBar />
        </ProgressBarContainer>
      </TimelineContainer>
      <TextContainer></TextContainer>
      {subChapters.map(({ path, title }) => {
        return (
          <>
            {/* <li>
              <Link to={path}>{title}</Link>
            </li> */}
          </>
        );
      })}
    </Container>
  );
};

export default NavParts;
