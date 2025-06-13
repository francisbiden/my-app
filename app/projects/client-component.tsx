// app/projects/client-component.tsx
"use client";

import { use } from "react";
import { Suspense } from "react";
import { ProjectImages, type ProjectImageName } from "@/utils/icons"; // Import types



export default function ProjectsClientComponent({ projectsPromise }) {
  // Use the use hook to unwrap the promise
  const projects = use(projectsPromise);
  

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img
                    src={ProjectImages[project.image as ProjectImageName] || '/images/placeholder.jpg'}
                    alt={project.title}
                    width={64}
                    height={64}
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