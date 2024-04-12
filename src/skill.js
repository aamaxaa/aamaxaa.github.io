const skills = [
  {
    skill: "Python",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "teal",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "red",
  },
  {
    skill: "Kotlin",
    level: "intermediate",
    color: "purple",
  },
  {
    skill: "React Native",
    level: "intermediate",
    color: "teal",
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "magenta",
  },
];

export default function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "📖"}
        {level === "beginner" && "✨"}
      </span>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

export { SkillList };
