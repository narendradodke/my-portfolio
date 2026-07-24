function Certificates() {
  const certificates = [
    {
      title: "Web Development Certificate",
      issuer: "Certificate Issuer",
      year: "2025",
      image: "/certificates/web-development.jpg",
    },

    {
      title: "JavaScript Certificate",
      issuer: "Certificate Issuer",
      year: "2025",
      image: "/certificates/javascript.jpg",
    },
  ];

  return (
    <section id="certificates" className="certificates-section animate-on-scroll">

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

            <img
              src={certificate.image}
              alt={certificate.title}
            />

            <div className="certificate-content">

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.year}</span>

              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;