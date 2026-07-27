import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero animate-on-scroll">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1 className="gradient-name">
          Narendra Dodke
        </h1>
        <h3>I am a </h3>

        <h2>
          <TypeAnimation
            sequence={[
              "Programmer", 
              2000,
              "Web Developer",
              2000,
              "Software Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-description">
          I create modern, responsive and user-friendly websites
          using HTML, CSS, JavaScript and React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn resume-btn"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/narendradodke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://instagram.com/naren.dx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/91+ 7470746631"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <div className="profile-glow"></div>

          <img
            src="/profile.jpg"
            alt="Narendra Dodke"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;