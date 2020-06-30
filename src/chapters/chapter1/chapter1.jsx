import React, { useEffect } from "react";
import portrait from "../../assets/portrait.png";
import bg from "../../assets/bgChapter1.jpg";

import Paper from "../../components/Paper";
import James from "../../components/James";


import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Chapter1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.querySelector('.container').addEventListener('wheel', (e) => {
            const delta = Math.sign(e.deltaY);
            if (delta === 1) portraitAnim();
        })
    }, []);

    const portraitAnim = () => {
        gsap.to('.portrait', { filter: "grayscale(0)", rotate: 20, duration: 1, ease: "elastic" })
        gsap.to(window, { delay: 0.8, duration: 1, scrollTo: ".page2__container", ease: "none" })
        gsap.to(".portrait", { duration: 1, delay: 1, yPercent: 130, ease: "exp" })
    }

    return (
        <div>
            <div className="container">
                <img className="bg" src={bg} alt="" />
                <img className="portrait" src={portrait} alt="" />
                <Paper/>
                <James/>
            </div>
        </div>
    );
};

export default Chapter1;
