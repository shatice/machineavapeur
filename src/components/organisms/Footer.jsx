import React from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import NavChapters from "../navigation/NavChapters";
import NavParts from "../navigation/NavParts";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <Container>
      <NavChapters />
      <Logo />
      <NavParts />
    </Container>
  );
};

const Container = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242323;
  z-index: 100;
`;

export default Footer;
