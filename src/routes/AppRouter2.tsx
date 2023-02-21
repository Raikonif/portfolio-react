import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import PageNotFound from "../components/PageNotFound";
import SectionsLayout from "../layouts/Sections/SectionsLayout";
import Navbar from "../layouts/portfolio/Navbar2";

function AppRouter() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<SectionsLayout />}>
					<Route index element={<Hero />} />
					{/* <Hero /> */}
					{/* <Skills />
					<Services />
					<Projects />
					<Contact />
					<PageNotFound /> */}
					{/* <Route path="/home" element={<Hero />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/services" element={<Services />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<PageNotFound />} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default AppRouter;
