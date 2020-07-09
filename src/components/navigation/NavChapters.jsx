import React, { useState } from "react";
import styled from "styled-components";

import Title from "./Title";
import ChaptersList from "./ChaptersList";

const NavChapters = () => {

  const [isList, setIsList] = useState(false);

  return (
    <ChapterListContainer>
      <Title onClick={() => setIsList(!isList)} text="Les Chapitres" />
      {isList && <ChaptersList isList={isList} setIsList={setIsList} />}
    </ChapterListContainer>
  );
};


const ChapterListContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem; 
`;

export default NavChapters;
