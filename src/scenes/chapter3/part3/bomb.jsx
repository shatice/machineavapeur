import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import bomb from "../../../assets/img/chap_3/part_3/bomb.png";
import bomb2 from "../../../assets/img/chap_3/part_3/bomb2.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Bomb = ({ partData }) => {
	const [bombAnims, setBombAnims] = useState({});
	const [bombIsHover, setBombIsHover] = useState(false);

	let ref = useRef([]);
	const currentRef = ref.current;

	useEffect(() => {
		var tl = gsap.timeline({ paused: true });
		tl.to(currentRef["Bomb"], { opacity: 0, duration: 0.3 });
		tl.to(currentRef["Frame"], { backgroundColor: "#FA3F15", duration: 0.2 });
		tl.to(currentRef["Bomb2"], { y: "75vh", duration: 0.5 });
		tl.to(currentRef["Frame"], { backgroundColor: "#78F54F", duration: 0.3 });
		tl.to(currentRef["Bomb"], { filter: "grayscale(0)", opacity: 1, duration: 0.5 })
		setBombAnims(tl);
	}, []);

	const FrameHover = () => {
		if (bombIsHover) {
			bombAnims.reverse();
		} else {
			bombAnims.play()
		}
		setBombIsHover(!bombIsHover);
	}

	return (
		<Frame ref={(element) => {
			currentRef["Frame"] = element;
		}}>
			<Bomb1 src={bomb} ref={(element) => {
				currentRef["Bomb"] = element;
			}} />
			<Bomb2 src={bomb2} ref={(element) => {
				currentRef["Bomb2"] = element;
			}} />

			{true && (
				<Infos
					setIsAnimated={FrameHover}
					title={"title"}
					content={"content"}
					bottom="105"
					right="44"
					rightCard="-1610"
					bottomCard="0"
				/>
			)}
		</Frame>
	);
};

export default Bomb;
const Frame = styled.div`
  position: relative;
`;
const Bomb1 = styled.img`
  filter: grayscale(1);
`;
const Bomb2 = styled.img`
  position: absolute;
  top: -75vh;
  left: 0;
`;
