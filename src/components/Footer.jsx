import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Narendra Dodke</h2>

        <p>
         Web & Software Developer
        </p>

        <div className="social-links">

          <a
            href="https://github.com/narendradodke"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Narendra Dodke. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer