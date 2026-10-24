export function AboutPage() {
  const skills = ["HTML", "CSS", "React", "Git"];

  return (
    <>
      <section id="about" className="card">
        <h2>About me</h2>
        <p>
          I am learning React by shipping this portfolio. I care about clear UI,
          fast pages, and teamwork — the same skills The Last Dev Standing rewards.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
}