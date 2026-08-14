import { motion } from "framer-motion";

const achievements = [
  {
    number: "01",
    title: "IIT-JAM (Mathematics) Qualifier",
    organization: "Indian Institutes of Technology",
    detail: "All India Rank — 535",
    featured: true,
  },
  {
    number: "02",
    title: "Child Journalist",
    organization: "UNICEF — Bal Mitra Akhbar",
    detail: "2015 — 2017",
    featured: false,
  },
];

const certifications = [
  {
    number: "01",
    title: "Microsoft SQL Server Professional Certificate",
    issuer: "Coursera",
    category: "SQL & Database",
  },
  {
    number: "02",
    title: "Machine Learning Introduction for Everyone",
    issuer: "IBM",
    category: "Machine Learning",
  },
  {
    number: "03",
    title: "SQL to Work: The TechMart Challenge",
    issuer: "Coursera",
    category: "SQL & Analytics",
  },
  {
    number: "04",
    title: "Excel",
    issuer: "Coursera",
    category: "Data & Productivity",
  },
];

function AchievementIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3l2.3 4.65L19.5 8.4l-3.75 3.65.89 5.15L12 14.8l-4.64 2.4.89-5.15L4.5 8.4l5.2-.75L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 8h8M8 12h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M12 15l1 2 2 .3-1.5 1.4.4 2.1L12 20l-1.9.8.4-2.1L9 17.3l2-.3 1-2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <motion.div
          className="section-heading achievements-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">
            ACHIEVEMENTS & CERTIFICATIONS
          </p>

          <h2>
            Evidence of academic strength
            <br />
            <span>and continuous technical growth.</span>
          </h2>

          <p className="achievements-intro">
            Academic achievement and structured technical learning across
            mathematics, SQL, analytics, and machine learning.
          </p>
        </motion.div>

        <div className="achievements-layout">
          <motion.div
            className="achievement-column"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="achievement-column-header">
              <div className="achievement-icon">
                <AchievementIcon />
              </div>

              <div>
                <span>01</span>
                <h3>Achievements</h3>
              </div>
            </div>

            <div className="achievement-list">
              {achievements.map((item) => (
                <article
                  key={item.number}
                  className={`achievement-item ${
                    item.featured ? "achievement-item-featured" : ""
                  }`}
                >
                  <span className="achievement-item-number">
                    {item.number}
                  </span>

                  <div>
                    <div className="achievement-item-title-row">
                      <h4>{item.title}</h4>

                      {item.featured && (
                        <span className="achievement-featured-label">
                          DISTINCTION
                        </span>
                      )}
                    </div>

                    <p>{item.organization}</p>

                    <span className="achievement-detail">
                      {item.detail}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="certificate-column"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="achievement-column-header">
              <div className="achievement-icon">
                <CertificateIcon />
              </div>

              <div>
                <span>02</span>
                <h3>Certifications</h3>
              </div>
            </div>

            <div className="certificate-list">
              {certifications.map((certificate) => (
                <article
                  key={certificate.number}
                  className="certificate-item"
                >
                  <div className="certificate-number">
                    {certificate.number}
                  </div>

                  <div className="certificate-content">
                    <h4>{certificate.title}</h4>

                    <div className="certificate-meta">
                      <span>{certificate.issuer}</span>
                      <span>{certificate.category}</span>
                    </div>
                  </div>

                  <span className="certificate-arrow">↗</span>
                </article>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="learning-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <span className="learning-label">
              CONTINUOUS LEARNING
            </span>

            <p>
              Expanding expertise across statistics, machine learning,
              analytics, databases, and intelligent systems.
            </p>
          </div>

          <span className="learning-mark">04 / 04</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;