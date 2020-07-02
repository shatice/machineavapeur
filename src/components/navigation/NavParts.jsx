import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import chaptersData from "../../navDatas";
import UseNavigation from "../navigation/use-navigation";
import { useParams, generatePath } from "react-router-dom";

const NavParts = ({ history, match }) => {
  const { chapter, subChapter, setSpecificPart } = UseNavigation();
  const { chapterId, partId } = useParams();

  const subChapters = chaptersData[chapter].data;
  return (
    <Container className="labelsList">
      {subChapters.map(({ path, title }) => {
        return (
          <li>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </Container>
  );
};

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

export default NavParts;
