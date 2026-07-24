import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
      <p className="section-subtitle">
        Get In Touch
      </p>

      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Work Together</h3>

          <p>
            If you have any questions, project ideas or opportunities,
            feel free to contact me.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <p>narendradodke@gmail.com</p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>+91 7470746631</p>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <p>India</p>
          </div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message"
            required
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;