import * as React from "react";
import jsIcon from "./img/javascript.svg";
import reactIcon from "./img/react.svg";
import gitIcon from "./img/git.svg";
import javaIcon from "./img/java.svg";
import sfIcon from "./img/sf.svg";
import teamIcon from "./img/team.png";
import learningIcon from "./img/learning.png";
import cppIcon from "./img/php.svg";
import {
	skillsSection,
	skillCard,
	skillTitle,
	skillIcon,
} from "./Skills.module.scss";

const Skills = () => {
	return (
		<section id="#skills" className={`section ${skillsSection}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading-container">
							<h2 className="section-heading">
								My <b>Skills</b>
							</h2>
							<div className="heading-separator">
								<i className="bi bi-asterisk"></i>
							</div>
							<div className="section-sub-heading text-mute">
								These are some of the skills that I have aquired and currently
								improving on them as well.
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img
								src={jsIcon}
								className={skillIcon}
								alt="Javascript icon"
							></img>
							<div className={skillTitle}>JavaScript</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img
								src={reactIcon}
								className={skillIcon}
								alt="ReactJS icon"
							></img>
							<div className={skillTitle}>React JS</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img src={gitIcon} className={skillIcon} alt="Git icon"></img>
							<div className={skillTitle}>Git/GitHub</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img src={javaIcon} className={skillIcon} alt="Java icon"></img>
							<div className={skillTitle}>Java</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img
								src={sfIcon}
								className={skillIcon}
								alt="Teamwork icon"
							></img>
							<div className={skillTitle}>Salesforce</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img
								src={teamIcon}
								className={skillIcon}
								alt="Teamwork icon"
							></img>
							<div className={skillTitle}>Leadership & Teamwork</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img
								src={learningIcon}
								className={skillIcon}
								alt="Teamwork icon"
							></img>
							<div className={skillTitle}>Quick Learner</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className={skillCard}>
							<img
								src={cppIcon}
								className={skillIcon}
								alt="Teamwork icon"
							></img>
							<div className={skillTitle}> PHP</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
