export const navItems = [
  { label: "Strengths", href: "#bring" },
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
    title: "AI-Ready Data Products",
    body:
      "I extend governed data platforms with semantic search, Snowflake Cortex, natural-language analytics, and LLM-supported workflows where they improve access, speed, or data clarity.",
  },
  {
    title: "Analytics Engineering",
    body:
      "I translate fragmented operational data into consistent warehouse models, dbt layers, and semantic structures that give analysts and business users cleaner paths to trusted reporting.",
  },
];

export const strengths = [
  {
    title: "Platform Ownership",
    body:
      "Build and maintain pipelines with clear orchestration, operational visibility, recovery paths, and supportable designs.",
  },
  {
    title: "AI-Ready Analytics",
    body:
      "Prepare semantic layers, governed datasets, and retrieval patterns that make natural-language analytics more reliable.",
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

export const experiences = [
  {
    period: "Aug 2025 - Present",
    company: "Tata Consultancy Services Ltd",
    location: "Marlborough, MA",
    note: "Client: Boston Scientific Corporation",
    title: "Data & Analytics Engineer",
    focus: "Commercial analytics, Snowflake, dbt, Cortex",
    impact:
      "Built governed commercial data products and AI-ready analytics workflows across Snowflake, dbt, Cortex, Salesforce, SAP, GA4, and IQVIA datasets.",
    summary:
      "Engineering Snowflake-based ingestion, transformation, semantic modeling, and agentic analytics workflows that unify commercial data from Salesforce, SAP, GA4, IQVIA, and related enterprise systems. The work supports governed reporting, decision support, natural-language analysis, and faster insight delivery for commercial analytics users.",
    points: [
      "Engineered Snowflake ingestion and transformation pipelines that unified sales and marketing data into governed data products for commercial reporting and decision support.",
      "Developed dbt transformation layers that standardized business logic, consolidated multiple source systems, and improved dataset usability for trusted analytics.",
      "Reconciled IQVIA and SAP data using fuzzy matching, improving data clarity and strengthening connected commercial analytics across healthcare and operational datasets.",
      "Introduced AI-driven metrics using Snowflake AI_SIMILARITY and AI_COMPLETE to enrich matching pipelines and improve commercial reporting reliability.",
      "Enhanced existing dbt pipelines by optimizing data flow, reducing duplicate processing, and delivering additional fields without increasing compute cost.",
      "Built semantic layers by mapping business workflows and defining grain at each level, improving natural-language SQL generation and downstream insight quality.",
      "Orchestrated an agentic workflow using Cortex Search, Cortex Analyst, and custom tools to route repeated queries dynamically and improve response quality.",
      "Built an Airflow-based trigger framework with Lambda and EventBridge to monitor source readiness and dynamically run dependent dbt jobs with less manual intervention.",
    ],
  },
  {
    period: "Dec 2023 - May 2025",
    company: "University of New Haven",
    location: "West Haven, CT",
    title: "Graduate Research & Teaching Assistant - Data Science",
    focus: "AWS labs, ETL automation, streaming, applied ML",
    impact:
      "Delivered hands-on instruction and built production-style research systems across distributed data engineering, ETL, streaming, and applied ML workflows.",
    summary:
      "Supported AWS Academy labs, applied coursework, workshops, and capstone teams while building reusable systems for transcript automation, nightly ETL, ML experimentation, validation, and streaming ingestion. The work combined teaching support with hands-on implementation of scalable data engineering patterns.",
    points: [
      "Delivered hands-on instruction in distributed data engineering, ETL design, and cloud analytics through AWS Academy labs and applied coursework.",
      "Guided students in building batch-processing systems with AWS Glue, Redshift, EMR, and Python, emphasizing production-grade design patterns.",
      "Led workshops on Hadoop, Spark, and MapReduce, and supported capstone teams by reviewing implementations and advising on technical architecture decisions.",
      "Automated transcript evaluation with Tesseract OCR and spaCy NLP, reducing manual processing time by 66% and creating a repeatable evaluation workflow.",
      "Built a nightly ETL and ML experimentation stack with Glue, Step Functions, Lambda, Spark, SageMaker, and Great Expectations, cutting batch latency by 40% while keeping SLAs under 30 minutes.",
      "Implemented schema-aware Kinesis ingestion with DLQ support and real-time normalization, eliminating 60% of ingestion failures and reducing system congestion.",
    ],
  },
  {
    period: "Aug 2020 - Aug 2023",
    company: "Tata Consultancy Services Ltd",
    location: "Mumbai, India",
    note: "Client: ICICI Prudential Insurance",
    title: "Systems Engineer - Data Engineer",
    focus: "ETL pipelines, warehouses, APIs, observability",
    impact:
      "Delivered production ETL, warehouse, API, event-driven ingestion, and observability capabilities for high-volume insurance operations and analytics consumption.",
    summary:
      "Built production-grade ETL workflows, Redshift and Snowflake warehouse models, PySpark transformations, Python microservices, and event-driven ingestion systems for insurance operations, reporting, ML inference, and real-time business consumption. The role covered cloud pipeline delivery, dimensional modeling, validation, monitoring, and application-facing data services.",
    points: [
      "Engineered ETL pipelines with AWS Glue, Lambda, and Step Functions to process 10M+ records per day across insurance policy, customer, transaction, and operations data domains.",
      "Built and optimized warehouse models in Redshift and Snowflake using dimensional modeling patterns, improving query performance by 40%.",
      "Developed PySpark workflows with Great Expectations checks, reducing downstream data errors by 35%.",
      "Built Python microservices with Flask and Docker for on-demand data extraction and ML inference, exposing services through REST APIs for real-time business consumption.",
      "Designed event-driven ingestion pipelines across Lambda, Kinesis, SQS, and DynamoDB, increasing data throughput by 60% and enabling low-latency processing.",
      "Strengthened observability with KPI-driven CloudWatch dashboards and embedded logging patterns, reducing monitoring overhead by 25%.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Cloud & Orchestration",
    summary: "Services used to move, schedule, monitor, and recover production workloads.",
    items: [
      { label: "AWS Glue", iconSrc: "/aws-icons/aws-glue.svg" },
      { label: "AWS Lambda", iconSrc: "/aws-icons/aws-lambda.svg" },
      { label: "Amazon S3", iconSrc: "/aws-icons/amazon-s3.svg" },
      { label: "Amazon EMR", iconSrc: "/aws-icons/amazon-emr.svg" },
      { label: "Amazon Kinesis", iconSrc: "/aws-icons/amazon-kinesis.svg" },
      { label: "Amazon SQS", iconSrc: "/aws-icons/amazon-sqs.svg" },
      { label: "Step Functions", iconSrc: "/aws-icons/aws-step-functions.svg" },
      { label: "Apache Airflow", iconSrc: "/tech-icons/airflow.svg" },
      { label: "Terraform", iconSrc: "/tech-icons/terraform.svg" },
      { label: "Docker", iconSrc: "/tech-icons/docker.svg" },
    ],
  },
  {
    title: "Warehouse, Modeling & Data Quality",
    summary: "Tools for analytical models, transformations, quality gates, and trusted delivery.",
    items: [
      { label: "Snowflake", iconSrc: "/tech-icons/snowflake.svg" },
      { label: "dbt", iconSrc: "/tech-icons/dbt.svg" },
      { label: "SQL", iconSrc: "/tech-icons/postgresql.svg" },
      { label: "PySpark", iconSrc: "/tech-icons/apache-spark.svg" },
      { label: "Great Expectations" },
      { label: "Data Modeling" },
      { label: "Pandas", iconSrc: "/tech-icons/pandas.svg" },
      { label: "NumPy", iconSrc: "/tech-icons/numpy.svg" },
    ],
  },
  {
    title: "AI, ML & Emerging Tools",
    summary: "Practical AI tooling evaluated for analytics, automation, and governed exploration.",
    items: [
      { label: "Snowflake Cortex", iconSrc: "/tech-icons/snowflake.svg" },
      { label: "Cortex Search", iconSrc: "/tech-icons/snowflake.svg" },
      { label: "Snowflake Openflow", iconSrc: "/tech-icons/snowflake.svg" },
      { label: "Codex", iconSrc: "/tech-icons/openai.svg" },
      { label: "Claude Code", iconSrc: "/tech-icons/claude.svg" },
      { label: "LLM Applications", iconSrc: "/tech-icons/openai.svg" },
      { label: "RAG Prototypes" },
      { label: "Prompt Evaluation" },
      { label: "Tool Calling" },
      { label: "spaCy", iconSrc: "/tech-icons/spacy.svg" },
      { label: "PyTorch", iconSrc: "/tech-icons/pytorch.svg" },
      { label: "TensorFlow", iconSrc: "/tech-icons/tensorflow.svg" },
      { label: "MLflow", iconSrc: "/tech-icons/mlflow.svg" },
    ],
  },
  {
    title: "APIs, Analytics & Visualization",
    summary: "Application, reporting, and analysis tools used to expose data to consumers.",
    items: [
      { label: "Python", iconSrc: "/tech-icons/python.svg" },
      { label: "FastAPI", iconSrc: "/tech-icons/fastapi.svg" },
      { label: "Flask", iconSrc: "/tech-icons/flask.svg" },
      { label: "CloudWatch", iconSrc: "/aws-icons/amazon-cloudwatch.svg" },
      { label: "Tableau", iconSrc: "/tech-icons/tableau.svg" },
      { label: "Power BI", iconSrc: "/tech-icons/power-bi.svg" },
      { label: "Matplotlib", iconSrc: "/tech-icons/matplotlib.svg" },
      { label: "Seaborn", iconSrc: "/tech-icons/seaborn.svg" },
    ],
  },
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
