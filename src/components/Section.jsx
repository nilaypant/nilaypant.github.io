export default function Section({ eyebrow, title, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="section__heading">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
