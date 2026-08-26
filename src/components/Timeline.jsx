import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBullseye,
  FaGlobe,
} from "react-icons/fa";

function Timeline() {
  const timeline = [
    {
      id: 1,
      year: "2024",
      icon: <FaGraduationCap />,
      title: "Started BCA",
      description:
        "Started Bachelor of Computer Applications. Learned programming languages like C and C++.",
    },
    {
      id: 2,
      year: "2025",
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Learned HTML, CSS, JavaScript and RDBMS using MySQL.",
    },
    {
      id: 3,
      year: "2026",
      icon: <FaLaptopCode />,
      title: "Programming Skills",
      description:
        "Worked with Java, Python, VB.NET, ASP.NET, PHP and React.",
    },
    {
      id: 4,
      year: "2026",
      icon: <FaGlobe />,
      title: "Website Development",
      description: "Built Portfolio Website and Hospital Management System.",
    },
    {
      id: 5,
      year: "2027",
      icon: <FaBullseye />,
      title: "Future Goal",
      description:
        "Planning to pursue MCA and become a Software Engineer.",
    },
  ];

  return (
    <section id="timeline" className="timeline-section animate-on-scroll">
      <p className="section-subtitle">My Journey</p>
      <h2>Experience Timeline</h2>

      <div className="timeline-wrapper-v2">
        {/* Central Vertical Gradient Line */}
        <div className="timeline-center-line"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              className={`timeline-item-v2 ${isLeft ? "left" : "right"}`}
              key={item.id}
            >
              {/* Central Glowing Node Dot */}
              <div className="timeline-dot-v2">
                {item.icon}
              </div>

              {/* Glass Card */}
              <div className="timeline-card-v2">
                <span className="timeline-year-pill">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;