import React, { } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { chaptersList } from "../../constant";
import UseNavigation from "../navigation/use-navigation";

const NavParts = () => {
  const {
    selectedChapter: { value: chapterValue },
  } = UseNavigation();

  const { chapters } = chaptersList;

  return (
    <Container>
      {chapters[chapterValue].subtitles.map((subtitle) => {
        return <li>
          <Link>
            { subtitle }
          </Link>
          </li>;
      })}
    </Container>
  );
};

const Container = styled.ul `
  width: 70%;
  margin-top: .5rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center; 

  li {
    width: 100%; 
    padding-top: .5rem;
    font-size: .875rem; 
    text-align: center; 

    &:not(:first-child) {
      border-left: .5px solid #ECECE9; 
    }
  }
`

export default NavParts;