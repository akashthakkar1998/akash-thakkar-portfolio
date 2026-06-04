import React, { useEffect, useState } from "react";
import {
  aiCapabilities,
  education,
  experiences,
  navItems,
  profileItems,
  skillGroups,
  strengths,
  summaries,
} from "./data.js";

function Header({ activeSection, scrollProgress }) {
  return (
    <header className="site-header">
      <span className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <a className="brand" href="#top" aria-label="Akash Thakkar home">
        <span className="brand-mark">AT</span>
        <span>
          <strong>Akash Thakkar</strong>
          <small>Data Engineer</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={activeSection === item.href.slice(1) ? "is-active" : ""}
            href={item.href}
            key={item.href}
            aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function useSlideReveal() {
  useEffect(() => {
    const slides = document.querySelectorAll("[data-slide]");
    const revealVisibleSlides = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const isInViewport = rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.1;
        const isHashTarget = window.location.hash && `#${slide.id}` === window.location.hash;

        if (isInViewport || isHashTarget) {
          slide.classList.add("is-visible");
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      slides.forEach((slide) => slide.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.06 }
    );

    slides.forEach((slide) => observer.observe(slide));
    requestAnimationFrame(revealVisibleSlides);
    window.addEventListener("hashchange", revealVisibleSlides);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", revealVisibleSlides);
    };
  }, []);
}

function usePageMotionState() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateMotionState = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);

      const viewportAnchor = window.scrollY + window.innerHeight * 0.52;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) {
          return active;
        }
        return section.offsetTop <= viewportAnchor ? item.href.slice(1) : active;
      }, "");

      setActiveSection(current);
    };

    updateMotionState();
    window.addEventListener("scroll", updateMotionState, { passive: true });
    window.addEventListener("resize", updateMotionState);
    return () => {
      window.removeEventListener("scroll", updateMotionState);
      window.removeEventListener("resize", updateMotionState);
    };
  }, []);

  return { activeSection, scrollProgress };
}

function Hero() {
  return (
    <section className="hero slide" data-slide>
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">Data Engineer | AI Data Platforms | AWS | Snowflake | dbt</p>
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
    <section className="section intro-section slide" data-slide>
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
    <section className="section bring-section slide" id="bring" data-slide>
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
    <section className="section ai-edge-section slide" id="ai-edge" data-slide>
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

function ClientBadge({ note }) {
  if (!note) {
    return null;
  }

  const [label, ...clientParts] = note.split(":");
  const client = clientParts.join(":").trim();

  return (
    <div className="client-badge" aria-label={note}>
      <span>{client ? label : "Client"}</span>
      <strong>{client || note}</strong>
    </div>
  );
}

function Experience() {
  return (
    <section className="section experience-section slide" id="work" data-slide>
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
              <ClientBadge note={role.note} />
            </div>
            <div className="role-detail">
              <div className="role-title-row">
                <h3>{role.title}</h3>
                <span>{role.focus}</span>
              </div>
              {role.impact ? <p className="role-impact">{role.impact}</p> : null}
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

function getSkillIconUrl(item) {
  if (item.iconSrc) {
    return item.iconSrc;
  }

  return null;
}

function SkillLogo({ item }) {
  const [failed, setFailed] = useState(false);
  const iconUrl = getSkillIconUrl(item);

  if (!iconUrl || failed) {
    return null;
  }

  return (
    <img
      className="skill-logo"
      src={iconUrl}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Skills() {
  return (
    <section className="section skills-section slide" id="skills" data-slide>
      <SectionHeading
        eyebrow="Technical Toolkit"
        title="Segmented tech stack across cloud, data, AI, and analytics delivery."
        subtitle="Grouped by where each tool typically appears in the data platform lifecycle, with recognizable technology symbols where available."
      />

      <div className="skills-layout">
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group-card" key={group.title}>
              <div className="skill-group-heading">
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
              </div>
              <div className="skill-logo-grid">
                {group.items.map((item) => (
                  <span className="skill-logo-pill" title={item.label} key={item.label}>
                    <SkillLogo item={item} />
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </article>
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
    <section className="section education-section slide" data-slide>
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
    <section className="contact-section slide" id="contact" data-slide>
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
  useSlideReveal();
  const { activeSection, scrollProgress } = usePageMotionState();

  return (
    <>
      <Header activeSection={activeSection} scrollProgress={scrollProgress} />
      <main id="top">
        <Hero />
        <Summary />
        <Strengths />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
