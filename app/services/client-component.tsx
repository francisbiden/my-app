// app/services/client-component.tsx
"use client";

import { use, Suspense } from "react";
import { serviceIcons } from "@/utils/icons";
import type { Service } from "@/types/service";

interface ServicesClientComponentProps {
  servicesPromise: Promise<Service[]>;
}

export default function ServicesClientComponent({ 
  servicesPromise 
}: ServicesClientComponentProps) {
  const services = use(servicesPromise);

  return (
    <Suspense fallback={<div className="loading">Loading services...</div>}>
      <div className="grid">
        {services.map((service) => {
          const iconSrc = service.icon in serviceIcons
            ? serviceIcons[service.icon as keyof typeof serviceIcons]
            : '/icons/fallback.svg';

          return (
            <div key={service.id} className="service-card">
              <img
                src={iconSrc}
                alt={service.title}
                width={64}
                height={64}
                className="service-icon"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icons/fallback.svg';
                }}
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
}