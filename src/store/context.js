import React from "react";

export default React.createContext({
  subChapter: 0,
  chapter: 0,
  data: {},
  test: {},
  chapters: [],

  incrementPart: () => {},
  decrementPart: () => {},
  setPart: () => {},
  setData: () => {},
  setChapters: () => {},
});
