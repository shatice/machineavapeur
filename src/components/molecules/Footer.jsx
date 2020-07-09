import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/***** COMPONENTS *****/
import NavChapters from "../navigation/NavChapters";
import NavParts from "../navigation/NavParts";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <Container>
      <Link to="/" className="logoLink">
        <Logo />
      </Link>
      <NavChapters />
      <NavParts />
    </Container>
  );
};


const Container = styled.footer`
  position: fixed;
  transition: height 0.2s ease-out;
  left: 0;
  bottom: 0;
  width: 100%;
  height: fit-content;
  padding: 0.6rem;
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

  .logoLink {
    z-index: 2; 
  }

`;

export default Footer;
