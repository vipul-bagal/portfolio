import * as React from "react";
import { descriptionContainer, descriptionText } from "./About.module.scss";

const About = () => {
	return (
		<section id="#about" className="section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading-container">
							<h2 className="section-heading">
								<b>About</b> Me
							</h2>
							<div className="heading-separator">
								<i className="bi bi-asterisk"></i>
							</div>
							<div className="section-sub-heading text-mute">
								Strive for perfection in everything you do. Take the best that
								exists and make it better. When it does not exist, design it.
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className={descriptionContainer}>
							<h3>
								Hello!<span> I&#39;M Vipul Bagal.</span>
							</h3>
							<div className="sub-title-list m-0 pt-3 text-mute">
								<h6 className="sub-title">Intuitive</h6>
								<h6 className="sub-title">Exuberant</h6>
								<h6 className="sub-title">Inquisitive</h6>
							</div>
							<div className={descriptionText}>
								I am a Software Development Engineer with a passion for creating inventive software solutions.
								I've been working as a Software Developer at Mindstix Software Labs.
								With 1 year of experience in software development, I have honed my skills in various Programming Languages and tools and have a deep understanding of the software development life cycle. I am a collaborative team player who is dedicated to delivering high-quality software solutions that meet the requirements and exceed expectations. As an avid learner, I am constantly seeking to expand my knowledge and skills in the field to stay up-to-date with the latest technologies.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
