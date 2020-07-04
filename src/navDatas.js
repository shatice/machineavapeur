import React from "react";
import styled from "styled-components";

// Chapter 1
import Chap1Part1 from "./scenes/chapter1/chapter1";
import Chap1Part3 from "./scenes/chapter1/c1p3";
import Chap1Part4 from "./scenes/chapter1/c1p4";

// Chapter 2
import Chapter2Part1 from "./scenes/chapter2/c2p1";
import Chapter2Part2 from "./scenes/chapter2/c2p2";
import Chapter2Part3 from "./scenes/chapter2/c2p3";

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

export const url = "http://folle-histoire-progres.herokuapp.com/api/chapters";

const chaptersData = [
  {
    id: "lamachineavapeur",
    title: "La machine à vapeur",
    chapterPath: "/chapter0/part0",
    apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/1",
    data: [
      {
        title: "En avant l’industrialisation",
        path: "/chapter0/part0",
        elem: <Chap1Part1 />,
      },
      {
        title: "Du charbon et des mines",
        path: "/chapter0/part1",
        elem: <Red />,
      },
      {
        title: "A fond le train",
        path: "/chapter0/part2",
        elem: <Chap1Part3 />,
      },
      {
        title: "Un monde couleur charbon",
        path: "/chapter0/part3",
        elem: <Chap1Part4 />,
      },
    ],
  },
  {
    id: "laviation",
    title: "L'aviation",
    chapterPath: "/chapter1/part0",
    apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/2",

    data: [
      {
        title: "Partie 1",
        path: "/chapter1/part1",
        elem: <Chapter2Part1 />,
      },
      {
        title: "Partie 2",
        path: "/chapter1/part2",
        elem: <Chapter2Part2 />,
      },
      {
        title: "Partie 3",
        path: "/chapter1/part3",
        elem: <Chapter2Part3 />,
      },
      {
        title: "Partie 4",
        path: "/chapter1/part4",
        elem: <Orange />,
      },
    ],
    subtitles: [
      "En avant l’industrialisation2",
      "Du charbon et des mines2",
      "A fond le train2",
      "Un monde couleur charbon2",
    ],
  },
  {
    id: "lenucleaire",
    title: "Le nucléaire",
    chapterPath: "/chapter2/part0",
    apiUrl: "http://folle-histoire-progres.herokuapp.com/api/chapters/3",
    data: [
      { title: "Partie 1", path: "/chapter2/part1", elem: <Green /> },
      { title: "Partie 2", path: "/chapter2/part2", elem: <Red /> },
      { title: "Partie 3", path: "/chapter2/part3", elem: <Blue /> },
      { title: "Partie 4", path: "/chapter2/part4", elem: <Orange /> },
    ],
    subtitles: [
      "En avant l’industrialisation3",
      "Du charbon et des mines3",
      "A fond le train3",
      "Un monde couleur charbon3",
    ],
  },
];

export default chaptersData;
