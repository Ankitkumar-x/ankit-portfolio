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
        d="M15 22v-4.6c0-1.2-.4-2.1-1.1-2.7 3.5-.4 7.1-1.7 7.1-7.6 0-1.7-.6-3.1-1.6-4.2.2-.4.7-2-.2-4.1 0 0-1.3-.4-4.2 1.6A14.6 14.6 0 0 0 12 0a14.6 14.6 0 0 0-3.8.5C5.3-1.5 4-1.1 4-1.1c-.9 2.1-.3 3.7-.2 4.1-1 1.1-1.6 2.5-1.6 4.2 0 5.9 3.6 7.2 7.1 7.6-.5.4-.9 1.1-1 2.1-.9.4-3.1 1.1-4.5-1.3-.3-.5-1.1-1.7-2.4-1.7-1 0-1.7.9 0 1.3 1.7.4 2.3 2 2.3 2 1.4 2.3 3.5 1.6 4.4 1.2 0 .8 0 1.7 0 2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        {/* Main contact message */}
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
              aria-label="Start a conversation by email"
            >
              Start a Conversation
              <ArrowUpRightIcon />
            </a>

            <a
              href={profile.social.linkedin}
              className="contact-secondary-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Ankit Kumar's LinkedIn profile"
            >
              LinkedIn
              <ArrowUpRightIcon />
            </a>
          </div>
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          {/* Email */}
          <a
            href={profile.social.email}
            className="contact-link-card"
            aria-label="Contact Ankit Kumar by email"
          >
            <div className="contact-link-icon">
              <MailIcon />
            </div>

            <div>
              <span>Email</span>
              <strong>Contact Me</strong>
            </div>

            <ArrowUpRightIcon />
          </a>

          {/* GitHub */}
          <a
            href={profile.social.github}
            className="contact-link-card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ankit Kumar's GitHub profile"
          >
            <div className="contact-link-icon">
              <GithubIcon />
            </div>

            <div>
              <span>GitHub</span>
              <strong>View GitHub Profile</strong>
            </div>

            <ArrowUpRightIcon />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.social.linkedin}
            className="contact-link-card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ankit Kumar's LinkedIn profile"
          >
            <div className="contact-link-icon">
              <LinkedinIcon />
            </div>

            <div>
              <span>LinkedIn</span>
              <strong>View LinkedIn Profile</strong>
            </div>

            <ArrowUpRightIcon />
          </a>
        </motion.div>

        {/* Footer row */}
        <div className="contact-bottom">
          <div className="contact-brand">
            <strong>ANKIT KUMAR</strong>
            <span>DATA · ML · AI</span>
          </div>

          <div className="contact-bottom-center">
            <span>Mathematics &amp; Scientific Computing</span>
            <span>National Institute of Technology, Warangal</span>
          </div>

          <div className="contact-bottom-right">
            <span>© 2026</span>

            <a
              href="#home"
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;