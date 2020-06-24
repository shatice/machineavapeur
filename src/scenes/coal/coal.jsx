import React from "react";
import styled from "styled-components";
import MecaSrc from "../../assets/meca.png";
import { useEffect } from "react";
import { useState } from "react";

const CoalWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #d8d6c8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaElem = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  display: ${({ display }) => (display ? "flex" : "none")};
  transform: scale(0.8);
`;
let mecaSize = [
  {
    width: "100",
    display: false,
  },
  {
    width: "200",
    display: false,
  },
  {
    width: "400",
    display: false,
  },
  {
    width: "600",
    display: false,
  },
  {
    width: "800",
    display: false,
  },
  {
    width: "1100",
    display: false,
  },
];

const Coal = () => {
  const [mecas, setMecas] = useState(mecaSize);

  return (
    <CoalWrapper>
      <MecaContainer>
        <MecaWrapper>
          {mecas.map((m) => {
            return (
              <MecaElem
                width={m.width}
                display={!m.display}
                src={MecaSrc}
                alt="meca"
              />
            );
          })}
        </MecaWrapper>
      </MecaContainer>
    </CoalWrapper>
  );
};

export default Coal;
