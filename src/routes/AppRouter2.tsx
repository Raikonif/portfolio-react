/* eslint-disable no-tabs */
import React, { useEffect } from "react";
import { Route, Routes, useAsyncError } from "react-router-dom";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import PageNotFound from "../components/PageNotFound";
import SectionsLayout from "../layouts/Sections/SectionsLayout";
import Navbar from "../components/Navbar2";
import Hireme from "../components/Hireme";
import Testimonials from "../components/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";

function AppRouter() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 100 });
  }, []);
  return (
    <>
      <Navbar />
      {/* <Routes> */}
      {/* <Route path="/" element={<SectionsLayout />}> */}
      {/* <Route index element={<Hero />} /> */}
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Hireme />
      <Testimonials />
      <Contact />
      <footer className="text-center">
        <h6 className="mb-3">Diego Alarcon Inturias</h6>
        <p>Raikonif All Corporyght Reserved</p>
      </footer>
      {/* <PageNotFound /> */}
      {/* <Route path="/home" element={<Hero />} />
		  <Route path="/skills" element={<Skills />} />
					<Route path="/services" element={<Services />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<PageNotFound />} /> */}
      {/* </Route> */}
      {/* </Routes> */}
    </>
  );
}

export default AppRouter;
