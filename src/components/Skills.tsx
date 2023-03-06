import React, { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import About from "../pages/About/About";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
    text: "white",
    borderRadius: "1rem",
    background: "#00BCD4",
    border: "1px solid #ccc"
  },
  overlay: {
    padding: "2rem"
  }
};
Modal.setAppElement("#root");

function Skills() {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectSkill, setSelectSkill] = useState<any>(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section
      className="min-fit w-full bg-dark_primary dark:bg-primarySoftDark"
      id="skills"
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6 className="!text-white">{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          {selectSkill?.description.map((description: string, i: number) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
        <br />
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="btn bg-dark_primary_dark dark:bg-dark_primary_dark !text-white"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="md:container px-5 py-14 ">
        <h2
          className="title !text-white "
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down" data-aos-delay="1000">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="big-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
              >
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-100"
                />
              </div>
              <div
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
              >
                <h6>{skill.name}</h6>
                <p className="italic !text-white">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
