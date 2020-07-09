import React, { useEffect, useRef } from "react";
import "./style.scss";
import { gsap } from "gsap";

//components
import Paper from "./Paper";
import James from "./James";
import Portrait2 from "./Portrait2";

//assets
import portrait from "../../../assets/img/chap_1/part_1/portrait.png";
import bg from "../../../assets/img/chap_1/part_1/bgChapter1.jpg";
import GlobalState from "../../../store/GlobalState";

const Chapter1Part1 = ({ data: { parts } = {} }) => {
  let ref = useRef([]);
  const currentRef = ref.current;

  useEffect(() => {
    var tl = gsap.timeline({ paused: true });
    tl.to(".portrait", { filter: "grayscale(0)", rotate: 20, duration: 0.5, ease: "bounce" });
    tl.to(".portrait", { y: "100vh" })

    currentRef["container"].addEventListener("wheel", (e) => {
      const delta = Math.sign(e.deltaY);
      delta === 1 ? tl.play() : tl.reverse();
    });
  });

  return (
    <GlobalState className="globalStateContainer">
      <div>
        <div
          className="container"
          ref={(element) => {
            currentRef["container"] = element;
          }}
        >
          <img className="bg" src={bg} alt="Tableau Peinture" />
          <img className="portrait" src={portrait} alt="Médaillon Anglais" />
          <Paper partData={parts} />
          <James partData={parts} />
          <Portrait2 partData={parts} />
        </div>
      </div>
    </GlobalState>
  );
};

export default Chapter1Part1;
