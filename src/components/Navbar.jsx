import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [darkMode, setDarkMode] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    if (darkMode) {

      document.body.classList.remove("light-mode");

    } else {

      document.body.classList.add("light-mode");

    }

  }, [darkMode]);

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      let current = "";

      sections.forEach((section) => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.getAttribute("id");
        }

      });

      if (current) {
        setActiveSection(current);
      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="logo">
        Narendra Dodke
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a
            href="#home"
            className={activeSection==="home" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={activeSection==="about" ? "active-link" : ""}
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={activeSection==="skills" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={activeSection==="projects" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#certificates"
            className={activeSection==="certificates" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Certificates
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={activeSection==="contact" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>

      </ul>

      <div className="navbar-actions">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;