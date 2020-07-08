import React from "react";
import "./style.scss";
import Mineur from "./Mineur";
import Lanterns from "./Lanterns";

import mineurBG from "../../../assets/img/chap_1/part_2/mineurs_descente.jpg";


const Chapter1Part2 = ({ data: { parts } = {} }) => {

  return (
    <div>
      <div
        className="page2__container"
      >
        <img className="minorBg" src={mineurBG} alt="" />
        <Mineur partData={parts} />
        <Lanterns partData={parts} />
      </div>
    </div>
  );
};

export default Chapter1Part2;
