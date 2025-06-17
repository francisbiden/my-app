// app/projects/client-component.tsx
"use client";

import { use, Suspense } from "react";
import { ProjectImages } from "@/utils/icons";
import type { Project } from "@/types/project";

interface ProjectsClientComponentProps {
  projectsPromise: Promise<Project[]>;
}

export default function ProjectsClientComponent({ 
  projectsPromise 
}: ProjectsClientComponentProps) {
  const projects = use(projectsPromise);

  return (
    <Suspense fallback={<div className="loading">Loading projects...</div>}>
      <div className="grid">
        {projects.map((project) => {
          const imageSrc = project.image in ProjectImages 
            ? ProjectImages[project.image as keyof typeof ProjectImages]
            : '/images/placeholder.jpg';

          return (
            <div key={project.id} className="card">
              <img
                src={imageSrc}
                alt={project.title}
                width={300}
                height={200}
                className="card-image"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                }}
              />
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
}