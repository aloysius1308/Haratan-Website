import { complianceItems, complianceText } from "@/data/site-content";

export default function ComplianceNotice() {
  return (
    <div className="rounded-[2rem] border border-blue-100 bg-blue-50/70 p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Trust & Compliance</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Responsible processing from a Singapore-based team
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">{complianceText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {complianceItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-white p-5 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
