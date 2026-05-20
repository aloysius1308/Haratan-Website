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
      className="group flex min-h-[320px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-8 text-2xl font-semibold leading-snug text-slate-950">{title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{text}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
