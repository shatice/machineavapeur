import React, { useEffect, useRef } from "react";
import "./style.scss";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//components
import Paper from "../../../components/Paper";
import James from "../../../components/James";

//assets
import portrait from "../../../assets/portrait.png";
import bg from "../../../assets/bgChapter1.jpg";
import GlobalState from "../../../store/GlobalState";

//plugins
gsap.registerPlugin(ScrollToPlugin);

const Chapter1 = ({ data: { parts } = {} }) => {
  let ref = useRef([]);
  const currentRef = ref.current;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "hidden";
    currentRef["container"].addEventListener("wheel", (e) => {
      const delta = Math.sign(e.deltaY);
      if (delta === 1) portraitAnim();
    });
  });

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
    <GlobalState>
      <div>
        <div
          className="container"
          ref={(element) => {
            currentRef["container"] = element;
          }}
        >
          <img className="bg" src={bg} alt="" />
          <img className="portrait" src={portrait} alt="" />
          <Paper partData={parts} />
          <James partData={parts} />
        </div>
      </div>
    </GlobalState>
  );
};

export default Chapter1;
