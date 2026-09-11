function Footer() {
  return (
    <footer className="footer flex text-white py-4 flex flex-col ">
      <div className="about-me-contact-container text-center mx-12 my-auto flex flex-col md:flex-row justify-evenly items-center px-4">
        <div id="about-me" className="w-full md:w-1/2  about-me m-2 md:mb-0">
          <h2 className="text-3xl">About Me</h2>
          <p className="text-sm  text-gray">
I'm a software developer with a Masters degree in Physics from IIT Bombay and an early professional experience in software development. I have a passion for coding and software development, and I particularly enjoy combining science and other fields with software development when needed. I enjoy solving problems, learning new technologies, and building practical, user-focused applications.
<a href="cv.pdf" className="text-primary"> Download CV</a>

          </p>
        </div>
        <div className="hidden md:block w-[1px] h-[40vh] border-l-1 border-gray-600 opacity-30"></div>
        <hr className="block md:hidden border-gray-600 mb-2 opacity-30 w-full " />

        <div className="contact-me mx-4 px-4 w-full md:w-1/2">
          <h2 className="text-3xl ">Contact Me</h2>
          <div className="mb-2 nav-links  py-2  ">
            <a
            className="nav-link"
              href="https://www.linkedin.com/in/anagha-surendranath-35b1b6191/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-2 fa-4x "></i>
            </a>
            <a
            className="nav-link"
              href="https://github.com/anagha-sr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2 fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-auto ">
        <hr className="border-gray-600 mb-2 opacity-30 mx-16 " />
        <p className="text-gray text-sm px-4 text-center">
          &copy; {new Date().getFullYear()} Anagha. Made with React and
          TypeScript.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
