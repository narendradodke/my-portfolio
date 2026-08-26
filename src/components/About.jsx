import { FaCode, FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      text: "BCA Student",
    },
    {
      icon: "💻",
      title: "Focus",
      text: "Web Development & Software Development",
    },
    {
      icon: "🚀",
      title: "Projects",
      text: "Building Real Projects",
    },
    {
      icon: "📍",
      title: "Location",
      text: "India",
    },
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "VB.NET",
    "MySQL",
  ];

  return (
    <section id="about" className="about-section animate-on-scroll">
      {/* Ambient Glow Blobs */}
      <div className="about-blob about-blob-purple"></div>
      <div className="about-blob about-blob-blue"></div>

      <div className="about-heading-center">
        <p className="section-subtitle">Get To Know Me</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-split-container">
        {/* Left Column: Photo & Visual Badges */}
        <div className="about-visual-col">
          <div className="about-photo-frame-v2">
            <div className="photo-border-glow"></div>
            <img
              src="/profile.jpg"
              alt="Narendra Dodke"
              className="about-profile-img"
            />

            {/* Overlapping Floating Stat Badge */}
            <div className="about-stat-badge">
              <FaGraduationCap className="badge-icon-gradient" />
              <div>
                <strong>BCA Student</strong>
                <span>Aspiring Software Developer</span>
              </div>
            </div>

            {/* Floating Decorative Badges */}
            <div className="about-float-badge float-badge-1">
              <FaCode />
            </div>
            <div className="about-float-badge float-badge-2">
              <FaLaptopCode />
            </div>
          </div>
        </div>

        {/* Right Column: Content & Highlights */}
        <div className="about-content-col">
          <div className="about-description-v2">
            <p className="about-intro-v2">
              I'm a passionate developer who loves turning ideas into modern and
              interactive digital experiences.
            </p>

            <p className="about-paragraph">
              Hello! I'm Narendra Dodke, a BCA student and aspiring software
              developer. I enjoy building responsive websites, learning new
              technologies and solving real-world problems through code.
            </p>

            <p className="about-paragraph">
              Currently, I am improving my skills in frontend development, React
              and software development while working on personal projects.
            </p>
          </div>

          {/* 2x2 Highlights Grid */}
          <div className="about-highlights-grid-v2">
            {highlights.map((item) => (
              <div className="about-highlight-card-v2" key={item.title}>
                <div className="highlight-emoji-box">{item.icon}</div>
                <div className="highlight-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Pills */}
          <div className="about-tech-section">
            <span className="tech-label-title">Tech Stack & Tools:</span>
            <div className="technology-tags-v2">
              {technologies.map((technology) => (
                <span className="about-tech-pill" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="about-connect-btn">
            <span>Let's Connect</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;