import {
  ArrowRightLeft,
  BadgeDollarSign,
  Banknote,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";

const transferDetails: Array<[string, string, LucideIcon]> = [
  ["Rate", "Confirmed by staff", BadgeDollarSign],
  ["Status", "Screened before processing", CheckCircle2],
  ["Service", "Remittance + exchange", Banknote],
  ["Support", "WhatsApp assistance", ShieldCheck]
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-5 top-10 hidden rounded-3xl bg-white p-4 shadow-soft sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-100 text-navy-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Secure
            </p>
            <p className="text-sm font-black text-navy-950">KYC Process</p>
          </div>
        </div>
      </div>
      <div className="rounded-[2rem] border border-navy-100 bg-white p-4 shadow-soft">
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-100">
                Haratan Transfer Desk
              </p>
              <h2 className="mt-2 text-2xl font-black">Singapore to Overseas</h2>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Globe2 className="h-6 w-6 text-cyanSoft" />
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl bg-white/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                    You send
                  </p>
                  <p className="mt-1 text-3xl font-black">SGD</p>
                </div>
                <ArrowRightLeft className="h-6 w-6 text-cyanSoft" />
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                    Receiver gets
                  </p>
                  <p className="mt-1 text-3xl font-black">IDR</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {transferDetails.map(([label, value, Icon]) => (
                <div key={label} className="rounded-2xl bg-white p-4 text-navy-950">
                  <Icon className="h-5 w-5 text-navy-700" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
