import { experienceStats } from "@/data/site-content";

export default function MetricCards() {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-8">
      {experienceStats.map((stat) => (
        <div key={stat.label} className="rounded-3xl bg-slate-50 p-5 text-center">
          <p className="text-4xl font-semibold text-blue-600 sm:text-5xl">{stat.value}</p>
          <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
