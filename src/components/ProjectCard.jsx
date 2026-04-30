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
      {project.impact ? <p className="card__impact">{project.impact}</p> : null}
      <TagList tags={project.tags} />
      {project.links?.length ? (
        <div className="link-row">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
