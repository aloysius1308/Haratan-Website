import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe2,
  MapPin,
  ShieldCheck
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CalculatorCard from "@/components/CalculatorCard";
import ComplianceNotice from "@/components/ComplianceNotice";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProcessTimeline from "@/components/ProcessTimeline";
import RatesGrid from "@/components/RatesGrid";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import {
  company,
  faqs,
  hero,
  services,
  trustBadges,
  whyChoose
} from "@/data/site-content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-90" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div className="fade-up">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-600 shadow-sm">
              <ShieldCheck className="h-5 w-5" />
              {hero.eyebrow}
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[1.03] tracking-normal text-slate-950 sm:text-7xl lg:text-8xl">
              Send Money
              <span className="block text-blue-600">with Confidence.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
              {hero.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={company.whatsappUrl}>
                WhatsApp Us
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="#calculators" variant="secondary">
                Check Indicative Rates
              </ButtonLink>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {trustBadges.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up lg:pl-6">
            <CalculatorCard mode="remittance" />
          </div>
        </div>
      </section>

      <section id="calculators" className="section-y bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Exchange Tools"
            title="Two services, two clear calculators"
            text="Remittance estimates are for overseas transfers. Money changer estimates are for physical cash exchange."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <CalculatorCard mode="remittance" />
            <CalculatorCard mode="money-changer" />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Complete range of financial services"
            text="From personal remittance to business solutions and money changing services, Haratan keeps each service clear and easy to understand."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y grid-bg bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Trusted service, modern experience"
            text="A practical blend of long-standing financial service experience, digital-ready tools, and human customer support."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Rates"
            title="Indicative remittance rates"
            text="Designed like a live rate board, but clearly labelled as indicative until Haratan staff confirms the final rate and fee."
          />
          <div className="mt-12">
            <RatesGrid type="remittance" />
          </div>
          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 text-sm leading-7 text-slate-700">
            Displayed rates are indicative only. Final rates and fees will be
            confirmed by staff.
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
              Indonesia Corridor
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Supporting Indonesian communities in Singapore
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Haratan supports Indonesian migrant workers, families, and
              business customers who need dependable help sending money home,
              making overseas payments, or handling daily financial needs.
            </p>
            <ButtonLink href="/remittance" variant="light" className="mt-8">
              Explore Indonesia Transfers
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["Family support", "Send money home for loved ones."],
              ["Business payments", "Pay overseas partners and suppliers."],
              ["Daily needs", "Friendly guidance for regular customers."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <Globe2 className="h-8 w-8 text-cyanSoft" />
                <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How It Works"
            title="Send money in five guided steps"
            text="The experience stays simple while Haratan handles the checks, confirmations, and processing requirements behind the scenes."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="Over two decades of evolution and growth"
            text="Haratan’s story matters. We keep the history visible, but structured as a modern timeline instead of a heavy text block."
          />
          <JourneyTimeline />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-px mx-auto max-w-7xl py-16">
          <ComplianceNotice />
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Questions"
              title="Frequently asked by customers"
              text="Quick answers before you WhatsApp, visit, or prepare documents."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                {company.address}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Contact us before visiting for larger exchange amounts.
              </p>
            </div>
          </div>
          <FAQList items={faqs.slice(0, 4)} />
        </div>
      </section>

      <CTASection
        title="Experience smarter, faster global payments"
        text="WhatsApp Haratan for indicative rates, required documents, currency availability, and next steps."
      />
    </>
  );
}
