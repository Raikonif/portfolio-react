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
import SwitchButton from "../components/SwitchButton";

function AppRouter() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 100 });
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SectionsLayout />}>
          <Route index element={<Hero />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
