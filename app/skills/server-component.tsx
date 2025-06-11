// app/skills/server-component.tsx
import { fetchSkills } from "@/app/service/get";
import SkillsClientComponent from "./client-component";

export default async function SkillsServerComponent() {
  const skillsPromise = fetchSkills();

  return (
    <section className="section">
      <h2 className="section-title">My Skills</h2>
      <SkillsClientComponent skillsPromise={skillsPromise} />
    </section>
  );
}