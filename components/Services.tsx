import { fetchServices } from "@/app/service/get";

export default async function Services() {
  const services = await fetchServices();

  return (
    <section className="section">
      <h2 className="section-title">Offered Services</h2>
      <div className="grid">
        {services.map((service) => (
          <div key={service.id} className="card">
            <h3 className="card-title">{service.name}</h3>
            <p className="card-description">{service.description}</p>
            <p className="card-price">${service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}