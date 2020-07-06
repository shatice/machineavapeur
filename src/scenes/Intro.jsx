import React, { useContext } from "react";
import styled from "styled-components";
import context from "../store/context";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Intro = () => {
  const { data } = useContext(context);
  const { intro } = data;
  return <Bg>{intro}</Bg>;
};

export default Intro;
