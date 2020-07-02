import React from "react";
import styled from "styled-components";
import { chaptersList } from "../../constant";
// import UseNavigation from "./use-navigation";

import Title from "./Title";
import ChaptersList from "./ChaptersList";

const NavChapters = () => {
  console.log(chaptersList);
  // const [isList, setIsList] = useState(false);

  return (
    <ChapterListContainer
    // onClick={() => setIsList(!isList)}
    >
      <Title text="Tous les chapitres" />
      <ChaptersList />
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
