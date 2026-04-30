import Section from '../components/Section.jsx';
import { playItems } from '../data/portfolio.js';

export default function Play() {
  return (
    <>
      <Section eyebrow="Creative" title="Photography, Film, and Experiments">
        <div className="grid grid--cards">
          {playItems.map((item) => (
            <article className="card media-card" key={item.title}>
              <div className="media-card__placeholder">{item.title}</div>
              <span className="eyebrow">{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Later" title="How This Section Can Grow">
        <div className="card">
          <p>
            The Play area is structured to accept photo albums, embedded video links, and small
            interactive sketches without changing the rest of the site. Once the media is ready,
            each item can become its own route or demo page.
          </p>
        </div>
      </Section>
    </>
  );
}
