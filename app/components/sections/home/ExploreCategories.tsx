"use client";

import {
  Camera,
  Clapperboard,
  Code2,
  Fingerprint,
  Layers3,
  LayoutDashboard,
  PenTool,
  Smartphone,
} from "lucide-react";

import ExploreCategoryCard, {
  type ExploreCategory,
} from "./ExploreCategoryCard";

const categories: ExploreCategory[] = [
  {
    slug: "design-&-illustration",
    number: "01",
    title: "Design & Illustration",
    description:
      "Visual kreatif yang mengubah ide menjadi karya yang berkarakter.",
    services: ["Graphic Design", "Illustration"],
    icon: PenTool,
    accent: "bg-orange-200 text-neutral-900",
    visual: "Visual Design",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Abstract colorful visual artwork",
  },
  {
    slug: "branding",
    number: "02",
    title: "Branding",
    description: "Membangun identitas brand yang konsisten dan mudah dikenali.",
    services: ["Identity", "Strategy"],
    icon: Fingerprint,
    accent: "bg-yellow-200 text-neutral-900",
    visual: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1634942536790-2536e9d3f9c7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Brand identity and creative design",
  },
  {
    slug: "ui-ux",
    number: "03",
    title: "UI/UX Design",
    description:
      "Pengalaman digital yang intuitif, fungsional, dan nyaman digunakan.",
    services: ["UI Design", "UX Research"],
    icon: LayoutDashboard,
    accent: "bg-purple-200 text-neutral-900",
    visual: "Digital Experience",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Digital interface design workspace",
  },
  {
    slug: "web-development",
    number: "04",
    title: "Web Development",
    description:
      "Website modern yang responsif, cepat, dan dirancang sesuai kebutuhan.",
    services: ["Website", "Web App"],
    icon: Code2,
    accent: "bg-emerald-200 text-neutral-900",
    visual: "Web Solutions",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Web development workspace with laptop",
  },
  {
    slug: "app-development",
    number: "05",
    title: "App Development",
    description: "Aplikasi digital yang membantu bisnis bekerja lebih efektif.",
    services: ["Mobile App", "Custom App"],
    icon: Smartphone,
    accent: "bg-blue-200 text-neutral-900",
    visual: "App Solutions",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Mobile application displayed on a smartphone",
  },
  {
    slug: "video-&-motion",
    number: "06",
    title: "Video & Motion",
    description:
      "Cerita visual dinamis untuk menarik perhatian dan menyampaikan pesan.",
    services: ["Video", "Motion"],
    icon: Clapperboard,
    accent: "bg-pink-200 text-neutral-900",
    visual: "Moving Stories",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Video production and filmmaking equipment",
  },
  {
    slug: "photography",
    number: "07",
    title: "Photography",
    description:
      "Mengabadikan momen, produk, dan cerita lewat visual yang kuat.",
    services: ["Product", "Commercial"],
    icon: Camera,
    accent: "bg-amber-200 text-neutral-900",
    visual: "Visual Stories",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Camera ready for a photography session",
  },
  {
    slug: "content-production",
    number: "08",
    title: "Content Production",
    description:
      "Produksi konten yang relevan untuk membangun komunikasi brand.",
    services: ["Social Media", "Campaign"],
    icon: Layers3,
    accent: "bg-teal-200 text-neutral-900",
    visual: "Content Studio",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Creative video content production setup",
  },
];

export default function ExploreCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full ">
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between lg:mb-10">
          <div className="max-w-xl">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
              What We Do
            </p>

            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-neutral-950 sm:text-3xl lg:text-4xl">
              Creative services,
              <br className="hidden sm:block" /> made for your next idea.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-right">
            From the first spark to the final execution, we turn ideas into
            meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {categories.map((category, index) => (
            <ExploreCategoryCard
              key={category.slug}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
