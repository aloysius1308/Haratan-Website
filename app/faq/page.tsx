import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";
import PageHero from "@/components/PageHero";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Haratan remittance, exchange rates, KYC documents, cancellations, Indonesia transfers, and money changing."
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions before you send or exchange"
        text="Find quick answers about transfer timing, rate confirmation, documents, cancellation, Indonesia transfers, and contacting Haratan."
      />

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto max-w-4xl">
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        text="WhatsApp Haratan and our team will help with your remittance or money changer enquiry."
      />
    </>
  );
}
