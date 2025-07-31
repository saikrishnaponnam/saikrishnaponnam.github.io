import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  proficiency: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};
