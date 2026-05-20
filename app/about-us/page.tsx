import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CTASection from "@/components/CTASection";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { aboutValues, site } from "@/lib/site-data";

const proofCards: Array<[string, string, LucideIcon]> = [
  ["Singapore-based", "Local service for practical customer needs.", Building2],
  ["Trust-focused", "KYC, screening, and responsible processing.", ShieldCheck],
  [
    "Community-minded",
    "Friendly support for families and businesses.",
    HeartHandshake
  ]
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Haratan Servicing Pte Ltd, a Singapore-based remittance and money changing company."
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Haratan"
        title="A modern Singapore financial services team with a human touch"
        text="Haratan Servicing Pte Ltd helps customers send money overseas and exchange foreign currencies safely, conveniently, and with clear support from our staff."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Who We Are"
              title="Built for everyday customers, migrant workers, and business payments"
              text="Haratan serves walk-in customers, Indonesian communities in Singapore, business customers, and existing remittance customers who want a trusted provider for overseas money movement."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.whatsappUrl}>
                WhatsApp Us
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/remittance" variant="secondary">
                Explore Remittance
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {proofCards.map(([title, text, Icon]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <Icon className="h-8 w-8 text-navy-800" />
                <h2 className="mt-8 text-xl font-bold text-navy-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Approach"
            title="Professional service without the old-school money changer feel"
            text="Haratan is designed to feel clear, modern, and dependable while keeping the customer experience simple."
          />
          <div className="mt-10">
            <InfoGrid items={aboutValues} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ask us about remittance or currency exchange"
        text="Our team can confirm service availability, fees, rates, and required documents before you proceed."
      />
    </>
  );
}
