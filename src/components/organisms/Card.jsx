import React from "react";
import styled from "styled-components";

const CardUI = styled.article`
  width: ${({ width }) => (width ? width : 340)}px;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  min-height: 250px;
  max-height: 500px;
  background-color: #282828d7;
  z-index: 10;

  img {
    width: 100%;
    height: 180px;
    display: block;
    object-fit: cover;
  }

  p {
    padding: 1.5rem 1rem;
    font-family: sans-serif;
    font-size: 0.875rem;
    letter-spacing: 0.2rem;
    color: #ecece9;
  }
`;

const Card = ({ content, img, width, top, left }) => {
  return (
    <CardUI width={width} top={top} left={left}>
      <img src={img} alt="card" />
      <p>{content}</p>
    </CardUI>
  );
};

export default Card;
