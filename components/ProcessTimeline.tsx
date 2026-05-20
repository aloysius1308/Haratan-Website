import { Check } from "lucide-react";

export default function ProcessTimeline({ steps }: { steps: string[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <div
          key={step}
          className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white">
            {index + 1}
          </div>
          <h3 className="mt-5 text-lg font-bold text-navy-950">{step}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {index === 0 &&
              "Message us with your destination, amount, and service needs."}
            {index === 1 &&
              "Provide identity or supporting documents where required."}
            {index === 2 &&
              "Our staff confirms the applicable rate, fee, and details."}
            {index === 3 &&
              "Make payment using the method confirmed by our team."}
            {index === 4 &&
              "Transfer is processed after checks and partner requirements."}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
            <Check className="h-4 w-4" />
            Guided step
          </div>
        </div>
      ))}
    </div>
  );
}
