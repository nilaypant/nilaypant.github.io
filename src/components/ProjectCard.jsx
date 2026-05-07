import * as amplitude from '@amplitude/unified';
import TagList from './TagList.jsx';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="card__meta">
        <span>{project.category}</span>
        <span>{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.impact ? (
        <p className="card__impact">
          <span className="card__impact-label">Outcome</span>
          {project.impact}
        </p>
      ) : null}
      <TagList tags={project.tags} />
      <div className="project-card__footer">
        {project.links?.length ? (
          <div className="link-row">
            {project.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer" onClick={() => amplitude.track('Project Link Clicked', { project_title: project.title, link_label: link.label, destination: link.href })}>
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="project-card__note">Additional artifacts and demos coming soon.</p>
        )}
      </div>
    </article>
  );
}
