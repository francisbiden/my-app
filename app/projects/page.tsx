

import Projects from '@/components/Projects';
import React from 'react';
export const metadata = {
  title: "Projects | Web Development by Francis Muiruri",
  description:
    "View a selection of full-stack and frontend projects developed by Francis Muiruri. Each project showcases responsive design, performance, and clean code.",
  keywords: [
    "Web development projects",
    "React projects",
    "Full-stack applications",
    "Freelance developer",
    "Portfolio work",
  ],
};


const page = () => {
  return (
    <>
        <Projects />
    </>
  )
}

export default page