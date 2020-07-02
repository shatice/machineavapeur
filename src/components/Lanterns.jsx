import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import lantern from "../assets/lantern.png";

import Infos from "./molecules/Infos";
const Lanterns = () => {

    const [display, setDisplay] = useState(false);

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
            <Infos
                setIsAnimated={lanternIsHover}
                title={"Lantern"}
                content={"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                bottom="30"
                left="10"
                leftCard="-1000"
                bottomCard="-600"
            />
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
