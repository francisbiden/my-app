import { fetchSkills } from "@/app/service/get";

export default async function Skills() {
  const skills = await fetchSkills();

  return (
    <section className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="grid">
        {skills.map((skill) => (
          <div key={skill.id} className="card">
            <h3 className="card-title">{skill.name}</h3>
            <p className="card-description">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}