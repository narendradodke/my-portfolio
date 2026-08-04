import { useState } from "react";
import ProjectModal from "./ProjectModal";

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
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern and responsive portfolio website built using React, JavaScript and CSS.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/narendradodke/my-portfolio",
      demo: "https://my-portfolio-ecru-mu-86.vercel.app/",
      image: "/portfolio.png",
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section animate-on-scroll">
        <p className="section-subtitle">
          My Recent Work
        </p>

        <h2>My Projects</h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn demo-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
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