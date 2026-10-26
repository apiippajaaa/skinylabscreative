"use client";

import {
  ArrowUpRight,
  MessageCircle,
  Compass,
  WandSparkles,
  Rocket,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Ngobrol",
    description:
      "Ceritakan apa yang ada di pikiranmu. Kami dengarkan, bertanya, lalu memahami apa yang benar-benar kamu butuhkan.",
    icon: MessageCircle,
    color: "#FF6B57",
    soft: "#FFF1EE",
    rotation: "-rotate-2",
    offset: "md:-translate-y-5",
  },
  {
    number: "02",
    title: "Rancang",
    description:
      "Ide mulai menemukan arahnya. Kami menyusun konsep, visual, kebutuhan, dan langkah yang paling tepat.",
    icon: Compass,
    color: "#6C63FF",
    soft: "#F0EFFF",
    rotation: "rotate-2",
    offset: "md:translate-y-8",
  },
  {
    number: "03",
    title: "Buat",
    description:
      "Saatnya mewujudkan ide. Mulai dari desain, ilustrasi, website, hingga motion sesuai kebutuhan proyekmu.",
    icon: WandSparkles,
    color: "#F4C430",
    soft: "#FFF9DF",
    rotation: "-rotate-1",
    offset: "md:-translate-y-3",
  },
  {
    number: "04",
    title: "Selesai",
    description:
      "Kami rapikan, cek kembali, lalu serahkan hasil akhirnya agar siap digunakan dan dikembangkan.",
    icon: Rocket,
    color: "#35BFA4",
    soft: "#EAF9F6",
    rotation: "rotate-2",
    offset: "md:translate-y-10",
  },
];

export default function HowWeWork() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-300" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400">
                HOW WE WORK
              </span>
            </div>

            <h2 className="text-[2.7rem] font-semibold leading-[0.9] tracking-[-0.065em] text-slate-950 sm:text-5xl lg:text-[4.2rem]">
              Begini cara kami
              <br />
              <span className="text-slate-300">bekerja.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-md md:justify-self-end">
            <p className="text-sm leading-7 tracking-[-0.01em] text-slate-500 sm:text-[15px]">
              Dari obrolan sederhana, kami bantu mengubah ide menjadi sesuatu
              yang nyata dan siap digunakan.
            </p>

            <div className="mt-2 border-t border-slate-200 pt-2">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C63FF]" />

                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-400">
                    OUR APPROACH
                  </p>

                  <p className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-xl">
                    Tidak harus lurus.
                    <br />
                    <span className="text-slate-300">
                      Yang penting terus bergerak.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CREATIVE ROUTE */}
        <div className="relative mt-16 sm:mt-20 lg:mt-28">
          {/* Desktop route */}
          <div className="pointer-events-none absolute inset-x-[5%] top-[43%] hidden md:block">
            <svg
              viewBox="0 0 1100 150"
              preserveAspectRatio="none"
              className="h-[150px] w-full overflow-visible"
              fill="none"
            >
              <motion.path
                d="
                  M 0 75
                  C 100 75, 100 20, 220 20
                  S 320 130, 430 130
                  S 530 20, 650 20
                  S 750 130, 870 130
                  S 980 75, 1100 75
                "
                stroke="#D8DEE8"
                strokeWidth="1.5"
                strokeDasharray="3 8"
                strokeLinecap="round"
                initial={
                  reducedMotion
                    ? undefined
                    : {
                        pathLength: 0,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        pathLength: 1,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 1.8,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          {/* Route dots */}
          {/* <div className="pointer-events-none absolute inset-x-[11%] top-[43%] hidden justify-between md:flex">
            {steps.map((step) => (
              <span
                key={step.number}
                className="relative z-10 h-2.5 w-2.5 rounded-full border-2 border-white shadow-sm"
                style={{
                  backgroundColor: step.color,
                }}
              />
            ))}
          </div> */}

          {/* Mobile route */}
          <div className="pointer-events-none absolute bottom-6 left-[22px] top-6 w-px bg-slate-200 md:hidden">
            <motion.div
              className="h-full origin-top bg-slate-300"
              initial={
                reducedMotion
                  ? undefined
                  : {
                      scaleY: 0,
                    }
              }
              whileInView={
                reducedMotion
                  ? undefined
                  : {
                      scaleY: 1,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: reducedMotion ? 0 : 1.4,
                ease: "easeOut",
              }}
            />
          </div>

          {/* STEPS */}
          <div className="relative grid gap-10 md:grid-cols-4 md:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 30,
                          rotate: index % 2 === 0 ? -3 : 3,
                        }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          rotate: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.65,
                    delay: reducedMotion ? 0 : index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative ${step.offset}`}
                >
                  {/* MOBILE */}
                  <div className="flex gap-5 md:hidden">
                    <div className="relative z-10 shrink-0 pt-1">
                      <div
                        className="flex h-11 w-11 rotate-[-6deg] items-center justify-center rounded-[13px] border-[3px] border-white shadow-[0_8px_20px_-12px_rgba(15,23,42,0.4)]"
                        style={{
                          backgroundColor: step.color,
                        }}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className="text-white"
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="h-px w-5 bg-slate-200" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-[-0.045em] text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-[12px] leading-[1.75] text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden md:block">
                    <div className="relative px-2">
                      <div
                        className={`
                          relative mx-auto max-w-[255px]
                          overflow-hidden rounded-3xl
                          border border-slate-200
                          bg-white
                          transition-all duration-500
                          ${step.rotation}
                          group-hover:rotate-0
                          group-hover:-translate-y-3
                          group-hover:shadow-[0_25px_55px_-30px_rgba(15,23,42,0.4)]
                        `}
                      >
                        {/* TOP COLOR BLOCK */}
                        <div
                          className="relative h-[68px] overflow-hidden"
                          style={{
                            backgroundColor: step.soft,
                          }}
                        >
                          <span
                            className="absolute -right-8 -top-9 h-24 w-24 rounded-full opacity-40"
                            style={{
                              backgroundColor: step.color,
                            }}
                          />

                          <span
                            className="absolute -bottom-10 -left-9 h-20 w-20 rounded-full border-[10px] opacity-15"
                            style={{
                              borderColor: step.color,
                            }}
                          />

                          <div
                            className="
                              absolute bottom-3 left-5
                              flex h-11 w-11
                              rotate-[-5deg]
                              items-center justify-center
                              rounded-[13px]
                              border-[3px] border-white
                              shadow-[0_8px_20px_-12px_rgba(15,23,42,0.45)]
                              transition-all duration-500
                              group-hover:rotate-3
                              group-hover:scale-110
                            "
                            style={{
                              backgroundColor: step.color,
                            }}
                          >
                            <Icon
                              size={19}
                              strokeWidth={1.8}
                              className="text-white"
                            />
                          </div>
                        </div>

                        {/* CARD BODY */}
                        <div className="relative p-5">
                          <span
                            className="
                              pointer-events-none
                              absolute -right-1 -top-3
                              select-none
                              font-mono
                              text-[72px]
                              font-bold
                              leading-none
                              tracking-[-0.1em]
                              text-slate-100
                              transition-all duration-500
                              group-hover:-translate-y-1
                            "
                          >
                            {step.number}
                          </span>

                          <div className="relative z-10 flex items-start justify-between gap-3">
                            <h3 className="text-[22px] font-semibold tracking-[-0.055em] text-slate-950">
                              {step.title}
                            </h3>

                            {/* <ArrowUpRight
                              size={16}
                              strokeWidth={1.7}
                              className="
                                mt-1 shrink-0
                                text-slate-300
                                transition-all duration-500
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                                group-hover:text-slate-950
                              "
                            /> */}
                          </div>

                          <p className="relative z-10 mt-2 text-[11px] leading-[1.8] text-slate-400">
                            {step.description}
                          </p>

                          <div className="relative z-10 mt-6 flex items-center gap-2">
                            <span
                              className="
                                h-1.5 w-1.5 rounded-full
                                transition-all duration-500
                                group-hover:w-7
                              "
                              style={{
                                backgroundColor: step.color,
                              }}
                            />

                            <span className="h-px flex-1 bg-slate-200" />
                          </div>
                        </div>

                        {/* Bottom color line */}
                        <div
                          className="
                            absolute bottom-0 left-0 h-1
                            w-full origin-left scale-x-0
                            transition-transform duration-500
                            group-hover:scale-x-100
                          "
                          style={{
                            backgroundColor: step.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
