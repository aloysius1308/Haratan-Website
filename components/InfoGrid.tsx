import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export default function InfoGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-xl font-bold text-navy-950">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  );
}
