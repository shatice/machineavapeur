import React, { } from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoUI>
      LOGO
    </LogoUI>
  );
};
const LogoUI = styled.div `
  width: 100px;
  height: 45px;
  margin-left: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Logo;