import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement, useState } from "react";
import SwitchButton from "./SwitchButton";
function Navbar() {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex justify-center">
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2 hover:scale-105 duration-300"
      >
        <HiMenuAlt2 size={34} />
      </div>
      <div className="cursor-pointer fixed top-10 right-4 z-[999] rounded-lg p-0 hover:scale-105 duration-300">
        <SwitchButton />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 dark:bg-slate-600/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            key={i}
            onClick={() => {
              setActive(i);
            }}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              i === active &&
              " dark:bg-dark_primary bg-dark_primary_dark text-white"
            } `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
