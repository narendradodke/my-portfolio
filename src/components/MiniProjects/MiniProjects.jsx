import "./MiniProjects.css";
import miniProjects from "../../data/miniProjects";
import { useState } from "react";
import MiniProjectModal from "./MiniProjectModal";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaClock,
  FaStar,
  FaCalculator,
  FaJava,
  FaPython,
  FaSearch,
} from "react-icons/fa";

import { SiJavascript, SiReact, SiPhp } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

function getLanguageIcon(language) {
  switch (language) {
    case "Java":
      return <FaJava />;

    case "Python":
      return <FaPython />;

    case "JavaScript":
      return <SiJavascript />;

    case "React":
      return <SiReact />;

    case "C & C++":
      return <TbBrandCpp />;

    case "PHP":
      return <SiPhp />;

    default:
      return <FaCode />;
  }
}

function getProjectIcon(title) {
  if (title.includes("Calculator")) return <FaCalculator />;
  return <FaCode />;
}

function MiniProjects() {

  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const languages = [
    "All",
    "Java",
    "JavaScript",
    "Python",
    "React",
    "C & C++",
    "PHP",
    "other",
  ];

  const filteredProjects = miniProjects.filter((project) => {

    const languageMatch =
      selectedLanguage === "All" ||
      project.language === selectedLanguage;

    const searchMatch =
      project.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return languageMatch && searchMatch;
  });

  return (
    <>
      <section
        id="mini-projects"
        className="mini-projects-section"
      >

        <p className="section-subtitle">
          Practice Makes Perfect
        </p>

        <h2>Mini Projects</h2>

        {/* FILTER */}

        <div className="filter-container">

          {languages.map((language) => (

            <button
              key={language}
              className={
                selectedLanguage === language
                  ? "filter-btn active-filter"
                  : "filter-btn"
              }
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </button>

          ))}

        </div>

        {/* SEARCH */}

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* PROJECTS */}

        <div className="mini-projects-grid">

          {filteredProjects.length > 0 ? (

            filteredProjects.map((project) => (

              <div
                className="premium-card"
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >

                <div className="card-top">

                  <div className="project-icon">
                    {getProjectIcon(project.title)}
                  </div>

                  <span
                    className={`difficulty ${project.difficulty.toLowerCase()}`}
                  >
                    ● {project.difficulty}
                  </span>

                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-info">

                  <span>
                    {getLanguageIcon(project.language)}
                    {project.language}
                  </span>

                  <span>
                    <FaClock />
                    {project.duration}
                  </span>

                  <span>
                    <FaStar />
                    {project.rating}
                  </span>

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            ))

          ) : (

            <div className="no-project">

              😕 No Project Found

            </div>

          )}

        </div>

      </section>

      <MiniProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </>
  );
}

export default MiniProjects;