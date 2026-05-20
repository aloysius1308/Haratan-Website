import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Globe2,
  MapPin,
  ShieldCheck,
  Zap
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CalculatorCard from "@/components/CalculatorCard";
import FAQList from "@/components/FAQList";
import JourneyTimeline from "@/components/JourneyTimeline";
import MetricCards from "@/components/MetricCards";
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

function HeroDashboard() {
  return (
    <div className="relative rounded-[2rem] border border-white/50 bg-white/75 p-5 shadow-soft backdrop-blur-xl">
      <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyanSoft">
              Haratan Desk
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Singapore to Indonesia</h2>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
            Indicative
          </span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Send rate", "1 SGD = 11,542 IDR", Banknote],
            ["Fee guide", "From S$5", BadgeCheck],
            ["Compliance", "KYC checks", ShieldCheck],
            ["Support", company.whatsapp, Zap]
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="rounded-2xl bg-white/10 p-4">
              <Icon className="h-5 w-5 text-cyanSoft" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                {label as string}
              </p>
              <p className="mt-1 text-sm font-black">{value as string}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-80" />
        <div className="absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-200/35 blur-3xl" />
        <div className="container-px relative mx-auto grid max-w-7xl items-center gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <div className="fade-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-600 shadow-sm">
              <ShieldCheck className="h-5 w-5" />
              {hero.eyebrow}
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[1.02] tracking-normal text-slate-950 sm:text-7xl lg:text-8xl">
              Send Money
              <span className="block text-blue-600">with Confidence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#remittance-calculator">
                Calculate Transfer
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href={company.whatsappUrl} variant="secondary">
                WhatsApp Haratan
              </ButtonLink>
            </div>
          </div>
          <HeroDashboard />
        </div>
      </section>

      <section id="remittance-calculator" className="bg-slate-50 py-14 sm:py-16">
        <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Remittance Calculator"
            title="Estimate both ways"
            text="Type how much you want to send, or type how much the recipient should receive. The calculator works in both directions."
          />
          <CalculatorCard mode="remittance" />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <MetricCards />
          <div className="grid gap-4 sm:grid-cols-3">
            {trustBadges.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
                <Icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Remittance and money changing, clearly separated"
            text="Haratan supports digital transfer enquiries, business payments, Indonesia corridor needs, and walk-in currency exchange."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Rates"
            title="Indicative remittance rates"
            text="A clear rate-board view for common corridors. Final rates and fees are always confirmed by staff."
          />
          <div className="mt-10">
            <RatesGrid type="remittance" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="container-px mx-auto grid max-w-7xl gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
              Indonesia Corridor
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Supporting Indonesian communities in Singapore
            </h2>
            <p className="mt-5 text-base leading-8 text-blue-100">
              Haratan supports Indonesian migrant workers, families, and
              business customers who need dependable help sending money home.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Family support", "Send money home for loved ones."],
              ["Business payments", "Pay overseas partners and suppliers."],
              ["Daily needs", "Friendly guidance for regular customers."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <Globe2 className="h-8 w-8 text-cyanSoft" />
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="About Haratan"
            title="A real company journey, not a brochure paragraph"
            text="Our history and experience are part of the trust story, presented as milestones customers can scan quickly."
          />
          <JourneyTimeline />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Questions before you send"
              text="Quick answers before you WhatsApp, visit, or prepare documents."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
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
    </>
  );
}
