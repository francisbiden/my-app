"use client"
import { fetchProjects } from "@/app/service/get";

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <section className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img
              src={project.image}
              alt={project.title}
              className="card-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
              }}
            />
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}