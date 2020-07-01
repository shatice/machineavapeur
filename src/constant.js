import React from "react";
import styled from "styled-components";

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

// const test = {
//   chapters: [
//     {
//       title: "",
//       urlFetch: " http://",
//     },
//   ],
// };
export const chaptersData = [
  {
    title: "Chapitre 1",
    data: [
      { title: "Partie 1", path: "chapter/1-part1", elem: <Green /> },
      { title: "Partie 2", path: "chapter/1-part2", elem: <Red /> },
      { title: "Partie 3", path: "chapter/1-part3", elem: <Blue /> },
      { title: "Partie 4", path: "chapter/1-part4", elem: <Orange /> },
    ],
  },
  {
    title: "Chapitre 2",
    data: [
      { title: "Partie 1", path: "chapter/2-part1", elem: <Green /> },
      { title: "Partie 2", path: "chapter/2-part2", elem: <Red /> },
      { title: "Partie 3", path: "chapter/2-part3", elem: <Blue /> },
      { title: "Partie 4", path: "chapter/2-part4", elem: <Orange /> },
    ],
  },
  {
    title: "Chapitre 3",
    data: [
      { title: "Partie 1", path: "chapter/3-part1", elem: <Green /> },
      { title: "Partie 2", path: "chapter/3-part2", elem: <Red /> },
      { title: "Partie 3", path: "chapter/3-part3", elem: <Blue /> },
      { title: "Partie 4", path: "chapter/3-part4", elem: <Orange /> },
    ],
  },
];
