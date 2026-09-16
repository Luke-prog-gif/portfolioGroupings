import { useState } from "react";
import SkillCard from "./SkillCard";
import "../assets/Skills.css";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = [
    {
      name: "React",
      category: "Frontend",
      members: "Jay · Ivory · Luke",
      percentage: 92,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      members: "Jay · Ivory · Luke",
      percentage: 95,
    },
    {
      name: "HTML",
      category: "Frontend",
      members: "Jay · Ivory · Luke",
      percentage: 94,
    },
    {
      name: "CSS",
      category: "Frontend",
      members: "Jay · Ivory · Luke",
      percentage: 91,
    },
    {
      name: "JavaScript",
      category: "Frontend",
      members: "Jay · Ivory · Luke",
      percentage: 89,
    },
    {
      name: "Java",
      category: "Backend",
      members: "Jay · Ivory · Luke",
      percentage: 96,
    },
    {
      name: "Node.js",
      category: "Backend",
      members: "Jay · Ivory · Luke",
      percentage: 90,
    },
    {
      name: "Python",
      category: "Backend",
      members: "Jay · Ivory · Luke",
      percentage: 85,
    },
    {
      name: "PHP",
      category: "Backend",
      members: "Jay · Ivory · Luke",
      percentage: 88,
    },
    {
      name: "C",
      category: "Backend",
      members: "Jay · Ivory · Luke",
      percentage: 82,
    },
    {
      name: "Figma",
      category: "Design",
      members: "Jay · Ivory · Luke",
      percentage: 88,
    },
    {
      name: "WordPress",
      category: "Tools",
      members: "Jay · Ivory · Luke",
      percentage: 86,
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Design",
    "Tools",
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <div className="skills-intro">
            <p className="skills-label">OUR TOOLKIT</p>

            <h2>Skills &amp; technologies.</h2>

            <p className="skills-description">
              The tools and technologies we use to build thoughtful,
              functional, and engaging digital experiences.
            </p>
          </div>

          <div className="skills-count">
            <strong>{filteredSkills.length}</strong>
            <span>skills</span>
          </div>
        </div>

        <div className="skills-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`skill-filter ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              category={skill.category}
              members={skill.members}
              percentage={skill.percentage}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
