import Skills from "./Skills";
import Certifications from "./Certifications";
function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-section flex flex-col justify-center "
    >
      <div className="skills-container  p-4 md:p-8 md:m-8">
        <div className="skills-header m-4 md:m-5 ">
          <h2 className="text-2xl md:text-3xl ">Skills</h2>
        </div>
        <div className="flex flex-col p-4 md:flex-row justify-center gap-4 md:gap-20">
        <Skills />
          <Certifications />
          
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
