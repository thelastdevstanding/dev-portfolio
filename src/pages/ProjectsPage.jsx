import { useState, useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard.jsx";

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "api/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {status === "loading" && <p>Loading projects...</p>}
      {status === "error" && <p className="error">Could not load the projects. Is the dev server running?</p>}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.summary}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}