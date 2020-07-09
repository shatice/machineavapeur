import React from "react";
import styled from "styled-components";

const Title = ({ text, onClick }) => {
  return <TitleUI onClick={onClick}>{text}</TitleUI>;
};

const TitleUI = styled.h2`
  position: relative;
  width: fit-content;
  margin: 0 2rem;
  font-size: 1rem;
  z-index: 1001;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family:'din_bold_condensed';

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    width: 0;
    height: 1px;
    background-color: #c09c1c;
    transition: width 0.3s ease-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

export default Title;
