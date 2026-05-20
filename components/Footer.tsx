import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { navigation } from "@/data/navigation";
import { company } from "@/data/site-content";

export default function Footer() {
  return (
    <footer className="bg-[#10172a] text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/haratan-logo.svg" alt="Haratan logo" width={58} height={28} className="h-8 w-auto rounded bg-white/95 p-1" />
            <span className="text-lg font-black">Haratan</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">
            Fast, transparent currency exchange backed by 20+ years of
            experience. Safe, convenient, and reliable.
          </p>
          <div className="mt-5 grid gap-3 text-sm text-blue-100">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4" />Singapore</p>
            <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4" />{company.phone}</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4" />{company.email}</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
            Menu
          </h2>
          <div className="mt-5 grid gap-3">
            {navigation.slice(1, 5).map((item) => (
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
            Support
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-blue-100">
            <Link href="/contact-us" className="hover:text-white">Contact</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <a href={company.whatsappUrl} className="flex gap-3 hover:text-white">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">Legal</h2>
          <div className="mt-5 grid gap-4 text-sm text-blue-100">
            <Link href="/rates-fees" className="hover:text-white">Rates disclaimer</Link>
            <Link href="/remittance" className="hover:text-white">KYC & compliance</Link>
          </div>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl">
        <div className="border-y border-white/30 py-5 text-center text-xs text-blue-100">
          Haratan is upgrading systems and expanding partnerships.
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 py-5 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <span key={index} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-navy-900">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
