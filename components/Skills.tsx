import prisma from "@/lib/prisma";

export default async function Skills() {
  const skills = await prisma.skill.findMany();

  return (
    <section className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
