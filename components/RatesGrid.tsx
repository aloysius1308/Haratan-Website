import { ArrowUpRight } from "lucide-react";
import { moneyChangerRates, remittanceRates } from "@/data/rates";

type RatesGridProps = {
  type: "remittance" | "money-changer";
};

export default function RatesGrid({ type }: RatesGridProps) {
  const rates = type === "remittance" ? remittanceRates : moneyChangerRates;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {rates.map((rate) => (
        <div
          key={rate.code}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-3xl shadow-sm">
                {rate.flag}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">{rate.code}</h3>
                <p className="mt-1 text-sm text-slate-500">{rate.name}</p>
              </div>
            </div>
            <span className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-bold text-blue-600">
              {rate.change}
            </span>
          </div>

          {"sendRate" in rate ? (
            <div className="mt-8 grid gap-3">
              <p className="text-sm text-slate-500">
                Send rate <span className="ml-2 text-3xl font-semibold text-slate-950">{rate.sendRate}</span> {rate.code}
              </p>
              <p className="text-sm text-slate-500">
                Fee <span className="ml-2 text-xl font-semibold text-slate-950">{rate.fee}</span>
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-3">
              <p className="text-sm text-slate-500">
                Buy <span className="ml-2 text-3xl font-semibold text-slate-950">{rate.buy}</span> {rate.code}
              </p>
              <p className="text-sm text-slate-500">
                Sell <span className="ml-2 text-3xl font-semibold text-slate-950">{rate.sell}</span> {rate.code}
              </p>
            </div>
          )}

          <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
            Indicative only
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      ))}
    </div>
  );
}
