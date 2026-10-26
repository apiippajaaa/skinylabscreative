import Link from "next/link";

const menuItems = [
  {
    name: "Home",
    href: "/",
    hoverText: "hover:text-[#D65A48]",
    underline: "bg-[#FFB8AA]",
    mobileBg: "bg-[#FFE8E2]",
    mobileAccent: "bg-[#F49A88]",
  },
  {
    name: "Explore",
    href: "/explore",
    hoverText: "hover:text-[#4280A7]",
    underline: "bg-[#A7D7F1]",
    mobileBg: "bg-[#E5F4FC]",
    mobileAccent: "bg-[#86C5E8]",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    hoverText: "hover:text-[#6D5BB2]",
    underline: "bg-[#C8BDF3]",
    mobileBg: "bg-[#EEEAFE]",
    mobileAccent: "bg-[#AA9BE4]",
  },
  {
    name: "About",
    href: "/about",
    hoverText: "hover:text-[#4C835C]",
    underline: "bg-[#B6DDBE]",
    mobileBg: "bg-[#E8F6EB]",
    mobileAccent: "bg-[#9DCEA8]",
  },
] as const;

interface NavMenuProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavMenu({ mobile = false, onNavigate }: NavMenuProps) {
  if (mobile) {
    return (
      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col gap-2.5">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`group relative flex min-h-18.5 items-center justify-center overflow-hidden rounded-xl px-6 text-center transition-all duration-300 ease-out active:scale-[0.965] ${item.mobileBg}`}
              >
                {/* accent kiri */}

                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-1 ${item.mobileAccent} opacity-80 transition-all duration-300 group-hover:w-1.5`}
                />

                {/* Highlight */}

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Text */}

                <span className="relative z-10 text-[25px] font-semibold leading-none tracking-tighter text-slate-950 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8 lg:gap-10">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`group relative inline-flex py-2 text-[13px] font-medium tracking-[-0.01em] text-slate-500 transition-colors duration-300 ${item.hoverText}`}
            >
              {item.name}

              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 ${item.underline}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
