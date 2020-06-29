import React, { useContext, useState } from "react";
import { chaptersList, chaptersData } from "../../constant";

const UseNavigation = () => {
  const [subChapter, setSubChapter] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState({
    label: "La machine a vapeur & le charbon1",
    value: 0,
  });

  const selectChapter = (value) => {
    const { chapters } = chaptersList;
    const newChapter = chapters.filter(
      (chapterTitle) => value === chapterTitle.value
    );
    setSelectedChapter(newChapter[0]);
  };
  const setNextPart = (action) => {
    if (action === "increment") {
      if (subChapter >= chaptersData[chapter].data.length - 1) {
        setSelectedChapter(chaptersData[chapter + 1]);
        setChapter(chapter + 1);
        setSubChapter(0);
      } else setSubChapter(subChapter + 1);
    } else {
      if (subChapter === 0 && chapter !== 0) {
        setSelectedChapter(chaptersData[chapter - 1]);
        setChapter(chapter - 1);
        setSubChapter(3);
      } else setSubChapter(subChapter - 1);
    }
    console.log("chapter " + chapter);
    console.log("subChapter " + subChapter);
  };

  return {
    setNextPart,
    subChapter,
    selectChapter,
    selectedChapter,
    chapter,
  };
};
export default UseNavigation;
