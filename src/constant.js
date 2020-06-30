import React from "react";
import Coal from "./scenes/coal/coal.jsx";

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

export const chaptersData = [
  {
    title: "Chapitre 1",
    data: ["Partie 1", "Partie 2", "Partie 3", "Partie 4"],
    elem: <Coal />,
  },
  {
    title: "Chapitre 2",
    data: ["Partie 1", "Partie 2", "Partie 3", "Partie 4"],
    elem: <Coal />,
  },
  {
    title: "Chapitre 3",
    data: ["Partie 1", "Partie 2", "Partie 3", "Partie 4"],
    elem: <Coal />,
  },
];
