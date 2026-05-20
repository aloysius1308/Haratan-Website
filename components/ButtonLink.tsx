import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const classes = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition",
    variant === "primary" &&
      "bg-navy-800 text-white shadow-soft hover:bg-navy-900",
    variant === "secondary" &&
      "border border-navy-200 bg-white text-navy-900 hover:border-navy-400 hover:bg-navy-50",
    variant === "light" &&
      "bg-white text-navy-950 shadow-card hover:bg-cyan-50",
    className
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
