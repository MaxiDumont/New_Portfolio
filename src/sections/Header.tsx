"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    console.log(`Navigating to ${section}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-5 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${activeSection === "home" ? "bg-white text-gray-900" : "hover:bg-white/70 hover:text-gray-900"}`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900" : "hover:bg-white/70 hover:text-gray-900"}`}
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900" : "hover:bg-white/70 hover:text-gray-900"}`}
          onClick={() => handleNavClick("about")}
        >
          About
        </a>
      </nav>
    </div>
  );
};