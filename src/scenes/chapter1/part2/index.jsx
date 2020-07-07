import React, { useEffect, useRef } from "react";
import "./style.scss";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Mineur from "../../../components/Mineur";
import Lanterns from "../../../components/Lanterns";

import mineurBG from "../../../assets/mineurs_descente.jpg";

gsap.registerPlugin(ScrollToPlugin);

const Chapter1Page2 = ({ data }) => {
  let ref = useRef([]);
  const currentRef = ref.current;

  useEffect(() => {
    currentRef["container"].addEventListener("wheel", (e) => {
      const delta = Math.sign(e.deltaY);
      if (delta === -1) {
        gsap.to(".portrait", { rotate: 20, opacity: 1, duration: 1 });
        gsap.to(".portrait", {
          duration: 1,
          delay: 1,
          yPercent: 0,
          ease: "exp",
        });
        gsap.to(window, {
          delay: 1.8,
          duration: 1,
          scrollTo: ".container",
          ease: "none",
        });
        gsap.to(".portrait", {
          filter: "grayscale(1)",
          rotate: 0,
          duration: 1,
          ease: "bounce",
          delay: 2.8,
        });
      }
    });
  });

  return (
    <div>
      <div
        className="page2__container"
        ref={(element) => {
          currentRef["container"] = element;
        }}
      >
        <img className="minorBg" src={mineurBG} alt="" />
        <Mineur partData={data}   />
        <Lanterns partData={data} />
      </div>
    </div>
  );
};

export default Chapter1Page2;
