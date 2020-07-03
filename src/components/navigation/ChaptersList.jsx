import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import chaptersData from "../../navDatas";
import store from "../../store";

const ChaptersList = ({ isList, setIsList }) => {
  const { chapterContext } = useContext(store);
  console.log(chapterContext);
  const listeChapitres = chaptersData.map((el, i) => (
    <Link to={el.chapterPath}>
      <ChapterElem
        isActive={chapterContext === i}
        onClick={() => setIsList(!isList)}
        key={el.id}
      >
        {el.title}
      </ChapterElem>
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
  }
`;
const ChapterElem = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  padding: 1rem 0;
  padding-left: 1.4rem;
  ${({ isActive }) =>
    isActive &&
    css`
      border-left: 1px solid #c09c1c;
      border-left-height: 30px;
    `}
`;
// const ChapterElem = styled.li`
//   display: flex;
//   align-items: center;
// `;

export default ChaptersList;
