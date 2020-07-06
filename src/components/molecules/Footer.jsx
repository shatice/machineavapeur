import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/***** COMPONENTS *****/
import NavChapters from "../navigation/NavChapters";
import NavParts from "../navigation/NavParts";
import Logo from "../atoms/Logo";
import context from "../../store/context";

const Footer = ({ subChapterContext }) => {
  const { subChapter, chapter } = useContext(context);
  return (
    <Container>
      <Link to="/">
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
  height: 80px;
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
`;

export default Footer;
