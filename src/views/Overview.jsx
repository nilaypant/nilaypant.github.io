import * as amplitude from '@amplitude/unified';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SignalOrb from '../components/SignalOrb.jsx';
import { featuredCreativeWork, impactStats, profile, projects, skills } from '../data/portfolio.js';

export default function Overview({ onTabChange }) {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="hero__masthead" aria-label="Portfolio summary">
          <div className="contact-group">
            <a href={`mailto:${profile.email}`} onClick={() => amplitude.track('Contact Email Clicked', { location: 'hero' })}>{profile.email}</a>
            <a href={`tel:${profile.phone}`} onClick={() => amplitude.track('Contact Initiated', { location: 'hero' })}>{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
          <p>{profile.resumeSummary}</p>
          <div className="contact-group contact-group--links">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" onClick={() => amplitude.track('External Link Clicked', { link_label: 'LinkedIn', destination: profile.linkedInUrl })}>
              LinkedIn
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" onClick={() => amplitude.track('External Link Clicked', { link_label: 'GitHub', destination: profile.githubUrl })}>
              GitHub
            </a>
          </div>
        </div>
        <SignalOrb onTabChange={onTabChange} />
        <div className="hero__content hero__content--byline">
          <h1 className="hero__quote">
            "Just a guy in the age of AI, building tools, chasing signals, and when the future asks why, I say, I try..."
          </h1>
          <p className="hero__positioning">{profile.positioning}&nbsp;by {profile.name}</p>
        </div>
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
        <p className="section__lede">
          A cross-section of research, production analytics, and applied ML work. Each project is picked for
          practical impact and technical depth.
        </p>
        <div className="grid grid--cards">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Artifacts" title="Working Materials">
        <div className="artifact-grid">
          <article className="artifact-card">
            <span>01 / Systems</span>
            <h3>From data products to decision systems</h3>
            <p>
              This portfolio is being shaped as a living console for analytics work, ML research,
              project writeups, reusable templates, and creative experiments.
            </p>
          </article>
          <article className="artifact-card">
            <span>02 / Lab Notes</span>
            <h3>Reusable work artifacts</h3>
            <p>
              Future drops can include bookmark structures, dashboard checklists, project SOPs, and
              small browser-native demos that make the work inspectable.
            </p>
          </article>
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
          <button className="area-card" type="button" onClick={() => { amplitude.track('Portfolio Area Entered', { area: 'work' }); onTabChange('work'); }}>
            <span>Work</span>
            <strong>Professional learnings, product systems, and reusable work practices.</strong>
          </button>
          <button className="area-card" type="button" onClick={() => { amplitude.track('Portfolio Area Entered', { area: 'study' }); onTabChange('study'); }}>
            <span>Study</span>
            <strong>Academic ML, research projects, and technical learning artifacts.</strong>
          </button>
          <button className="area-card" type="button" onClick={() => { amplitude.track('Portfolio Area Entered', { area: 'play' }); onTabChange('play'); }}>
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
              <button className="button button--primary" type="button" onClick={() => { amplitude.track('Featured Film CTA Clicked', { cta: 'See it in Play', film_title: featuredCreativeWork.title }); onTabChange('play'); }}>
                See it in Play
              </button>
              <a className="button" href={featuredCreativeWork.youtubeUrl} target="_blank" rel="noreferrer" onClick={() => amplitude.track('Featured Film CTA Clicked', { cta: 'Watch on YouTube', film_title: featuredCreativeWork.title })}>
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
