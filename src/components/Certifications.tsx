import Carousel from "./Carousel";
type Certification = {
  name: string;
  description?: string;
  image: string;
  link: string;
};
const certifications = [
  {
    name: "Introduction to Software Engineering",
    image: "src/assets/certifications/introSoftwareEng.png",
    link: "https://coursera.org/share/b43bf3b0d6f4d4bff6f5172814aff144",
  },
  {
    name: "JavaScript Deep Dive",
    image: "src/assets/certifications/js.png",
    link: "https://coursera.org/share/f90940604e61a42d0f49f4cac038000d",
  },
  {
    name: "Java Programming for Beginners",
    image: "src/assets/certifications/java.png",
    link: "https://coursera.org/share/94aceaf4b5aa861e8501674c2bb06789",
  },
    {
    name: "Introduction to Back-End Development",
    image: "src/assets/certifications/introBackEnd.png",
    link: "https://coursera.org/share/ca30b3c73f2d49c4c57bc155207cb837",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    image: "src/assets/certifications/genAIPromptBasics.png",
    link: "https://coursera.org/share/6231873389e7263a9a58fcc7bb9b3d54",
  },
  {
    name: "Generative AI: Introduction and Applications",
    image: "src/assets/certifications/genAIIntro.png",
    link: "https://coursera.org/share/58f7253222c84c58d3ff272ecdc84ff9",
  },
  {
    name: "Front-End Web Development with React",
    image: "src/assets/certifications/react.png",
    link: "https://www.hackerrank.com/certificates/adcb8e2f9b23",
  },
  {
    name: "SQL (Intermediate) Certification",
    image: "src/assets/certifications/sql.png",
    link: "https://www.hackerrank.com/certificates/e6838c8859ac",
  }

];

function Certifications() {
  return (
    <div className="p-1  md:p-2 md:w-2/3 ">
      <h3 className="mb-4 text-lg text-gray  ">Certifications</h3>
      <Carousel type="certifications">
        {certifications.map((certification: Certification, index) => (
          <div key={index} className="certification-card">
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certification.image}
                alt={certification.name}
                className="w-full h-auto"
              />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Certifications;
