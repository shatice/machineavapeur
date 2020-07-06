import React, { useReducer } from "react";

import Context from "./context";

import {
  reducer,
  INCREMENT_PART,
  DECREMENT_PART,
  SET_PART,
  SET_DATA,
  SET_CHAPTERS,
} from "./reducers";

const GlobalState = ({ children, history, path }) => {
  const subChapter = 0;
  const chapter = 0;
  const chapters = [];
  const data = {};

  const [state, dispatch] = useReducer(reducer, {
    subChapter,
    data,
    chapter,
    history,
    path,
    chapters,
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

  return (
    <Context.Provider
      value={{
        chapter: state.chapter,
        subChapter: state.subChapter,
        setData: setData,
        chapters: state.chapters,
        setChapters: setChapters,
        data: state.data,
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
