import React, { useState, useEffect, useRef } from "react";
import "./part1.scss";

import cloud from "../../../assets/img/chap_3/part_1/cloud.png";
import cloud2 from "../../../assets/img/chap_3/part_1/cloud2.png";
import wallpaper from "../../../assets/img/chap_3/part_1/wallpaper.jpg";
import experience from "../../../assets/img/chap_3/part_1/experience.png";

import marie from "../../../assets/img/chap_3/part_1/marie.svg";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Chapter3Part1 = ({ data: { parts } = {} }) => {
  let ref = useRef([]);
  const currentRef = ref.current;

  const [expAnim, setExpAnim] = useState({});
  const [expIsHover, setExpIsHover] = useState(false);
  const [marieIsHover, setMarieIsHover] = useState(false);

  useEffect(() => {
    var tl = gsap.timeline({ paused: true });
		tl.to(".cloud", { y: "-50", scale: 1, duration: 0.5 });
		tl.to(".cloud2", { y: "-50", scale: 1, duration: 1 }, 0.25)
		setExpAnim(tl);

    currentRef["container"].onmousemove = function (e) {
      let marie = currentRef["marie"].getBoundingClientRect();
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
      e.clientX >= marie.left && e.clientX < marie.right - 20
        ? setMarieIsHover(true)
        : setMarieIsHover(false);
    };
    /* eslint-disable */
  }, []);

  useEffect(()=> {
    marieIsHover ? currentRef["container"].style.cursor = "none" : currentRef["container"].style.cursor = "inherit";
  },[marieIsHover])

  const ExpHover = () => {
    if (expIsHover) {
			expAnim.reverse()
		} else {
			expAnim.play()
		}
		setExpIsHover(!expIsHover);
  };
  
  return (
    <div
      className="chapter-container"
      ref={(element) => {
        currentRef["container"] = element;
      }}
    >
      {marieIsHover && <div className="cursor"></div>}
      <img src={wallpaper} alt="Papier Peint Fleuri" className="bg" />
      <div className="experience__container">
        <div className="relative">
          <img src={experience} alt="Pierre et Marie Curie, Henri Becquerel" className="experience" />
          <img src={cloud} alt="Nuage" className="cloud" />
          <img src={cloud2} alt="Nuage" className="cloud2" />
        </div>
      </div>
      {parts && (
        <Infos
          setIsAnimated={ExpHover}
          title={parts[0]?.cards[0].title}
          content="NUCLEAR WASTE NUCLEAR WASTE"
          bottom="20"
          left="80"
          rightCard="-500"
          bottomCard="-150"
        />
      )}
      {/* a revoir pour marie curie (bon appel api mais mauvais placement et meca !)*/}
      {parts && (
        <Infos
          // onMouseEnter={(props) => props.setIsAnimated(true)}
          // onMouseLeave={() => setMarieIsHover(false)}
          title={parts[0]?.cards[1].title}
          content={parts[0]?.cards[1].content}
          bottom="40"
          left="15"
          rightCard="10"
          bottomCard="50"
        />
      )}

      <img
        ref={(element) => {
          currentRef["marie"] = element;
        }}
        src={marie}
        alt=""
        className="marie"
      />
    </div>
  );
};

export default Chapter3Part1;
