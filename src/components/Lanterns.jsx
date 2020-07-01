import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import lantern from "../assets/lantern.png";
import TargetUI from "./Target";
import Card from "./organisms/Card";

const Lanterns = () => {

    const [display, setDisplay] = useState(false);
    let content = "LANTERN LANTERN LANTERN"

    const lanternIsHover = () => {
        setDisplay(!display);
    }

    return (
        <LanternContainer>
            <LanternsWrapper display={display}>
                <Lantern src={lantern} top={284} left={-364} />
                <Lantern src={lantern} top={270} left={-162} />
                <Lantern src={lantern} top={205} left={-98} />
                <Lantern src={lantern} top={210} left={9} />
            </LanternsWrapper>
            <TargetUI
                top={130}
                right={100}
                title="Lantern"
                isActive={display}
                onMouseEnter={lanternIsHover}
                onMouseLeave={lanternIsHover}
            />

            {display && (
                <Card
                    title="Industrialisation"
                    width={"340"}
                    content={content}
                    top={"40"}
                    left={"-700"}
                />
            )}
        </LanternContainer>
    );
};

const LanternContainer = styled.div`
  position: absolute;
  top: 348px;
  left: 1048px;
`;

const LanternsWrapper = styled.div`
  position: relative;
  display: ${({ display }) => (display ? "block" : "none")};
`;

const Lantern = styled.img`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;


export default Lanterns;
