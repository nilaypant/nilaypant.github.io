import TagList from './TagList.jsx';

export default function ExperienceCard({ experience }) {
  return (
    <article className="card timeline-card">
      <div className="card__meta">
        <span>{experience.company}</span>
        <span>{experience.period}</span>
      </div>
      <h3>{experience.role}</h3>
      <p className="muted">{experience.location}</p>
      <p>{experience.summary}</p>
      <ul className="clean-list">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <TagList tags={experience.tags} />
    </article>
  );
}
