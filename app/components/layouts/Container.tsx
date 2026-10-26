import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10 sm:py-6 py-8 ${className}`}
    >
      {children}
    </div>
  );
}
