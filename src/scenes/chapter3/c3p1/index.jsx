import React from "react";
import styled from "styled-components";

import Bomb from "./bomb";
import Bulb from "./bulb";
import Medecine from "./medecine";

import bg from "../../../assets/bgC3P1.jpg";

const Chapter3Part1 = () => {
	return (<>
		<div className="chapter-container">
			<img src={bg} alt="" className="bg" />
			<FrameContainer>
				<Bomb />
				<Medecine />
				<Bulb />
			</FrameContainer>
		</div>
	</>
	);
};

export default Chapter3Part1;
const FrameContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

