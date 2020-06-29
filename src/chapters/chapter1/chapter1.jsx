import React, { useEffect } from "react";
import portrait from "../../assets/portrait.png";
import bg from "../../assets/bgChapter1.jpg";
import paper from "../../assets/paper.png";

import head from "../../assets/jamesWatt_head_cropped.png";
import body from "../../assets/jamesWatt_body_cropped.png";
import arm from "../../assets/jamesWatt_arm_cropped.png";


import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Chapter1 = () => {
    let jamesIsClicked = false;
    let paperIsClicked = false;

    let jamesAnims = {};
    let paperAnims = {};


    useEffect(() => {
        // JAMES ANIMATION
        jamesAnims = {
            filterAnim: gsap.to(".james", { filter: "grayscale(0)", paused: true }),
            armAnim: gsap.to(".arm", { rotation: 82, x: -100, duration: 2, transformOrigin: "100% bottom", paused: true }),
            headAnim: gsap.to(".head", { rotation: -15, x: -25, delay: 0.25, duration: 1.75, paused: true }),
            jamesTarget: gsap.to(".james__container svg circle", { stroke: "#D2B550", strokeOpacity: 0.8, paused: true })
        }

        // PAPER ANIMATION
        paperAnims = {
            paperTarget: gsap.to(".paper__container svg circle", { stroke: "#D2B550", strokeOpacity: 0.8, paused: true }),
            paper: gsap.to(".paper__container", {y: -250,duration:1, ease: "back", paused: true }),
            paperColor: gsap.to('.paper', {filter: "grayscale(0)", paused: true})
        }

    }, []);


    const jamesClick = () => {
        if (jamesIsClicked) {
            for (const key in jamesAnims) {
                eval(`jamesAnims.${key}.reverse()`)
            }
        } else {
            for (const key in jamesAnims) {
                eval(`jamesAnims.${key}.play()`)
            }
        }
        jamesIsClicked = !jamesIsClicked;
    }

    const paperClick = () => {
        if (paperIsClicked) {
            console.log('lol');

            for (const key in paperAnims) {
                eval(`paperAnims.${key}.reverse()`)
            }
        } else {
            for (const key in paperAnims) {
                eval(`paperAnims.${key}.play()`)
            }
        }
        paperIsClicked = !paperIsClicked;
    }

    const portraitAnim = () => {

        
        gsap.to(".portrait", {filter: "grayscale(0)"})
        gsap.to(window, {duration: 2, scrollTo: ".page2__container", ease:"power1"})
        gsap.to(".portrait", {duration: 1, delay:1.8, yPercent: 130})
        
    }

    return (
        <div>
            <div className="container">
                <img className="bg" src={bg} alt="" />
                <img onClick={portraitAnim} className="portrait" src={portrait} alt="" />
                <div className="paper__container">
                    <img className="paper" src={paper} alt="" />
                    {/* composant pour le svg */}
                    <svg onClick={paperClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8.5" stroke="white" stroke-opacity="0.3" stroke-width="7" />
                    </svg>
                </div>

                <div className="james__container">
                    <div className="james">
                        <svg onClick={jamesClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="8.5" stroke="white" stroke-opacity="0.3" stroke-width="7" />
                        </svg>
                        <img className="head" src={head} alt="" />
                        <img className="body" src={body} alt="" />
                        <img className="arm" src={arm} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chapter1;
