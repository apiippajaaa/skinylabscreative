"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CONTACT DATA
========================================================= */

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    icon: Mail,
    accent: "#FF6B57",
  },
  {
    label: "Instagram",
    value: "@skinylabs",
    href: "#",
    icon: Camera,
    accent: "#A78BFA",
  },
  {
    label: "Lokasi",
    value: "Klaten, Indonesia",
    href: "#",
    icon: MapPin,
    accent: "#F4C430",
  },
  {
    label: "WhatsApp",
    value: "Mari ngobrol",
    href: "#",
    icon: MessageCircle,
    accent: "#35BFA4",
  },
] as const;

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  label,
  value,
  href,
  icon: Icon,
  accent,
}: (typeof CONTACT_ITEMS)[number]) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        flex
        min-w-0
        items-center
        gap-3
        overflow-hidden
        py-4
        transition-transform
        duration-500
        sm:py-5
        lg:hover:-translate-y-1
      "
    >
      {/* =================================================
          HORIZONTAL HOVER LINE
      ================================================= */}

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          scale-x-0
          transition-transform
          duration-500
          ease-out
          group-hover:scale-x-100
        "
        style={{
          backgroundColor: accent,
        }}
      />

      {/* =================================================
          ICON
          Only this element rotates
      ================================================= */}

      <span
        className="
          relative
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-[14px]
          border-[2px]
          border-white
          text-white
          shadow-[4px_5px_0_rgba(15,23,42,0.06)]
          transition-all
          duration-500
          group-hover:rotate-[-5deg]
          group-hover:scale-105
          group-hover:-translate-y-0.5
          sm:h-12
          sm:w-12
        "
        style={{
          backgroundColor: accent,
        }}
      >
        <Icon
          size={18}
          strokeWidth={1.8}
          className="
            relative
            z-10
          "
        />
      </span>

      {/* =================================================
          TEXT
          Stays completely straight
      ================================================= */}

      <span className="min-w-0">
        <span
          className="
            block
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-slate-400
            sm:text-[10px]
          "
        >
          {label}
        </span>

        <span
          className="
            mt-1
            block
            truncate
            text-[13px]
            font-semibold
            tracking-[-0.02em]
            text-slate-900
            sm:text-[14px]
          "
        >
          {value}
        </span>
      </span>

      {/* =================================================
          ARROW
          Slate normally → accent background on hover
      ================================================= */}

      <span
        className="
          ml-auto
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-slate-100
          text-slate-400
          transition-all
          duration-500
          ease-out
          group-hover:text-white
        "
        style={{
          ["--contact-accent" as string]: accent,
        }}
      >
        <span
          className="
            absolute
            h-8
            w-8
            scale-0
            rounded-full
            transition-transform
            duration-500
            ease-out
            group-hover:scale-100
          "
          style={{
            backgroundColor: accent,
          }}
        />

        <ArrowUpRight
          size={14}
          strokeWidth={1.8}
          className="
            relative
            z-10
            block
            shrink-0
            transition-transform
            duration-500
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </span>
    </Link>
  );
}

/* =========================================================
   MAIN CTA
========================================================= */

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = {
    initial: shouldReduceMotion
      ? undefined
      : {
          opacity: 0,
          y: 16,
        },

    whileInView: shouldReduceMotion
      ? undefined
      : {
          opacity: 1,
          y: 0,
        },

    viewport: {
      once: true,
      amount: 0.2,
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative
        isolate
        flex
        min-h-0
        w-full
        items-center
        overflow-hidden
        py-12
        sm:py-14
        md:py-16
        lg:min-h-[calc(100vh-5rem)]
        lg:py-12
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Main soft glow */}

        <div
          className="
            absolute
            left-1/2
            top-[38%]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-[#EAF2FF]
            opacity-60
            blur-3xl
            sm:h-[340px]
            sm:w-[340px]
            md:h-[420px]
            md:w-[420px]
          "
        />

        {/* Peach */}

        <div
          className="
            absolute
            -right-24
            -top-24
            h-60
            w-60
            rounded-full
            bg-[#FFF0ED]
            opacity-60
            blur-3xl
            sm:h-72
            sm:w-72
          "
        />

        {/* Green */}

        <div
          className="
            absolute
            -bottom-24
            -left-24
            h-60
            w-60
            rounded-full
            bg-[#E9FAF6]
            opacity-60
            blur-3xl
            sm:h-72
            sm:w-72
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            EYEBROW
        ================================================= */}

        <motion.div
          {...animationProps}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex items-center gap-3"
        >
          <span
            className="
              h-1.5
              w-7
              rounded-full
              bg-[#FF6B57]
            "
          />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-500
              sm:text-[10px]
            "
          >
            Mari membuat sesuatu
          </p>
        </motion.div>

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          {...animationProps}
          transition={{
            duration: 0.65,
            delay: 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 sm:mt-6"
        >
          <h2
            id="contact-heading"
            className="
              max-w-4xl
              text-[clamp(2.7rem,6.2vw,5.2rem)]
              font-semibold
              leading-tight
              tracking-[-0.065em]
              text-slate-950
            "
          >
            Punya ide?
            <br />
            <span className="text-slate-400">Mari wujudkan bersama.</span>
          </h2>
        </motion.div>

        <motion.div
          {...animationProps}
          transition={{
            duration: 0.55,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="mt-6 flex flex-col gap-4 sm:mt-7 md:flex-row md:items-end md:justify-between md:gap-10"
        >
          <p className="max-w-lg text-[11px] leading-6 text-slate-400 sm:text-[12px] md:text-[13px]">
            Ceritakan apa yang sedang kamu pikirkan. Website, desain, video,
            produk digital, atau sesuatu yang belum punya bentuk — kita bisa
            mulai dari sana.
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <span className="h-px w-7 bg-slate-300" />

            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-slate-300 sm:text-[9px]">
              Ide · Desain · Eksekusi
            </span>
          </div>
        </motion.div>

        {/* =================================================
            CONTACT
        ================================================= */}

        <motion.div
          {...animationProps}
          transition={{
            duration: 0.65,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            relative
            mt-8
            border-y
            border-slate-200
            sm:mt-9
          "
        >
          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-slate-200
              sm:grid-cols-2
              sm:divide-x
              sm:divide-y-0
              lg:grid-cols-4
            "
          >
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="
                  min-w-0
                  sm:px-5
                  lg:px-6
                  first:sm:pl-0
                  last:sm:pr-0
                "
              >
                <ContactItem {...item} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <motion.div
          {...animationProps}
          transition={{
            duration: 0.6,
            delay: 0.28,
            ease: "easeOut",
          }}
          className="
            mt-7
            flex
            flex-col
            gap-4
            sm:mt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-2.5">
            <Sparkles size={14} strokeWidth={1.7} className="text-[#F4C430]" />

            <span
              className="
                text-[10px]
                text-slate-400
                sm:text-[11px]
              "
            >
              Hal baik biasanya dimulai dari sebuah percakapan.
            </span>
          </div>

          <Link
            href="mailto:your@email.com"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2.5
              text-[13px]
              font-semibold
              tracking-[-0.02em]
              text-slate-950
              sm:text-[14px]
            "
          >
            <span
              className="
                border-b
                border-slate-950
                pb-0.5
                transition-colors
                duration-300
                group-hover:border-[#FF6B57]
              "
            >
              Mulai percakapan
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-slate-950
                text-white
                transition-all
                duration-500
                group-hover:rotate-45
                group-hover:bg-[#FF6B57]
              "
            >
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </span>
          </Link>
        </motion.div>

        {/* =================================================
            SIGNATURE
        ================================================= */}

        <motion.div
          {...animationProps}
          transition={{
            duration: 0.5,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="
            mt-7
            flex
            flex-col
            gap-2
            border-t
            border-slate-100
            pt-4
            sm:mt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-300
            "
          >
            Skinylabs Creative
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.14em]
              text-slate-300
            "
          >
            Dibuat dengan rasa ingin tahu
          </span>
        </motion.div>
      </div>
    </section>
  );
}
