import Section from '../components/Section.jsx';
import { playFilmWorks, playItems } from '../data/portfolio.js';

export default function Play() {
  return (
    <>
      <Section eyebrow="Creative" title="Films, Photography, and Experiments">
        <div className="film-showcase">
          {playFilmWorks.map((film, index) => (
            <article
              className={`card feature-video-card ${index % 2 ? 'feature-video-card--reverse' : ''}`}
              key={film.title}
            >
              <div className="video-embed" aria-label={`${film.title} video`}>
                <iframe
                  src={film.embedUrl}
                  title={film.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div>
                <span className="eyebrow">{film.eyebrow}</span>
                <h3>{film.title}</h3>
                <p>{film.description}</p>
                <p>{film.context}</p>
                <div className="link-row">
                  <a href={film.youtubeUrl} target="_blank" rel="noreferrer">
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

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

      {/*
      <Section eyebrow="Later" title="How This Section Can Grow">
        <div className="card">
          <p>
            The Play area is structured to accept photo albums, embedded video links, and small
            interactive sketches without changing the rest of the site. Once the media is ready,
            each item can become its own route or demo page.
          </p>
        </div>
      </Section>
      */}
    </>
  );
}
