import ExperienceCard from '../components/ExperienceCard.jsx';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TagList from '../components/TagList.jsx';
import { experiences, projects, workSystems } from '../data/portfolio.js';

export default function Work() {
  const workProjects = projects.filter((project) => project.area === 'work');

  return (
    <>
      <Section eyebrow="Professional" title="Work Experience">
        <div className="timeline">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={`${experience.company}-${experience.role}`} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Applied" title="Work Project Families">
        <div className="grid grid--cards">
          {workProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Reusable" title="Operating Systems and Templates">
        <div className="grid grid--cards">
          {workSystems.map((system) => (
            <article className="card" key={system.title}>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <TagList tags={system.tags} />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
