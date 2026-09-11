import { useEffect, useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  document.documentElement.setAttribute("data-theme", systemTheme);
}, []);

  const toggleTheme = () => {
    let tempIsDarkMode = !isDarkMode;
    document.documentElement.setAttribute(
      "data-theme",
      tempIsDarkMode ? "dark" : "light",
    );
    setIsDarkMode(tempIsDarkMode);
  };
  return (
    <>
    <div className="header-spacer h-[48px] md:h-[65px]"></div>
      <header className="header fixed  sticky-top top-0 w-full flex justify-between items-center z-50 ">
        <h1 className="text-xl md:text-2xl thin-text px-4 ">
          Anagha&nbsp;S<span className="hidden md:inline">urendranath</span>
        </h1>
        <div className="nav-links flex gap-4 md:gap-8 px-4">
          <button
            onClick={toggleTheme}
            className="text-lg px-2"
            aria-label="Toggle theme"
          >
              <button title="Switch to light mode" className="nav-icon cursor-pointer material-symbols-outlined">{isDarkMode ? "light_mode" : "dark_mode"}</button>
          
          </button>
          <a href="#projects" className="nav-link text-sm md:text-base">
            Projects
          </a>
          <a href="#skills" className="nav-link text-sm md:text-base">
            Skills
          </a>
          <a href="#contact" className="nav-link text-sm md:text-base">
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1wCf4cB2OqP5L3bWvXhJbX0y0v8f9w0Pp/view?usp=share_link"
            target="_blank"
            className="nav-link text-sm md:text-base"
          >
            Resume
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
