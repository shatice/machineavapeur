import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//components
import Paper from "../../components/Paper";
import James from "../../components/James";
import TargetUI from "../../components/Target";

import Chapter1Page2 from "./chapter1Page2";

//assets
import portrait from "../../assets/portrait.png";
import bg from "../../assets/bgChapter1.jpg";

//plugins
gsap.registerPlugin(ScrollToPlugin);

const Chapter1 = () => {
  const [isCard, setIsCard] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".container").addEventListener("wheel", (e) => {
      const delta = Math.sign(e.deltaY);
      if (delta === 1) portraitAnim();
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".container").addEventListener("wheel", (e) => {
      const delta = Math.sign(e.deltaY);
      if (delta === 1) portraitAnim();
    });
  }, []);

  const portraitAnim = () => {
    gsap.to(".portrait", {
      filter: "grayscale(0)",
      rotate: 20,
      duration: 0.5,
      ease: "bounce",
    });
    gsap.to(window, {
      delay: 0.8,
      duration: 1,
      scrollTo: ".page2__container",
      ease: "none",
    });
    gsap.to(".portrait", { duration: 1, delay: 1, yPercent: 130, ease: "exp" });
    gsap.to(".portrait", { rotate: 360, opacity: 0, duration: 1, delay: 2 });
  };
  
  const title = "Industrialisation";
  return (
    <div>
      <div className="container">
        <img className="bg" src={bg} alt="" />
        <img className="portrait" src={portrait} alt="" />
        <TargetUI
          top={140}
          right={window.innerWidth - 150}
          title={title}
          isActive={isCard}
          onMouseEnter={() => setIsCard(true)}
          onMouseLeave={() => setIsCard(false)}
        />
        <Paper />
        <James />
      </div>
      <Chapter1Page2 />
    </div>
  );
};

export default Chapter1;
