import React from "react";
import styled from "styled-components";

import Chap1Part1 from "./chapters/chapter1/chapter1";
import Chap1Part3 from "./scenes/test_c1p3/Chap1Part3";
import Chap1Part4 from "./scenes/test_c1p4/Chap1Part4";

const Green = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: green;
`;
const Red = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
const Blue = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;
const Orange = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: orange;
`;
export const chaptersList = {
  chapters: [
    {
      label: "La machine a vapeur & le charbon1",
      value: 0,
      subtitles: [
        "En avant l’industrialisation",
        "Du charbon et des mines",
        "A fond le train",
        "Un monde couleur charbon",
      ],
    },
    {
      label: "La machine a vapeur & le charbon2",
      value: 1,
      subtitles: [
        "En avant l’industrialisation2",
        "Du charbon et des mines2",
        "A fond le train2",
        "Un monde couleur charbon2",
      ],
    },
    {
      label: "La machine a vapeur & le charbon3",
      value: 2,
      subtitles: [
        "En avant l’industrialisation3",
        "Du charbon et des mines3",
        "A fond le train3",
        "Un monde couleur charbon3",
      ],
    },
  ],
  title: "La folle histoire du progrès",
};

export const initialMeca = [
  {
    width: "100",
    display: false,
  },
  {
    width: "200",
    display: false,
  },
  {
    width: "400",
    display: false,
  },
  {
    width: "600",
    display: false,
  },
  {
    width: "900",
    display: false,
  },
  {
    width: "1200",
    display: false,
  },
  {
    width: "1400",
    display: false,
  },
];

export const initialCoalImage = [
  {
    width: "100",
    path: 1,
    display: false,
  },
  {
    width: "200",
    path: 2,
    display: false,
  },
  {
    width: "400",
    path: 3,
    display: false,
  },
  {
    width: "600",
    path: 4,
    display: false,
  },
];

export const chaptersData = [
  {
    id: "lamachineavapeur",
    title: "La machine à vapeur",
    data: [
      { title: "Intro", path: "chapter/1-intro"},
      { title: "Partie 1", path: "chapter/1-part1", elem: <Chap1Part1 /> },
      { title: "Partie 2", path: "chapter/1-part2", elem: <Red /> },
      { title: "Partie 3", path: "chapter/1-part3", elem: <Chap1Part3 />  },
      { title: "Partie 4", path: "chapter/1-part4", elem: <Chap1Part4 />  },
      { title: "Conclusion", path: "chapter/1-conclusion"}
    ],
  },
  {
    id: "laviation",
    title: "L'aviation",
    data: [
      { title: "Intro", path: "chapter/2-intro"},
      { title: "Partie 1", path: "chapter/2-part1", elem: <Green /> },
      { title: "Partie 2", path: "chapter/2-part2", elem: <Red /> },
      { title: "Partie 3", path: "chapter/2-part3", elem: <Blue /> },
      { title: "Partie 4", path: "chapter/2-part4", elem: <Orange /> },
      { title: "Conclusion", path: "chapter/2-conclusion"}
    ],
  },
  {
    id: "lenucleaire",
    title: "Le nucléaire",
    data: [
      { title: "Intro", path: "chapter/3-intro"},
      { title: "Partie 1", path: "chapter/3-part1", elem: <Green /> },
      { title: "Partie 2", path: "chapter/3-part2", elem: <Red /> },
      { title: "Partie 3", path: "chapter/3-part3", elem: <Blue /> },
      { title: "Partie 4", path: "chapter/3-part4", elem: <Orange /> },
      { title: "Conclusion", path: "chapter/3-conclusion"}
    ],
  },
];

