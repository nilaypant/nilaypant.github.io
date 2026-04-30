import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { featuredCreativeWork, impactStats, profile, projects, skills } from '../data/portfolio.js';

export default function Overview({ onTabChange }) {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <span className="eyebrow">Portfolio in progress</span>
          <h2>
            Just a guy in the age of AI,<br />
            building tools, chasing signals<br />
            and when the future asks why,<br />
            I say, "I try..."
          </h2>
          <p>{profile.positioning}&nbsp;by {profile.name}</p>
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
          <div className="stat" key={Array.isArray(stat.label) ? stat.label.join('-') : stat.label}>
            <strong>{stat.value}</strong>
            {Array.isArray(stat.label) ? (
              <span className="stat__label stat__label--stacked">
                {stat.label.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            ) : (
              <span className="stat__label">{stat.label}</span>
            )}
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
            <strong>Professional learnings, product systems, and reusable work practices.</strong>
          </button>
          <button className="area-card" type="button" onClick={() => onTabChange('study')}>
            <span>Study</span>
            <strong>Academic ML, research projects, and technical learning artifacts.</strong>
          </button>
          <button className="area-card" type="button" onClick={() => onTabChange('play')}>
            <span>Play</span>
            <strong>Browser games, creative experiments, photography, films and more.</strong>
          </button>
        </div>
      </Section>

      <Section eyebrow="Creative coda" title="A Little Film Before You Go">
        <article className="card overview-video-card">
          <div>
            <span className="eyebrow">{featuredCreativeWork.eyebrow}</span>
            <h3>{featuredCreativeWork.title}</h3>
            <p>{featuredCreativeWork.description}</p>
            <p>{featuredCreativeWork.context}</p>
            <div className="hero__actions">
              <button className="button button--primary" type="button" onClick={() => onTabChange('play')}>
                See it in Play
              </button>
              <a className="button" href={featuredCreativeWork.youtubeUrl} target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="video-embed video-embed--compact" aria-label={`${featuredCreativeWork.title} preview`}>
            <iframe
              src={featuredCreativeWork.embedUrl}
              title={`${featuredCreativeWork.title} preview`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </article>
      </Section>
    </>
  );
}
