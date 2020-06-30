import { useState } from "react";
import { chaptersList, chaptersData } from "../../constant";

const UseNavigation = () => {
  const [subChapter, setSubChapter] = useState(0);
  const [path, setPath] = useState("");
  const [chapter, setChapter] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState({
    label: "La machine a vapeur & le charbon1",
    value: 0,
  });

  const { chapters } = chaptersList;
  const selectChapter = (value) => {
    const newChapter = chapters.filter(
      (chapterTitle) => value === chapterTitle.value
    );
    setSelectedChapter(newChapter[0]);
  };
  const setUrlPath = (c, sC) => {
    setPath(`/chapter/?chap${c}part-${sC}`);
  };
  const setNextPart = (action) => {
    if (action === "increment") {
      if (subChapter >= chaptersData[chapter].data.length - 1) {
        setSelectedChapter(chaptersData[chapter + 1]);
        setChapter(chapter + 1);
        setSubChapter(0);
        setUrlPath(chapter, subChapter);
      } else {
        setSubChapter(subChapter + 1);
        setUrlPath(chapter, subChapter);
      }
    } else {
      if (subChapter === 0 && chapter !== 0) {
        setSelectedChapter(chaptersData[chapter - 1]);
        setChapter(chapter - 1);
        setSubChapter(3);
      } else setSubChapter(subChapter - 1);
    }
  };

  return {
    setNextPart,
    subChapter,
    selectChapter,
    selectedChapter,
    setChapter,
    chapter,
    setUrlPath,
    path,
  };
};
export default UseNavigation;
