import { motion } from "framer-motion";
import projects from "../data/projects";

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 12h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m13 7 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 4h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10 14L20 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          className="section-heading projects-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">SELECTED WORK</p>

          <h2>
            Engineering solutions
            <br />
            <span>from data to intelligent systems.</span>
          </h2>

          <p className="projects-intro">
            A selection of analytical, machine-learning, database, and
            intelligent-system projects demonstrating how I approach problems
            from data understanding through implementation and evaluation.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
              }}
            >
              <div className="project-card-top">
                <div className="project-number-group">
                  <span className="project-number">
                    {project.number}
                  </span>

                  {project.featured && (
                    <span className="project-featured-label">
                      FEATURED
                    </span>
                  )}
                </div>

                <div className="project-meta">
                  <span>{project.category}</span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-main">
                <div className="project-title-area">
                  <h3>{project.title}</h3>

                  <p className="project-short-description">
                    {project.shortDescription}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <ArrowIcon />
                  </a>
                </div>

                <div className="project-details">
                  <div className="project-detail-block">
                    <span className="project-detail-label">
                      PROBLEM
                    </span>

                    <p>{project.problem}</p>
                  </div>

                  <div className="project-detail-block">
                    <span className="project-detail-label">
                      APPROACH
                    </span>

                    <div className="project-steps">
                      {project.approach.map((step) => (
                        <div
                          key={step}
                          className="project-step"
                        >
                          <span className="project-step-dot" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-detail-block">
                    <span className="project-detail-label">
                      TECHNICAL PIPELINE
                    </span>

                    <div className="project-pipeline">
                      {project.pipeline.map((stage, stageIndex) => (
                        <span
                          key={stage}
                          className="pipeline-stage"
                        >
                          {stage}

                          {stageIndex <
                            project.pipeline.length - 1 && (
                            <span className="pipeline-arrow">
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-detail-block project-tech-block">
                    <span className="project-detail-label">
                      TECHNOLOGIES
                    </span>

                    <div className="project-tags">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="project-tag"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card-footer">
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub profile`}
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;