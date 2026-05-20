import { ShieldCheck } from "lucide-react";

export default function ComplianceNotice() {
  return (
    <div className="rounded-[2rem] border border-navy-100 bg-navy-50 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-800 shadow-sm">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy-950">
            Compliance and processing notice
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Haratan may conduct identity verification, customer due diligence,
            transaction screening, and request supporting documents where
            required. Transactions may be delayed or rejected due to compliance
            checks, bank processing, payment partner requirements, or regulatory
            obligations.
          </p>
        </div>
      </div>
    </div>
  );
}
