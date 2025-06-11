
// app/skills/page.tsx
export const metadata = {
  title: "Developer skills",
  description:
    "Explore the technical skills and tools used by Francis Muiruri including React, Next.js, TypeScript, Node.js, Express, MongoDB, and SASS.",

};
import SkillsServerComponent from "./server-component";

export default function SkillsPage() {
  return <SkillsServerComponent />;
}