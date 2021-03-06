import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import bulbBg from "../../../assets/img/chap_3/part_3/bulbBg.jpg";
import bulb from "../../../assets/img/chap_3/part_3/bulb.png";

import Infos from "../../../components/molecules/Infos";

import gsap from "gsap";

const Bulb = ({ partData }) => {
	const [bulbAnims, setBulbAnims] = useState({});
	const [frameAnim, setFramebAnim] = useState();
	const [bulbHover, setBulbHover] = useState(false);

	let ref = useRef([]);
	const currentRef = ref.current;

	useEffect(() => {
		var tl = gsap.timeline({ paused: true, yoyo: true, repeat: -1 });
		tl.fromTo(currentRef["Bulb"],
			{ rotate: 20, duration: 2 },
			{ transformOrigin: "50% 0%", rotate: -20, duration: 2, immediateRender: false })
		setBulbAnims(tl);
		setFramebAnim(gsap.to(currentRef["Frame"], { filter: "grayscale(0)", paused: true }));
		/* eslint-disable */
	}, []);

	const FrameHover = () => {
		if (bulbHover) {
			frameAnim.reverse();
			bulbAnims.pause();
		} else {
			frameAnim.play();
			bulbAnims.play();
		}
		setBulbHover(!bulbHover);
	}

	return (
		<Frame ref={(element) => {
			currentRef["Frame"] = element;
		}}>
			<BulbBG src={bulbBg} />
			<BulbIMG src={bulb} ref={(element) => {
				currentRef["Bulb"] = element;
			}} />

			{partData && (
				<Infos
					setIsAnimated={FrameHover}
					title={partData[2]?.cards[2].title}
					content={partData[2]?.cards[2].content}
					bottom="105"
					right="54"
					rightCard="900"
					bottomCard="-900"
				/>
			)}
		</Frame>
	);
};

export default Bulb;

const Frame = styled.div`
  position: relative;
  filter: grayscale(1);
`;
const BulbBG = styled.img``;
const BulbIMG = styled.img`
  position: absolute;
  top: -480px;
  left: 50%;
  transform: translateX(-50%);
`;
