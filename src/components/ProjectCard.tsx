function projectCard({ title, description, image,skills, gitlink, link }: { title: string; description: string; image: string; skills: string[], gitlink: string|{frontend:string, backend:string}, link: string }) {
  return (
    <div className="project-card-container h-full ">
    <div className="project-card flex flex-col w-full h-full p-4 pb-2  rounded-lg  hover:shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer" title="Live demo"><img src={image} alt={title} /></a>
      <h4>{title}</h4>
      <p className="my-1 text-sm opacity-80">{description}</p>
      <div className="project-skills flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill rounded-full border px-3 py-1 text-sm">
            {skill}
          </span>
        ))}
      </div>
      <div className="project-links flex w-full gap-2 mt-auto pt-4">
        {typeof gitlink === "string" ? (
          <a href={gitlink} className="project-link" title="Git repository" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x " />
          </a>
        ) : (
          <>
            <a href={gitlink.frontend} className="project-link"  title=" Git repository (frontend)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x" />
            </a>
            <a href={gitlink.backend} className="project-link" title="Git repository (backend)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x" />
            </a>
          </>
        )}
        <a href={link} className="ml-auto project-link" title="Live demo" target="_blank" rel="noopener noreferrer">
          {/* <i className="fas  fa-arrow-up-right-from-square fa-2x " /> */}
          <span className="text-5xl thin-text">&rarr;</span>
        </a>
      </div>
    </div>
    </div>
  )
}

export default projectCard