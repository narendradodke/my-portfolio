import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiDotnet, SiMysql } from "react-icons/si";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools & Others"];

  const skills = [
    // Frontend
    {
      name: "HTML",
      icon: <FaHtml5 style={{ color: "#e34f26" }} />,
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt style={{ color: "#264de4" }} />,
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs style={{ color: "#f7df1e" }} />,
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "React",
      icon: <FaReact style={{ color: "#61dafb" }} />,
      category: "Frontend",
      level: "Learning",
    },

    // Backend
    {
      name: "Java",
      icon: <FaJava style={{ color: "#f89820" }} />,
      category: "Backend",
      level: "Advanced",
    },
    {
      name: "Python",
      icon: <FaPython style={{ color: "#3776ab" }} />,
      category: "Backend",
      level: "Advanced",
    },
    {
      name: "VB.NET",
      icon: <SiDotnet style={{ color: "#512bd4" }} />,
      category: "Backend",
      level: "Advanced",
    },

    // Database
    {
      name: "MySQL",
      icon: <SiMysql style={{ color: "#38bdf8" }} />,
      category: "Database",
      level: "Advanced",
    },

    // Tools & Others
    {
      name: "Git & GitHub",
      icon: <FaGithub style={{ color: "#f05032" }} />,
      category: "Tools & Others",
      level: "Learning",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section animate-on-scroll">
      <div className="skills-header">
        <p className="section-subtitle">
          <span className="purple-dot"></span>
          What I Know
        </p>

        <h2>My Skills</h2>
      </div>

      {/* Filter Tabs */}
      <div className="skills-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`skills-tab-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            <span>{cat}</span>
            {activeCategory === cat && <span className="tab-active-underline"></span>}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-v2" key={activeCategory}>
        {filteredSkills.map((skill) => (
          <div className="skill-card-v2" key={skill.name}>
            <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
              {skill.level}
            </span>

            <div className="skill-icon-circle">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;