export const dynamic = "force-dynamic"; // 👈 tells Next.js to use SSR at runtime

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