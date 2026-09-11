function SkillBar({ name, points, maxPoints = 7 }: { name: string; points: number; maxPoints?: number }) {
  return (
<div className="w-full skill-item ">
  <div className="flex items-center  skill-bar w-content">
    <span className="text-sm skill-text bold-text">{name}</span>

    <div className="ml-auto flex w-2/3 gap-1">
      {Array.from({ length: maxPoints }).map((_, index) => (
        <span
          key={index}
        className={`h-3 w-3 rounded-full ${
  index < points ? "skill-fill" : "skill-empty"
}`}
        />
      ))}
    </div>
  </div>
</div>
  );
}

export default SkillBar;