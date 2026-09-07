import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaHtml5,
  FaJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Hero() {
  return (
    <section id="home" className="hero animate-on-scroll">
      {/* Subtle Background Grid & Glow Blobs */}
      <div className="hero-grid-pattern"></div>
      <div className="hero-blob hero-blob-purple"></div>
      <div className="hero-blob hero-blob-pink"></div>

      {/* Left Vertically Fixed Social Bar */}
      <div className="fixed-social-bar">
        <a
          href="https://github.com/narendradodke"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://instagram.com/naren.dx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:narendradodke@gmail.com"
          aria-label="Send Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="hero-content">
        {/* Availability Badge */}
        <div className="available-badge">
          <span className="available-dot"></span>
          <span>Available for work</span>
        </div>

        <p className="intro">Hi, I'm</p>

        <h1 className="gradient-name">Narendra Dodke</h1>

        <div className="hero-role-row">
          <span className="role-prefix">I am a</span>
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
        </div>

        <p className="hero-description">
          I build <span className="hl-blue">modern</span>,{" "}
          <span className="hl-purple">responsive</span>, and{" "}
          <span className="hl-pink">user-friendly</span> web applications using
          HTML, CSS, JavaScript, and React.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="btn download-btn">
            <FaDownload />
            <span>Download Resume</span>
          </a>

          <a href="#projects" className="btn view-work-btn">
            <span>View My Work</span>
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-wrapper">
          {/* Rotating Gradient Ring */}
          <div className="gradient-ring"></div>

          {/* 6 Floating Tech Stack Cards */}
          <div className="tech-float-card float-top-left" title="React">
            <FaReact style={{ color: "#61dafb" }} />
          </div>

          <div className="tech-float-card float-top-right" title="HTML5">
            <FaHtml5 style={{ color: "#e34f26" }} />
          </div>

          <div className="tech-float-card float-mid-left" title="JavaScript">
            <FaJs style={{ color: "#f7df1e" }} />
          </div>

          <div className="tech-float-card float-mid-right" title="MySQL">
            <SiMysql style={{ color: "#38bdf8" }} />
          </div>

          <div className="tech-float-card float-bot-left" title="Java">
            <FaJava style={{ color: "#f89820" }} />
          </div>

          <div className="tech-float-card float-bot-right" title="Python">
            <FaPython style={{ color: "#3776ab" }} />
          </div>

          {/* Decorative Glowing Particle Dots */}
          <div className="sparkle-particle particle-1"></div>
          <div className="sparkle-particle particle-2"></div>
          <div className="sparkle-particle particle-3"></div>
          <div className="sparkle-particle particle-4"></div>

          {/* Profile Photo Container */}
          <div className="profile-img-box">
            <img
              src="/profile.jpg"
              alt="Narendra Dodke profile photo"
              className="profile-image"
              loading="eager"
              decoding="async"
              width="380"
              height="380"
            />
          </div>

          {/* Floating Open to Work Badge */}
          <div className="open-to-work-badge">
            <span className="badge-dot"></span>
            <span>Open to work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;