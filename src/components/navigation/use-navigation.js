import { useState } from "react";
import { chaptersList } from "../../constant";
import chaptersData from "../../navDatas";
import { generatePath } from "react-router-dom";

const UseNavigation = (history, match) => {
  const [subChapter, setSubChapter] = useState(0);
  const [path, setPath] = useState("");
  const [chapter, setChapter] = useState(0);
  const [isChapterList, setIsChapterList] = useState(false);
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
    //increment action
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
        history.replace({
          pathname: generatePath(match.path, {
            chapterId: chapter - 1,
            partId: chaptersData[chapter - 1].data.length - 1,
          }),
        });
      } else if (chapter === 0 && subChapter !== 0) {
        setSelectedChapter(chaptersData[subChapter - 1]);
        setChapter(0);
        setSubChapter(subChapter - 1);
        history.replace({
          pathname: generatePath(match.path, {
            chapterId: 0,
            partId: subChapter - 1,
          }),
        });
      } else {
        setSubChapter(subChapter - 1);
        history.replace({
          pathname: generatePath(match.path, {
            chapterId: chapter,
            partId: subChapter - 1,
          }),
        });
      }
    }
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
    isChapterList,
    setIsChapterList,
  };
};
export default UseNavigation;
