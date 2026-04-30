import ProjectCard from '../components/ProjectCard.jsx';
import Section from '../components/Section.jsx';
import { education, projects } from '../data/portfolio.js';

export default function Study() {
  const studyProjects = projects.filter((project) => project.area === 'study');

  return (
    <>
      <Section eyebrow="Education" title="Academic Background">
        <article className="card highlight-card">
          <div className="card__meta">
            <span>{education.institution}</span>
            <span>{education.period}</span>
          </div>
          <h3>{education.degree}</h3>
          <p className="muted">{education.location}</p>
        </article>
      </Section>

      <Section eyebrow="Projects" title="Academic Projects and Publications">
        <div className="grid grid--cards">
          {studyProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Next" title="Interactive Study Demos">
        <div className="card">
          <h3>Demo architecture target</h3>
          <p>
            This section is reserved for browser-friendly ML demos and links to heavier hosted
            notebooks or APIs. Good candidates are the face recognition thesis, a movie
            recommendation playground, and compact visual analytics experiments.
          </p>
        </div>
      </Section>
    </>
  );
}
