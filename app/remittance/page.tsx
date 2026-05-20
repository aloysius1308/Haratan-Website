import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import ComplianceNotice from "@/components/ComplianceNotice";
import CTASection from "@/components/CTASection";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { remittanceItems, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Remittance",
  description:
    "Overseas money transfer services for personal remittance, Indonesia corridor, and business remittance customers."
};

const details = [
  "Personal remittance for family support, daily needs, and overseas commitments.",
  "Business remittance for payments to suppliers, partners, or overseas beneficiaries.",
  "Indonesia-focused support for Indonesian communities in Singapore.",
  "KYC documents and supporting information may be required before processing.",
  "Processing time depends on destination country, receiving bank, compliance checks, and payment partners.",
  "Rates are confirmed only after funds are received or explicitly agreed by Haratan staff."
];

export default function RemittancePage() {
  return (
    <>
      <PageHero
        eyebrow="Remittance"
        title="Send money overseas with clear support from Haratan"
        text="Haratan provides overseas money transfer services for personal and business needs, including a strong focus on Indonesia transfers from Singapore."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Remittance for people, families, and businesses"
            text="Our team will guide you through beneficiary details, required checks, fees, rates, and processing expectations."
          />
          <div className="mt-10">
            <InfoGrid items={remittanceItems} />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Important Details"
              title="What customers should know before sending"
              text="Remittance is handled carefully. Final timing, rate, and processing depend on transaction details and required checks."
            />
            <ButtonLink href={site.whatsappUrl} className="mt-8">
              Ask on WhatsApp
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
          <div className="grid gap-4">
            {details.map((detail) => (
              <div
                key={detail}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-navy-700" />
                <p className="text-sm leading-7 text-slate-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-px mx-auto max-w-7xl py-12">
          <ComplianceNotice />
        </div>
      </section>

      <CTASection
        title="Need to send money overseas?"
        text="Message Haratan with your destination, amount, and beneficiary needs. We will guide you through the next steps."
      />
    </>
  );
}
