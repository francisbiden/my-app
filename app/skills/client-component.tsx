// app/skills/client-component.tsx
"use client";

import { use } from "react";
import { Suspense } from "react";
import { skillIcons, type SkillIconName } from "@/utils/icons"; // Import types

export default function SkillsClientComponent({ skillsPromise }) {
  const skills = use(skillsPromise);

  return (
    <Suspense fallback={<div>Loading skills...</div>}>
      <div className="grid">
        {skills.map((skill) => ( // <-- Renamed to singular `skill`
          <div key={skill.id} className="skill-card">
            <img
              src={skillIcons[skill.icon as SkillIconName] || '/icons/fallback.svg'}
              alt={skill.title}
              width={64}
              height={64}
              className="skill-icon"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/icons/fallback.svg';
              }}
            />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}