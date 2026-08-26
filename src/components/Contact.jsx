import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_uqljlqi",
        "template_m1901td",
        form.current,
        "i9266VQqQPx13ibuo"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section animate-on-scroll">
      <p className="section-subtitle">Get In Touch</p>
      <h2>Contact Me</h2>

      <div className="contact-split-grid">
        {/* Left Column: Contact Info */}
        <div className="contact-info-col">
          <h3 className="contact-info-title">Let's Work Together</h3>
          <p className="contact-info-desc">
            If you have any questions, project ideas or opportunities, feel free
            to contact me.
          </p>

          <div className="contact-cards-group">
            <div className="contact-info-card-v2">
              <div className="contact-icon-box-v2 icon-purple">
                <FaEnvelope />
              </div>
              <div className="contact-card-text">
                <label>Email Me</label>
                <p>narendradodke@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card-v2">
              <div className="contact-icon-box-v2 icon-blue">
                <FaPhoneAlt />
              </div>
              <div className="contact-card-text">
                <label>Call Me</label>
                <p>+91 7470746631</p>
              </div>
            </div>

            <div className="contact-info-card-v2">
              <div className="contact-icon-box-v2 icon-cyan">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-card-text">
                <label>Location</label>
                <p>India</p>
              </div>
            </div>

            <div className="contact-info-card-v2">
              <div className="contact-icon-box-v2 icon-green">
                <FaCheckCircle />
              </div>
              <div className="contact-card-text">
                <label>Availability</label>
                <p>Open for Opportunities & Projects</p>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="contact-social-row">
            <a
              href="https://github.com/narendradodke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/naren.dx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/917470746631"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-col">
          <form ref={form} onSubmit={sendEmail} className="contact-form-glass-card">
            <div className="form-group-v2">
              <label>Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="form-input-v2"
              />
            </div>

            <div className="form-group-v2">
              <label>Your Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="form-input-v2"
              />
            </div>

            <div className="form-group-v2">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry / Job Opportunity"
                required
                className="form-input-v2"
              />
            </div>

            <div className="form-group-v2">
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message here..."
                required
                className="form-input-v2"
              />
            </div>

            <button type="submit" className="contact-submit-btn" disabled={loading}>
              <FaPaperPlane />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;