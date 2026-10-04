import { useState, useEffect } from "react";
import {
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBolt,
} from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiMongodb,
  SiPytest,
  SiFirebase,
  SiGithubcopilot,
  SiAnthropic,
  SiDeepseek,
} from "react-icons/si";
import {
  TbBrandVscode,
  TbBrandOpenai,
  TbSparkles,
  TbCpu,
} from "react-icons/tb";

// --- Custom SVGs for specialized tools ---
const CursorIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#38bdf8" }}
  >
    <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" fill="rgba(56, 189, 248, 0.25)" />
  </svg>
);

const LovableIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#lovableGrad)"
    />
    <defs>
      <linearGradient id="lovableGrad" x1="2" y1="3" x2="22" y2="21.35">
        <stop offset="0%" stopColor="#ff4081" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  </svg>
);

const ZCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#38bdf8" }}
  >
    <path d="M4 8l-2 4 2 4" stroke="#a855f7" strokeWidth="2" />
    <path d="M20 8l2 4-2 4" stroke="#a855f7" strokeWidth="2" />
    <path d="M8 7h8l-8 10h8" stroke="#38bdf8" strokeWidth="2.4" />
  </svg>
);

const AntigravityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#ec4899" }}
  >
    <circle cx="12" cy="12" r="3" fill="#ec4899" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" stroke="#a855f7" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" stroke="#38bdf8" />
  </svg>
);

// Resilient icon renderer with Devicon primary and React-Icon fallback
function TechIcon({ iconUrl, name, fallbackIcon }) {
  const [imgError, setImgError] = useState(false);

  if (iconUrl && !imgError) {
    return (
      <img
        src={iconUrl}
        alt={name}
        loading="lazy"
        onError={() => setImgError(true)}
        className="skill-devicon-img"
      />
    );
  }

  return <span className="skill-react-icon">{fallbackIcon}</span>;
}

function Skills() {
  useEffect(() => {
    // Scroll reveal from right observer
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const animElements = document.querySelectorAll(".skill-animate-right");
    animElements.forEach((el) => animObserver.observe(el));

    return () => {
      animObserver.disconnect();
    };
  }, []);

  // --- 5 Skill Categories (Updated list per user instructions) ---
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          fallbackIcon: <FaJava style={{ color: "#ea2d2e" }} />,
        },
        {
          name: "Python",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          fallbackIcon: <SiPython style={{ color: "#3776ab" }} />,
        },
        {
          name: "JavaScript",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          fallbackIcon: <SiJavascript style={{ color: "#f7df1e" }} />,
        },
        {
          name: "TypeScript",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          fallbackIcon: <SiTypescript style={{ color: "#3178c6" }} />,
        },
        {
          name: "SQL",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          fallbackIcon: <SiMysql style={{ color: "#4479a1" }} />,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React.js",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          fallbackIcon: <SiReact style={{ color: "#61dafb" }} />,
        },
        {
          name: "Node.js",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          fallbackIcon: <SiNodedotjs style={{ color: "#339933" }} />,
        },
        {
          name: "Express",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          fallbackIcon: <SiExpress style={{ color: "#94a3b8" }} />,
        },
        {
          name: "Bootstrap",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          fallbackIcon: <SiBootstrap style={{ color: "#7952b3" }} />,
        },
        {
          name: "Tailwind",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          fallbackIcon: <SiTailwindcss style={{ color: "#06b6d4" }} />,
        },
        {
          name: "Django",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
          fallbackIcon: <SiDjango style={{ color: "#44b78b" }} />,
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "Docker",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
          fallbackIcon: <SiDocker style={{ color: "#2496ed" }} />,
        },
        {
          name: "Kubernetes",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          fallbackIcon: <SiKubernetes style={{ color: "#326ce5" }} />,
        },
        {
          name: "Git",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          fallbackIcon: <FaGitAlt style={{ color: "#f05032" }} />,
        },
        {
          name: "GitHub",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          fallbackIcon: <FaGithub style={{ color: "#94a3b8" }} />,
        },
        {
          name: "Vercel",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          fallbackIcon: <SiVercel style={{ color: "#ffffff" }} />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          fallbackIcon: <SiMysql style={{ color: "#4479a1" }} />,
        },
        {
          name: "MongoDB",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          fallbackIcon: <SiMongodb style={{ color: "#47a248" }} />,
        },
        {
          name: "MongoDB Atlas",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          fallbackIcon: <SiMongodb style={{ color: "#00ed64" }} />,
        },
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        {
          name: "PyTest",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
          fallbackIcon: <SiPytest style={{ color: "#0a9edc" }} />,
        },
        {
          name: "VS Code",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          fallbackIcon: <TbBrandVscode style={{ color: "#007acc" }} />,
        },
      ],
    },
  ];


  // --- AI Stats & Tools (Updated list with DeepSeek, Lovable, Z Code) ---
  const aiStats = [
    { value: "10+", label: "AI Tools in Workflow", icon: <TbSparkles /> },
    { value: "3x", label: "Faster Iteration", icon: <FiZap /> },
    { value: "100%", label: "Code Reviewed by AI", icon: <FaBolt /> },
  ];

  const aiTools = [
    {
      name: "ChatGPT",
      desc: "Problem solving, debugging & code reviews",
      fallbackIcon: <TbBrandOpenai style={{ color: "#10a37f" }} />,
    },
    {
      name: "DeepSeek",
      desc: "Open-source reasoning models & code intelligence",
      fallbackIcon: <SiDeepseek style={{ color: "#1e88e5" }} />,
    },
    {
      name: "Claude",
      desc: "AI-assisted architecture & refactoring",
      fallbackIcon: <SiAnthropic style={{ color: "#d97757" }} />,
    },
    {
      name: "Claude Code",
      desc: "Terminal-first AI coding assistant for real-time engineering workflows",
      fallbackIcon: <SiAnthropic style={{ color: "#f59e0b" }} />,
    },
    {
      name: "Cursor",
      desc: "AI-powered code editor for productivity",
      fallbackIcon: <CursorIcon />,
    },
    {
      name: "Lovable",
      desc: "Full-stack AI web app builder & rapid prototyping",
      fallbackIcon: <LovableIcon />,
    },
    {
      name: "Z Code",
      desc: "AI-driven code generation & smart engineering workflows",
      fallbackIcon: <ZCodeIcon />,
    },
    {
      name: "Copilot",
      desc: "Automated code generation & documentation",
      fallbackIcon: <SiGithubcopilot style={{ color: "#38bdf8" }} />,
    },
    {
      name: "Codex",
      desc: "AI-driven coding workflows for rapid prototyping and iteration",
      fallbackIcon: <TbBrandOpenai style={{ color: "#818cf8" }} />,
    },
    {
      name: "Antigravity",
      desc: "AI-assisted workflows for creative and product experimentation",
      fallbackIcon: <AntigravityIcon />,
    },
    {
      name: "Firebase",
      desc: "Realtime backend, hosting, and app platform for modern products",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      fallbackIcon: <SiFirebase style={{ color: "#ffca28" }} />,
    },
  ];

  return (
    <section id="skills" className="skills-section animate-on-scroll">
      {/* Background vertical and horizontal grid lines */}
      <div className="skills-grid-pattern"></div>

      {/* Background black shadow vignette for contrast and depth */}
      <div className="skills-black-shadow"></div>

      {/* Background ambient orbs */}
      <div className="skills-ambient-blob skills-blob-purple"></div>
      <div className="skills-ambient-blob skills-blob-blue"></div>

      <div className="skills-main-container">
        {/* Section Header */}
        <div className="skills-header">
          <p className="section-subtitle">
            <span className="purple-dot"></span>
            Toolkit & Competencies
          </p>
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="skills-lead-subtitle">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Categorized Skills */}
        <div className="skills-categories-wrapper">
          {skillCategories.map((category, index) => (
            <div
              className="skills-category-group skill-animate-right"
              key={category.title}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="skills-category-header">
                <span className="skills-category-dot"></span>
                <h3 className="skills-category-title">
                  {category.title}
                  <span className="skills-category-underline"></span>
                </h3>
              </div>

              <div className="skills-cards-grid">
                {category.skills.map((skill) => (
                  <div className="skill-card-item" key={skill.name}>
                    <div className="skill-card-glow"></div>
                    <div className="skill-card-corner-glow"></div>
                    <div className="skill-card-icon-box">
                      <TechIcon
                        iconUrl={skill.iconUrl}
                        name={skill.name}
                        fallbackIcon={skill.fallbackIcon}
                      />
                    </div>
                    <span className="skill-card-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



        {/* AI Tools Section */}
        <div id="ai-tools" className="ai-tools-wrapper">
          <div className="ai-tools-header skill-animate-right" style={{ transitionDelay: "0.1s" }}>
            <div className="ai-pill-badge">
              <TbSparkles className="ai-pill-icon" />
              <span>AI-Powered Development</span>
            </div>
            <h2 className="ai-section-title">
              AI Tools <span>I Use Daily</span>
            </h2>
            <p className="ai-section-subtitle">
              Leveraging AI to accelerate development, improve code quality, and solve complex problems faster
            </p>

            {/* AI Stats Metrics Row */}
            <div className="ai-metrics-row">
              {aiStats.map((item) => (
                <div className="ai-metric-pill" key={item.label}>
                  <span className="ai-metric-icon">{item.icon}</span>
                  <strong className="ai-metric-val">{item.value}</strong>
                  <span className="ai-metric-lbl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Grid */}
          <div className="ai-tools-grid skill-animate-right" style={{ transitionDelay: "0.2s" }}>
            {aiTools.map((tool) => (
              <div className="ai-tool-card" key={tool.name}>
                <div className="ai-tool-glow"></div>
                <div className="ai-tool-icon-wrap">
                  <TechIcon
                    iconUrl={tool.iconUrl}
                    name={tool.name}
                    fallbackIcon={tool.fallbackIcon}
                  />
                </div>
                <h4 className="ai-tool-name">{tool.name}</h4>
                <p className="ai-tool-desc">{tool.desc}</p>
              </div>
            ))}
          </div>

          {/* AI-First Workflow Highlight */}
          <div className="ai-workflow-card skill-animate-right" style={{ transitionDelay: "0.3s" }}>
            <div className="ai-workflow-glow"></div>
            <div className="ai-workflow-icon-wrap">
              <TbCpu className="ai-workflow-cpu-icon" />
            </div>
            <div className="ai-workflow-content">
              <h3 className="ai-workflow-title">AI-First Development Workflow</h3>
              <p className="ai-workflow-text">
                I integrate AI tools throughout the development lifecycle — from architecture planning and code generation to testing, debugging, and documentation. This accelerates delivery while maintaining high code quality and security standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;