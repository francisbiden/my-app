import { ServiceIconName } from "@/utils/icons";

// types/service.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // This should match your ServiceIconName type
}