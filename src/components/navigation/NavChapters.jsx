import React, { useState } from "react";
import styled from "styled-components";
import { chaptersList } from "../../constant";
// import UseNavigation from "./use-navigation";

import Title from "./Title";
import ChaptersList from "./ChaptersList";

const NavChapters = () => {
  const [isList, setIsList] = useState(false);

  return (
    <ChapterListContainer>
      <Title onClick={() => setIsList(!isList)} text="Tous les chapitres" />
      {isList && <ChaptersList isList={isList} setIsList={setIsList} />}
    </ChapterListContainer>
  );
};

const ChapterListContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default NavChapters;
