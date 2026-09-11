function projectCard({ title, description, image,skills }: { title: string; description: string; image: string; skills: string[] }) {
  return (
    <div className="project-card-container h-full ">
    <div className="project-card w-full h-full p-4    rounded-lg  hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p className="my-1 text-sm opacity-80">{description}</p>
      <div className="project-skills flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill rounded-full border px-3 py-1 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default projectCard