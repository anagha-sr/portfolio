import gausian from "../assets/projects/gaussian_beam.webp";
import noteshare from "../assets/projects/noteshare.webp";
import calculator from "../assets/projects/calculator.webp";
import catchgame from "../assets/projects/catchgame.webp";
import ProjectCard from "./ProjectCard.tsx";
import Carousel from "./Carousel.tsx";
function Projects() {
    const projects = [
        {
          
            title: "NoteShare",
            description: "A fullstack note sharing application built with React, Node.js, Express, MongoDB and React-Quill.",
            image: noteshare,
            skills: ["React", "Node.js", "Express", "MongoDB"],
            gitlink:{
                frontend:"https://github.com/anagha-sr/note-share-app",
                backend:"https://github.com/anagha-sr/note-share-server"
            },
            link:"https://note-share-app-three.vercel.app/"
        },
        {
            title: "Gausian Beam Radius Calculator",
            description: "An interactive tool for calculating Gaussian beam radius, simplifying complex optical calculations and making optical system design easier. Built with React and TypeScript.",
            image: gausian,
            skills: ["React", "TypeScript", "CSS"],
            gitlink:"https://github.com/anagha-sr/gaussian_beam",
            link:"https://gaussian-beam.vercel.app/"

        },
        {
            title: "Calculator",
            description: "A typical calculator project built with HTML, CSS, and JavaScript. But the interesting part is that the entire design is created using CSS+HTML only.",
            image: calculator,
            skills: ["CSS", "HTML", "JavaScript"],
            gitlink:"https://github.com/anagha-sr/calculator",
            link:"https://anagha-sr.github.io/Calculator/"
        },
        {
          title:"Catch Game",
          description:"A classic catch game built with React and JavaScript. ",
          image: catchgame,
          skills: ["React", "JavaScript"],
          gitlink:"https://github.com/anagha-sr/react-catch-game",
          link:"https://react-catch-game.vercel.app/"
        }
        
    ];
  return (
    <section id="projects" className="projects-section flex flex-col justify-center  ">
     <div className="projects-container  p-4 md:p-8 md:m-8">
            <div className="projects-header mx-4 mb-4 md:mx-5 md:mb-5 ">
               <h2 className="text-2xl md:text-3xl">Featured Projects</h2>
               <p className="text-gray">A selection of projects that showcase my skills and interests.</p>
               </div>
              
               <Carousel type="projects">
                {[...projects].map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    skills={project.skills}
                    gitlink={project.gitlink}
                    link={project.link}
                  />
                ))}
               </Carousel>
     </div>
    </section>
  );
}

export default Projects;