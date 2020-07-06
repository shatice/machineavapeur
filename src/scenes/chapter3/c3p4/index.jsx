import React, { useEffect, useState } from "react";
import './c3p4.scss';
import bg from "../../../assets/bgC3P3.jpg";
import nuclearWaste from "../../../assets/nuclear_waste.png";
import tv from "../../../assets/tv.png";
import nature from "../../../assets/nature.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";


const Chapter3Part4 = () => {

    const [nuclearAnim, setNuclearAnim] = useState();
    const [nuclearIsHover, setNuclearIsHover] = useState(false);
    const [tvAnim, setTvAnim] = useState({});
    const [tvIsHover, setTvIsHover] = useState(false);
    const [bgAnim, setBgAnim] = useState();
    const [bgIsHover, setBgIsHover] = useState(false);



    useEffect(() => {
        setNuclearAnim(gsap.to(".nuclearWaste", { y: "-60vh", filter: "grayscale(0)", paused: true }))
        setTvAnim({
            natureAnim: gsap.to('.nature', { filter: "grayscale(0)", y: -40, delay: 1, paused: true }),
            tvAnim: gsap.to('.tvContainer', { y: -300, x: -150, scale: 1.4, paused: true })
        })
        setBgAnim(gsap.to(".bgC3P3", { filter: "grayscale(0)", duration: 0.4, paused: true }))
    }, [])

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
                tvAnim[key].reverse()
            }
        } else {
            for (const key in tvAnim) {
                tvAnim[key].play();
            }
        }
        setTvIsHover(!tvIsHover);
    };

    return (<>
        <div className="chapter-container">
            <img src={bg} alt="" className="bg bgC3P3" />
            <img src={nuclearWaste} alt="" className="nuclearWaste" />
            <div className="tvContainer">
                <div className="relative">
                    <img src={nature} alt="" className="nature" />
                    <img src={tv} alt="" className="tv" />
                </div>
            </div>

            <Infos
                setIsAnimated={NuclearHover}
                title={"NUCLEAR WASTE"}
                content="NUCLEAR WASTE NUCLEAR WASTE"
                bottom="20"
                left="80"
                rightCard="-500"
                bottomCard="-150"
            />
            <Infos
                setIsAnimated={TvHover}
                title={"TV TV TV"}
                content="TV TV TV TV TV TV"
                bottom="53"
                left="61"
                rightCard="700"
                bottomCard="200"
            />
            <Infos
                setIsAnimated={BgHover}
                title={"NUCLEAR BOMB"}
                content="NUCLEAR BOMB NUCLEAR BOMB"
                bottom="60"
                left="20"
                rightCard="-400"
                bottomCard="-150"
            />
        </div>
    </>
    );
};

export default Chapter3Part4;
