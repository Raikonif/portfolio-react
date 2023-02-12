import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import AppRouter from "./routes/AppRouter";

const App = () => {
	return (
		<>
			<Hero />
			<Skills />
			<Services />
			<Projects />
			<Testimonials />
			<Hireme />
			<Contact />
		</>
		// <BrowserRouter>
		// 	<AppRouter />
		// </BrowserRouter>
	);
};

export default App;
