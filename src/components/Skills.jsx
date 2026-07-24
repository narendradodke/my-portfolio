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
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "Advanced",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "Intermediate",
    },
    {
      name: "Java",
      icon: <FaJava />,
      level: "Beginner",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "Learning",
    },
    {
      name: "Python",
      icon: <FaPython />,
      level: "Intermediate",
    },
    {
      name: "VB.NET",
      icon: <SiDotnet />,
      level: "Intermediate",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      level: "Intermediate",
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub />,
      level: "Learning",
    },
  ];

  return (
    <section id="skills" className="skills-section animate-on-scroll">

      <p className="section-subtitle">
        What I Know
      </p>

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.name}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="skill-level">
              {skill.level}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;