import { useState, useEffect } from "react";
import { chaptersList } from "../../constant";
import chaptersData from "../../navDatas";
import { generatePath, useParams } from "react-router-dom";

const UseNavigation = (history, match) => {
  console.log(history);
  const [subChapter, setSubChapter] = useState(0);
  const [path, setPath] = useState("");
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

  const setUrlPath = (c, sC) => {
    setPath(`/chapter/?chap${c}part-${sC}`);
  };

  const setNextPart = (action) => {
    if (action === "increment") {
      if (subChapter >= chaptersData[chapter].data.length - 1) {
        history.replace({
          pathname: generatePath(match.path, {
            chapterId: Number(chapter + 1),
            partId: 0,
          }),
        });
        setSelectedChapter(chaptersData[chapter + 1]);
        setChapter(chapter + 1);
        setSubChapter(0);
        setUrlPath(chapter, subChapter);
      } else {
        history.replace({
          pathname: generatePath(match.path, {
            chapterId: Number(chapter),
            partId: Number(subChapter + 1),
          }),
        });
        setSubChapter(subChapter + 1);
        setUrlPath(chapter, subChapter);
      }
    } else {
      if (subChapter === 0 && chapter !== 0) {
        history.replace({
          pathname: generatePath(match.path, {
            chapterId: Number(chapter),
            partId: Number(subChapter + 1),
          }),
        });
        setSelectedChapter(chaptersData[chapter - 1]);
        setChapter(chapter - 1);
        setSubChapter(3);
      } else setSubChapter(subChapter - 1);
    }
  };

  const setSpecificPart = (chapter, part) => {
    console.log(history);
    history.replace({
      pathname: generatePath(match.path, {
        chapterId: Number(chapter),
        partId: Number(part),
      }),
    });
  };

  return {
    setNextPart,
    subChapter,
    setSubChapter,
    selectChapter,
    selectedChapter,
    setChapter,
    chapter,
    setUrlPath,
    path,
    setSpecificPart,
  };
};
export default UseNavigation;
