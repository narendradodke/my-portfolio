
import {
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Certificates() {
  const certificates = [
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
        "Python Certified – Expert in clean code, automation, and data-driven solutions. ",

      year: "29 Jul 2026",

      viewLink: "https://www.hackerrank.com/certificates/iframe/d3b2fdb9b784",

      verifyLink: "https://www.hackerrank.com/certificates/d3b2fdb9b784",
    },

    {
      title: "Python Certificate",

      issuer: "Simplilearn",

      description:
        "Python Certified.",

      year: "30 Jul 2026",

      viewLink: "#",

      verifyLink: "#",
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
        " Skilled in building dynamic UIs, component-based architecture, and state management.",

      year: "29 Jul 2026",

      viewLink: "https://www.hackerrank.com/certificates/iframe/63736c6c34cd",

      verifyLink: "https://www.hackerrank.com/certificates/63736c6c34cd",
    },

    {
      title: "Problem Solving Certificate",

      issuer: "HackerRank",

      description:
        "trong analytical thinking, algorithm design, and debugging expertise.",

      year: "29 Jul 2026",

      viewLink: "https://www.hackerrank.com/certificates/iframe/9217b589f470",

      verifyLink: "https://www.hackerrank.com/certificates/9217b589f470",
    },  

    {
      title: "Frontend Devloper (React) Certificate",

      issuer: "HackerRank",

      description:
        " Experienced in responsive design, hooks, and modern UI/UX practices.",

      year: "30 Jul 2026",

      viewLink: "https://www.hackerrank.com/certificates/iframe/b49c4b0b5a11",

      verifyLink: "https://www.hackerrank.com/certificates/b49c4b0b5a11",
    },

    {
      title: "Node.js (Intermediate) Certificate",

      issuer: "HackerRank",

      description:
        "Knowledge of server-side scripting, APIs, and asynchronous programming..",

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
  ];

  return (
    <section
      id="certificates"
      className="certificates-section animate-on-scroll"
    >
      <p className="section-subtitle">
        My Achievements
      </p>

      <h2>Certificates</h2>

      <div className="certificates-container">

        {certificates.map((certificate) => (

          <div
            className="certificate-card"
            key={certificate.title}
          >

            <div className="certificate-top">

              <div className="certificate-icon">

                <FaAward />

              </div>

              <span className="certificate-date">

                {certificate.year}

              </span>

            </div>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <p>{certificate.description}</p>

            <div className="certificate-buttons">

              <a
                href={certificate.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                <FaExternalLinkAlt />
                View
              </a>

              <a
                href={certificate.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn"
              >
                <FaCheckCircle />
                Verify
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;