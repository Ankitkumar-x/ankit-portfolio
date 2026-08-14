import { motion } from "framer-motion";
import profile from "../data/profile";

function ArrowUpRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.85 9.71.5.1.68-.22.68-.49v-1.75c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.37 1.12 2.95.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.16 9.16 0 0 1 12 7.36c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.92v2.84c0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="8"
        width="4"
        height="13"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="5"
        cy="4"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M11 21V12.5a4.5 4.5 0 0 1 9 0V21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11 16h9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-main"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-heading-row">
            <p className="contact-kicker">LET'S CONNECT</p>
            <span className="contact-index">08 / 08</span>
          </div>

          <h2>
            Let's build something
            <br />
            <span>meaningful with data.</span>
          </h2>

          <p className="contact-description">
            I am open to meaningful opportunities, technical collaborations,
            and conversations around data science, machine learning,
            intelligent systems, and applied problem solving.
          </p>

          <div className="contact-actions">
            <a
              href={profile.social.email}
              className="contact-primary-button"
            >
              Start a Conversation
              <ArrowUpRightIcon />
            </a>

            <a
              href={profile.social.linkedin}
              className="contact-secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRightIcon />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          <a
            href={profile.social.email}
            className="contact-link-card"
          >
            <div className="contact-link-icon">
              <MailIcon />
            </div>

            <div>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>

            <ArrowUpRightIcon />
          </a>

          <a
            href={profile.social.github}
            className="contact-link-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-link-icon">
              <GithubIcon />
            </div>

            <div>
              <span>GitHub</span>
              <strong>github.com/Ankitkumar-x</strong>
            </div>

            <ArrowUpRightIcon />
          </a>

          <a
            href={profile.social.linkedin}
            className="contact-link-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-link-icon">
              <LinkedinIcon />
            </div>

            <div>
              <span>LinkedIn</span>
              <strong>linkedin.com/in/ankit-kumar-153239360</strong>
            </div>

            <ArrowUpRightIcon />
          </a>

          <div className="contact-link-card contact-location">
            <div className="contact-link-icon contact-location-mark">
              ◎
            </div>

            <div>
              <span>Location</span>
              <strong>Warangal, Telangana, India</strong>
            </div>
          </div>
        </motion.div>

        <div className="contact-bottom">
          <div className="contact-brand">
            <strong>ANKIT KUMAR</strong>
            <span>DATA · ML · AI</span>
          </div>

          <div className="contact-bottom-center">
            <span>Mathematics & Scientific Computing</span>
            <span>National Institute of Technology, Warangal</span>
          </div>

          <div className="contact-bottom-right">
            <span>© 2026</span>
            <a href="#home" aria-label="Back to top">
              ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;