"use client";

import { motion } from "motion/react";
import { Layers3 } from "lucide-react";

import { CategoryItem } from "@/app/components/ui/techstack/category-item";
import { OrbitDecorations } from "@/app/components/ui/techstack/orbit-decorations";
import { Orbit } from "@/app/components/ui/techstack/orbit";
import {
  backendTools,
  categories,
  creativeTools,
  frontendTools,
} from "@/types/tech-stack.data";
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="w-full overflow-hidden py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Konten pengantar */}
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white">
                <Layers3 size={11} strokeWidth={1.6} />
              </div>

              <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Dirancang untuk berkarya
              </span>
            </div>

            <h2 className="text-[46px] font-semibold leading-[0.92] tracking-[-0.065em] text-slate-950 sm:text-[58px] md:text-[66px] lg:text-[70px]">
              Semua yang kami butuhkan
              <br />
              <span className="text-slate-400">untuk mewujudkan ide.</span>
            </h2>

            <p className="mt-7 max-w-md text-[12px] leading-6 text-slate-500 sm:text-[13px]">
              Dari merancang visual hingga membangun produk digital yang siap
              digunakan, kami memadukan desain, pengembangan, dan AI dalam satu
              rangkaian alat yang fleksibel.
            </p>

            {/* Kategori keahlian */}
            <div className="mt-9 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3 sm:gap-5">
              {categories.map((category) => (
                <CategoryItem key={category.label} {...category} />
              ))}
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B57]" />
              <span className="text-[9px] text-slate-400">
                Alat terus berkembang. Kualitas tetap jadi prioritas.
              </span>
            </div>
          </div>

          {/* Visualisasi orbit teknologi */}
          <div className="relative flex min-h-82.5 items-center justify-center sm:min-h-97.5 lg:min-h-115">
            {/* Cahaya latar yang lembut */}
            <div className="absolute left-1/2 top-1/2 h-65 w-65 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[1px] sm:h-82.5 sm:w-82.5 lg:h-97.5 lg:w-97.5" />
            <div className="absolute left-1/2 top-1/2 h-45 w-45 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-2xl sm:h-57.5 sm:w-57.5" />

            <div className="relative aspect-square w-full max-w-[320px] sm:max-w-97.5 lg:max-w-115">
              <OrbitDecorations />

              {/* Orbit luar: backend dan AI */}
              <Orbit
                tools={backendTools}
                size="h-[90%] w-[90%]"
                duration={46}
                reverse
              />

              {/* Orbit tengah: teknologi frontend */}
              <Orbit
                tools={frontendTools}
                size="h-[65%] w-[65%]"
                duration={34}
                dashed
              />

              {/* Orbit dalam: perangkat kreatif */}
              <Orbit
                tools={creativeTools}
                size="h-[42%] w-[42%]"
                duration={25}
                reverse
                subtle
              />

              {/* Logo di pusat orbit */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 z-30 flex h-22 w-22 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-[#F8F7F3]/95 shadow-[0_15px_50px_rgba(15,23,42,0.08)] sm:h-25 sm:w-25"
              >
                <div className="flex h-16.5 w-16.5 flex-col items-center justify-center rounded-full bg-white text-white shadow-[0_8px_30px_rgba(15,23,42,0.15)] sm:h-18.5 sm:w-18.5">
                  <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                </div>
              </motion.div>

              {/* Elemen dekoratif untuk kebutuhan tata letak */}
              <div className="absolute bottom-[4%] left-1/2 z-40 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
