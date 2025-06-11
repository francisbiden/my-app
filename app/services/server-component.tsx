// app/services/server-component.tsx
import { fetchServices } from "@/app/service/get";
import ServicesClientComponent from "./client-component";

export default async function ServicesServerComponent() {
  const servicesPromise = fetchServices();

  return (
    <section className="section">
      <h2 className="section-title">Offered Services</h2>
      <ServicesClientComponent servicesPromise={servicesPromise} />
    </section>
  );
}