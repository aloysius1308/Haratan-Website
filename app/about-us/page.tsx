import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import CTASection from "@/components/CTASection";
import JourneyTimeline from "@/components/JourneyTimeline";
import MetricCards from "@/components/MetricCards";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { aboutStory, company, whyChoose } from "@/data/site-content";

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
        title={aboutStory.headline}
        text={aboutStory.intro}
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Our Story"
              title="Built from real customer needs"
              text={aboutStory.paragraphs[0]}
            />
            <div className="mt-6 grid gap-4 text-base leading-8 text-slate-600">
              {aboutStory.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={company.whatsappUrl}>
                WhatsApp Us
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/remittance" variant="secondary">
                Explore Remittance
              </ButtonLink>
            </div>
          </div>
          <MetricCards />
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="Over two decades of evolution and growth"
            text="A modern timeline keeps Haratan’s real company story visible without turning the page into a heavy paragraph."
          />
          <JourneyTimeline />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <Icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
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
