import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import portrait from "../../../assets/img/chap_1/part_1/portrait2.png"

import { gsap } from "gsap";
import Infos from "../../../components/molecules/Infos";



const Portrait2 = ({ partData }) => {

	let ref = useRef([]);
	const currentRef = ref.current;

	const [portraitIsHover, setPortraitIsHover] = useState(false);
	const [portraitAnim, setPortraitAnim] = useState({});

	useEffect(() => {
		var tl = gsap.from(currentRef["Portrait"], { duration: 10, rotation: '-30deg', transformOrigin: "50% top", ease: 'elastic.out( 3, 0.1)', repeat: -1, paused: true, immediateRender: false })
		var filter = gsap.to(currentRef["Portrait"], { filter: "grayscale(0)", duration: 0, paused: true });

		setPortraitAnim({ rotate: tl, filter: filter });
		/* eslint-disable */
	}, []);


	const portraitHover = () => {
		if (portraitIsHover) {
			portraitAnim.filter.reverse();
			portraitAnim.rotate.pause();
		} else {
			portraitAnim.filter.play();
			portraitAnim.rotate.play();
		}
		setPortraitIsHover(!portraitIsHover);
	}

	return (<>
		<PortraitIMG src={portrait} ref={(element) => {
			currentRef["Portrait"] = element;
		}} />

		{partData && (
			<Infos
				style={{ zIndex: 100000 }}
				setIsAnimated={portraitHover}
				title={partData[0]?.cards?.[1].title}
				content={partData[0]?.cards?.[1].content}
				bottom="60"
				left="10"
				rightCard="-400"
				bottomCard="100"
			/>
		)}
	</>
	);
};

const PortraitIMG = styled.img`
	filter: grayscale(1);
	position: absolute;
	top: 15%;
	left: 4%;
	transform: scale(1.3);
`;

export default Portrait2;
