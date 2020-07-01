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
  const [isMarieCurieCard, setIsMarieCurieCard] = useState(false);
  const [isUraniumCard, setIsUraniumCard] = useState(false);

  const marieCurieTitle = "Marie Curie";
  const uraniumTitle = "Découverte de l’uranium";
  const brothersTitle = "Les freres wright";
  const marieCurieContent =
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur";
  const uraniumContent =
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur";

  return (
    <Bg>
      <TargetUI
        bottom={250}
        left={110}
        title={marieCurieTitle}
        isActive={isMarieCurieCard}
        onMouseEnter={() => setIsMarieCurieCard(true)}
        onMouseLeave={() => setIsMarieCurieCard(false)}
      />
      {isMarieCurieCard && (
        <Card
          title={marieCurieTitle}
          content={marieCurieContent}
          top={260}
          left={310}
        />
      )}

      <TargetUI
        top={360}
        right={230}
        title={uraniumTitle}
        isActive={isUraniumCard}
        onMouseEnter={() => setIsUraniumCard(true)}
        onMouseLeave={() => setIsUraniumCard(false)}
      />
      {isUraniumCard && (
        <Card
          title={uraniumTitle}
          content={uraniumContent}
          top={"150"}
          left={"150"}
        />
      )}

      <div>Chapitre 1 Partie 2</div>
    </Bg>
  );
};

export default Chapter2Part1;
