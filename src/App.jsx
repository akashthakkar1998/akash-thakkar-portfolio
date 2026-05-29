import React, { useMemo, useState } from "react";
import {
  aiCapabilities,
  caseStudies,
  education,
  experiences,
  navItems,
  profileItems,
  skills,
  strengths,
  summaries,
} from "./data.js";

const filters = [
  { label: "All", value: "all" },
  { label: "Cloud", value: "cloud" },
  { label: "Data", value: "data" },
  { label: "AI", value: "ai" },
  { label: "Monitoring", value: "viz" },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Akash Thakkar home">
        <span className="brand-mark">AT</span>
        <span>
          <strong>Akash Thakkar</strong>
          <small>Data Engineer</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">Data Engineer | AWS | Snowflake | dbt | AI Data Platforms</p>
          <h1>Reliable cloud data platforms for governed analytics and AI-ready delivery.</h1>
          <p className="hero-summary">
            I specialize in building data platforms that combine ingestion, orchestration, modeling,
            validation, observability, and governed analytics delivery. My work spans AWS, Snowflake,
            dbt, Python, SQL, PySpark, streaming systems, and AI-assisted data applications.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="mailto:akashd.thakkar@hotmail.com?subject=Portfolio%20Inquiry%20-%20Akash%20Thakkar"
            >
              Email Me
            </a>
            <a
              className="button secondary"
              href="https://linkedin.com/in/akash-thakkar-07"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Professional snapshot">
          <div className="profile-card-header">
            <span className="availability-dot" />
            <span>Boylston, MA</span>
          </div>
          <h2>4+ years building cloud-native data and analytics platforms.</h2>
          <dl className="profile-list">
            {profileItems.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle, compact = false }) {
  return (
    <div className={`section-heading ${compact ? "compact" : "full-heading"}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

function CardGrid({ className, items }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <article key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function Summary() {
  return (
    <section className="section intro-section">
      <SectionHeading
        eyebrow="Summary"
        title="A data engineer focused on dependable systems, usable models, and measurable outcomes."
      />
      <CardGrid className="summary-grid" items={summaries} />
    </section>
  );
}

function Strengths() {
  return (
    <section className="section bring-section" id="bring">
      <div className="split-heading">
        <p className="eyebrow">What I Bring</p>
        <h2>Technical depth with ownership across the full data lifecycle.</h2>
      </div>
      <div className="bring-grid">
        {strengths.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AiEdge() {
  return (
    <section className="section ai-edge-section" id="ai-edge">
      <SectionHeading title="Early adopter mindset with production engineering discipline." />
      <div className="ai-edge-layout">
        <article className="ai-edge-main">
          <span>Innovation highlight</span>
          <h3>Exploring new AI engineering tools before they become standard workflow.</h3>
          <p>
            I actively evaluate new tools and implementation patterns across agentic coding,
            AI-assisted data integration, semantic modeling, and LLM-enabled analytics. My focus is
            practical adoption: testing where these technologies improve delivery speed, reliability,
            documentation, data access, or business self-service without weakening governance.
          </p>
        </article>
        <CardGrid className="ai-tool-grid" items={aiCapabilities} />
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="section case-study-section" id="case-studies">
      <SectionHeading
        eyebrow="Case Studies"
        title="Outcome-led data engineering work, explained by problem, approach, and result."
        subtitle="Professional data engineering portfolios are easiest to evaluate when they show the business problem, the technical design, and the measurable improvement. These examples follow that structure."
      />
      <div className="case-grid">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.number}>
            <div className="case-card-top">
              <div className="case-number">{study.number}</div>
              <h3>{study.title}</h3>
            </div>
            <div className="case-story">
              {study.story.map((item) => (
                <div className="case-step" key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="tag-row">
              {study.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="work">
      <SectionHeading
        eyebrow="Experience"
        title="Production data engineering across healthcare, education, and enterprise platforms."
      />
      <div className="timeline">
        {experiences.map((role) => (
          <article className="role-card" key={`${role.company}-${role.period}`}>
            <div className="role-meta">
              <span>{role.period}</span>
              <strong>{role.company}</strong>
              <small>{role.location}</small>
              {role.note ? <em>{role.note}</em> : null}
            </div>
            <div className="role-detail">
              <div className="role-title-row">
                <h3>{role.title}</h3>
                <span>{role.focus}</span>
              </div>
              <p>{role.summary}</p>
              <ul>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const skillItems = useMemo(
    () =>
      skills.map(([label, category]) => ({
        label,
        category,
        dimmed: activeFilter !== "all" && activeFilter !== category,
      })),
    [activeFilter]
  );

  return (
    <section className="section skills-section" id="skills">
      <SectionHeading
        eyebrow="Technical Toolkit"
        title="Hands-on tools across the data platform lifecycle."
      />

      <div className="skill-controls" aria-label="Skill filters">
        {filters.map((filter) => (
          <button
            className={`filter-button ${activeFilter === filter.value ? "active" : ""}`}
            type="button"
            data-filter={filter.value}
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="skills-layout">
        <div className="skill-cloud">
          {skillItems.map((skill) => (
            <span
              className={skill.dimmed ? "is-dimmed" : ""}
              data-category={skill.category}
              key={skill.label}
            >
              {skill.label}
            </span>
          ))}
        </div>

        <aside className="skills-note">
          <h3>Strengths by layer</h3>
          <p>
            I am strongest where engineering reliability and analytics usability meet: pipelines that
            are observable, models that are reusable, validation that catches issues early, and delivery
            layers that make governed data easier to consume.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section">
      <SectionHeading eyebrow="Education" title="Academic foundation." compact />
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.title}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.school}</p>
            {item.detail ? <strong>{item.detail}</strong> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let's build data systems that people can actually trust.</h2>
        <p>
          Open to conversations around data engineering, analytics engineering, cloud data platforms,
          and AI-enabled data applications.
        </p>
      </div>
      <div className="contact-actions">
        <a
          className="button primary"
          href="mailto:akashd.thakkar@hotmail.com?subject=Portfolio%20Inquiry%20-%20Akash%20Thakkar"
        >
          akashd.thakkar@hotmail.com
        </a>
        <a
          className="button secondary"
          href="https://linkedin.com/in/akash-thakkar-07"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>Boylston, MA</span>
      <span>Data Engineering | Analytics Engineering | AI Data Platforms</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Summary />
        <Strengths />
        <AiEdge />
        <CaseStudies />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
