import { useState } from "react";
import laptop from "../assets/laptop.png";
function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="home"
    className={`hero flex flex-col md:flex-row items-center justify-center  transition-opacity duration-700 ${
  isLoaded ? "opacity-100" : "opacity-0"
}`}
    >
      <div className="hero-1 w-full  md:w-3/5 flex justify-center items-center mx-2"
      >
        {/* <div id="photo-container" className="w-2/5">
            <img
              src={photo}
              alt="Hero Image"
              className="rounded-full max-w-[150px] md:max-w-[200px] m-auto"
            />
          </div> */}
        <div
          id="hero-text"
          //  className="w-3/5"
          className="p-4 md:p-8"
        >
          <div className="inline-block chip chip-secondary py-1 px-2 mb-2 text-xs rounded-full">
            SOFTWARE DEVELOPER
          </div>

          <h1 className="text-3xl md:text-5xl bold-text">
            Hi, I'm Anagha&nbsp;&#128075;
            {/* 👋 */}
            {/* <span className="material-symbols-rounded ml-3 emoji transform scale-150">
waving_hand
</span> */}
          </h1>

<p className="w-full max-w-[500px] mt-2 text-sm md:text-base normal-text">            I am a software developer with a passion for creating innovative and
            efficient solutions. I enjoy working on challenging projects and
            continuously learning new technologies.
          </p>

          <div className="flex flex-col items-center sm:flex-row gap-4 mt-4">
            <a href="#projects">
              <button className="btn btn-primary mt-4 text-sm rounded-full">
                View My Projects
              </button>
            </a>
            <a href="#contact">
              <button className="btn btn-secondary mt-4 text-sm rounded-full">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-2 w-full  md:w-2/5 text-center md:text-left max-w-[500px]">
        <img src={laptop} onLoad={() => setIsLoaded(true)}
 alt="Laptop Image" className="m-auto" />
      </div>
    </section>
  );
}

export default Hero;
