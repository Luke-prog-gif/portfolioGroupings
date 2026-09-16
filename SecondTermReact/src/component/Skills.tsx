import SkillCard from "./SkillCard";
import "../assets/Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-intro">
          <p className="skills-label">WHAT WE WORK WITH</p>

          <h2>Skills &amp; technologies.</h2>

          <p className="skills-description">
            A collection of technologies and tools we use to turn ideas
            into functional digital experiences.
          </p>
        </div>

        <div className="skills-list">
          <SkillCard name="HTML" type="frontend" />
          <SkillCard name="CSS" type="frontend" />
          <SkillCard name="JavaScript" type="frontend" />
          <SkillCard name="React" type="frontend" />

          <SkillCard name="PHP" type="backend" />
          <SkillCard name="MySQL" type="backend" />
          <SkillCard name="Java" type="backend" />

          <SkillCard name="Figma" type="design" />
          <SkillCard name="Git" type="tools" />
          <SkillCard name="GitHub" type="tools" />
        </div>

      </div>
    </section>
  );
}

export default Skills;
