"use client";

import { ArrowDown, ArrowRight, ArrowRightLeft } from "lucide-react";
import { useMemo, useState } from "react";
import ButtonLink from "@/components/ButtonLink";
import { company } from "@/data/site-content";
import { conversionRates, currencies, type CurrencyCode } from "@/data/rates";

type CalculatorCardProps = {
  mode: "remittance" | "money-changer";
  className?: string;
};

const formatAmount = (value: number, currency: CurrencyCode) => {
  if (!Number.isFinite(value)) return "0.00";
  if (currency === "IDR") {
    return value.toLocaleString("en-SG", { maximumFractionDigits: 0 });
  }
  return value.toLocaleString("en-SG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export default function CalculatorCard({ mode, className = "" }: CalculatorCardProps) {
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState<CurrencyCode>("SGD");
  const [to, setTo] = useState<CurrencyCode>(mode === "remittance" ? "IDR" : "USD");

  const numericAmount = Number(amount || 0);
  const rate = conversionRates[from][to];
  const received = useMemo(() => numericAmount * rate, [numericAmount, rate]);
  const fromCurrency = currencies.find((item) => item.code === from);
  const toCurrency = currencies.find((item) => item.code === to);

  const title = mode === "remittance" ? "Remittance Calculator" : "Money Changer Calculator";
  const subtitle =
    mode === "remittance"
      ? "Estimate overseas transfers before you WhatsApp our team."
      : "Estimate cash exchange before visiting our counter.";
  const fee = mode === "remittance" ? "from S$5" : "Cash rate";
  const timing = mode === "remittance" ? "Same-day where available" : "Subject to stock";
  const disclaimer =
    mode === "remittance"
      ? "Displayed rates are indicative only. Final rates and fees will be confirmed by staff."
      : "Rates are subject to market movement and currency stock availability.";

  return (
    <div className={`rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 ${className}`}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            {mode === "remittance" ? "Digital transfer" : "Physical cash"}
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-card transition hover:-translate-y-0.5"
          aria-label="Swap currencies"
        >
          <ArrowRightLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-600">You Send</label>
          <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 focus-within:border-blue-300">
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value.replace(/[^\d.]/g, ""))}
              className="min-w-0 bg-transparent px-5 py-5 text-3xl font-medium outline-none"
              inputMode="decimal"
              aria-label="You send amount"
            />
            <select
              value={from}
              onChange={(event) => setFrom(event.target.value as CurrencyCode)}
              className="bg-transparent px-4 text-lg font-black outline-none"
              aria-label="You send currency"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-soft">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-600">They Receive</label>
          <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <output className="min-w-0 px-5 py-5 text-3xl font-black text-slate-950">
              {formatAmount(received, to)}
            </output>
            <select
              value={to}
              onChange={(event) => setTo(event.target.value as CurrencyCode)}
              className="bg-transparent px-4 text-lg font-black outline-none"
              aria-label="They receive currency"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="my-7 h-px bg-slate-200" />

      <dl className="grid gap-4 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Indicative Rate</dt>
          <dd className="text-right font-black text-slate-950">
            1 {fromCurrency?.code} = {formatAmount(rate, to)} {toCurrency?.code}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">{mode === "remittance" ? "Remittance Fee" : "Buy/Sell Cash Rate"}</dt>
          <dd className="text-right font-black text-blue-600">{fee}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">{mode === "remittance" ? "Delivery Timing" : "Availability"}</dt>
          <dd className="text-right font-black text-blue-600">{timing}</dd>
        </div>
      </dl>

      <ButtonLink href={company.whatsappUrl} className="mt-7 w-full">
        {mode === "remittance" ? "Confirm on WhatsApp" : "Contact Before Visiting"}
        <ArrowRight className="h-5 w-5" />
      </ButtonLink>

      <p className="mt-4 text-xs leading-5 text-slate-500">{disclaimer}</p>
    </div>
  );
}
