import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import chaptersData from "../../navDatas";
import UseNavigation from "./use-navigation";

const ChaptersList = ({ isList, setIsList }) => {
  const { selectChapter } = UseNavigation();

  const listeChapitres = chaptersData.map((el) => (
    <Link to={el.chapterPath}>
      <li onClick={() => setIsList(!isList)} key={el.id}>
        {el.title}
      </li>
    </Link>
  ));

  return <Container>{listeChapitres}</Container>;
};

const Container = styled.ul`
  /* transform: translateX(-100%);  */
  position: fixed;
  bottom: 102px;
  left: 0;
  width: 272px;
  padding: 3rem 2rem;
  background: linear-gradient(
    3deg,
    rgba(31, 31, 33, 0.31) 0%,
    rgba(31, 31, 33, 0.7) 49%,
    rgba(31, 31, 33, 1) 100%
  );

  li {
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    padding: 1rem 0;
  }
`;

// const ChapterElem = styled.li`
//   display: flex;
//   align-items: center;
// `;

export default ChaptersList;
