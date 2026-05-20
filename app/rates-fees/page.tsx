import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
  ReceiptText,
  ShieldAlert,
  type LucideIcon
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site-data";

const feeCards: Array<{
  icon: LucideIcon;
  title: string;
  value: string;
  text: string;
}> = [
  {
    icon: MessageCircle,
    title: "Latest rates",
    value: "Contact us",
    text: "WhatsApp Haratan to ask for current remittance or money changer rates."
  },
  {
    icon: ReceiptText,
    title: "Normal remittance fee",
    value: "From S$5",
    text: "Final fee depends on transaction details, destination, and service requirements."
  },
  {
    icon: ReceiptText,
    title: "Express remittance fee",
    value: "From S$10",
    text: "Express service availability and final fee are confirmed by Haratan staff."
  }
];

export const metadata: Metadata = {
  title: "Rates & Fees",
  description:
    "Contact Haratan for latest remittance and money changer rates. Normal remittance fee from S$5 and express remittance fee from S$10."
};

export default function RatesFeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rates & Fees"
        title="Contact us for the latest rates"
        text="We do not show fake live rates. Haratan staff will confirm the final exchange rate and fee before processing."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fee Guide"
            title="Simple fee guidance, confirmed by staff"
            text="The final fee and exchange rate will be confirmed before processing. Rates may change due to market movement and availability."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {feeCards.map(({ icon: Icon, title, value, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {title}
                </p>
                <h2 className="mt-2 text-3xl font-black text-navy-950">
                  {value}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <ShieldAlert className="h-7 w-7 shrink-0 text-amber-700" />
              <div>
                <h2 className="text-xl font-bold text-navy-950">
                  Rate disclaimer
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Final fee and exchange rate will be confirmed by Haratan staff
                  before processing. Rates are subject to market movement,
                  destination requirements, currency availability, payment
                  partner rules, and compliance checks.
                </p>
              </div>
            </div>
          </div>

          <ButtonLink href={site.whatsappUrl} className="mt-10">
            Ask for latest rates
            <ArrowRight className="h-5 w-5" />
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title="Get a current quote before you proceed"
        text="Send us your amount, currency, destination, and service need so our team can advise the latest available rate."
      />
    </>
  );
}
