import { generatePath } from "react-router-dom";
import chaptersData from "../navDatas";
export const INCREMENT_PART = "INCREMENT_PART";
export const DECREMENT_PART = "DECREMENT_PART";
export const SET_PART = "SET_PART";
export const SET_DATA = "SET_DATA";

const incrementPart = (state) => {
  let chapter = state.chapter;
  let history = state.history;
  let path = state.path;
  let subChapter = state.subChapter;
  const subParts = chaptersData[chapter].data;

  if (subChapter >= subParts.length - 1) {
    history.replace({
      pathname: generatePath(path, {
        chapterId: Number(chapter + 1),
        partId: 0,
      }),
    });
    chapter = chapter + 1;
    subChapter = 0;
  } else {
    history.replace({
      pathname: generatePath(path, {
        chapterId: Number(chapter),
        partId: Number(subChapter + 1),
      }),
    });
    chapter = chapter;
    subChapter = subChapter + 1;
  }
  return {
    ...state,
    chapter: chapter,
    subChapter: subChapter,
  };
};

const decrementPart = (state) => {
  let chapter = state.chapter;
  let history = state.history;
  let path = state.path;
  let subChapter = state.subChapter;
  const subParts = chaptersData[chapter].data;

  if (subChapter === 0 && chapter !== 0) {
    history.replace({
      pathname: generatePath(path, {
        chapterId: Number(chapter),
        partId: Number(subChapter + 1),
      }),
    });
    chapter = chapter - 1;
    subChapter = subChapter = 3;
    history.replace({
      pathname: generatePath(path, {
        chapterId: chapter - 1,
        partId: chaptersData[chapter - 1].data.length - 1,
      }),
    });
  } else if (chapter === 0 && subChapter !== 0) {
    chapter = 0;
    subChapter = subChapter - 1;
    history.replace({
      pathname: generatePath(path, {
        chapterId: 0,
        partId: subChapter - 1,
      }),
    });
  } else {
    subChapter = subChapter - 1;
    history.replace({
      pathname: generatePath(path, {
        chapterId: chapter,
        partId: subChapter - 1,
      }),
    });
  }
  return { ...state, chapter: chapter, subChapter: subChapter };
};

const setPart = (chapterId, subChapterId, state) => {
  // console.log(chapterId, subChapterId);
  return {
    ...state,
    chapter: chapterId,
    subChapter: subChapterId,
  };
};

const setData = (data, state) => {
  return {
    ...state,
    data: data,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_PART:
      return incrementPart(state);
    case DECREMENT_PART:
      return decrementPart(state);
    case SET_PART:
      return setPart(action.chapterId, action.subChapterId, state);
    case SET_DATA:
      return setData(action.data, state);
    default:
      return state;
  }
};
