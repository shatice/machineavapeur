import React from "react";

import Intro from "./scenes/Intro";
import Outro from "./scenes/Outro";

// Chapter 1
import Chapter1Part1 from "./scenes/chapter1/part1";
import Chapter1Part2 from "./scenes/chapter1/part2";
import Chapter1Part3 from "./scenes/chapter1/part3";
import Chapter1Part4 from "./scenes/chapter1/part4";

// Chapter 2
import Chapter2Part1 from "./scenes/chapter2/part1";
import Chapter2Part2 from "./scenes/chapter2/part2";
import Chapter2Part3 from "./scenes/chapter2/part3";
import Chapter2Part4 from "./scenes/chapter2/part4";

// Chapter 3
import Chapter3Part1 from "./scenes/chapter3/part1";
import Chapter3Part2 from "./scenes/chapter3/part2";
import Chapter3Part3 from "./scenes/chapter3/part3";
import Chapter3Part4 from "./scenes/chapter3/part4";

// Assets
import steamengineVideo from "./assets/videos/steamengine.mp4"; 
import aviationVideo from "./assets/videos/aviation.mp4"; 
import radioactivityVideo from "./assets/videos/radioactivity.mp4";
import steamengineImg from "./assets/img/steamengine_conclusion.jpg"; 
import aviationImg from "./assets/img/aviation_conclusion.jpg"; 
import radioactivityImg from "./assets/img/radioactivity_conclusion.jpg"; 

export const url = "https://folle-histoire-progres.herokuapp.com/api/chapters";
export const urlChapters =
  "https://folle-histoire-progres.herokuapp.com/api/chapters";

export const chaptersData = [
  {},
  {
    id: 0,
    apiUrl: "https://folle-histoire-progres.herokuapp.com/api/chapters/1",
    videoUrl: steamengineVideo, 
    conclusionImg: steamengineImg, 
    data: [
      {
        //intro
        uuid: "chapter1-subChapter0",
        elem: <Intro />,
      },
      {
        uuid: "chapter1-subChapter1",
        elem: <Chapter1Part1 />,
      },
      {
        uuid: "chapter1-subChapter2",
        elem: <Chapter1Part2 />,
      },
      {
        uuid: "chapter1-subChapter4",
        elem: <Chapter1Part4 />,
      },
      {
        uuid: "chapter1-subChapter3",
        elem: <Chapter1Part3 />,
      },
      {
        //outro
        uuid: "chapter1-subChapter5",
        elem: <Outro />,
      },
    ],
  },
  {
    id: 1,
    apiUrl: "https://folle-histoire-progres.herokuapp.com/api/chapters/2",
    videoUrl: aviationVideo,
    conclusionImg: aviationImg, 
    data: [
      {
        //intro
        uuid: "chapter2-subChapter0",
        elem: <Intro />,
      },
      {
        uuid: "chapter2-subChapter1",
        elem: <Chapter2Part1 />,
      },
      {
        uuid: "chapter2-subChapter2",
        elem: <Chapter2Part2 />,
      },
      {
        uuid: "chapter2-subChapter3",
        elem: <Chapter2Part3 />,
      },
      {
        uuid: "chapter2-subChapter4",
        elem: <Chapter2Part4 />,
      },
      {
        //outro
        uuid: "chapter2-subChapter5",
        elem: <Outro />,
      },
    ],
  },
  {
    id: 2,
    apiUrl: "https://folle-histoire-progres.herokuapp.com/api/chapters/3",
    videoUrl: radioactivityVideo,
    conclusionImg: radioactivityImg, 
    data: [
      {
        //intro
        uuid: "chapter3-subChapter0",

        elem: <Intro />,
      },
      {
        uuid: "chapter3-subChapter1",
        elem: <Chapter3Part1 />,
      },
      {
        uuid: "chapter3-subChapter2",
        elem: <Chapter3Part2 />,
      },
      {
        uuid: "chapter3-subChapter3",
        elem: <Chapter3Part3 />,
      },
      {
        uuid: "chapter3-subChapter4",
        elem: <Chapter3Part4 />,
      },
      {
        //outro
        uuid: "chapter3-subChapter5",
        elem: <Outro />,
      },
    ],
  },
];

export default chaptersData;
