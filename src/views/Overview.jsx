import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { impactStats, profile, projects, skills } from '../data/portfolio.js';

export default function Overview({ onTabChange }) {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <span className="eyebrow">Portfolio in progress</span>
          <h1>Data, analytics, ML, and creative systems by {profile.name}.</h1>
          <p>{profile.positioning}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Contact me
            </a>
            <a className="button" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero__panel" aria-label="Profile summary">
          <p>{profile.resumeSummary}</p>
          <div className="contact-stack">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">
              linkedin.com/in/nilay-pant
            </a>
            <span>{profile.location}</span>
          </div>
        </aside>
      </section>

      <section className="stat-grid" aria-label="Selected impact metrics">
        {impactStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <Section eyebrow="Featured" title="Selected Projects">
        <div className="grid grid--cards">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Foundation" title="Skill Map">
        <div className="grid grid--skills">
          {skills.map((skillGroup) => (
            <article className="mini-card" key={skillGroup.group}>
              <h3>{skillGroup.group}</h3>
              <p>{skillGroup.items.join(' / ')}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Explore" title="Portfolio Areas">
        <div className="grid grid--areas">
          <button className="area-card" type="button" onClick={() => onTabChange('work')}>
            <span>Work</span>
            <strong>Professional analytics, product systems, and reusable work practices.</strong>
          </button>
          <button className="area-card" type="button" onClick={() => onTabChange('study')}>
            <span>Study</span>
            <strong>Academic ML, research projects, and technical learning artifacts.</strong>
          </button>
          <button className="area-card" type="button" onClick={() => onTabChange('play')}>
            <span>Play</span>
            <strong>Photography, films, browser games, and creative experiments.</strong>
          </button>
        </div>
      </Section>
    </>
  );
}
