import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


const Chapter1Page2 = () => {

    useEffect(() => {
        document.querySelector('.page2__container').addEventListener('wheel', (e) => {
            const delta = Math.sign(e.deltaY);
            if (delta === -1) {
                gsap.to(".portrait", {rotate: 20, opacity: 1, duration: 1})
                gsap.to(".portrait", { duration: 1, delay: 1, yPercent: 0, ease: "exp" })
                gsap.to(window, { delay: 1.8, duration: 1, scrollTo: ".container", ease: "none" })
                gsap.to('.portrait', { filter: "grayscale(1)", rotate: 0, duration: 1, ease: "elastic", delay: 2.8})
            }
        })
    }, []);


    return (
        <div>
            <div className="page2__container">
                <div></div>
            </div>
        </div>
    );
};

export default Chapter1Page2;
