// app/service/get.ts
import prisma from "@/lib/prisma"; // Your Prisma client instance

export async function fetchProjects() {
  try {
    const projects = await prisma.project.findMany({
      // You can add any query options here
      select: {
        id: true,
        title: true,
        description: true,
        image: true
      }
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}


// app/service/get.ts
export async function fetchServices() {
  try {
    const services = await prisma.service.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        icon: true
      }
    });
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

export async function fetchSkills() {
  try {
    const skills = await prisma.skill.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        icon: true
      }
    });
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
}