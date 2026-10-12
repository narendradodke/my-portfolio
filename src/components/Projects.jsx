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
    {
      title: "LensFrame — Photography Studio",
      description:
        "A luxury, cinematic photography studio website featuring dark and champagne gold UI, booking system, filterable portfolio gallery, and smooth animations.",
      technologies: ["React", "FastAPI", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/narendradodke/photography-website",
      demo: "#",
      image: "/photography.png",
      accent: "amber",
    },
    {
      title: "Luxora — Luxury Jewellery Store",
      description:
        "A premium full-stack jewellery e-commerce platform with elegant product catalog, bespoke consultation, cart management, and secure JWT authentication.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Framer Motion"],
      github: "https://github.com/narendradodke/jewellery",
      demo: "#",
      image: "/jewellery.png",
      accent: "pink",
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section animate-on-scroll">
        <div className="scroll-reveal-right">
          <p className="section-subtitle">My Recent Work</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-horizontal-container">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                className={`project-card-horizontal ${isEven ? "row-reverse" : ""} accent-${project.accent} scroll-reveal-right`}
                key={project.title}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Panel */}
                <div className="project-image-panel">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-preview"
                    loading="lazy"
                    decoding="async"
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
                      target={project.demo !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="project-btn-v2 view-live-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.demo === "#") e.preventDefault();
                      }}
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