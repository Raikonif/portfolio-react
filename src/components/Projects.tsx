import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { content } from "../Content";

function Projects(): JSX.Element {
  const { Projects } = content;

  return (
    <section id="projects" className="bg-dark_primary dark:bg-primarySoftDark">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between w-full">
        <div>
          <h2 className="title !text-white" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />

          <Swiper
            pagination={{
              clickable: true
            }}
            data-aos="fade-down"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white dark:bg-slate-400/60 rounded-3xl p-5 border-b-8 border-[#FAF9FD] dark:border-slate-400 h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins dark:text-white">
                    {content.title}
                  </h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
