// app/service/get.ts
import prisma from "@/lib/prisma";
import type { Project, Service, Skill } from "@/types/index";

const isDatabaseConnected = Boolean(process.env.DATABASE_URL);

export async function fetchProjects(): Promise<Project[]> {
  if (!isDatabaseConnected) {
    console.warn("DATABASE_URL not found. Returning empty project list.");
    return [];
  }

  try {
    return await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function fetchServices(): Promise<Service[]> {
  if (!isDatabaseConnected) {
    console.warn("DATABASE_URL not found. Returning empty service list.");
    return [];
  }

  try {
    return await prisma.service.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        icon: true,
      },
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function fetchSkills(): Promise<Skill[]> {
  if (!isDatabaseConnected) {
    console.warn("DATABASE_URL not found. Returning empty skills list.");
    return [];
  }

  try {
    return await prisma.skill.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        icon: true,
      },
    });
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}
