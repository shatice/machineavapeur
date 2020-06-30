import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//components
import Card from "../../components/organisms/Card";
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
      duration: 1,
      ease: "elastic",
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
  const content =
    "La machine à vapeur est un moteur à combustion externe qui transforme l'énergie thermique de la vapeur d'eau (produite par une ou des chaudières) en énergie mécanique. Elle fonctionne grâce au charbon qui est alors la seule énergie qui produit assez de chaleur. À partir de là commence l'exploitation industrielle des mines de charbon un peu partout en Europe, puis dans le monde.";

  return (
    <div>
      <div className="container">
        <img className="bg" src={bg} alt="" />
        <img className="portrait" src={portrait} alt="" />
        <TargetUI
          top={140}
          right={window.innerWidth - 150}
          isActive={isCard}
          onMouseEnter={() => setIsCard(true)}
          onMouseLeave={() => setIsCard(false)}
        />
        <Paper />
        <James />
        {isCard && (
          <Card
            width={"340"}
            content={content}
            img={portrait}
            top={"150"}
            left={"150"}
          />
        )}
      </div>
      <Chapter1Page2 />
      <Paper />
      <James />
    </div>
  );
};

export default Chapter1;
