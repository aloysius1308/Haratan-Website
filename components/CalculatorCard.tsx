"use client";

import { ArrowDown, ArrowRight, ArrowRightLeft, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ButtonLink from "@/components/ButtonLink";
import { company } from "@/data/site-content";
import {
  calculatorCurrencies,
  conversionRates,
  currencies,
  type CurrencyCode
} from "@/data/rates";

type CalculatorCardProps = {
  mode: "remittance" | "money-changer";
  className?: string;
};

type EditedSide = "send" | "receive";

const parseAmount = (value: string) => {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatAmount = (value: number, currency: CurrencyCode) => {
  if (!Number.isFinite(value)) return "0";
  if (currency === "IDR") {
    return value.toLocaleString("en-SG", { maximumFractionDigits: 0 });
  }
  return value.toLocaleString("en-SG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const sanitizeInput = (value: string) => value.replace(/[^\d.,]/g, "");

function CurrencySelect({
  value,
  onChange,
  label
}: {
  value: CurrencyCode;
  onChange: (value: CurrencyCode) => void;
  label: string;
}) {
  const selected = currencies.find((currency) => currency.code === value);

  return (
    <div className="relative flex min-w-[118px] items-center justify-end gap-2 rounded-2xl px-4">
      <span className="text-2xl leading-none" aria-hidden="true">
        {selected?.flag}
      </span>
      <span className="text-lg font-black text-slate-950">{selected?.code}</span>
      <ChevronDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as CurrencyCode)}
        className="absolute inset-0 cursor-pointer opacity-0"
        aria-label={label}
      >
        {calculatorCurrencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.flag} {currency.code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function CalculatorCard({
  mode,
  className = ""
}: CalculatorCardProps) {
  const [sendAmount, setSendAmount] = useState("1,000.00");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [from, setFrom] = useState<CurrencyCode>("SGD");
  const [to, setTo] = useState<CurrencyCode>(mode === "remittance" ? "IDR" : "USD");
  const [lastEdited, setLastEdited] = useState<EditedSide>("send");

  const rate = conversionRates[from][to];
  const sendNumeric = parseAmount(sendAmount);
  const receiveNumeric = parseAmount(receiveAmount);
  const fromCurrency = currencies.find((item) => item.code === from);
  const toCurrency = currencies.find((item) => item.code === to);

  useEffect(() => {
    if (lastEdited === "send") {
      setReceiveAmount(formatAmount(sendNumeric * rate, to));
    } else {
      setSendAmount(formatAmount(rate ? receiveNumeric / rate : 0, from));
    }
    // We intentionally derive the opposite side from the most recently edited input.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, rate, lastEdited]);

  const title = mode === "remittance" ? "Remittance Calculator" : "Money Changer Calculator";
  const subtitle =
    mode === "remittance"
      ? "Edit either side to estimate how much to send or receive."
      : "Estimate physical cash exchange before visiting our counter.";
  const fee = mode === "remittance" ? "from S$5" : "Buy/sell cash rate";
  const timing = mode === "remittance" ? "Same-day where available" : "Subject to stock";
  const disclaimer =
    mode === "remittance"
      ? "Displayed rates are indicative only. Final rates and fees will be confirmed by staff."
      : "Rates are subject to market movement and currency stock availability.";

  const rateLabel = useMemo(
    () => `1 ${fromCurrency?.code} = ${formatAmount(rate, to)} ${toCurrency?.code}`,
    [fromCurrency?.code, rate, to, toCurrency?.code]
  );

  const handleSendChange = (value: string) => {
    const next = sanitizeInput(value);
    setLastEdited("send");
    setSendAmount(next);
    setReceiveAmount(formatAmount(parseAmount(next) * rate, to));
  };

  const handleReceiveChange = (value: string) => {
    const next = sanitizeInput(value);
    setLastEdited("receive");
    setReceiveAmount(next);
    setSendAmount(formatAmount(rate ? parseAmount(next) / rate : 0, from));
  };

  const normalizeFields = () => {
    setSendAmount(formatAmount(parseAmount(sendAmount), from));
    setReceiveAmount(formatAmount(parseAmount(receiveAmount), to));
  };

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setLastEdited("send");
  };

  return (
    <div className={`rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
          onClick={swapCurrencies}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-card transition hover:-translate-y-0.5"
          aria-label="Swap currencies"
        >
          <ArrowRightLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-7 grid gap-4">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-600">You Send</label>
          <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 focus-within:border-blue-300">
            <input
              value={sendAmount}
              onChange={(event) => handleSendChange(event.target.value)}
              onBlur={normalizeFields}
              className="min-w-0 bg-transparent px-5 py-4 text-3xl font-medium outline-none"
              inputMode="decimal"
              aria-label="You send amount"
            />
            <CurrencySelect value={from} onChange={setFrom} label="You send currency" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-soft">
            <ArrowDown className="h-5 w-5" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-600">They Receive</label>
          <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 focus-within:border-blue-300">
            <input
              value={receiveAmount}
              onChange={(event) => handleReceiveChange(event.target.value)}
              onBlur={normalizeFields}
              className="min-w-0 bg-transparent px-5 py-4 text-3xl font-black text-slate-950 outline-none"
              inputMode="decimal"
              aria-label="They receive amount"
            />
            <CurrencySelect value={to} onChange={setTo} label="They receive currency" />
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-slate-200" />

      <dl className="grid gap-3 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Indicative Rate</dt>
          <dd className="text-right font-black text-slate-950">{rateLabel}</dd>
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

      <ButtonLink href={company.whatsappUrl} className="mt-6 w-full">
        {mode === "remittance" ? "Confirm on WhatsApp" : "Contact Before Visiting"}
        <ArrowRight className="h-5 w-5" />
      </ButtonLink>

      <p className="mt-4 text-xs leading-5 text-slate-500">{disclaimer}</p>
    </div>
  );
}
