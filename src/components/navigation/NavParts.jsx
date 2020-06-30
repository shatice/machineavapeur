import React, { } from "react";
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
        return <div style={{ color: "white" }}>{ subtitle }</div>;
      })}
    </Container>
  );
};

const Container = styled.div `
  width: 100px;
  height: 45px;
  margin-left: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default NavParts;