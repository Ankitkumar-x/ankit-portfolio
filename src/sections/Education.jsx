import { motion } from "framer-motion";

const education = [
  {
    year: "2024 — 2026",
    degree: "M.Sc. — Mathematics and Scientific Computing",
    institution: "National Institute of Technology, Warangal",
    type: "Postgraduate",
    highlight: true,
  },
  {
    year: "2022 — 2023",
    degree: "ITI — National Council for Vocational Training",
    institution: "Gautam Buddha Pvt. ITI, Hazaribagh",
    type: "Vocational Qualification",
    highlight: false,
  },
  {
    year: "2019 — 2022",
    degree: "B.Sc. — Mathematics",
    institution: "St. Columba’s College, Hazaribagh",
    type: "Undergraduate",
    highlight: true,
  },
  {
    year: "2017 — 2019",
    degree: "Higher Secondary Examination",
    institution: "Patel Inter College Masipiri, Hazaribagh",
    type: "JAC Ranchi",
    highlight: false,
  },
  {
    year: "2017",
    degree: "Matriculation",
    institution: "Zila School, Giridih",
    type: "JAC Ranchi",
    highlight: false,
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div
          className="section-heading education-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">EDUCATION</p>

          <h2>
            An academic foundation
            <br />
            <span>built around mathematics.</span>
          </h2>

          <p className="education-intro">
            A progression from foundational education to mathematics and
            scientific computing, forming the quantitative base behind my
            work in data science and machine learning.
          </p>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.degree}`}
              className={`education-item ${
                item.highlight ? "education-item-highlight" : ""
              } ${item.status ? "education-item-incomplete" : ""}`}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
            >
              <div className="education-marker">
                <span />
              </div>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">
                <div className="education-top">
                  <div>
                    <div className="education-type">
                      {item.type}
                    </div>

                    <h3>{item.degree}</h3>

                    <p className="education-institution">
                      {item.institution}
                    </p>
                  </div>

                  {item.status && (
                    <span className="education-status">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="education-summary"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div>
            <span>ACADEMIC FOCUS</span>
            <strong>
              Mathematics · Statistics · Scientific Computing
            </strong>
          </div>

          <div>
            <span>CURRENT PROGRAM</span>
            <strong>NIT Warangal · 2024 — 2026</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;