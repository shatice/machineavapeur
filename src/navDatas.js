import React from "react";

import Intro from "./scenes/Intro";
import Outro from "./scenes/Outro";

// Chapter 1
import Chapter1Part1 from "./scenes/chapter1/part1";
import Chapter1Part2 from "./scenes/chapter1/part1";
import Chapter1Part3 from "./scenes/chapter1/part3";
import Chapter1Part4 from "./scenes/chapter1/part4";

// Chapter 2
import Chapter2Part1 from "./scenes/chapter-aviation/part1";
import Chapter2Part2 from "./scenes/chapter-aviation/part2";
import Chapter2Part3 from "./scenes/chapter-aviation/part3";
import Chapter2Part4 from "./scenes/chapter-aviation/part4";

// Chapter 3
import Chapter3Part1 from "./scenes/chapter3/c3p1";
import Chapter3Part2 from "./scenes/chapter3/c3p2";
import Chapter3Part3 from "./scenes/chapter3/c3p3";

export const url = "http://folle-histoire-progres.herokuapp.com/api/chapters";
export const urlChapters =
  "http://folle-histoire-progres.herokuapp.com/api/chapters";

export const chaptersData = [
  {
    id: 0,
    apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/1",
    data: [
      {
        //intro
        idApi: 0,
        elem: <Intro />,
      },
      {
        idApi: 1,
        elem: <Chapter1Part1 />,
      },
      {
        idApi: 1,
        elem: <Chapter1Part2 />,
      },
      {
        idApi: 2,
        elem: <Chapter1Part3 />,
      },
      {
        idApi: 2,
        elem: <Chapter1Part4 />,
      },
      {
        //outro
        idApi: 0,
        elem: <Outro />,
      },
    ],
  },
  {
    id: 1,
    apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/2",
    data: [
      {
        //intro
        idApi: 0,
        elem: <Intro />,
      },
      {
        idApi: 1,
        elem: <Chapter2Part1 />,
      },
      {
        idApi: 1,
        elem: <Chapter2Part2 />,
      },
      {
        idApi: 1,
        elem: <Chapter2Part4 />,
      },
      {
        //outro
        idApi: 0,
        elem: <Outro />,
      },
    ],
  },
  {
    id: 2,
    apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/2",
    data: [
      {
        //intro
        idApi: 0,
        elem: <Intro />,
      },
      {
        idApi: 1,
        elem: <Chapter3Part1 />,
      },
      {
        idApi: 1,
        elem: <Chapter3Part2 />,
      },
      {
        idApi: 2,
        elem: <Chapter3Part3 />,
      },
      {
        idApi: 3,
        elem: <Chapter3Part1 />,
      },
      {
        //outro
        idApi: 0,
        elem: <Outro />,
      },
    ],
  },
];

// export const chaptersDataTitles = [
//   {
//     id: "lamachineavapeur",
//     title: "La machine à vapeur",
//     chapterPath: "/chapter0/part0",
//     apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/1",
//     data: [
//       {
//         title: "En avant l’industrialisation",
//         path: "/chapter0/part0",
//         elem: <Chap1Part1 />,
//       },
//       {
//         title: "Du charbon et des mines",
//         path: "/chapter0/part1",
//         elem: <Chap1Part2 />,
//       },
//       {
//         title: "A fond le train",
//         path: "/chapter0/part2",
//         elem: <Chap1Part3 />,
//       },
//       {
//         title: "Un monde couleur charbon",
//         path: "/chapter0/part3",
//         elem: <Chap1Part4 />,
//       },
//     ],
//   },
//   {
//     id: "laviation",
//     title: "L'aviation",
//     chapterPath: "/chapter1/part0",
//     apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/2",
//     data: [
//       {
//         title: "Partie 1",
//         path: "/chapter1/part1",
//         elem: <Chapter2Part1 />,
//       },
//       {
//         title: "Partie 2",
//         path: "/chapter1/part2",
//         elem: <Chapter2Part2 />,
//       },
//       {
//         title: "Partie 3",
//         path: "/chapter1/part3",
//         elem: <Chapter2Part3 />,
//       },
//       {
//         title: "Partie 4",
//         path: "/chapter1/part4",
//         elem: <Orange />,
//       },
//     ],
//     subtitles: [
//       "En avant l’industrialisation2",
//       "Du charbon et des mines2",
//       "A fond le train2",
//       "Un monde couleur charbon2",
//     ],
//   },
//   {
//     id: "lenucleaire",
//     title: "Le nucléaire",
//     chapterPath: "/chapter2/part0",
//     apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/3",
//     data: [
//       { title: "Partie 1", path: "/chapter2/part1", elem: <Chapter3Part1 /> },
//       { title: "Partie 2", path: "/chapter2/part2", elem: <Chapter3Part2 /> },
//       { title: "Partie 3", path: "/chapter2/part3", elem: <Chapter3Part3 /> },
//       { title: "Partie 4", path: "/chapter2/part4", elem: <Orange /> },
//     ],
//     subtitles: [
//       "En avant l’industrialisation3",
//       "Du charbon et des mines3",
//       "A fond le train3",
//       "Un monde couleur charbon3",
//     ],
//   },
// ];

export default chaptersData;
