import React, { useEffect } from "react";
import './style.scss'; 
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Mineur from "../../../components/Mineur";
import mineurBG from "../../../assets/mineurs_descente.jpg";

import Lanterns from "../../../components/Lanterns";

gsap.registerPlugin(ScrollToPlugin);

const Chapter1Page2 = ({ partData }) => {
  useEffect(() => {
    document
      .querySelector(".page2__container")
      .addEventListener("wheel", (e) => {
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
  }, []);

  return (
    <div>
      <div className="page2__container">
        <img className="minorBg" src={mineurBG} alt="" />
        <Mineur partData={partData} />
        <Lanterns partData={partData} />
      </div>
    </div>
  );
};

export default Chapter1Page2;
