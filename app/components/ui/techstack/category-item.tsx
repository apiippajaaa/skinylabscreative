import type { LucideIcon } from "lucide-react";

type CategoryItemProps = {
  label: string;
  count: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  bgClass: string;
};

export function CategoryItem({
  label,
  count,
  description,
  icon: Icon,
  iconClass,
  bgClass,
}: CategoryItemProps) {
  return (
    <div className="group flex items-center gap-3">
      <div
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-[11px]
          ${bgClass}
          transition-transform
          duration-300
          group-hover:scale-105
        `}
      >
        <Icon size={15} strokeWidth={1.6} className={iconClass} />
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="
              text-[10px]
              font-semibold
              tracking-[-0.01em]
              text-slate-800
            "
          >
            {label}
          </span>

          <span
            className="
              font-mono
              text-[8px]
              text-slate-300
            "
          >
            {count}
          </span>
        </div>

        <p
          className="
            mt-0.5
            text-[9px]
            leading-4
            text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
