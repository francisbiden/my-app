import { ProjectImageName } from "@/utils/icons";

// types/project.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // This should match your ProjectImageName type
}