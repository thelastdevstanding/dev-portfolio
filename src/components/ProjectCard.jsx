export function ProjectCard({ title, summary, href }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{summary}</p>
      {href ? (
        <a className="project-link" href={href} target="_blank" rel="noreferrer">
          View repo
        </a>
      ) : null}
    </article>
  );
}