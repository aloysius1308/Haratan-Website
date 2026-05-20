import { Check } from "lucide-react";
import { processSteps } from "@/data/site-content";

export default function ProcessTimeline() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <div
          key={step.title}
          className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="absolute -top-3 right-5 rounded-xl bg-blue-600 px-3 py-2 text-sm font-black text-white shadow-card">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-slate-950">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
