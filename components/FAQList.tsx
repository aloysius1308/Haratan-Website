import { CircleHelp } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
        >
          <summary className="flex cursor-pointer list-none items-start gap-4 text-left">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
              <CircleHelp className="h-5 w-5" />
            </span>
            <span className="flex-1 text-base font-bold text-navy-950">
              {item.question}
            </span>
            <span className="text-2xl leading-5 text-navy-700 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 pl-[52px] text-sm leading-7 text-slate-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
