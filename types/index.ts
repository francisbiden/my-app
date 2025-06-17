// types/index.ts
import type {
  SkillIconName as UtilsSkillIconName,
  ServiceIconName as UtilsServiceIconName,
  ProjectImageName as UtilsProjectImageName
} from "@/utils/icons";

// Re-export the icon names from your utils
export type SkillIconName = UtilsSkillIconName;
export type ServiceIconName = UtilsServiceIconName;
export type ProjectImageName = UtilsProjectImageName;

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}