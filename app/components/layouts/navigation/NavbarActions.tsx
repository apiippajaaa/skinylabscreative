// app/components/layouts/navigation/NavbarActions.tsx

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function LanguageToggle() {
  return (
    <button
      type="button"
      aria-label="Change language"
      className="inline-flex h-9 items-center rounded-full bg-slate-100 p-1 text-[10px] font-bold tracking-wide"
    >
      <span className="flex h-7 min-w-8 items-center justify-center rounded-full bg-white px-2 text-slate-900 shadow-sm">
        ID
      </span>

      <span className="flex h-7 min-w-8 items-center justify-center rounded-full px-2 text-slate-400">
        EN
      </span>
    </button>
  );
}

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <LanguageToggle />

      <Link
        href="/register"
        className="group inline-flex h-10 items-center gap-2 rounded-full bg-slate-950 px-5 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.97]"
      >
        <span>Get Started</span>

        <ArrowUpRight
          size={14}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
