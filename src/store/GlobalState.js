import React, { useReducer } from "react";

import Context from "./context";

import {
  reducer,
  INCREMENT_PART,
  DECREMENT_PART,
  SET_PART,
  SET_DATA,
  SET_CHAPTERS,
  SET_AUTH,
} from "./reducers";

const GlobalState = ({ children, history, path }) => {
  const subChapter = 0;
  const chapter = 1;
  const chapters = [];
  const data = {};
  const isAuth = false;

  const [state, dispatch] = useReducer(reducer, {
    subChapter,
    data,
    chapter,
    history,
    path,
    chapters,
    isAuth,
  });

  const incrementPart = (state) => {
    dispatch({
      type: INCREMENT_PART,
      chapter: chapter,
      subChapter: subChapter,
    });
  };

  const decrementPart = (state) => {
    dispatch({
      type: DECREMENT_PART,
      chapter: chapter,
      subChapter: subChapter,
    });
  };

  const setPart = (chapterId, subChapterId, state) => {
    dispatch({
      type: SET_PART,
      chapterId: chapterId,
      subChapterId: subChapterId,
    });
  };

  const setData = (data, state) => {
    dispatch({
      type: SET_DATA,
      data: data,
    });
  };

  const setChapters = (chapters, state) => {
    dispatch({
      type: SET_CHAPTERS,
      chapters: chapters,
    });
  };

  const setAuth = (isAuth, state) => {
    dispatch({
      type: SET_AUTH,
      isAuth: isAuth,
    });
  };

  return (
    <Context.Provider
      value={{
        chapter: state.chapter,
        subChapter: state.subChapter,
        setData: setData,
        chapters: state.chapters,
        setChapters: setChapters,
        data: state.data,
        isAuth: state.isAuth,
        setAuth: setAuth,
        incrementPart: incrementPart,
        decrementPart: decrementPart,
        setPart: setPart,
        history: history,
        path: path,
        state: state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
