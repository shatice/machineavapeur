import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import context from "../store/context";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Outro = () => {
  const { data, chapter } = useContext(context);
  const { outro } = data;
  return <Bg>{outro}</Bg>;
};

export default Outro;
