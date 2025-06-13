// app/services/client-component.tsx
"use client";

import { use } from "react";
import { Suspense } from "react";
import { serviceIcons, type ServiceIconName } from "@/utils/icons"; // Import types

export default function ServicesClientComponent({ servicesPromise }) {
  const services = use(servicesPromise);

  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <div className="grid">
        {services.map((service) => ( // <-- Singular `service`
          <div key={service.id} className="service-card">
            <img
              src={serviceIcons[service.icon as ServiceIconName] || '/icons/fallback.svg'}
              alt={service.title}
              width={64}
              height={64}
              className="service-icon"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/icons/fallback.svg';
              }}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}