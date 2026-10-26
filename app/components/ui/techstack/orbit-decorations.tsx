"use client";

import { motion } from "motion/react";

/* =========================================================
   ORBIT DECORATIONS
========================================================= */

export function OrbitDecorations() {
  return (
    <>
      {/* Floating particle */}

      <motion.span
        animate={{
          y: [0, -7, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[9%]
          top-[24%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#FF6B57]
        "
      />

      <motion.span
        animate={{
          y: [0, 6, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[12%]
          top-[17%]
          h-1
          w-1
          rounded-full
          bg-[#6C63FF]
        "
      />

      <motion.span
        animate={{
          y: [0, -5, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          left-[15%]
          h-1
          w-1
          rounded-full
          bg-[#F4C430]
        "
      />

      <span
        className="
          absolute
          bottom-[23%]
          right-[9%]
          h-1.5
          w-1.5
          rounded-full
          bg-slate-300
        "
      />

      {/* Tiny cross */}

      <span className="absolute left-[18%] top-[70%]">
        <span
          className="
            absolute
            left-1/2
            top-0
            h-3
            w-px
            -translate-x-1/2
            bg-slate-200
          "
        />

        <span
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-3
            -translate-y-1/2
            bg-slate-200
          "
        />
      </span>

      {/* Another tiny cross */}

      <span className="absolute bottom-[35%] right-[17%]">
        <span
          className="
            absolute
            left-1/2
            top-0
            h-2.5
            w-px
            -translate-x-1/2
            bg-slate-200
          "
        />

        <span
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-2.5
            -translate-y-1/2
            bg-slate-200
          "
        />
      </span>
    </>
  );
}
