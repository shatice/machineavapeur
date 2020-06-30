import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

export default () => {
  let cardRef = useRef([]);

  useEffect(() => {
    console.log(cardRef);

    TweenMax.staggerFrom(
      cardRef.current,
      1,
      {
        scale: 0,
      },
      0.9
    );
  }, []);

  return (
    <div className="card-container">
      <div
        className="card"
        ref={(element) => {
          cardRef.current[0] = element;
        }}
      >
        <h1>Card 1</h1>
      </div>
      <div
        className="card"
        ref={(element) => {
          cardRef.current[1] = element;
        }}
      >
        <h1>Card 2</h1>
      </div>
      <div
        className="card"
        ref={(element) => {
          cardRef.current[2] = element;
        }}
      >
        <h1>Card 3</h1>
      </div>
    </div>
  );
};
