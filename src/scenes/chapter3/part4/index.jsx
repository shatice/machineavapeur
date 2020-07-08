import React, { useEffect, useState } from "react";
import "./part4.scss";

import bg from "../../../assets/img/chap_3/part_4/bgC3P4.jpg";
import nuclearWaste from "../../../assets/img/chap_3/part_4/nuclear_waste.png";
import tv from "../../../assets/img/chap_3/part_4/tv.png";
import nature from "../../../assets/img/chap_3/part_4/nature.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Chapter3Part4 = ({ data: { parts } = {} }) => {
  const [nuclearAnim, setNuclearAnim] = useState();
  const [nuclearIsHover, setNuclearIsHover] = useState(false);
  const [tvAnim, setTvAnim] = useState({});
  const [tvIsHover, setTvIsHover] = useState(false);
  const [bgAnim, setBgAnim] = useState();
  const [bgIsHover, setBgIsHover] = useState(false);

  useEffect(() => {
    setNuclearAnim(
      gsap.to(".nuclearWaste", {
        y: "-60vh",
        filter: "grayscale(0)",
        paused: true,
      })
    );
    setTvAnim({
      natureAnim: gsap.to(".nature", {
        filter: "grayscale(0)",
        y: -40,
        delay: 1,
        paused: true,
      }),
      tvAnim: gsap.to(".tvContainer", {
        y: -300,
        x: -150,
        scale: 1.4,
        paused: true,
      }),
    });
    setBgAnim(
      gsap.to(".bgC3P3", {
        filter: "grayscale(0)",
        duration: 0.4,
        paused: true,
      })
    );
  }, []);

  const NuclearHover = () => {
    if (nuclearIsHover) {
      nuclearAnim.reverse();
    } else {
      nuclearAnim.play();
    }
    setNuclearIsHover(!nuclearIsHover);
  };

  const BgHover = () => {
    if (bgIsHover) {
      bgAnim.reverse();
    } else {
      bgAnim.play();
    }
    setBgIsHover(!bgIsHover);
  };

  const TvHover = () => {
    if (tvIsHover) {
      for (const key in tvAnim) {
        tvAnim[key].reverse();
      }
    } else {
      for (const key in tvAnim) {
        tvAnim[key].play();
      }
    }
    setTvIsHover(!tvIsHover);
  };
  return (
    <>
      <div className="chapter-container">
        <img src={bg} alt="" className="bg bgC3P3" />
        <img src={nuclearWaste} alt="" className="nuclearWaste" />
        <div className="tvContainer">
          <div className="relative">
            <img src={nature} alt="" className="nature" />
            <img src={tv} alt="" className="tv" />
          </div>
        </div>

        {parts && (
          <>
            <Infos
              setIsAnimated={BgHover}
              title={parts[3]?.cards[2].title}
              content={parts[2]?.cards[2].content}
              bottom="60"
              left="20"
              rightCard="-400"
              bottomCard="-150"
            />
            <Infos
              setIsAnimated={TvHover}
              title={parts[3]?.cards[0].title}
              content={parts[3]?.cards[0].content}
              bottom="53"
              left="61"
              rightCard="700"
              bottomCard="200"
            />
            <Infos
              setIsAnimated={NuclearHover}
              title={parts[3]?.cards[1].title}
              content={parts[2]?.cards[1].content}
              bottom="20"
              left="80"
              rightCard="-500"
              bottomCard="-150"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Chapter3Part4;
