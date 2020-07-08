import React from "react";
import "./part2.scss";
import bg from "../../../assets/img/chap_3/part_2/radio_bg.jpg";
import people from "../../../assets/img/chap_3/part_2/manhattan_project_people.png";

import Embleme from "./Embleme";
import Arm from "./Arm";

const Chapter3Part2 = ({ data: { parts } = {} }) => {
  return (
    <>
      <div className="chapter-container">
        <img src={bg} alt="" className="bg" />
        <img src={people} alt="" className="people" />
        <Embleme partData={parts} />
        <Arm partData={parts} />
      </div>
    </>
  );
};

export default Chapter3Part2;
