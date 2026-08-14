import { motion } from "framer-motion";
import profile from "../data/profile";

function ArrowUpRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m8 10 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.85 9.71.5.1.68-.22.68-.49v-1.75c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.37 1.12 2.95.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.16 9.16 0 0 1 12 7.36c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.92v2.84c0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        d="M11 21v-8.5a4.5 4.5 0 0 1 9 0V21"
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
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m7 14 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-eyebrow-line" />
            <span>{profile.headline}</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Hi, I'm{" "}
            <span className="hero-title-accent">
              {profile.firstName}
            </span>
            <br />
            {profile.lastName}.
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            <span className="hero-role-main">Aspiring Data Scientist</span>
            <span className="hero-role-separator">/</span>
            <span>ML & AI</span>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            {profile.education}
            <span className="hero-dot">•</span>
            {profile.institution}
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
          >
            {profile.description}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <a href="#projects" className="hero-primary-button">
              Explore My Work
              <ArrowUpRightIcon />
            </a>

            <a
              href={profile.resumeUrl}
              className="hero-secondary-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Ankit Kumar's resume"
            >
              Resume
              <DownloadIcon />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.52 }}
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a href={profile.social.email} aria-label="Email">
              <MailIcon />
            </a>

            <span className="hero-social-label">
              Based in Warangal, India
            </span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          <div className="hero-visual-orbit hero-orbit-one" />
          <div className="hero-visual-orbit hero-orbit-two" />

          <div className="hero-card">
            <div className="hero-card-top">
              <span>ANKIT.K</span>
              <span>01</span>
            </div>

            <div className="hero-card-center">
              <div className="hero-card-math">∫</div>

              <div className="hero-card-lines">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-card-model">
                <small>MODEL</small>
                <strong>ML</strong>
              </div>
            </div>

            <div className="hero-card-bottom">
              <span>MATHEMATICS</span>
              <span>DATA</span>
              <span>INTELLIGENCE</span>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-top">
            <span>01</span>
            <strong>DATA</strong>
          </div>

          <div className="hero-floating-card hero-floating-bottom">
            <span>02</span>
            <strong>MODEL</strong>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <ArrowDownIcon />
      </a>
    </section>
  );
}

export default Hero;