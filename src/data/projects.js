const GITHUB_PROFILE = "https://github.com/Ankitkumar-x";

const projects = [
  {
    id: "big-mart-sales-prediction",
    number: "01",
    title: "Big Mart Sales Prediction",
    category: "Machine Learning",
    status: "Completed",
    featured: true,

    shortDescription:
      "An end-to-end retail demand prediction workflow combining data preprocessing, exploratory analysis, feature engineering, model benchmarking, cross-validation, and hyperparameter optimization.",

    problem:
      "Build a predictive modeling system capable of learning relationships between product, outlet, and historical attributes to estimate outlet-level sales and identify the factors influencing prediction performance.",

    approach: [
      "Performed data quality assessment, missing-value treatment, categorical preprocessing, and structured exploratory analysis.",
      "Engineered predictive variables from outlet characteristics, product attributes, and outlet-age information.",
      "Established baseline regression performance before introducing ensemble-based models.",
      "Benchmarked Linear Regression, Random Forest, and XGBoost using regression-oriented evaluation metrics.",
      "Applied cross-validation and Grid Search to optimize model hyperparameters and improve generalization.",
      "Analyzed feature influence to connect model behavior with retail sales drivers.",
    ],

    pipeline: [
      "Data Ingestion",
      "Data Quality Assessment",
      "Data Cleaning",
      "EDA",
      "Feature Engineering",
      "Baseline Modeling",
      "Model Benchmarking",
      "Cross-Validation",
      "Hyperparameter Optimization",
      "Model Evaluation",
      "Feature Interpretation",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    github: GITHUB_PROFILE,
  },

  {
    id: "data-analyst-ai-chatbot",
    number: "02",
    title: "Data Analyst AI Chatbot",
    category: "AI / Data Analytics",
    featured: true,


    shortDescription:
      "An AI-powered conversational analytics platform that interprets natural-language data questions, orchestrates structured analytical workflows, and delivers validated, interpretable insights.",

    problem:
      "Bridge the gap between natural-language business questions and technical data analysis by enabling users to explore and analyze structured data without manually designing queries, computations, or exploratory workflows.",

  
    approach: [
      "Developed an LLM-powered AI Data Analyst that converts natural-language questions into executable analytical workflows, enabling users to query structured datasets without manually writing SQL or Python code.",
      "Engineered an agentic data-analysis pipeline integrating dataset profiling, function/tool calling, Pandas computation, statistical analysis, filtering, ranking, and multi-step reasoning for context-aware results.",
      "Implemented analytical operations including aggregation, Top-N analysis, group comparison, percentage contribution, correlation analysis, conditional filtering, time-series analysis, and comparative insights.",
      "Built intent-driven Plotly visualization generation supporting bar, line, pie, scatter, and metric charts, with visualization selection based on analytical intent.",
      "Integrated conversational memory, schema validation, numerical/categorical/date detection, missing-value analysis, invalid-query recovery, and prompt-engineering constraints for reliable multi-turn analytics and grounded insights."
    ],


    pipeline: [
      "User Question",
      "Intent Understanding",
      "Data Context & Schema",
      "Analysis Planning",
      "Query / Computation Generation",
      "Execution",
      "Result Validation",
      "Insight & Visualization Generation",
      "Natural-Language Response",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "FastAPI",
      "React",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Natural Language Processing",
      "Plotly",
      "Data Analysis",
      "Statistical Analysis",
      "AI / Machine Learning",
    ],

    github: GITHUB_PROFILE,
  },

  {
    id: "nitw-placement-portal",
    number: "03",
    title: "NITW Placement Portal",
    category: "Full-Stack Systems",
    status: "Led & Handed Over",
    featured: true,

    shortDescription:
      "A real-time college placement platform developed around structured student and recruiter workflows, database-backed applications, eligibility processing, authentication, and placement analytics.",

    problem:
      "Develop a centralized platform capable of managing student profiles, company information, eligibility rules, applications, placement workflows, and analytical placement statistics in a structured and scalable system.",

    approach: [
      "Participated in and led the architecture and implementation of major placement-platform components.",
      "Designed normalized data structures for students, companies, recruiters, applications, eligibility, and placement records.",
      "Implemented role-based workflows for students, recruiters, and administrators.",
      "Developed application and eligibility workflows supporting structured placement operations.",
      "Integrated frontend interfaces with backend APIs and persistent database services.",
      "Worked on application tracking and placement-statistics modules for data-driven monitoring.",
      "After completing my primary development and leadership responsibilities, handed over the project to another contributor for continuation.",
    ],

    pipeline: [
      "Requirement Analysis",
      "System Architecture",
      "Data Modeling",
      "Authentication",
      "Role-Based Access",
      "Eligibility Processing",
      "Application Management",
      "Placement Analytics",
      "Project Handover",
    ],

    technologies: [
      "Python",
      "Django",
      "React",
      "Vite",
      "Node.js",
      "MongoDB",
      "SQL",
      "Bootstrap",
    ],

    github: GITHUB_PROFILE,
  },

  {
    id: "walmart-sales-analysis",
    number: "04",
    title: "Walmart Sales Analysis",
    category: "Data Analytics",
    status: "Completed",
    featured: true,

    shortDescription:
      "An analytical workflow combining relational SQL analysis, Python-based temporal exploration, KPI analysis, and visualization to identify retail performance and seasonality patterns.",

    problem:
      "Convert transactional retail data into structured business insights around store performance, departmental trends, seasonality, holiday effects, and revenue behavior.",

    approach: [
      "Prepared and validated the analytical dataset for consistent relational querying and downstream analysis.",
      "Developed analytical SQL workflows using joins, grouping, aggregation, and business-oriented calculations.",
      "Analyzed store and departmental performance to identify important revenue and sales patterns.",
      "Used Python and Pandas for temporal analysis of weekly sales behavior.",
      "Investigated seasonal and holiday-related variations in sales performance.",
      "Built visualizations to communicate trends and convert analytical findings into actionable business insights.",
    ],

    pipeline: [
      "Data Preparation",
      "SQL Modeling",
      "Joins & Aggregation",
      "KPI Analysis",
      "Store Analysis",
      "Temporal Analysis",
      "Seasonality Analysis",
      "Visualization",
      "Business Insights",
    ],

    technologies: [
      "Python",
      "Pandas",
      "MySQL",
      "Advanced SQL",
      "Matplotlib",
      "Data Visualization",
    ],

    github: GITHUB_PROFILE,
  },

  {
    id: "library-management-system",
    number: "05",
    title: "Library Management System",
    category: "Database Engineering",
    status: "Completed",
    featured: false,

    shortDescription:
      "A relational database application designed around normalized data modeling, transactional workflows, advanced SQL, automation, and analytical reporting.",

    problem:
      "Design a reliable database-backed system that preserves data integrity while supporting library operations, transactional processing, automated calculations, and management reporting.",

    approach: [
      "Designed a normalized relational schema for books, members, and lending transactions.",
      "Implemented CRUD workflows while maintaining relational consistency and integrity constraints.",
      "Developed advanced SQL operations using joins, CTEs, aggregations, and stored procedures.",
      "Automated operational logic including fine calculation and revenue-related processing.",
      "Integrated Python for data processing, workflow automation, and report generation.",
      "Generated analytical outputs to support operational monitoring and library performance analysis.",
    ],

    pipeline: [
      "Requirement Analysis",
      "Conceptual Data Modeling",
      "Relational Schema Design",
      "Normalization",
      "SQL Implementation",
      "CRUD Operations",
      "Stored Procedure Automation",
      "Python Integration",
      "Reporting",
    ],

    technologies: [
      "MySQL",
      "Advanced SQL",
      "Stored Procedures",
      "Python",
      "Relational Database Design",
      "Data Visualization",
    ],

    github: GITHUB_PROFILE,
  },

];

export default projects;