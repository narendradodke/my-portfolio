import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

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
        {/* Left Column: Split Profile Card */}
        <div className="about-visual-col">
          <div className="profile-split-card">
            {/* Left Half: Profile Photo */}
            <div className="split-card-photo-wrapper">
              <img
                src="/profile.jpg"
                alt="Narendra Dodke profile photo"
                className="split-card-img"
                loading="lazy"
                decoding="async"
              />
              {/* Overlapping Floating Stat Badge */}
              <div className="about-stat-badge split-card-badge">
                <FaGraduationCap className="badge-icon-blue" />
                <div>
                  <strong>BCA Student</strong>
                  <span>Aspiring Full stack Developer</span>
                </div>
              </div>
            </div>

            {/* Right Half: Info Panel */}
            <div className="split-card-info-panel">
              <h3 className="split-card-name">
                Narendra <span className="highlight-gold">Dodke</span>
              </h3>
              <p className="split-card-subtitle">Full Stack Developer</p>
              
              <div className="split-card-divider"></div>

              {/* Code Snippet Block */}
              <div className="split-card-code-block">
                <div className="code-line">
                  <span className="code-purple">const</span>{" "}
                  <span className="code-orange">developer</span>{" "}
                  <span className="code-white">=</span>{" "}
                  <span className="code-white">&#123;</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-blue">code</span>
                  <span className="code-white">:</span>{" "}
                  <span className="code-green">true</span>
                  <span className="code-white">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-blue">coffee</span>
                  <span className="code-white">:</span>{" "}
                  <span className="code-green">true</span>
                  <span className="code-white">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-blue">passion</span>
                  <span className="code-white">:</span>{" "}
                  <span className="code-green">true</span>
                </div>
                <div className="code-line">
                  <span className="code-white">&#125;</span>
                </div>
              </div>

              {/* Open to Work Pill Button */}
              <div className="split-card-status-pill">
                <span className="pulsing-green-dot"></span>
                <span>Open to work</span>
              </div>
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