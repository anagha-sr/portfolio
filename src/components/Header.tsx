import { useEffect, useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    document.documentElement.setAttribute("data-theme", systemTheme);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
         // Make 'About' active near the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight-20
      ) {
        setActiveSection("about");
      }
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
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
        <div className="hidden md:flex nav-links gap-4 md:gap-8 px-4">
          <button
            onClick={toggleTheme}
            className="text-lg px-2"
            aria-label="Toggle theme"
          >
            <button
              title="Switch to light mode"
              className="nav-icon cursor-pointer material-symbols-outlined"
            >
              {isDarkMode ? "light_mode" : "dark_mode"}
            </button>
          </button>
          {["home", "projects", "skills", "about"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link text-sm md:text-base ${
                activeSection === section ? "active" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="nav-link text-sm md:text-base"
          >
            Resume
          </a>
        </div>
        <button
            onClick={toggleTheme}
            className="md:hidden md:hidden nav-icon cursor-pointer ml-auto"
            aria-label="Toggle theme"
          >
              <span className="material-symbols-outlined px-2 pt-1">
              {isDarkMode ? "light_mode" : "dark_mode"}</span>
          </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden nav-icon cursor-pointer "
        >
          <span className="material-symbols-outlined px-2 pt-1">menu</span>
          
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center backdrop"
                        onClick={() => setIsMenuOpen(false)}
>
            <button
              // onClick={() => setIsMenuOpen(false)}
              className="nav-icon cursor-pointer material-symbols-outlined mb-4"
            >
              close
            </button>
            <div className="flex flex-col items-center gap-4">
              {["home", "projects", "skills", "about"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`nav-link text-sm md:text-base ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                className="nav-link text-sm md:text-base"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
