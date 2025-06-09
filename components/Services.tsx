import prisma from "@/lib/prisma";

export default async function Services() {
  const services = await prisma.service.findMany();

  return (
    <section className="section">
      <h2 className="section-title">What I Offer</h2>
      <div className="grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
