import React, { useState, useContext } from "react";
import styled from "styled-components";

// components
import TargetUI from "../../../components/organisms/Target";
import Card from "../../../components/molecules/Infos";
import context from "../../../store/context";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: -12;
`;

const Chapter2Part1 = () => {
  const [ispostalPlaneCard, setIspostalPlaneCard] = useState(false);
  const [isarmyPlaneCard, setIsarmyPlaneCard] = useState(false);
  const [isbrothersCard, setIsbrothersCard] = useState(false);
  const { chapter, subChapter } = useContext(context);
  const height = window.innerHeight;
  const width = window.innerWidth;

  const postalPlaneTitle = "Aviation postale";
  const armyPlaneTitle = "Armée de l’air";
  const brothersTitle = "Les freres wright";
  const postalPlaneContent =
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur";
  const armyPlaneContent =
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur";
  const brothersContent =
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur";

  return (
    <Bg>
      <TargetUI
        top={150}
        right={window.innerWidth - 380}
        title={postalPlaneTitle}
        isActive={ispostalPlaneCard}
        onMouseEnter={() => setIspostalPlaneCard(true)}
        onMouseLeave={() => setIspostalPlaneCard(false)}
      />
      {ispostalPlaneCard && (
        <Card
          title={postalPlaneTitle}
          content={postalPlaneContent}
          top={400}
          left={70}
        />
      )}

      <TargetUI
        top={300}
        right={width / 3}
        title={armyPlaneTitle}
        isActive={isarmyPlaneCard}
        onMouseEnter={() => setIsarmyPlaneCard(true)}
        onMouseLeave={() => setIsarmyPlaneCard(false)}
      />
      {isarmyPlaneCard && (
        <Card
          title={armyPlaneTitle}
          content={armyPlaneContent}
          top={60}
          left={520}
        />
      )}

      <TargetUI
        top={height - 100}
        right={100}
        title={brothersTitle}
        isActive={isbrothersCard}
        onMouseEnter={() => setIsbrothersCard(true)}
        onMouseLeave={() => setIsbrothersCard(false)}
      />
      {isbrothersCard && (
        <Card
          title={brothersTitle}
          content={brothersContent}
          top={height - 350}
          left={width - 600}
        />
      )}
      <div>
        Chapitre {chapter + 1} Partie {subChapter + 1}
      </div>
    </Bg>
  );
};

export default Chapter2Part1;
