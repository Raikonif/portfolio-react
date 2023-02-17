import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Navbar from "./layouts/portfolio/Navbar";
import AppRouter from "./routes/AppRouter";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<>
						<Navbar options={[]} />
						<Hero />
						<Skills />
						<Services />
						<Projects />
						<Testimonials />
						<Hireme />
						<Contact />
						<footer className="text-center">
							<h6 className="mb-3">Diego Alarcon Inturias</h6>
							<p>Raikonif All Corporyght Reserved</p>
						</footer>
					</>
				</Route>
			</Routes>
		</BrowserRouter>
		// <BrowserRouter>
		// 	<AppRouter />
		// </BrowserRouter>
	);
};

export default App;
