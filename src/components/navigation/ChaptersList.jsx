import React, { useContext } from "react";
import styled from "styled-components";

import context from "../../store/context";

const ChaptersList = ({ isList, setIsList }) => {
  const { chapter, chapters, setPart } = useContext(context);

  const listeChapitres = chapters.map((el, i) => (
    <div>
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
  width: 100%;
  opacity: 0.9;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(3deg, rgba(23,23,24,0.9738270308123249) 0%, rgba(14,14,14,0.9962359943977591) 52%, rgba(0,0,0,1) 100%);
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
  animation: fadeIn .5s ease-out forwards; 
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: "notable";
  margin: 0 auto;
  font-size: 3rem;
  padding-bottom: 3.5rem;
  color: white;
  &:hover {
    color: #c09c1c;
  }
`;

export default ChaptersList;
