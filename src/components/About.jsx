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

      <div className="about-heading">
        <p className="section-subtitle">
          Get To Know Me
        </p>

        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-description">

        <p className="about-intro">
          I'm a passionate developer who loves turning ideas
          into modern and interactive digital experiences.
        </p>

        <p>
          Hello! I'm Narendra Dodke, a BCA student and aspiring
          software developer. I enjoy building responsive websites,
          learning new technologies and solving real-world problems
          through code.
        </p>

        <p>
          Currently, I am improving my skills in frontend
          development, React and software development while
          working on personal projects.
        </p>

      </div>

      <div className="about-highlights">

        {highlights.map((item) => (

          <div
            className="highlight-card"
            key={item.title}
          >

            <div className="highlight-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

      <div className="technology-tags">

        {technologies.map((technology) => (

          <span key={technology}>
            {technology}
          </span>

        ))}

      </div>

      <a
        href="#contact"
        className="about-btn"
      >
        Let's Connect →
      </a>

    </section>
  );
}

export default About;