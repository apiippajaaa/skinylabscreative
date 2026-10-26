"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Brush,
  Code2,
  Sparkles,
  Layers3,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const benefits = [
  {
    title: "Bukan cuma desain.",
    description:
      "Kami membuat visual yang punya karakter, bukan sekadar terlihat bagus.",
    icon: Brush,
    accent: "#FF6B57",
    soft: "#FFF0ED",
    type: "sticker",
  },
  {
    title: "Bukan cuma website.",
    description:
      "Kami membangun sesuatu yang benar-benar bisa digunakan dan punya tujuan.",
    icon: Code2,
    accent: "#3B82F6",
    soft: "#EAF2FF",
    type: "browser",
  },
  {
    title: "Bukan cuma konten.",
    description:
      "Kami membantu brand kamu terlihat lebih hidup, konsisten, dan mudah diingat.",
    icon: Sparkles,
    accent: "#F4C430",
    soft: "#FFF8DD",
    type: "spark",
  },
  {
    title: "Satu tempat, banyak keahlian.",
    description:
      "Design, development, video, dan creative berjalan dalam satu arah.",
    icon: Layers3,
    accent: "#35BFA4",
    soft: "#E9FAF6",
    type: "layers",
  },
];

function StickerBenefit({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;

  return (
    <motion.article
      whileHover={{ y: -8, rotate: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group
        relative
        min-h-[300px]
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-6
        sm:min-h-[320px]
        sm:p-7
        lg:rotate-[-2deg]
      "
    >
      {/* Decorative tape */}
      <div
        className="
          absolute
          -top-2
          left-8
          h-8
          w-20
          rotate-[-5deg]
          opacity-80
        "
        style={{ backgroundColor: benefit.soft }}
      />

      {/* Big background shape */}
      <div
        className="
          absolute
          -right-12
          -top-12
          h-36
          w-36
          rounded-full
          transition-transform
          duration-700
          group-hover:scale-125
        "
        style={{ backgroundColor: benefit.soft }}
      />

      {/* Icon */}
      <div className="relative z-10 mt-4">
        <div
          className="
            flex
            h-16
            w-16
            rotate-[-5deg]
            items-center
            justify-center
            rounded-[20px]
            text-white
            shadow-[8px_8px_0_rgba(15,23,42,0.06)]
            transition-transform
            duration-500
            group-hover:rotate-6
            group-hover:scale-110
          "
          style={{ backgroundColor: benefit.accent }}
        >
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <span
          className="
            absolute
            -right-2
            top-[-5px]
            h-2
            w-2
            rounded-full
          "
          style={{ backgroundColor: benefit.accent }}
        />
      </div>

      <div className="relative z-10 mt-12">
        <h3
          className="
            max-w-[250px]
            text-[20px]
            font-semibold
            leading-[1]
            tracking-[-0.045em]
            text-slate-950
            sm:text-[22px]
          "
        >
          {benefit.title}
        </h3>

        <p className="mt-3 max-w-[260px] text-[12px] leading-[1.7] text-slate-400">
          {benefit.description}
        </p>
      </div>

      {/* Bottom doodle */}
      <div className="absolute bottom-6 right-6 flex items-center gap-1">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: benefit.accent }}
        />
        <span className="h-px w-8 bg-slate-200" />
      </div>
    </motion.article>
  );
}

function BrowserBenefit({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;

  return (
    <motion.article
      whileHover={{ y: -8, rotate: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group
        relative
        min-h-[300px]
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        sm:min-h-[320px]
        lg:translate-y-5
        lg:rotate-[1.5deg]
      "
    >
      {/* Browser header */}
      <div className="flex h-12 items-center border-b border-slate-100 px-5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
        </div>

        <div className="mx-auto h-5 w-28 rounded-full bg-slate-50" />

        <ArrowUpRight
          size={15}
          className="
            text-slate-300
            transition-transform
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>

      {/* Fake interface */}
      <div className="relative px-6 pt-7">
        <div
          className="
            absolute
            right-6
            top-5
            h-24
            w-24
            rounded-full
            opacity-60
            transition-transform
            duration-700
            group-hover:scale-125
          "
          style={{ backgroundColor: benefit.soft }}
        />

        <div
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-[15px]
            text-white
            transition-transform
            duration-500
            group-hover:rotate-[-8deg]
          "
          style={{ backgroundColor: benefit.accent }}
        >
          <Icon size={19} strokeWidth={1.8} />
        </div>

        <div className="mt-7">
          <div className="mb-2 h-2 w-24 rounded-full bg-slate-100" />
          <div className="h-2 w-16 rounded-full bg-slate-50" />
        </div>

        <h3
          className="
            relative
            mt-6
            max-w-[240px]
            text-[20px]
            font-semibold
            leading-[1]
            tracking-[-0.045em]
            text-slate-950
            sm:text-[22px]
          "
        >
          {benefit.title}
        </h3>

        <p className="relative mt-3 max-w-[255px] text-[12px] leading-[1.7] text-slate-400">
          {benefit.description}
        </p>
      </div>
    </motion.article>
  );
}

function SparkBenefit({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;

  return (
    <motion.article
      whileHover={{ y: -8, rotate: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group
        relative
        min-h-[300px]
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-6
        sm:min-h-[320px]
        sm:p-7
        lg:-translate-y-3
        lg:rotate-[-1deg]
      "
    >
      {/* Large sparkle */}
      <motion.div
        animate={{
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-25px]
          top-[-25px]
          text-[130px]
          font-light
          leading-none
          opacity-50
        "
        style={{ color: benefit.accent }}
      >
        ✦
      </motion.div>

      {/* Small stars */}
      <span
        className="absolute right-24 top-16 text-lg"
        style={{ color: benefit.accent }}
      >
        +
      </span>

      <span
        className="absolute right-10 top-32 text-xs"
        style={{ color: benefit.accent }}
      >
        ✦
      </span>

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          shadow-[0_12px_30px_-15px_rgba(15,23,42,0.3)]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-12
        "
      >
        <Icon size={21} strokeWidth={1.7} style={{ color: benefit.accent }} />
      </div>

      <div className="relative z-10 mt-14">
        <h3
          className="
            max-w-[240px]
            text-[20px]
            font-semibold
            leading-[1]
            tracking-[-0.045em]
            text-slate-950
            sm:text-[22px]
          "
        >
          {benefit.title}
        </h3>

        <p className="mt-3 max-w-[255px] text-[12px] leading-[1.7] text-slate-400">
          {benefit.description}
        </p>
      </div>

      {/* Floating accent */}
      <div
        className="
          absolute
          bottom-7
          right-7
          h-8
          w-8
          rounded-full
          transition-transform
          duration-500
          group-hover:scale-125
        "
        style={{ backgroundColor: benefit.soft }}
      />
    </motion.article>
  );
}

function LayersBenefit({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;

  return (
    <motion.article
      whileHover={{ y: -8, rotate: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group
        relative
        min-h-[300px]
        sm:min-h-[320px]
        lg:translate-y-8
        lg:rotate-[2deg]
      "
    >
      {/* Back layers */}
      <div
        className="
          absolute
          inset-x-4
          bottom-0
          top-5
          rounded-[30px]
          border
          border-slate-200
          transition-transform
          duration-500
          group-hover:translate-x-2
          group-hover:translate-y-2
        "
        style={{ backgroundColor: benefit.soft }}
      />

      <div
        className="
          absolute
          inset-x-2
          bottom-2
          top-2
          rounded-[30px]
          border
          border-slate-200
          bg-white
          transition-transform
          duration-500
          group-hover:translate-x-1
          group-hover:translate-y-1
        "
      />

      {/* Main sheet */}
      <div
        className="
          relative
          min-h-[300px]
          overflow-hidden
          rounded-[30px]
          border
          border-slate-200
          bg-white
          p-6
          sm:min-h-[320px]
          sm:p-7
        "
      >
        {/* Corner shape */}
        <div
          className="
            absolute
            -right-10
            -top-10
            h-32
            w-32
            rounded-full
            opacity-60
            transition-transform
            duration-700
            group-hover:scale-125
          "
          style={{ backgroundColor: benefit.soft }}
        />

        {/* Icon */}
        <div className="relative">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-[17px]
              text-white
              transition-transform
              duration-500
              group-hover:-rotate-6
              group-hover:scale-110
            "
            style={{ backgroundColor: benefit.accent }}
          >
            <Icon size={21} strokeWidth={1.7} />
          </div>

          {/* Mini plus */}
          <Plus size={13} className="absolute -right-4 top-0 text-slate-300" />
        </div>

        <div className="relative z-10 mt-14">
          <h3
            className="
              max-w-[250px]
              text-[20px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-slate-950
              sm:text-[22px]
            "
          >
            {benefit.title}
          </h3>

          <p className="mt-3 max-w-[260px] text-[12px] leading-[1.7] text-slate-400">
            {benefit.description}
          </p>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-6 right-6">
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
          >
            many skills
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function Benefit({ benefit }: { benefit: (typeof benefits)[number] }) {
  if (benefit.type === "sticker") {
    return <StickerBenefit benefit={benefit} />;
  }

  if (benefit.type === "browser") {
    return <BrowserBenefit benefit={benefit} />;
  }

  if (benefit.type === "spark") {
    return <SparkBenefit benefit={benefit} />;
  }

  return <LayersBenefit benefit={benefit} />;
}

export default function WhySkinylabs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
      "
    >
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute left-[7%] top-[20%] h-2 w-2 rounded-full bg-[#FF6B57]/50" />
      <div className="pointer-events-none absolute right-[10%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#3B82F6]/50" />
      <div className="pointer-events-none absolute bottom-[18%] left-[15%] h-1.5 w-1.5 rounded-full bg-[#F4C430]/60" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-500
                sm:text-[11px]
              "
            >
              Kenapa memilih Skinylabs?
            </p>
          </div>

          <h2
            className="
              max-w-5xl
              text-[44px]
              font-semibold
              leading-[0.92]
              tracking-[-0.065em]
              text-slate-950
              sm:text-[60px]
              md:text-[76px]
              lg:text-[90px]
            "
          >
            Kamu punya ide.
            <br />
            <span className="text-slate-400">Kami bantu mewujudkannya.</span>
          </h2>

          <div
            className="
              mt-8
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <p
              className="
                max-w-md
                text-[12px]
                leading-6
                text-slate-400
                sm:text-[13px]
              "
            >
              Satu tempat untuk design, development, video, dan creative — dari
              ide sampai jadi sesuatu yang bisa digunakan.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-slate-300" />

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.16em]
                  text-slate-300
                  sm:text-[10px]
                "
              >
                DESIGN × DEVELOP × CREATE
              </span>
            </div>
          </div>
        </motion.header>

        {/* Playful benefits */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:mt-24
            lg:grid-cols-4
            lg:items-start
            lg:gap-5
          "
        >
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
