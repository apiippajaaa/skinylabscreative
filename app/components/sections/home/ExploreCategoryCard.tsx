"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type ExploreCategory = {
  slug: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  icon: LucideIcon;
  accent: string;
  visual: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

type ExploreCategoryCardProps = {
  category: ExploreCategory;
  index: number;
};

export default function ExploreCategoryCard({
  category,
  index,
}: ExploreCategoryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = category.icon;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : index * 0.045,
        ease: "easeOut",
      }}
      className="h-full min-w-0"
    >
      <Link
        href={`/explore/${category.slug}`}
        aria-label={`Explore ${category.title}`}
        className="group relative isolate flex aspect-square h-auto w-full flex-col overflow-hidden rounded-2xl bg-neutral-900 p-4 text-white outline-none sm:rounded-3xl sm:p-5 lg:rounded-2xl lg:p-4 xl:rounded-3xl xl:p-5 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url("${category.image}")`,
            backgroundPosition: category.imagePosition ?? "center",
          }}
        />

        {/* Contrast overlays */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/80 transition-colors duration-300 group-hover:from-black/40 group-hover:to-black/85"
        />

        {/* Top row */}
        <div className="flex items-start justify-between gap-2">
          <span
            className={`inline-flex max-w-full items-center rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase leading-none tracking-[0.12em] sm:px-3 sm:py-1.5 sm:text-[10px] lg:px-2.5 lg:py-1 lg:text-[9px] xl:px-3 xl:py-1.5 xl:text-[10px] ${category.accent}`}
          >
            <span className="truncate">{category.visual}</span>
          </span>

          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-neutral-900 sm:size-10 lg:size-8 xl:size-10">
            <Icon
              aria-hidden="true"
              className="size-4 sm:size-[18px] lg:size-4 xl:size-[18px]"
              strokeWidth={1.7}
            />
          </span>
        </div>

        {/* Bottom content */}
        <div className="mt-auto min-w-0 pt-5">
          <h3 className="max-w-full text-[clamp(0.95rem,1.25vw,1.25rem)] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-xl lg:text-base xl:text-lg 2xl:text-xl">
            {category.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-white/80 sm:text-xs lg:mt-1.5 lg:text-[11px] xl:mt-2 xl:text-xs">
            {category.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 lg:mt-3 lg:gap-1 xl:mt-4 xl:gap-1.5">
            {category.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="max-w-full truncate rounded-full border border-white/25 bg-black/15 px-2 py-1 text-[9px] leading-none text-white/90 backdrop-blur-sm sm:px-2.5 sm:text-[10px] lg:px-2 lg:text-[9px] xl:px-2.5 xl:text-[10px]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
