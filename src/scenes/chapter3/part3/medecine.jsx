import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import medecineBg from "../../../assets/img/chap_3/part_3/medecineBg.jpg";
import bottle from "../../../assets/img/chap_3/part_3/bottle__medecine.png";
import cross from "../../../assets/img/chap_3/part_3/cross__medecine.png";

import gsap from "gsap";

const Medecine = () => {
	const [medecineAnims, setMedecineAnims] = useState({});
	const [medecineHover, setMedecineHover] = useState(false);

	let ref = useRef([]);
	const currentRef = ref.current;

	useEffect(() => {
		var tl = gsap.timeline({ paused: true });
		tl.to(currentRef["Frame"], { filter: "grayscale(0)" }, 0)
		tl.to(currentRef["Bottle"], { y: -200 }, 0)
		tl.to(currentRef["Bottle"], { x: 160 }, 0.5)
		tl.to(currentRef["Bottle"], { y: 30 }, 1)
		tl.to(currentRef["Cross"], { y: -200 }, 0)
		tl.to(currentRef["Cross"], { x: -170 }, 0.5)
		tl.to(currentRef["Cross"], { y: 10 }, 1)

		setMedecineAnims(tl)
		/* eslint-disable */
	}, []);

	const FrameHover = () => {

		if (medecineHover) {
			medecineAnims.reverse()
		} else {
			medecineAnims.play()
		}
		setMedecineHover(!medecineHover);
	}

	return (
		<Frame onMouseEnter={FrameHover} onMouseLeave={FrameHover} ref={(element) => {
			currentRef["Frame"] = element;
		}}>
			<MedecineBG src={medecineBg} />
			<Bottle src={bottle} ref={(element) => {
				currentRef["Bottle"] = element;
			}} />
			<Cross src={cross} ref={(element) => {
				currentRef["Cross"] = element;
			}} />
		</Frame>
	);
};

export default Medecine;

const Frame = styled.div`
		position:relative;
		filter: grayscale(1);
`;
const MedecineBG = styled.img`
`;
const Bottle = styled.img`
	position: absolute;
	top: 40px;
	left: 31px;
`;
const Cross = styled.img`
	position: absolute;
	top: 160px;
	left: 210px;
`;