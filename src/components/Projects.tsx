import gausian from "../assets/projects/gaussian_beam.png";
import noteshare from "../assets/projects/noteshare.png";
import calculator from "../assets/projects/calculator.png";
import ProjectCard from "./ProjectCard.tsx";
import Carousel from "./Carousel.tsx";
function Projects() {
    const projects = [
        {
            title: "NoteShare",
            description: "A simple note-taking app built with React and Node.js.",
            image: noteshare,
            skills: ["React", "Node.js", "Express", "MongoDB"]
        },
        {
            title: "Gausian Beam Radius Calculator",
            description: "An interactive tool for calculating the radius of a Gaussian beam. Built with React and TypeScript.",
            image: gausian,
            skills: ["React", "TypeScript", "CSS"]
        },
        {
            title: "Calculator",
            description: "A typical calculator project built with HTML, CSS, and JavaScript. But the interesting part is that the entire design is created using CSS+HTML only.",
            image: calculator,
            skills: ["CSS", "HTML", "JavaScript"]
        },
        
    ];
  return (
    <section id="projects" className="projects-section flex flex-col  ">
     <div className="projects-container  p-4 md:p-8 md:m-8">
            <div className="projects-header mx-4 mb-4 md:mx-5 md:mb-5 ">
               <h2 className="text-2xl md:text-3xl">Featured Projects</h2>
               <p className="text-gray">A selection of projects that showcase my skills and interests.</p>
               </div>
              
               <Carousel type="projects">
                {[...projects,...projects].map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    skills={project.skills}
                  />
                ))}
               </Carousel>
     </div>
    </section>
  );
}

export default Projects;