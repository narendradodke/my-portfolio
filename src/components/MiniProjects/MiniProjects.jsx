import "./MiniProjects.css";
import miniProjects from "../../data/miniProjects";
import { useState } from "react";
import MiniProjectModal from "./MiniProjectModal";
import {
  FaGithub,
  FaSearch,
  FaFolderOpen,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
        <div className="scroll-reveal-right">
          <p className="section-subtitle">Practice Makes Perfect</p>
          <h2>Mini Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="filter-container scroll-reveal-right" style={{ transitionDelay: "0.1s" }}>
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
        <div className="search-box scroll-reveal-right" style={{ transitionDelay: "0.15s" }}>
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
              return (
                <div
                  className="mini-card scroll-reveal-right"
                  key={project.id || project.title}
                  style={{ transitionDelay: `${(idx % 6) * 0.08}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Main Card Content (Split Layout) */}
                  <div className="mini-card-main">
                    {/* Left Thumbnail */}
                    <div className="mini-thumbnail-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add("fallback-bg");
                        }}
                      />
                    </div>

                    {/* Right Info */}
                    <div className="mini-info-wrap">
                      <h3 className="mini-card-title">{project.title}</h3>
                      <p className="mini-card-desc">{project.description}</p>
                      
                      {/* Tech Badges */}
                      <div className="mini-tech-list">
                        {project.technologies?.slice(0, 3).map((tech) => (
                          <span key={tech} className="mini-tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mini-card-footer">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mini-footer-link view-code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                    ) : <span />}

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="mini-footer-link live-demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </a>
                    ) : null}
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