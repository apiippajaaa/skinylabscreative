import { Palette, Code2, BrainCircuit } from "lucide-react";

export type Tool = {
  name: string;
  icon: string;
  x: number;
  y: number;
  accent: string;
  rotate?: string;
};

export const creativeTools: Tool[] = [
  {
    name: "Adobe",
    icon: "https://cdn.simpleicons.org/adobe/FF0000",
    x: 14.64,
    y: 14.64,
    accent: "bg-[#FFF0ED]",
    rotate: "-rotate-3",
  },
  {
    name: "CorelDRAW",
    icon: "https://cdn.simpleicons.org/coreldraw/44A148",
    x: 85.36,
    y: 14.64,
    accent: "bg-[#E9FAF6]",
    rotate: "rotate-3",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    x: 14.64,
    y: 85.36,
    accent: "bg-[#F0EFFF]",
    rotate: "rotate-2",
  },
  {
    name: "Premiere Pro",
    icon: "https://cdn.simpleicons.org/adobepremierepro/9999FF",
    x: 85.36,
    y: 85.36,
    accent: "bg-[#F0EFFF]",
    rotate: "-rotate-2",
  },
  {
    name: "After Effects",
    icon: "https://cdn.simpleicons.org/adobeaftereffects/9999FF",
    x: 50,
    y: 0,
    accent: "bg-[#FFF8DD]",
    rotate: "rotate-3",
  },
  {
    name: "DaVinci Resolve",
    icon: "https://cdn.simpleicons.org/davinciresolve/233A51",
    x: 50,
    y: 100,
    accent: "bg-[#EAF2FF]",
    rotate: "-rotate-3",
  },
];

export const frontendTools: Tool[] = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    x: 0,
    y: 50,
    accent: "bg-[#EAF2FF]",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/000000",
    x: 100,
    y: 50,
    accent: "bg-[#F1F1F1]",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    x: 50,
    y: 100,
    accent: "bg-[#EAF2FF]",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    x: 50,
    y: 0,
    accent: "bg-[#E9FAF6]",
  },
];

export const backendTools: Tool[] = [
  {
    name: "Laravel",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
    x: 100,
    y: 50,
    accent: "bg-[#FFF0ED]",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    x: 75,
    y: 6.7,
    accent: "bg-[#E9FAF6]",
  },
  {
    name: "OpenAI",
    icon: "https://cdn.simpleicons.org/openai/000000",
    x: 25,
    y: 6.7,
    accent: "bg-[#F1F1F1]",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    x: 0,
    y: 50,
    accent: "bg-[#FFF8DD]",
  },
  {
    name: "Groq",
    icon: "https://cdn.simpleicons.org/groq/F55036",
    x: 25,
    y: 93.3,
    accent: "bg-[#FFF8DD]",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    x: 75,
    y: 93.3,
    accent: "bg-[#EAF2FF]",
  },
];

export const categories = [
  {
    label: "Creative",
    count: "06",
    icon: Palette,
    description: "Visual design & motion",
    iconClass: "text-[#E85D9E]",
    bgClass: "bg-[#FDF0F7]",
  },
  {
    label: "Frontend",
    count: "04",
    icon: Code2,
    description: "Interfaces & experiences",
    iconClass: "text-[#6C63FF]",
    bgClass: "bg-[#F0EFFF]",
  },
  {
    label: "Backend + AI",
    count: "06",
    icon: BrainCircuit,
    description: "Systems & intelligence",
    iconClass: "text-[#FF6B57]",
    bgClass: "bg-[#FFF0ED]",
  },
];
