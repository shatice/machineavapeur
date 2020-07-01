import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import TargetUI from "../../../components/Target";
import Card from "../../../components/organisms/Infos";

const Bg = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #d5d5d5;
`;

const Chapter2Part1 = () => {
  const [ispostalPlaneCard, setIspostalPlaneCard] = useState(false);
  const [isarmyPlaneCard, setIsarmyPlaneCard] = useState(false);
  const [isbrothersCard, setIsbrothersCard] = useState(false);

  const postalPlaneTitle = "Les freres wright";
  const armyPlaneTitle = "Les freres wright";
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
        top={140}
        right={window.innerWidth - 150}
        title={postalPlaneTitle}
        isActive={ispostalPlaneCard}
        onMouseEnter={() => setIspostalPlaneCard(true)}
        onMouseLeave={() => setIspostalPlaneCard(false)}
      />
      {ispostalPlaneCard && (
        <Card
          title={postalPlaneTitle}
          content={postalPlaneContent}
          top={"150"}
          left={"150"}
        />
      )}

      <TargetUI
        top={140}
        right={window.innerWidth - 150}
        title={armyPlaneTitle}
        isActive={isarmyPlaneCard}
        onMouseEnter={() => setIsarmyPlaneCard(true)}
        onMouseLeave={() => setIsarmyPlaneCard(false)}
      />
      {isarmyPlaneCard && (
        <Card
          title={armyPlaneTitle}
          content={armyPlaneContent}
          top={"150"}
          left={"150"}
        />
      )}

      <TargetUI
        top={140}
        right={window.innerWidth - 150}
        title={brothersTitle}
        isActive={isbrothersCard}
        onMouseEnter={() => setIsbrothersCard(true)}
        onMouseLeave={() => setIsbrothersCard(false)}
      />
      {isbrothersCard && (
        <Card
          title={brothersTitle}
          content={brothersContent}
          top={"150"}
          left={"150"}
        />
      )}
      <div>Chapitre 1 Partie 1</div>
    </Bg>
  );
};

export default Chapter2Part1;
