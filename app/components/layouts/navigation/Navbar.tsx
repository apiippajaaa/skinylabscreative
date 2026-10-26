"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavMenu from "./NavMenu";
import NavbarActions, { LanguageToggle } from "./NavbarActions";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  // Kunci body scroll ketika mobile navigation dibuka.
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Tutup mobile navigation dengan ESC.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-1000 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Skinylabs home"
            className="group flex shrink-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:-rotate-6">
              <Image
                src="/logo.svg"
                alt="Skinylabs"
                width={30}
                height={30}
                priority
                className="h-8 w-8 object-contain"
              />
            </div>

            <span className="text-[16px] font-semibold tracking-[-0.04em] text-slate-950">
              skinylabs
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* Desktop actions */}
          <NavbarActions />

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-all duration-300 hover:bg-slate-200 active:scale-90"
            >
              {isMenuOpen ? (
                <X size={19} aria-hidden="true" />
              ) : (
                <Menu size={19} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <MobileNavigation isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
