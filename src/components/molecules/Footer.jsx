import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

/***** COMPONENTS *****/
import NavChapters from "../navigation/NavChapters";
import NavParts from "../navigation/NavParts";
import Logo from "../atoms/Logo";

const Footer = ({ history, subChapter2 }) => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <NavChapters />
      <NavParts subChapter2={subChapter2} />
    </Container>
  );
};

const Container = styled.footer`
  position: fixed;
  transition: height 0.2s ease-out;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 62px;
  padding: 1rem;
  padding-right: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
    180deg,
    rgba(31, 31, 33, 0.31) 0%,
    rgba(31, 31, 33, 0.7) 49%,
    rgba(31, 31, 33, 1) 100%
  );
  z-index: 100;

  &:hover {
    height: 102px;

    .labelsList {
      transform: translateY(0);
      width: 90%;
      height: 100%;
      display: flex;
      align-items: space-between;
      border: 1px solid red;
      position: relative;
    }
  }
`;

export default Footer;
