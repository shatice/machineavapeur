import React from "react";

export default React.createContext({
  subChapter: 0,
  chapter: 1,
  data: {},
  test: {},
  chapters: [],
  isAuth: false,

  incrementPart: () => {},
  decrementPart: () => {},
  setPart: () => {},
  setData: () => {},
  setChapters: () => {},
  setAuth: () => {},
});
