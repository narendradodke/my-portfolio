function Stats() {
  const stats = [
    { number: 2, suffix: "+", title: "Projects" },
    { number: 10, suffix: "+", title: "Skills" },
    { number: 1, suffix: "+", title: "Certificates" },
    { number: 3, suffix: "+", title: "Years Learning" },
  ];

  return (
    <section className="stats-section">
      <p className="section-subtitle">Portfolio Stats</p>

      <h2>My Journey in Numbers</h2>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>
              {item.number}
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;