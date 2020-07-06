import React, { } from "react";
import styled from "styled-components";

import logo from '../../assets/img/logo/logo.svg';

const Logo = () => {
  return (
    <LogoUI 
    src={ logo }
    alt="logo"/>
  );
};
const LogoUI = styled.img `
  width: 2.5rem; 
  height: 2.5rem;
`

export default Logo;