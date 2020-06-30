import React from "react";
import styled from "styled-components";
import { chaptersList } from "../../constant";

import UseNavigation from "../navigation/use-navigation";

const BottomBar = styled.div`
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

const LogoWrapper = styled.div`
  width: 100px;
  height: 45px;
  margin-left: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  const {
    selectedChapter: { value: chapterValue },
  } = UseNavigation();

  const { chapters } = chaptersList;

  return (
    <BottomBar>
      <LogoWrapper>Logo</LogoWrapper>
      {chapters[chapterValue].subtitles.map((subtitle) => {
        return <div style={{ color: "white" }}>{subtitle}</div>;
      })}
    </BottomBar>
  );
};

export default Footer;
