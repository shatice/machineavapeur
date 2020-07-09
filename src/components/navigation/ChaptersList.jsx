import React, { useContext } from "react";
import styled, { css } from "styled-components";

import context from "../../store/context";

const ChaptersList = ({ isList, setIsList }) => {
  const { chapter, chapters, setPart } = useContext(context);

  const listeChapitres = chapters.map((el, i) => (
    <div>
      <a></a>
      <li>
        <ChapterElem
          isActive={chapter === i + 1}
          onClick={() => {
            setIsList(!isList);
            setPart(el.id, 0);
          }}
          key={el.id}
        >
          {el.title}
        </ChapterElem>
      </li>
    </div>
  ));

  return (
    <Container>
      <ClosingCross onClick={() => setIsList(false)}></ClosingCross>
      {listeChapitres}
    </Container>
  );
};

const Container = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 8rem 2rem;
  background-color: #282928; 
  opacity: 0.9;
  /* linear-gradient(
    3deg,
    rgba(31, 31, 33, 0.31) 20%,
    rgba(31, 31, 33, 0.7) 70%,
    rgba(31, 31, 33, 1) 100% */

  );

`;

const ClosingCross = styled.a`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 32px;
  height: 32px;
  :hover {
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: white;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const ChapterElem = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: "notable";
  margin: 0 auto;
  font-size: 3rem;
  padding-top: 3.5rem;
  color: white;
  &:hover {
    color: #c09c1c;
  }
  ${"" /* ${({ isActive }) =>
    isActive &&
    css`
      border-left: 1px solid #c09c1c;
      border-left-height: 20px;
    `} */}
`;
// const ChapterElem = styled.li`
//   display: flex;
//   align-items: center;
// `;

export default ChaptersList;
