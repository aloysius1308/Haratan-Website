import type { Metadata } from "next";
import { ArrowRight, Banknote, Clock3, Coins, RefreshCcw } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CalculatorCard from "@/components/CalculatorCard";
import CTASection from "@/components/CTASection";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";
import RatesGrid from "@/components/RatesGrid";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Money Changer",
  description:
    "Foreign currency exchange services in Singapore with competitive rates subject to market movement and availability."
};

const items = [
  {
    icon: Banknote,
    title: "Foreign currency exchange",
    text: "Exchange foreign currencies through Haratan for travel, business, family, or everyday needs."
  },
  {
    icon: Coins,
    title: "Competitive rates",
    text: "Rates are market-dependent and subject to availability. Our staff can confirm the latest quoted rate."
  },
  {
    icon: RefreshCcw,
    title: "Market movement",
    text: "Exchange rates may change based on market conditions, currency supply, and transaction size."
  },
  {
    icon: Clock3,
    title: "Plan larger amounts",
    text: "Please contact us before visiting for larger amounts so we can check currency availability."
  }
];

export default function MoneyChangerPage() {
  return (
    <>
      <PageHero
        eyebrow="Money Changer"
        title="Foreign currency exchange with practical, friendly service"
        text="Haratan supports walk-in customers who need foreign currency exchange in Singapore. Contact us first for larger amounts or specific currency needs."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Exchange Services"
            title="Know the rate and availability before you visit"
            text="Currency exchange rates may move throughout the day. For larger transactions, WhatsApp us first so our team can advise."
          />
          <div className="mt-10">
            <InfoGrid items={items} />
          </div>
          <div className="mt-10 rounded-[2rem] bg-navy-950 p-8 text-white sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Visiting for a larger amount?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                  Contact Haratan before visiting. Our staff can confirm
                  currency availability, indicative rate, and any details needed
                  for your exchange.
                </p>
              </div>
              <ButtonLink href={company.whatsappUrl} variant="light">
                WhatsApp Us
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Cash Exchange Estimate"
            title="Money changer calculator"
            text="For physical cash exchange, availability and final buy/sell rates are confirmed by staff before you visit or transact."
          />
          <CalculatorCard mode="money-changer" />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Money Changer Rates"
            title="Indicative cash buy and sell rates"
            text="Rates are subject to market movement and currency stock availability."
          />
          <div className="mt-12">
            <RatesGrid type="money-changer" />
          </div>
        </div>
      </section>

      <CTASection
        title="Ask for the latest currency availability"
        text="Rates are subject to market movement and stock availability. Message us before visiting for larger amounts."
      />
    </>
  );
}
