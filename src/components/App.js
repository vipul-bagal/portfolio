import * as React from "react";
import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

const App = () => {
	const [navColor, setNavColor] = useState("nav_type--home");
	const [activeSection, setActiveSection] = useState("#home");

	useEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth < 768) {
			setNavColor("nav_type--other");
		}
	});

	const handleScroll = () => {
		let currentSection = "";
		const sections = document.querySelectorAll("section");

		if (typeof window !== "undefined" && window.scrollY >= 50) {
			setNavColor("nav_type--other");
		} else {
			setNavColor("nav_type--home");
		}

		sections.forEach((section) => {
			if (window.scrollY >= section.offsetTop - 60) {
				currentSection = section.getAttribute("id");
			}
		});
		setActiveSection(currentSection);
	};

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", handleScroll);
	}

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView();
	};

	return (
		<>
			<NavigationBar
				navColor={navColor}
				section={activeSection}
				scrollToSection={(id) => scrollTo(id)}
			/>
			<Home />
			<About />
			<Skills />
			<Hobbies />
			<Projects />
			<Footer />
		</>
	);
};

export default App;
