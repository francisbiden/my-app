
// app/projects/page.tsx
export const metadata = {
  title: "Projects ",
  description:
    "View a selection of full-stack and frontend projects developed by Francis Muiruri. Each project showcases responsive design, performance, and clean code.",

};
import ProjectsServerComponent from "./server-component";

export default function ProjectsPage() {
  return <ProjectsServerComponent />;
}