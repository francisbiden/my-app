// app/projects/server-component.tsx
import { fetchProjects } from "@/app/service/get";
import ProjectsClientComponent from "./client-component";

export default async function ProjectsServerComponent() {
  const projectsPromise = fetchProjects(); // Note: not awaiting here

  return (
    <section className="section">
      <h2 className="section-title">Featured Projects</h2>
      <ProjectsClientComponent projectsPromise={projectsPromise} />
    </section>
  );
}