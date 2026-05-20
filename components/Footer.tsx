import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyanSoft text-lg font-black text-navy-950">
              H
            </span>
            <span>
              <span className="block text-lg font-black leading-5">
                Haratan
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                Servicing Pte Ltd
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">
            Singapore-based remittance and money changing services for personal,
            Indonesia corridor, walk-in exchange, and business overseas payment
            needs.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
            Menu
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-blue-100 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
            Contact
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-blue-100">
            <a className="flex gap-3 hover:text-white" href={site.whatsappUrl}>
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
              WhatsApp Haratan
            </a>
            <p className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {site.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              {site.email}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {site.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 py-5 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Haratan Servicing Pte Ltd. All rights
            reserved.
          </p>
          <p>Public company website. No online transaction function provided.</p>
        </div>
      </div>
    </footer>
  );
}
