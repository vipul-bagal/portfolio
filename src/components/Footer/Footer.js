import * as React from "react";
import {
	footerContainer,
	inputContainer,
	emailInput,
	submitButton,
	icon,
} from "./Footer.module.scss";

const Footer = () => {
	return (
		<section id="#contact" className={`section pb-4 ${footerContainer}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading-container">
							<h2 className="section-heading">
								<b>Contact</b> Me
							</h2>
							<div className="heading-separator inverted-separator">
								<i className="bi bi-asterisk"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className={inputContainer}>
							<input className={emailInput} placeholder="Your email"></input>
							<button className={submitButton}>Say Hello</button>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<i
							className={`bi bi-github ${icon}`}
							onClick={() => {
								window.open("https://github.com/NegiBaba", "_blank");
							}}
						></i>
						<i
							className={`bi bi-linkedin ${icon}`}
							onClick={() => {
								window.open(
									"https://www.linkedin.com/in/piyushnegi2000",
									"_blank"
								);
							}}
						></i>
						<i className={`bi bi-file-person-fill ${icon}`}></i>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
