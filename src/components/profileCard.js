import "../css/styles.css";

const skills = [
  {
    skill: "Python",
    level: "advanced",
    color: "midnightblue",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "saddlebrown",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "teal",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "darkred",
  },
  {
    skill: "Kotlin",
    level: "intermediate",
    color: "purple",
  },
  {
    skill: "React Native",
    level: "intermediate",
    color: "darkslategray",
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "darkviolet",
  },
];

function ProfileCard() {
  return (
    <div className="cardprofile shadow">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color, color: "white" }}>
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
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Intro() {
  return (
    <div >
      <h1>Maxine Shi</h1>
      <p className="body">
        A passionate programmer who loves to learn about new technologies and
        simplifying tasks through code. In my freetime, I enjoy exploring new
        videogames, skiing, surfing or simply hanging out with my cat, Sesame.
      </p>
    </div>
  );
}

function Avatar() {
  return <img src="Maxine-Desk.jpg" alt="Maxine Shir" className="avatar cen" />;
}

export { ProfileCard };
