import React from "react";
import { content } from "../Content";
import Contact from "./Contact";
import Hireme from "./Hireme";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

function Hero(): JSX.Element {
  const { hero } = content;
  return (
    <>
      <section id="home">
        <div className="min-h-screen w-full relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
          <div
            data-aos="slide-down"
            data-aos-delay="1200"
            className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear dark:bg-primaryLinearDark bottom-0 -z-10"
          >
            <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA] dark:text-[#EAF2FA]">
              {hero.firstName}{" "}
              <span>
                {hero.LastName} <br />
                {hero.LastName2}
              </span>
            </h1>
          </div>

          {/* first column */}
          <div className="pb-16 px-6 pt-5" data-aos="fade-down">
            <h2 className="text-dark_primary_dark dark:dark_primary">
              {hero.title}
            </h2>
            <br />
            <div className="flex justify-end">
              <button className="btn hover:scale-125 duration-300">
                {hero.btnText}
              </button>
            </div>
            <div className="flex flex-col gap-10 mt-10">
              {hero.hero_content.map((content: any, i: number) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5 ${
                    i === 1 && "flex-row-reverse text-right"
                  } `}
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* second column */}
          <div className="md:h-[37rem] h-96">
            <img
              src={hero.image}
              data-aos="slide-up"
              data-aos-delay="1200"
              alt="..."
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
      <Skills />
      <Services />
      <Projects />
      <Hireme />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Hero;
