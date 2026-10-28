"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";

type ContactItem = {
  label: string;
  value: string;
  href: string | null;
  icon: LucideIcon;
  accent: string;
  surface: string;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    icon: Mail,
    accent: "#F16B52",
    surface: "#FFF0E9",
  },
  {
    label: "Instagram",
    value: "@skinylabs",
    href: null, // Tambahkan URL profil Instagram.
    icon: Camera,
    accent: "#7165E8",
    surface: "#F0EDFF",
  },
  {
    label: "Lokasi",
    value: "Klaten, Indonesia",
    href: null,
    icon: MapPin,
    accent: "#B48716",
    surface: "#FFF6D9",
  },
  {
    label: "WhatsApp",
    value: "Mari ngobrol",
    href: null, // Tambahkan link WhatsApp yang valid.
    icon: MessageCircle,
    accent: "#239B83",
    surface: "#E4F7F0",
  },
];

const EASING = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ContactCard({ item }: { item: ContactItem }) {
  const Icon = item.icon;

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 sm:h-12 sm:w-12"
          style={{
            backgroundColor: item.accent,
            color: "#FFFFFF",
          }}
        >
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>

        {item.href && (
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: item.accent }}
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="mt-7 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
          {item.label}
        </p>

        <p className="mt-1.5 break-words text-[15px] font-semibold tracking-[-0.035em] text-neutral-950 sm:text-base">
          {item.value}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="mt-5 h-[3px] w-7 rounded-full transition-[width] duration-300 group-hover:w-12"
        style={{ backgroundColor: item.accent }}
      />
    </>
  );

  const className =
    "group flex min-h-[160px] flex-col rounded-[22px] border border-black/[0.04] p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-18px_rgba(0,0,0,0.18)] sm:min-h-[180px] sm:rounded-[26px] sm:p-5";

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={className}
        style={{ backgroundColor: item.surface }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={className} style={{ backgroundColor: item.surface }}>
      {content}
    </div>
  );
}

function ContactGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {CONTACT_ITEMS.map((item) => (
        <ContactCard key={item.label} item={item} />
      ))}
    </div>
  );
}

function MainCTA() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-neutral-950 p-6 text-white sm:rounded-[32px] sm:p-8 lg:p-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[24px] border-white/[0.06] sm:h-48 sm:w-48"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-24 h-24 w-24 rounded-full bg-[#F16B52]/15 blur-2xl"
      />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={15} className="text-[#F9D66B]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              Your next big idea
            </span>
          </div>

          <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.065em] sm:text-4xl lg:text-5xl">
            Punya ide?
            <br />
            <span className="text-[#F9D66B]">Yuk, bikin nyata.</span>
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">
            Nggak harus semuanya sudah terencana. Ceritakan idemu, kita mulai
            dari sana.
          </p>
        </div>

        <Link
          href="mailto:your@email.com"
          className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#F9D66B] py-3 pl-5 pr-3 text-sm font-semibold text-neutral-950 transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9D66B] focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
        >
          Mulai ngobrol
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#F16B52]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600">
                  Say hello
                </span>
              </div>

              <h2
                id="contact-heading"
                className="text-4xl font-semibold leading-[1.05] tracking-[-0.07em] text-neutral-950 sm:text-5xl lg:text-6xl"
              >
                Let's make
                <br className="sm:hidden" /> something{" "}
                <span className="text-[#F16B52]">great.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-neutral-500 sm:text-[15px]">
              Ada proyek, ide, atau sekadar ingin berdiskusi? Kami terbuka untuk
              memulai percakapan baru.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactGrid />
        </Reveal>

        <Reveal delay={0.16} className="mt-5 sm:mt-6">
          <MainCTA />
        </Reveal>

        <div className="mt-6 flex flex-col gap-2 border-t border-neutral-200/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Skinylabs Creative
          </span>

          <span className="text-xs text-neutral-400">
            Made with curiosity, built with purpose.
          </span>
        </div>
      </div>
    </section>
  );
}
