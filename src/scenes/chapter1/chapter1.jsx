import React, { useEffect, useState, useContext } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//components
import Paper from "../../components/Paper";
import James from "../../components/James";
import TargetUI from "../../components/organisms/Target";
import context from "../../store/context";

import Chapter1Page2 from "./chapter1Page2";

//assets
import portrait from "../../assets/portrait.png";
import bg from "../../assets/bgChapter1.jpg";

//plugins
gsap.registerPlugin(ScrollToPlugin);

const Chapter1 = () => {
  const [partData, setPartData] = useState([]);
  const { subChapter, data } = useContext(context);
  useEffect(() => {
    if (data !== undefined) setPartData(data?.parts);
  }, [data]);

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

  // const title = "Industrialisation";
  return (
    <div>
      <div className="container">
        <img className="bg" src={bg} alt="" />
        <img className="portrait" src={portrait} alt="" />
        <Paper partData={partData} />
        <James partData={partData} />
      </div>
      <Chapter1Page2 />
    </div>
  );
};

export default Chapter1;
