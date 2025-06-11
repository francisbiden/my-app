// app/services/client-component.tsx
"use client";

import { use } from "react";
import { Suspense } from "react";

export default function ServicesClientComponent({ servicesPromise }) {
  const services = use(servicesPromise);

  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <div className="grid">
        {services.map((service) => (
          <div key={service.id} className="card">
            <h3 className="card-title">{service.name}</h3>
            <p className="card-description">{service.description}</p>
            <p className="card-price">${service.price}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}