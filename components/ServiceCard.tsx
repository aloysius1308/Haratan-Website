import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  text,
  href
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-navy-200 hover:shadow-soft"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 transition group-hover:bg-navy-800 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-800">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
