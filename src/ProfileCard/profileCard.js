import { SkillList } from "../skill";
import { Avatar } from "../avatar";
import { Intro } from "../intro";

function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export { ProfileCard };
