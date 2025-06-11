// app/skills/client-component.tsx
"use client";

import { use } from "react";
import { Suspense } from "react";

export default function SkillsClientComponent({ skillsPromise }) {
  const skills = use(skillsPromise);

  return (
    <Suspense fallback={<div>Loading skills...</div>}>
      <div className="grid">
        {skills.map((skill) => (
          <div key={skill.id} className="card">
            <h3 className="card-title">{skill.name}</h3>
            <p className="card-description">{skill.level}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}