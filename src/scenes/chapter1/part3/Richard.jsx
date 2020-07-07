import React from "react";
import styled from "styled-components";
import "./style.scss";

/***** ASSETS *****/
import richard from "../../../assets/img/chap_1/part_3/c1p3_richard.png";

const Richard = ({ className }) => {
  return (
    <RichardImage 
    className={className} 
    src={richard} 
    alt="Richard Trevithick"/>
  );
};

const RichardImage = styled.img`
  transition: transform 0.5s ease-out;

  &.isAnimated {
    transform: scale(3);
  }
`;

export default Richard;
