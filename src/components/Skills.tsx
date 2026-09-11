import SkillBar from "./SkillBar";
const coreSkills: { name: string; points: number }[] = [
 { name: "JavaScript", points: 6 },
  { name: "TypeScript", points: 5 },
  { name: "React", points: 5 },
  { name: "HTML", points: 6 },
  { name: "CSS", points: 6 },
  { name: "Physics", points: 5 },
];

const familiarSkills: string[] = [
    "Git",
  "Node.js",
  "Next.js",
  "MongoDB",
  "Tailwind",
  "Bootstrap",
    "Java",
  "Python",
  "Flask",
  "SQL",
  "Express",
  "Vue",
];


function Skills() {
  return (
    <div className="p-1  md:p-2">
      {coreSkills.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-4  text-lg text-gray ">Core skills</h3>

          <div className="space-y-2">
            {coreSkills.map((skill: { name: string; points: number }) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                points={skill.points}
              />
            ))}
          </div>
        </div>
      )}

      {familiarSkills.length > 0 && (
        <div>
          <h3 className="mb-4  text-lg text-gray ">Familiar with</h3>

          <div className="flex flex-wrap gap-2">
            {familiarSkills.map((skill: string) => (
              <span className="skill-item rounded-full skill-chip px-3 py-1 text-sm">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
