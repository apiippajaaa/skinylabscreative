"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Tool } from "./tech-stack.data";

function ToolNode({
  tool,
  index,
  reverse,
  duration,
  reduceMotion,
}: {
  tool: Tool;
  index: number;
  reverse: boolean;
  duration: number;
  reduceMotion: boolean;
}) {
  const counterRotation = reverse ? 360 : -360;

  return (
    <motion.div
      className="
        absolute
        z-20
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        left: `${tool.x}%`,
        top: `${tool.y}%`,
      }}
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.045,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, counterRotation],
              }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -3, 0],
                }
          }
          transition={{
            duration: 4 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="group relative"
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-full
              z-50
              mt-2
              -translate-x-1/2
              translate-y-1
              whitespace-nowrap
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-[9px]
              font-medium
              text-slate-700
              opacity-0
              shadow-[0_8px_24px_rgba(15,23,42,0.08)]
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {tool.name}
          </div>

          <div
            className={`
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-[13px]
              border
              border-white
              shadow-[0_6px_22px_rgba(15,23,42,0.08)]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)]
              sm:h-[42px]
              sm:w-[42px]
              ${tool.accent}
              ${tool.rotate ?? ""}
            `}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-[12px]
                border
                border-black/[0.025]
              "
            />

            <img
              src={tool.icon}
              alt={tool.name}
              width={20}
              height={20}
              loading="lazy"
              draggable={false}
              className="
                relative
                h-4.75
                w-4.75
                object-contain
              "
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Orbit({
  tools,
  size,
  duration,
  reverse = false,
  dashed = false,
  subtle = false,
}: {
  tools: Tool[];
  size: string;
  duration: number;
  reverse?: boolean;
  dashed?: boolean;
  subtle?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? undefined
          : {
              rotate: reverse ? [0, -360] : [0, 360],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        absolute
        left-1/2
        top-1/2
        aspect-square
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        ${size}
        ${
          dashed
            ? "border border-dashed border-slate-300/80"
            : subtle
            ? "border border-slate-200/50"
            : "border border-slate-300/80"
        }
      `}
    >
      {tools.map((tool, index) => (
        <ToolNode
          key={tool.name}
          tool={tool}
          index={index}
          reverse={reverse}
          duration={duration}
          reduceMotion={Boolean(shouldReduceMotion)}
        />
      ))}

      {!subtle && (
        <span
          className={`
            absolute
            left-1/2
            top-[-3px]
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            ${dashed ? "bg-[#6C63FF]" : "bg-[#FF6B57]"}
          `}
        />
      )}
    </motion.div>
  );
}
