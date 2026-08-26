import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A desktop-based hospital management system designed to manage hospital-related information and operations.",
      technologies: ["VB.NET", "MS Access", "Visual Studio 2010"],
      github: "https://github.com/narendradodke",
      demo: "#",
      image: "/hospital.png",
      accent: "purple",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern and responsive portfolio website built using React, JavaScript and CSS.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/narendradodke/my-portfolio",
      demo: "https://my-portfolio-ecru-mu-86.vercel.app/",
      image: "/portfolio.png",
      accent: "cyan",
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section animate-on-scroll">
        <p className="section-subtitle">My Recent Work</p>

        <h2>My Projects</h2>

        <div className="projects-horizontal-container">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                className={`project-card-horizontal ${isEven ? "row-reverse" : ""} accent-${project.accent}`}
                key={project.title}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Panel */}
                <div className="project-image-panel">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-preview"
                  />
                  <div className="image-overlay-glow"></div>
                </div>

                {/* Content Panel */}
                <div className="project-content-panel">
                  <span className="project-number-badge">0{index + 1}</span>

                  <h3 className="project-title-heading">{project.title}</h3>

                  <p className="project-desc-text">{project.description}</p>

                  <div className="project-tech-badges">
                    {project.technologies.map((tech) => (
                      <span className="project-tech-chip-v2" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-action-buttons">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-v2 view-live-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> View Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-v2 source-code-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;