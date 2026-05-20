"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company } from "@/data/site-content";
import { navigation } from "@/data/navigation";
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
          <Image
            src="/haratan-logo.svg"
            alt="Haratan logo"
            width={82}
            height={34}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-black tracking-normal text-navy-950">
            Haratan
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700",
                pathname === item.href && "bg-blue-50 text-blue-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <a
            href={company.whatsappUrl}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-blue-700"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-950 xl:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="container-px mx-auto grid max-w-7xl gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-bold text-slate-700",
                  pathname === item.href && "bg-blue-50 text-blue-700"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsappUrl}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-base font-bold text-white"
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
