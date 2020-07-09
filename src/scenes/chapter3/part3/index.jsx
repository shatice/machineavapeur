import React from "react";
import styled from "styled-components";

import Bomb from "./bomb";
import Bulb from "./bulb";
import Medecine from "./medecine";

import bg from "../../../assets/img/chap_3/part_3/bgC3P3.jpg";

const Chapter3Part3 = () => {
	return (<>
		<div className="chapter-container">
			<img src={bg} alt="Poster d'une Bombe Nucléaire" className="bg" />
			<FrameContainer>
				<Bomb />
				<Medecine />
				<Bulb />
			</FrameContainer>
		</div>
	</>
	);
};

export default Chapter3Part3;
const FrameContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

