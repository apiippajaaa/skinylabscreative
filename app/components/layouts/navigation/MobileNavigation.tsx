// app/components/layouts/navigation/MobileNavigation.tsx

import Link from "next/link";
import NavMenu from "./NavMenu";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-900 bg-[#FFFDF9] md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-4 opacity-0"
      }`}
    >
      <div className="relative flex h-dvh w-full flex-col overflow-y-auto px-5 pb-6 pt-24 sm:px-6">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 h-52 w-52 rounded-full bg-[#FFDCD5]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-24 h-56 w-56 rounded-full bg-[#DFF2E4]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-[42%] h-4 w-4 rounded-full bg-[#D6CCF5]"
        />

        {/* Title */}
        <div
          className={`relative mb-9 text-center transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore Skinylabs
          </p>
        </div>

        {/* Navigation */}
        <div className="relative flex-1">
          <NavMenu mobile onNavigate={onClose} />
        </div>

        {/* CTA */}
        <div
          className={`relative mt-8 transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <Link
            href="/register"
            onClick={onClose}
            className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.965]"
          >
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}
