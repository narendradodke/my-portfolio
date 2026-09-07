function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
          loading="lazy"
          decoding="async"
        />

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="technologies">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn demo-btn"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;