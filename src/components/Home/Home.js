import * as React from "react";
import { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
	homeContainer,
	mainContent,
	headingText,
	subHeading,
	buttonContainer,
	bgShadow,
} from "./Home.module.scss";

const Home = () => {
	const helloList = [
		"Hello",
		"नमस्ते",
		"こんにちわ",
		"Hola",
		"你好",
		"ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
		"안녕하세요",
	];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setIndex((index + 1) % helloList.length);
		}, 3000);
	});

	return (
		<section id="#home" className={`${homeContainer} section`}>
			<div className={bgShadow}></div>
			<div className={`container ${mainContent}`}>
				<div className="row text-center">
					<div className="col-lg-12">
						<SwitchTransition mode="out-in">
							<CSSTransition
								classNames="fade"
								addEndListener={(node, done) => {
									node.addEventListener("transitionend", done, false);
								}}
								key={helloList[index]}
							>
								<h4>{helloList[index]}</h4>
							</CSSTransition>
						</SwitchTransition>
						<div className={headingText}>
							I am <b>Vipul</b>
						</div>
						<div className="d-flex justify-content-center sub-title-list">
							<h6 className={`sub-title ${subHeading}`}>Software Developer</h6>
							{/* <h6 className={`sub-title ${subHeading}`}>Photgrapher</h6>
							<h6 className={`sub-title ${subHeading}`}>Apple orchardist</h6> */}
						</div>
						<div className={buttonContainer}>
							<div className="cta-button">Download resume</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
