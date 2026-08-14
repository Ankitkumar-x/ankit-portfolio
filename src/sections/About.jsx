import { motion } from "framer-motion";

function MathematicalIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16M4 12h10M4 18h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 16v-4M12 16V8M16 16v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="12"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 19V5M4 19h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8 15l3-4 3 2 5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const focusAreas = [
  {
    title: "Data Science",
    description:
      "Data analysis, feature engineering, predictive modeling, visualization, and extracting actionable insights from structured data.",
    icon: <DataIcon />,
  },
  {
    title: "Machine Learning & AI",
    description:
      "Model development, evaluation, experimentation, and applying mathematical and statistical reasoning to intelligent systems.",
    icon: <AIIcon />,
  },
  {
    title: "Data Analytics & BI",
    description:
      "Advanced SQL, database analysis, KPI analysis, visualization, and transforming data into decision-support insights.",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Mathematical Computing",
    description:
      "Linear algebra, probability, statistics, numerical methods, optimization, and computational problem solving.",
    icon: <MathematicalIcon />,
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          className="section-heading about-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">ABOUT ME</p>

          <h2>
            Mathematics at the foundation.
            <br />
            <span>Data and intelligence in practice.</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p className="about-lead">
              I am an M.Sc. student in Mathematics and Scientific Computing at
              the National Institute of Technology, Warangal, building a
              career at the intersection of mathematics, data science, machine
              learning, and intelligent systems.
            </p>

            <p className="about-text">
              My academic foundation in linear algebra, probability and
              statistics, numerical methods, optimization, and discrete
              mathematics gives me a structured approach to quantitative
              problem solving. I use that foundation to understand data,
              formulate analytical problems, and develop computational
              solutions.
            </p>

            <p className="about-text">
              My practical work spans predictive modeling, data analysis,
              visualization, SQL and database systems, and full-stack
              data-driven applications. I am particularly interested in
              developing solutions that connect rigorous quantitative reasoning
              with practical business and engineering problems.
            </p>
          </motion.div>

          <motion.div
            className="about-focus"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <div className="about-focus-label">
              <span>AREAS OF FOCUS</span>
              <span>01 — 04</span>
            </div>

            {focusAreas.map((area, index) => (
              <div className="focus-item" key={area.title}>
                <div className="focus-icon">{area.icon}</div>

                <div>
                  <div className="focus-item-top">
                    <span className="focus-item-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{area.title}</h3>
                  </div>

                  <p>{area.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          <div className="about-stat">
            <span className="about-stat-number">M.Sc.</span>
            <span className="about-stat-label">
              Mathematics & Scientific Computing
            </span>
          </div>

          <div className="about-stat">
            <span className="about-stat-number">NITW</span>
            <span className="about-stat-label">
              National Institute of Technology, Warangal
            </span>
          </div>

          <div className="about-stat">
            <span className="about-stat-number">2024–26</span>
            <span className="about-stat-label">
              Current academic program
            </span>
          </div>

          <div className="about-stat">
            <span className="about-stat-number">AIR 535</span>
            <span className="about-stat-label">
              IIT-JAM Mathematics qualifier
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;