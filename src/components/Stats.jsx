import { useEffect, useState } from "react";
import { FaLaptopCode, FaStar, FaAward, FaCalendarAlt } from "react-icons/fa";

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}</span>;
}

function Stats() {
  const stats = [
    {
      number: 4,
      suffix: "+",
      title: "Projects",
      icon: <FaLaptopCode />,
      accent: "blue",
    },
    {
      number: 25,
      suffix: "+",
      title: "Skills",
      icon: <FaStar />,
      accent: "purple",
    },
    {
      number: 15,
      suffix: "+",
      title: "Certificates",
      icon: <FaAward />,
      accent: "pink",
    },
    {
      number: 3,
      suffix: "+",
      title: "Years Learning",
      icon: <FaCalendarAlt />,
      accent: "green",
    },
  ];

  return (
    <section id="stats" className="stats-section animate-on-scroll">
      {/* Background Glow Blobs */}
      <div className="stats-blob stats-blob-purple"></div>
      <div className="stats-blob stats-blob-blue"></div>

      <div className="scroll-reveal-right">
        <p className="section-subtitle">Portfolio Stats</p>
        <h2>My Journey in Numbers</h2>
      </div>

      <div className="stats-grid-v2">
        {stats.map((item, index) => (
          <div
            className={`stat-card-v2 accent-${item.accent} scroll-reveal-right`}
            key={item.title}
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <div className={`stat-icon-box icon-${item.accent}`}>
              {item.icon}
            </div>

            <h3 className="stat-number-gradient">
              <AnimatedCounter end={item.number} duration={1500} />
              <span>{item.suffix}</span>
            </h3>

            <p className="stat-label-text">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;