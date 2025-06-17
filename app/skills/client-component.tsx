// app/skills/client-component.tsx
"use client";

import { use, Suspense } from "react";
import { skillIcons } from "@/utils/icons";
import type { Skill } from "@/types/skill";

interface SkillsClientComponentProps {
  skillsPromise: Promise<Skill[]>;
}

export default function SkillsClientComponent({ 
  skillsPromise 
}: SkillsClientComponentProps) {
  const skills = use(skillsPromise);

  return (
    <Suspense fallback={<div className="loading">Loading skills...</div>}>
      <div className="grid">
        {skills.map((skill) => {
          const iconSrc = skill.icon in skillIcons
            ? skillIcons[skill.icon as keyof typeof skillIcons]
            : '/icons/fallback.svg';

          return (
            <div key={skill.id} className="card">
              <img
                src={iconSrc}
                alt={skill.title}
                width={64}
                height={64}
                className="card-icon"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icons/fallback.svg';
                }}
              />
              <div className="card-content">
                <h3 className="card-title">{skill.title}</h3>
                <p className="card-description">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
}
