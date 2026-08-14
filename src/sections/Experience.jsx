import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    period: "Project Contribution",
    title: "NITW Placement Portal",
    organization: "National Institute of Technology, Warangal",
    role: "Project Lead & Developer",
    featured: true,

    description:
      "Participated in and led the design and development of a real-time college placement portal, contributing to system architecture, database design, placement workflows, application management, and placement analytics.",

    contributions: [
      "Designed normalized data structures for student, recruiter, company, application, and placement information.",
      "Contributed to role-based workflows for students, recruiters, and administrators.",
      "Worked on eligibility processing, application tracking, and placement statistics modules.",
      "Integrated frontend interfaces with backend services and persistent database systems.",
      "Contributed to system architecture and workflow design for structured placement operations.",
      "Transferred the project to another contributor after completing my primary development and leadership responsibilities.",
    ],
  },

  {
    number: "02",
    period: "2024",
    title: "Mathematics Society",
    organization: "National Institute of Technology, Warangal",
    role: "Member",
    featured: false,

    description:
      "Participated in the Mathematics Society at NIT Warangal, contributing to an academic environment centered around mathematics and quantitative problem solving.",

    contributions: [],
  },

  {
    number: "03",
    period: "2024 — 2026",
    title: "National Service Scheme",
    organization: "National Institute of Technology, Warangal",
    role: "Member",
    featured: false,

    description:
      "Participated as a member of the National Service Scheme, contributing to community-oriented activities alongside academic pursuits.",

    contributions: [],
  },

  {
    number: "04",
    period: "2019 — 2021",
    title: "National Service Scheme",
    organization: "St. Columba’s College, Hazaribagh",
    role: "Member",
    featured: false,

    description:
      "Participated as a member of the National Service Scheme, developing discipline, teamwork, structured responsibility, and collaborative leadership.",

    contributions: [],
  },

  {
    number: "05",
    period: "2015 — 2017",
    title: "Child Journalist",
    organization: "UNICEF — Bal Mitra Akhbar",
    role: "Child Journalist",
    featured: false,

    description:
      "Participated as a child journalist with UNICEF's Bal Mitra Akhbar initiative, developing early experience in communication, observation, and structured content creation.",

    contributions: [],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div
          className="section-heading experience-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">LEADERSHIP & EXPERIENCE</p>

          <h2>
            From technical contribution
            <br />
            <span>to responsibility and leadership.</span>
          </h2>

          <p className="experience-intro">
            Technical project leadership alongside academic, community, and
            extracurricular responsibilities that have shaped how I work with
            people, systems, and complex problems.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.number}-${experience.title}`}
              className={`experience-item ${
                experience.featured ? "experience-item-featured" : ""
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.58,
                delay: index * 0.05,
              }}
            >
              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-period">
                {experience.period}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <div className="experience-role-label">
                      {experience.role}
                    </div>

                    <h3>{experience.title}</h3>

                    <p className="experience-organization">
                      {experience.organization}
                    </p>
                  </div>

                  {experience.featured && (
                    <span className="experience-featured">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                {experience.contributions.length > 0 && (
                  <div className="experience-contributions">
                    {experience.contributions.map((contribution) => (
                      <div
                        key={contribution}
                        className="experience-contribution"
                      >
                        <span className="experience-dot" />
                        <span>{contribution}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;