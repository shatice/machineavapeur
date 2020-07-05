import React, {useEffect, useState} from "react";

import bg from "../../../assets/bgC3P3.jpg";
import nuclearWaste from "../../../assets/nuclear_waste.png";
import tv from "../../../assets/tv.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";


const Chapter3Part3 = () => {

    const [nuclearAnim, setNuclearAnim] = useState();
    const [nuclearIsHover, setNuclearIsHover] = useState(false);
    const [tvAnim, setTvAnim] = useState();
    const [tvIsHover, setTvIsHover] = useState(false);

    useEffect(()=> {
        setNuclearAnim(gsap.to(".nuclearWaste", {y: "-60vh", filter: "grayscale(0)", paused: true}))
        setTvAnim(gsap.to(".bgC3P3", {filter: "grayscale(0)", paused: true}))
    }, [])

    const NuclearHover = () => {
        if (nuclearIsHover) {
            nuclearAnim.reverse();
        } else {
            nuclearAnim.play();
        }
        setNuclearIsHover(!nuclearIsHover);
    };

    const TvHover = () => {
        if (tvIsHover) {
            tvAnim.reverse();
        } else {
            tvAnim.play();
        }
        setTvIsHover(!tvIsHover);
    };

    return (<>
        <div className="chapter-container">
            <img src={bg} alt="" className="bg bgC3P3" />
            <img src={nuclearWaste} alt="" className="nuclearWaste"/>
            <img src={tv} alt="" className="tv"/>

            <Infos
                setIsAnimated={NuclearHover}
                title={"NUCLEAR WASTE"}
                content="NUCLEAR WASTE NUCLEAR WASTE"
                bottom="60"
                left="10"
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
        </div>
    </>
    );
};

export default Chapter3Part3;
