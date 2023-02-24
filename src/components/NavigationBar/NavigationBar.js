import * as React from "react";
import {
	customNav,
	brandTitle,
	link,
	iconColor,
} from "./NavigationBar.module.scss";

const NavigationBar = ({ navColor, section, scrollToSection }) => {
	return (
		<nav
			className={`navbar fixed-top navbar-expand-lg ${customNav} ${navColor}`}
		>
			<div className="container">
				<span className={`navbar-brand mb-0 h1 fw-bold ${brandTitle}`}>
					Portfolio
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarLinksToggler"
					aria-controls="navbarLinksToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
						<i className={`bi bi-justify ${iconColor}`}></i>
					</span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarLinksToggler"
				>
					<ul className="navbar-nav">
						<li className={`nav-item ${section === "#home" ? "active" : ""}`}>
							<a
								className={`nav-link ${link}`}
								href="#home"
								data-id="#home"
								onClick={(event) => {
									scrollToSection(event.currentTarget.dataset.id);
								}}
							>
								Home
							</a>
						</li>
						<li className={`nav-item ${section === "#about" ? "active" : ""}`}>
							<a
								className={`nav-link ${link}`}
								href="#about"
								data-id="#about"
								onClick={(event) => {
									scrollToSection(event.currentTarget.dataset.id);
								}}
							>
								About
							</a>
						</li>
						<li className={`nav-item ${section === "#skills" ? "active" : ""}`}>
							<a
								className={`nav-link ${link}`}
								href="#skills"
								data-id="#skills"
								onClick={(event) => {
									scrollToSection(event.currentTarget.dataset.id);
								}}
							>
								Skills
							</a>
						</li>
						<li
							className={`nav-item ${section === "#projects" ? "active" : ""}`}
						>
							<a
								className={`nav-link ${link}`}
								href="#projects"
								data-id="#projects"
								onClick={(event) => {
									scrollToSection(event.currentTarget.dataset.id);
								}}
							>
								Projects
							</a>
						</li>
						<li
							className={`nav-item ${section === "#contact" ? "active" : ""}`}
						>
							<a
								className={`nav-link ${link}`}
								href="#contact"
								data-id="#contact"
								onClick={(event) => {
									scrollToSection(event.currentTarget.dataset.id);
								}}
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
