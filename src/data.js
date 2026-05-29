export const navItems = [
  { label: "Strengths", href: "#bring" },
  { label: "AI Edge", href: "#ai-edge" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#work" },
  { label: "Skills", href: "#skills" },
];

export const profileItems = [
  {
    label: "Platform stack",
    value: "AWS, Snowflake, dbt, Python, SQL, PySpark",
  },
  {
    label: "Engineering scope",
    value: "Batch, streaming, orchestration, APIs, validation, monitoring",
  },
  {
    label: "Platform focus",
    value: "Governance, reliability, stakeholder usability, cost-aware design",
  },
];

export const summaries = [
  {
    title: "Platform Engineering",
    body:
      "I design data movement and transformation systems with production constraints in mind: source readiness, orchestration, schema drift, validation, observability, and compute efficiency.",
  },
  {
    title: "Analytics Engineering",
    body:
      "I translate fragmented operational data into consistent warehouse models, dbt layers, and semantic structures that give analysts and business users cleaner paths to trusted reporting.",
  },
  {
    title: "AI-Ready Data Products",
    body:
      "I extend governed data platforms with semantic search, Snowflake Cortex, natural-language analytics, and LLM-supported workflows where they improve access, speed, or data clarity.",
  },
];

export const strengths = [
  {
    title: "Platform Ownership",
    body:
      "Build and maintain pipelines with clear orchestration, operational visibility, recovery paths, and supportable designs.",
  },
  {
    title: "Data Quality Mindset",
    body:
      "Use validation checks, reconciliations, schema awareness, and documented assumptions to keep downstream trust high.",
  },
  {
    title: "Cloud-Native Engineering",
    body:
      "Design batch and streaming workflows across AWS services, Snowflake, and containerized APIs for scalable delivery.",
  },
  {
    title: "AI-Ready Analytics",
    body:
      "Prepare semantic layers, governed datasets, and retrieval patterns that make natural-language analytics more reliable.",
  },
  {
    title: "Business-Facing Data Products",
    body:
      "Translate source complexity into usable models, metrics, and datasets that support reporting and decision-making.",
  },
];

export const aiCapabilities = [
  {
    title: "Agentic Coding Workflows",
    body:
      "Testing tools such as Codex and Claude Code for implementation planning, repository-aware edits, debugging, test generation, and code review support.",
  },
  {
    title: "AI-Assisted Data Engineering",
    body:
      "Evaluating where AI can speed up pipeline development, documentation, SQL iteration, data quality checks, and operational troubleshooting.",
  },
  {
    title: "Semantic Search & NL Analytics",
    body:
      "Applying Snowflake Cortex patterns for search, natural-language querying, similarity scoring, and governed LLM-assisted analytics experiences.",
  },
  {
    title: "Modern Data Integration",
    body:
      "Tracking Snowflake Openflow and modern ingestion approaches for structured, unstructured, batch, and streaming data movement.",
  },
];

export const caseStudies = [
  {
    number: "01",
    title: "Governed Commercial Data Products",
    tags: ["Snowflake", "dbt", "SQL", "Cortex"],
    story: [
      {
        label: "Problem",
        text:
          "Commercial data lived across Salesforce, SAP, GA4, IQVIA, and related systems, making reporting harder to govern and reconcile.",
      },
      {
        label: "Approach",
        text:
          "Built Snowflake ingestion and dbt transformation layers with standardized business logic, defined grain, and reusable data models.",
      },
      {
        label: "Result",
        text:
          "Improved trusted reporting, enabled richer commercial analytics, and strengthened fuzzy matching with Snowflake AI functions.",
      },
    ],
  },
  {
    number: "02",
    title: "Nightly ETL and ML Experimentation Stack",
    tags: ["AWS Glue", "Step Functions", "Spark", "SageMaker"],
    story: [
      {
        label: "Problem",
        text:
          "Batch processing and experimentation needed a repeatable workflow with validation and predictable service-level timing.",
      },
      {
        label: "Approach",
        text:
          "Connected Glue, Step Functions, Lambda, Spark, SageMaker, and Great Expectations into a nightly processing stack.",
      },
      {
        label: "Result",
        text:
          "Reduced batch latency by 40% while keeping workload completion under 30 minutes.",
      },
    ],
  },
  {
    number: "03",
    title: "Schema-Aware Streaming Ingestion",
    tags: ["Kinesis", "Lambda", "SQS", "DynamoDB"],
    story: [
      {
        label: "Problem",
        text:
          "Streaming ingestion was vulnerable to malformed events, congestion, and downstream reliability issues.",
      },
      {
        label: "Approach",
        text:
          "Designed event-driven ingestion using Kinesis, Lambda, SQS, DynamoDB, real-time normalization, and DLQ support.",
      },
      {
        label: "Result",
        text:
          "Reduced ingestion failures by 60% and improved low-latency availability for analytics consumers.",
      },
    ],
  },
  {
    number: "04",
    title: "Warehouse Modeling and Performance",
    tags: ["Redshift", "Snowflake", "PySpark", "Docker"],
    story: [
      {
        label: "Problem",
        text:
          "Analytics workloads needed cleaner warehouse models, faster query response, and fewer downstream data errors.",
      },
      {
        label: "Approach",
        text:
          "Built dimensional models in Redshift and Snowflake, added PySpark validation workflows, and exposed services through Flask and Docker APIs.",
      },
      {
        label: "Result",
        text:
          "Improved query performance by 40% and reduced downstream data errors by 35%.",
      },
    ],
  },
];

export const experiences = [
  {
    period: "Aug 2025 - Present",
    company: "Boston Scientific Corporation",
    location: "Marlborough, MA",
    note: "Consultant via Tata Consultancy Services Ltd",
    title: "Data & Analytics Engineer",
    focus: "Commercial analytics, Snowflake, dbt, Cortex",
    summary:
      "Engineering Snowflake-based ingestion and transformation pipelines that bring together Salesforce, SAP, GA4, IQVIA, and related enterprise datasets into governed data products for reporting, analytics, and AI-enabled exploration.",
    points: [
      "Developed dbt transformation layers that consolidate multi-source business logic and improve dataset usability.",
      "Enhanced matching and reconciliation pipelines with fuzzy matching, Snowflake AI_SIMILARITY, and AI_COMPLETE.",
      "Defined semantic layer grain across business workflows to improve natural-language SQL generation and insight quality.",
      "Built Airflow-trigger patterns with Lambda and EventBridge to monitor source readiness and run dependent dbt jobs.",
    ],
  },
  {
    period: "Dec 2023 - May 2025",
    company: "University of New Haven",
    location: "West Haven, CT",
    title: "Graduate Research Assistant - Data Science",
    focus: "AWS labs, ETL automation, streaming, applied ML",
    summary:
      "Delivered hands-on instruction and supported applied data engineering work across distributed systems, AWS analytics services, NLP automation, and scalable batch and streaming pipeline patterns.",
    points: [
      "Guided students through production-oriented labs using AWS Glue, Redshift, EMR, Python, Spark, Hadoop, and MapReduce.",
      "Automated transcript evaluation with Tesseract OCR and spaCy NLP, reducing manual processing time by 66%.",
      "Built a nightly ETL and experimentation stack with Glue, Step Functions, Lambda, Spark, SageMaker, and Great Expectations.",
      "Implemented schema-aware Kinesis ingestion with DLQ support and real-time normalization to reduce failures and congestion.",
    ],
  },
  {
    period: "Aug 2020 - Aug 2023",
    company: "Tata Consultancy Services Ltd",
    location: "Mumbai, India",
    title: "Systems Engineer - Data Engineer",
    focus: "ETL pipelines, warehouses, APIs, observability",
    summary:
      "Built production-grade ETL workflows, warehouse models, PySpark transformations, microservices, and event-driven ingestion systems serving large-scale analytics and real-time business consumption.",
    points: [
      "Processed 10M+ records per day using AWS Glue, Lambda, and Step Functions across multiple data domains.",
      "Optimized Redshift and Snowflake dimensional models, improving query performance by 40%.",
      "Developed PySpark workflows with Great Expectations checks, reducing downstream data errors by 35%.",
      "Built Flask and Docker REST services for on-demand data extraction and ML inference.",
    ],
  },
];

export const skills = [
  ["AWS Glue", "cloud"],
  ["Lambda", "cloud"],
  ["S3", "cloud"],
  ["EMR", "cloud"],
  ["Kinesis", "cloud"],
  ["SQS", "cloud"],
  ["Step Functions", "cloud"],
  ["Snowflake", "cloud"],
  ["Terraform", "cloud"],
  ["Docker", "cloud"],
  ["Python", "data"],
  ["SQL", "data"],
  ["PySpark", "data"],
  ["Pandas", "data"],
  ["NumPy", "data"],
  ["dbt", "data"],
  ["Data Modeling", "data"],
  ["Great Expectations", "data"],
  ["Flask", "data"],
  ["FastAPI", "data"],
  ["Cortex Analyst", "ai"],
  ["Cortex Search", "ai"],
  ["LLM Applications", "ai"],
  ["Semantic Search", "ai"],
  ["spaCy", "ai"],
  ["PyTorch", "ai"],
  ["TensorFlow", "ai"],
  ["MLflow", "ai"],
  ["CloudWatch", "viz"],
  ["Tableau", "viz"],
  ["Power BI", "viz"],
  ["Matplotlib", "viz"],
  ["Seaborn", "viz"],
];

export const education = [
  {
    period: "Aug 2023 - May 2025",
    title: "Master of Science, Data Science",
    school: "University of New Haven, West Haven, CT",
    detail: "GPA: 3.94 / 4.0",
  },
  {
    period: "Jul 2016 - Aug 2020",
    title: "Bachelor of Engineering, Information Technology",
    school: "University of Mumbai, Mumbai, India",
  },
];
