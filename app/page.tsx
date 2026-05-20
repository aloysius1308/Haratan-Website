import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HandCoins,
  Headphones,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";
import HeroVisual from "@/components/HeroVisual";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { faqs, services, site } from "@/lib/site-data";

const whyChoose = [
  {
    icon: ReceiptText,
    title: "Transparent fees",
    text: "Clear fee guidance before processing, with final confirmation from our staff."
  },
  {
    icon: Headphones,
    title: "Friendly support",
    text: "Human assistance for remittance, exchange, KYC, and beneficiary questions."
  },
  {
    icon: HandCoins,
    title: "Competitive rates",
    text: "Market-aware rates for walk-in customers, overseas payments, and regular senders."
  },
  {
    icon: FileCheck2,
    title: "Compliance-focused process",
    text: "Identity checks and transaction screening help keep every transaction responsible."
  },
  {
    icon: Clock3,
    title: "Fast processing",
    text: "We move quickly once details, payment, and required checks are complete."
  }
];

const processSteps = [
  "Contact us",
  "Complete verification",
  "Confirm rate and fee",
  "Make payment",
  "Transfer processed"
];

const trustBadges: Array<[string, LucideIcon]> = [
  ["Singapore-Based", Building2],
  ["KYC Verified", BadgeCheck],
  ["Secure Processing", ShieldCheck]
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#d8f5ff_0,#f7fbff_34%,#ffffff_72%)] pt-10 lg:pt-16">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-900 via-navy-700 to-cyanSoft" />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-10 sm:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/80 px-4 py-2 text-sm font-semibold text-navy-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-navy-700" />
              Singapore remittance and money changing services
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-navy-950 sm:text-6xl lg:text-7xl">
              Send Money with Confidence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Fast, reliable remittance and currency exchange services in
              Singapore.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.whatsappUrl} variant="primary">
                WhatsApp Us
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustBadges.map(([label, Icon]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white/75 px-4 py-3 text-sm font-semibold text-navy-900 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-navy-700" />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section id="services" className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What We Do"
            title="Clear financial services for people and businesses"
            text="Haratan supports daily remittance needs, walk-in currency exchange, and overseas business payments with a modern customer experience."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Haratan"
            title="A trusted, human way to move money"
            text="We combine friendly service with responsible checks, practical guidance, and clear communication from start to finish."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-navy-950 text-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
              Indonesia Corridor
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Supporting Indonesian communities in Singapore
            </h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">
              We help Indonesian migrant workers and families send money home,
              support business payments, and manage daily financial needs with
              practical guidance and respectful service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Family support", "Business payments", "Daily needs"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Singapore", "Start your transfer from a trusted local team."],
              ["Verification", "Complete required checks before processing."],
              ["Indonesia", "Send support to family, banks, or partners."]
            ].map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-soft"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyanSoft text-navy-950">
                  {index === 0 ? (
                    <Landmark className="h-6 w-6" />
                  ) : index === 1 ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    <UsersRound className="h-6 w-6" />
                  )}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Simple Process"
            title="Know what happens before you send"
            text="Our team will guide you through rate confirmation, required verification, payment, and processing."
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Questions"
              title="Frequently asked by customers"
              text="Here are quick answers before you contact us. Our team will confirm details for your specific transaction."
            />
            <ButtonLink href="/faq" variant="secondary" className="mt-8">
              View all FAQs
            </ButtonLink>
          </div>
          <FAQList items={faqs.slice(0, 4)} />
        </div>
      </section>

      <CTASection
        title="Ready to speak with Haratan?"
        text="WhatsApp us for the latest rates, fees, document requirements, and service availability."
      />
    </>
  );
}
