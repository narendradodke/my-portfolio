import "./MiniProjectModal.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaClock,
  FaStar,
} from "react-icons/fa";

function MiniProjectModal({ project, onClose }) {

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />

        <h2>{project.title}</h2>

        <p className="modal-description">
          {project.description}
        </p>

        <div className="modal-info">

          <span>
            <FaClock />
            {project.duration}
          </span>

          <span>
            <FaStar />
            {project.rating}
          </span>

        </div>

        <h3>Technologies</h3>

        <div className="tech-list">

          {project.technologies.map((tech) => (

            <span key={tech}>
              {tech}
            </span>

          ))}

        </div>

        <h3>Features</h3>

        <ul className="feature-list">

          {project.features.map((feature) => (

            <li key={feature}>
              ✔ {feature}
            </li>

          ))}

        </ul>

        <div className="modal-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="live-btn"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default MiniProjectModal;