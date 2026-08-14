import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../data/skills";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skills.map((item) => item.category)];

  const visibleSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((item) => item.category === activeCategory);

  const isFiltered = activeCategory !== "All";

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-heading skills-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">TECHNICAL CAPABILITIES</p>

          <h2>
            Technical expertise across
            <br />
            <span>data, models and intelligent systems.</span>
          </h2>

          <p className="skills-intro">
            A combination of mathematical reasoning, statistical thinking,
            programming, data analysis, machine learning, and computational
            tools applied to practical problem solving.
          </p>
        </motion.div>

        <motion.div
          className="skills-filter"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`skills-filter-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={`skills-grid ${
              isFiltered ? "skills-grid-filtered" : ""
            }`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {visibleSkills.map((group, index) => (
              <motion.article
                key={group.id}
                className={`skill-group ${
                  isFiltered ? "skill-group-featured" : ""
                }`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <div className="skill-group-header">
                  <div className="skill-index">{group.shortLabel}</div>

                  <div className="skill-group-title">
                    <span className="skill-group-category">
                      {String(
                        skills.findIndex((item) => item.id === group.id) + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3>{group.category}</h3>
                  </div>

                  {isFiltered && (
                    <div className="skill-featured-label">
                      CORE CAPABILITY
                    </div>
                  )}
                </div>

                <div className="skill-group-body">
                  <div className="skill-description-area">
                    <p className="skill-group-description">
                      {group.description}
                    </p>

                    {isFiltered && (
                      <div className="skill-focus-note">
                        <span>FOCUS</span>
                        <p>
                          Applied through academic work, analytical projects,
                          predictive modeling, and practical computational
                          systems.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {isFiltered && (
                  <div className="skill-group-footer">
                    <span>
                      {group.skills.length} technical capabilities
                    </span>

                    <ArrowIcon />
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="skills-bottom-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <span className="skills-bottom-label">CORE APPROACH</span>

            <p>
              Mathematical reasoning → Data understanding → Modeling →
              Evaluation → Actionable insight
            </p>
          </div>

          <div className="skills-bottom-right">
            <span className="skills-bottom-mark">
              {String(skills.length).padStart(2, "0")} CATEGORIES
            </span>

            <span className="skills-bottom-arrow">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;