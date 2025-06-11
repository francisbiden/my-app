// app/projects/client-component.tsx
"use client";

import { use } from "react";
import { Suspense } from "react";

export default function ProjectsClientComponent({ projectsPromise }) {
  // Use the use hook to unwrap the promise
  const projects = use(projectsPromise);

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
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
    </Suspense>
  );
}