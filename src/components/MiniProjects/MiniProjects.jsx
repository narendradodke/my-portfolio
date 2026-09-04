import "./MiniProjects.css";
import miniProjects from "../../data/miniProjects";
import { useState } from "react";
import MiniProjectModal from "./MiniProjectModal";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaJava,
  FaPython,
  FaSearch,
  FaFolderOpen,
} from "react-icons/fa";
import { SiJavascript, SiReact, SiPhp } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

function getLanguageIcon(language) {
  switch (language) {
    case "Java":
      return <FaJava style={{ color: "#f89820" }} />;
    case "Python":
      return <FaPython style={{ color: "#3776ab" }} />;
    case "JavaScript":
      return <SiJavascript style={{ color: "#f7df1e" }} />;
    case "React":
      return <SiReact style={{ color: "#61dafb" }} />;
    case "C & C++":
      return <TbBrandCpp style={{ color: "#00599c" }} />;
    case "PHP":
      return <SiPhp style={{ color: "#777bb4" }} />;
    default:
      return <FaCode style={{ color: "#38bdf8" }} />;
  }
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
  ];

  const filteredProjects = miniProjects.filter((project) => {
    const projectLanguage =
      project.language || project.technologies?.[0];

    const languageMatch =
      selectedLanguage === "All" ||
      projectLanguage === selectedLanguage ||
      project.technologies?.includes(selectedLanguage);

    const searchMatch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return languageMatch && searchMatch;
  });

  return (
    <>
      <section id="mini-projects" className="mini-projects-section animate-on-scroll">
        <p className="section-subtitle">Practice Makes Perfect</p>
        <h2>Mini Projects</h2>

        {/* Filter Tabs */}
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

        {/* Search */}
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Project Grid */}
        <div className="mini-projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => {
              const accents = ["accent-blue", "accent-purple", "accent-pink", "accent-cyan"];
              const accentClass = accents[idx % accents.length];

              return (
                <div
                  className={`mini-card ${accentClass}`}
                  key={project.id || project.title}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Top Bar inside Card */}
                  <div className="card-top-bar">
                    <div className="card-icon-box">
                      {getLanguageIcon(
                        project.language || project.technologies?.[0]
                      )}
                    </div>
                    <span
                      className={`difficulty-pill ${
                        project.difficulty?.toLowerCase() || ""
                      }`}
                    >
                      ● {project.difficulty}
                    </span>
                  </div>

                  {/* Image Preview */}
                  <div className="mini-image-box">
                    <img src={project.image} alt={project.title} />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mini-card-title">{project.title}</h3>
                  <p className="mini-card-desc">{project.description}</p>

                  {/* Tech Badges */}
                  <div className="mini-tech-list">
                    {project.technologies?.map((tech) => (
                      <span key={tech} className="mini-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mini-card-buttons">
                    <a
                      href={project.live || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="mini-btn live-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>

                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="mini-btn github-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-project">😕 No Project Found</div>
          )}
        </div>

        {/* View All Projects CTA */}
        <div className="view-all-container">
          <a href="#mini-projects" className="btn view-all-btn">
            <FaFolderOpen /> View All Projects
          </a>
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