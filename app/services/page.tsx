/*
import Services from '@/components/Services';
import React from 'react';
export const metadata = {
  title: "Services | What I Offer as a Full-Stack Developer",
  description:
    "Explore professional web development services offered by Francis Muiruri, including frontend and backend development, API integration, and consulting.",
  keywords: [
    "Web development services",
    "Hire developer",
    "Frontend services",
    "Backend development",
    "Custom websites",
  ],
};




*/


// app/services/page.tsx
export const metadata = {
  title: "Services | What I Offer as a Full-Stack Developer",
  description:
    "Explore professional web development services offered by Francis Muiruri, including frontend and backend development, API integration, and consulting.",
  
};
import ServicesServerComponent from "./server-component";

export default function ServicesPage() {
  return <ServicesServerComponent />;
}