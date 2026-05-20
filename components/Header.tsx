"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav
        className="container-px mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-xl">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-lg font-black text-white">
            H
          </span>
          <span>
            <span className="block text-lg font-black leading-5 text-navy-950">
              Haratan
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Servicing Pte Ltd
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-navy-50 hover:text-navy-900",
                pathname === item.href && "bg-navy-50 text-navy-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={site.whatsappUrl}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy-800 px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-navy-900"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-950 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-px mx-auto grid max-w-7xl gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-bold text-slate-700",
                  pathname === item.href && "bg-navy-50 text-navy-950"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsappUrl}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-5 py-3 text-base font-bold text-white"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
