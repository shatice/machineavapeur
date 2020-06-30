import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//components
import Card from "../../components/organisms/Card";
import Paper from "../../components/Paper";
import James from "../../components/James";
import TargetUI from "../../components/Target";

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
  };
  const content =
    "La machine à vapeur est un moteur à combustion externe qui transforme l'énergie thermique de la vapeur d'eau (produite par une ou des chaudières) en énergie mécanique. Elle fonctionne grâce au charbon qui est alors la seule énergie qui produit assez de chaleur. À partir de là commence l'exploitation industrielle des mines de charbon un peu partout en Europe, puis dans le monde.";

  return (
    <div>
      <div className="container">
        <img className="bg" src={bg} alt="" />
        <img className="portrait" src={portrait} alt="" />
        <div style={{ backgroundColor: "white" }}>
          <TargetUI
            top={140}
            right={window.innerWidth - 150}
            isActive={isCard}
            onMouseEnter={() => setIsCard(true)}
            onMouseLeave={() => setIsCard(false)}
          />
        </div>
        {isCard && (
          <Card
            width={"340"}
            content={content}
            img={portrait}
            top={"150"}
            left={"150"}
          />
        )}
        <Paper />
        <James />
      </div>
    </div>
  );
};

export default Chapter1;
