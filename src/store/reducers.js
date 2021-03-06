import { generatePath } from "react-router-dom";
import chaptersData from "../navDatas";

//actions
export const INCREMENT_PART = "INCREMENT_PART";
export const DECREMENT_PART = "DECREMENT_PART";
export const SET_PART = "SET_PART";
export const SET_DATA = "SET_DATA";
export const SET_CHAPTERS = "SET_CHAPTERS";
export const SET_AUTH = "SET_AUTH";

const changeUrl = (datas) => {
  datas.history.replace({
    pathname: generatePath(datas.path, {
      chapterId: Number(datas.chapter),
      partId: Number(datas.subChapter),
    }),
  });
};

const incrementPart = (state) => {
  let { chapter, history, path, subChapter } = state;
  const subParts = chaptersData[chapter].data;

  if (subChapter >= subParts.length - 1) {
    chapter = chapter + 1;
    subChapter = 0;

    let datas = {
      chapter,
      subChapter,
      path,
      history,
    };
    changeUrl(datas);
  } else {
    subChapter = subChapter + 1;

    let datas = {
      chapter,
      subChapter,
      path,
      history,
    };
    changeUrl(datas);
  }
  return {
    ...state,
    chapter: chapter,
    subChapter: subChapter,
  };
};

const decrementPart = (state) => {
  let { chapter, history, path, subChapter } = state;

  if (subChapter === 0 && chapter !== 0) {
    chapter = chapter - 1;
    subChapter = state.data.parts[chapter].cards.length + 2;
    let datas = {
      chapter,
      subChapter,
      path,
      history,
    };
    changeUrl(datas);
  } else if (chapter <= 1 && subChapter === 0) {
    chapter = 1;
    subChapter = 0;
    let datas = {
      chapter,
      subChapter,
      path,
      history,
    };
    changeUrl(datas);
  } else {
    subChapter = subChapter - 1;
    let datas = {
      chapter,
      subChapter,
      path,
      history,
    };
    changeUrl(datas);
  }
  return { ...state, chapter: chapter, subChapter: subChapter };
};

const setPart = (chapterId, subChapterId, state) => {
  let chapter = chapterId;
  const { history, path } = state;
  let subChapter = subChapterId;
  let datas = {
    chapter,
    subChapter,
    path,
    history,
  };
  changeUrl(datas);
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

const setChapters = (chapters, state) => {
  return {
    ...state,
    chapters: chapters,
  };
};

const setAuth = (isAuth, state) => {
  return {
    ...state,
    isAuth: isAuth,
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
    case SET_CHAPTERS:
      return setChapters(action.chapters, state);
    case SET_AUTH:
      return setAuth(action.isAuth, state);
    default:
      return state;
  }
};
