"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Brush,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Desain yang punya tujuan",
    description:
      "Visual yang memperkuat identitas brand dan membuatnya lebih mudah diingat.",
    icon: Brush,
    color: "#FF6B57",
    background: "#FFF0ED",
  },
  {
    title: "Digital yang fungsional",
    description:
      "Website dan aplikasi yang mudah digunakan serta sesuai kebutuhan bisnis.",
    icon: Code2,
    color: "#3B82F6",
    background: "#EAF2FF",
  },
  {
    title: "Konten yang lebih hidup",
    description:
      "Foto, video, dan materi kreatif yang menyampaikan cerita brand dengan menarik.",
    icon: Sparkles,
    color: "#B38A00",
    background: "#FFF8DD",
  },
  {
    title: "Semua saling terhubung",
    description:
      "Desain, teknologi, dan konten yang selaras untuk mencapai tujuan yang sama.",
    icon: Layers3,
    color: "#269C87",
    background: "#EAF9F6",
  },
];

type Benefit = (typeof benefits)[number];

function BenefitCard({
  benefit,
  index,
  reduceMotion,
}: {
  benefit: Benefit;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = benefit.icon;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: reduceMotion ? 0 : index * 0.06,
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className="
        group relative flex min-h-[190px] flex-col
        overflow-hidden rounded-2xl border border-slate-200/80
        bg-white p-5 transition-colors duration-300
        hover:border-slate-300 sm:min-h-[200px] sm:p-6
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            flex size-11 items-center justify-center
            rounded-xl transition-transform duration-300
            group-hover:scale-105
          "
          style={{ backgroundColor: benefit.background }}
        >
          <Icon
            size={21}
            strokeWidth={1.8}
            style={{ color: benefit.color }}
            aria-hidden="true"
          />
        </div>

        <ArrowUpRight
          size={19}
          strokeWidth={1.6}
          className="
            text-slate-300 transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-slate-700
          "
          aria-hidden="true"
        />
      </div>

      <div className="mt-auto pt-7">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {benefit.title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {benefit.description}
        </p>
      </div>
    </motion.article>
  );
}

function SectionIntro({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-center lg:sticky lg:top-24 lg:self-start"
    >
      <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#FF6B57]/20 bg-[#FFF0ED] px-3 py-2">
        <span className="size-2 rounded-full bg-[#FF6B57]" />

        <span className="text-xs font-semibold text-[#D95140]">
          Kenapa memilih kami?
        </span>
      </div>

      <h2
        id="why-skinylabs-title"
        className="
          max-w-xl text-4xl font-semibold
          leading-[1.08] tracking-[-0.055em]
          text-slate-950 sm:text-5xl lg:text-6xl
      "
      >
        Bukan sekadar
        <br className="hidden lg:block" />{" "}
        <span className="text-[#FF6B57]">membuat sesuatu.</span>
        <br />
        Tapi membuatnya
        <br className="hidden sm:block" />{" "}
        <span className="text-slate-400">berarti.</span>
      </h2>

      <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
        Setiap ide punya potensinya sendiri. Kami memadukan desain, teknologi,
        dan kreativitas untuk mengubahnya menjadi karya yang relevan dengan
        kebutuhanmu.
      </p>

      <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-5">
        <div className="flex -space-x-1">
          {benefits.map((benefit) => (
            <span
              key={benefit.title}
              className="size-3 rounded-full border-2 border-white"
              style={{ backgroundColor: benefit.color }}
            />
          ))}
        </div>

        <p className="text-xs text-slate-500">
          Satu studio, berbagai kemungkinan.
        </p>
      </div>
    </motion.div>
  );
}

export default function WhySkinylabs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-skinylabs-title"
      className="w-full py-14 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
          {/* Kartu di kiri */}
          <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:order-1">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* Heading di kanan */}
          <div className="order-1 lg:order-2">
            <SectionIntro reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}
