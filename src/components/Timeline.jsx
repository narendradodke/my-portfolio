function Timeline() {
  const timeline = [
    {
      year: "2024",
      title: "Started BCA",
      description: "Started Bachelor of Computer Applications. Learned programming languages c & c++."
    },
    {
      year: "2025",
      title: "Frontend Development",
      description: "Learned HTML, CSS and JavaScript.  RDBMS using MYSQL ."
    },
    {
      year: "2026",
      title: "Programming Skills",
      description: "Worked with Java, Python,  VB.NET & ASP.NET, PHP and React."
    },
    {
      title: "website Development",
      description: "Built Portfolio Website and Hospital Management System."
    },
    {
      year: "2027",
      title: "Future Goal",
      description: "Planning to pursue MCA and become a Software Engineer."
    }
  ];

  return (
    <section
      id="timeline"
      className="timeline-section animate-on-scroll"
    >
      <p className="section-subtitle">My Journey</p>

      <h2>Experience Timeline</h2>

      <div className="timeline">

        {timeline.map((item) => (
          <div
            className="timeline-item"
            key={item.year}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Timeline;