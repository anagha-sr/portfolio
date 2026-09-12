import Carousel from "./Carousel";
import introSoftwareEng from "../assets/certifications/introSoftwareEng.png";
import introBackEnd from"../assets/certifications/introBackEnd.png";
import jsCert from "../assets/certifications/js.png";
import javaCert from "../assets/certifications/java.png";
import genAIPromptBasics from "../assets/certifications/genAIPromptBasics.png";
import genAIIntro from "../assets/certifications/genAIIntro.png";
import reactCert from "../assets/certifications/react.png";
import sqlCert from "../assets/certifications/sql.png";

type Certification = {
  name: string;
  description?: string;
  image: string;
  link: string;
};
const certifications = [
  {
    name: "Introduction to Software Engineering",
    image: introSoftwareEng,
    link: "https://coursera.org/share/b43bf3b0d6f4d4bff6f5172814aff144",
  },
      {
    name: "Introduction to Back-End Development",
    image: introBackEnd,
    link: "https://coursera.org/share/ca30b3c73f2d49c4c57bc155207cb837",
  },
  {
    name: "JavaScript Deep Dive",
    image:jsCert,
    link: "https://coursera.org/share/f90940604e61a42d0f49f4cac038000d",
  },
  {
    name: "Java Programming for Beginners",
    image: javaCert,
    link: "https://coursera.org/share/94aceaf4b5aa861e8501674c2bb06789",
  },

  {
    name: "Generative AI: Prompt Engineering Basics",
    image: genAIPromptBasics,
    link: "https://coursera.org/share/6231873389e7263a9a58fcc7bb9b3d54",
  },
  {
    name: "Generative AI: Introduction and Applications",
    image: genAIIntro,
    link: "https://coursera.org/share/58f7253222c84c58d3ff272ecdc84ff9",
  },
  {
    name: "Front-End Web Development with React",
    image: reactCert,
    link: "https://www.hackerrank.com/certificates/adcb8e2f9b23",
  },
  {
    name: "SQL (Intermediate) Certification",
    image: sqlCert,
    link: "https://www.hackerrank.com/certificates/e6838c8859ac",
  }

];

function Certifications() {
  return (
    <div className="p-1  md:p-2 md:w-2/3 ">
      <h3 className="mb-4 text-lg text-gray  ">Certifications</h3>
      <Carousel type="certifications">
        {certifications.map((certification: Certification, index) => (
          <div key={index} className="certification-card bg-white">
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
