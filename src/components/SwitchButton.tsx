import React, { useState, useEffect } from "react";
import { content } from "../Content";

function SwitchButton() {
  const { buttons } = content;
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") != null
      ? localStorage.getItem("theme")
      : "system"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const docElement = document.documentElement;
  const onWindowMatch = () => {
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && darkQuery.matches)
      ? docElement.classList.add("dark")
      : docElement.classList.remove("dark");
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        docElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        docElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", e => {
    "theme" in localStorage && e.matches
      ? docElement.classList.add("dark")
      : docElement.classList.remove("dark");
  });

  return (
    <div className="w-full flex justify-end p-3 bg-slate-200/60 rounded-full">
      {buttons?.map(option => (
        <button
          className={`p-1 flex justify-center items-center ${
            theme === option.text && "text-dark_primary_dark"
          }`}
          key={option.text}
          onClick={() => {
            setTheme(option.text);
          }}
        >
          <option.icon />
        </button>
      ))}
    </div>
  );
}
export default SwitchButton;
