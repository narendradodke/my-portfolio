import {
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

function getCategory(title, issuer) {
  const t = title.toLowerCase();
  if (t.includes("mysql") || t.includes("database")) return "Database";
  if (t.includes("react") || t.includes("javascript") || t.includes("css") || t.includes("frontend")) return "Web Development";
  if (t.includes("java") || t.includes("python") || t.includes("c#")) return "Programming";
  if (t.includes("node") || t.includes("rest api")) return "Backend";
  if (t.includes("machine learning")) return "AI & ML";
  if (t.includes("hackinmotion") || issuer === "RICR") return "Hackathon";
  if (t.includes("problem solving")) return "Algorithms";
  return "Technology";
}

function getAccent(category) {
  switch (category) {
    case "Database":
      return "accent-cyan";
    case "Web Development":
      return "accent-blue";
    case "Programming":
      return "accent-purple";
    case "Backend":
      return "accent-pink";
    case "AI & ML":
      return "accent-purple";
    case "Hackathon":
      return "accent-green";
    default:
      return "accent-blue";
  }
}

function Certificates() {
  const certificates = [
    {
      title: "HackInMotion Certificate 2026",
      issuer: "RICR",
      description:
        "HackInMotion 2026 - Certificate of Participation: Showcased creativity, innovation, teamwork, technical skills, and problem-solving in Environment & Cleantech theme.",
      year: "15 Aug 2026",
      viewLink:
        "https://drive.google.com/file/d/1X2Li7oa3WRpnn4OPfI6QGmmmMW_75TCm/view?usp=drive_link",
      verifyLink:
        "https://drive.google.com/file/d/1X2Li7oa3WRpnn4OPfI6QGmmmMW_75TCm/view?usp=drive_link",
    },
    {
      title: "MY SQL Certificate",
      issuer: "HackerRank",
      description:
        "Validates expertise in advanced MySQL concepts including performance tuning, replication, security, and enterprise-level database management.",
      year: "28 JUL 2026",
      viewLink:
        "https://www.hackerrank.com/certificates/iframe/9c51eef1c264",
      verifyLink:
        "https://www.hackerrank.com/certificates/9c51eef1c264",
    },
    {
      title: "JavaScript Certificate",
      issuer: "HackerRank",
      description:
        "Completed JavaScript fundamentals including DOM manipulation, ES6 features and event handling.",
      year: "30 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/163da68d2167",
      verifyLink: "https://www.hackerrank.com/certificates/163da68d2167",
    },
    {
      title: "Java Certificate",
      issuer: "HackerRank",
      description:
        "Core Java Certified: Strong foundation in programming & debugging.",
      year: "29 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/d858761b9e90",
      verifyLink: "https://www.hackerrank.com/certificates/d858761b9e90",
    },
    {
      title: "Python Certificate",
      issuer: "HackerRank",
      description:
        "Python Certified – Expert in clean code, automation, and data-driven solutions.",
      year: "29 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/d3b2fdb9b784",
      verifyLink: "https://www.hackerrank.com/certificates/d3b2fdb9b784",
    },
    {
      title: "C# Certificate",
      issuer: "Certificate Issuer",
      description:
        "Proficient in object-oriented programming, LINQ, and Windows application development.",
      year: "2025",
      viewLink: "#",
      verifyLink: "#",
    },
    {
      title: "React Certificate",
      issuer: "HackerRank",
      description:
        "Skilled in building dynamic UIs, component-based architecture, and state management.",
      year: "29 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/63736c6c34cd",
      verifyLink: "https://www.hackerrank.com/certificates/63736c6c34cd",
    },
    {
      title: "Problem Solving Certificate",
      issuer: "HackerRank",
      description:
        "Strong analytical thinking, algorithm design, and debugging expertise.",
      year: "29 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/9217b589f470",
      verifyLink: "https://www.hackerrank.com/certificates/9217b589f470",
    },
    {
      title: "Frontend Developer (React) Certificate",
      issuer: "HackerRank",
      description:
        "Experienced in responsive design, hooks, and modern UI/UX practices.",
      year: "30 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/b49c4b0b5a11",
      verifyLink: "https://www.hackerrank.com/certificates/b49c4b0b5a11",
    },
    {
      title: "Node.js (Intermediate) Certificate",
      issuer: "HackerRank",
      description:
        "Knowledge of server-side scripting, APIs, and asynchronous programming.",
      year: "30 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/15f3dd61106f",
      verifyLink: "https://www.hackerrank.com/certificates/15f3dd61106f",
    },
    {
      title: "CSS Certificate",
      issuer: "HackerRank",
      description:
        "Expertise in styling, layouts, animations, and responsive design.",
      year: "29 Jul 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/a19cbd6f0cec",
      verifyLink: "https://www.hackerrank.com/certificates/a19cbd6f0cec",
    },
    {
      title: "Machine Learning (Beginner) Certificate",
      issuer: "Simplilearn",
      description:
        "Basics of supervised/unsupervised learning, data preprocessing, and model evaluation.",
      year: "29 Jul 2026",
      viewLink: "https://simpli-web.app.link/e/26wwIKfua5b",
      verifyLink: "https://simpli-web.app.link/e/26wwIKfua5b",
    },
    {
      title: "REST API (Intermediate) Certificate",
      issuer: "HackerRank",
      description:
        "REST API Certified: Connecting systems with clean, efficient endpoints.",
      year: "19 Aug 2026",
      viewLink: "https://www.hackerrank.com/certificates/iframe/c466804089dc",
      verifyLink: "https://www.hackerrank.com/certificates/c466804089dc",
    },
  ];

  return (
    <section id="certificates" className="certificates-section animate-on-scroll">
      <p className="section-subtitle">My Achievements</p>
      <h2>Certificates</h2>

      <div className="certificates-grid-v2">
        {certificates.map((cert) => {
          const category = getCategory(cert.title, cert.issuer);
          const accentClass = getAccent(category);

          return (
            <div className={`cert-card-v2 ${accentClass}`} key={cert.title}>
              {/* Top Certificate Mini Mockup Thumbnail */}
              <div className="mini-cert-thumbnail">
                <div className="cert-inner-frame">
                  <div className="cert-badge-icon">
                    <FaAward />
                  </div>
                  <span className="cert-header-label">Certificate of Completion</span>
                  <p className="cert-holder-name">{cert.title.replace(" Certificate", "")}</p>
                  <div className="cert-signature-row">
                    <span className="cert-sig-line">Official Seal</span>
                    <span className="cert-sig-line">{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="cert-content-panel">
                <div className="cert-meta-row">
                  <span className="cert-issued-date">Issued: {cert.year}</span>
                  <span className="cert-category-badge">{category}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer-name">Issued by {cert.issuer}</p>

                {/* Front Action Buttons */}
                <div className="cert-action-links">
                  <a
                    href={cert.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link view-credential-link"
                  >
                    <FaExternalLinkAlt /> View Credential
                  </a>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link verify-credential-link"
                  >
                    <FaCheckCircle /> Verify
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certificates;