import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Timer } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Haratan Servicing Pte Ltd by WhatsApp, phone, email, or visit details for remittance and money changer services."
};

const contactItems = [
  { icon: MessageCircle, title: "WhatsApp", value: "WhatsApp Haratan" },
  { icon: Phone, title: "Phone", value: site.phone },
  { icon: Mail, title: "Email", value: site.email },
  { icon: MapPin, title: "Address", value: site.address },
  { icon: Timer, title: "Operating hours", value: site.hours }
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Speak with Haratan before you send or visit"
        text="WhatsApp us for remittance questions, latest rates, fees, documents, currency availability, and visiting information."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Get In Touch"
              title="Fastest response is through WhatsApp"
              text="Send us your enquiry and our staff can guide you on the next step. Replace the placeholders below with Haratan's confirmed contact details before launch."
            />
            <ButtonLink href={site.whatsappUrl} className="mt-8">
              WhatsApp Us
              <MessageCircle className="h-5 w-5" />
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy-800 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {title}
                </h2>
                <p className="mt-2 text-lg font-bold text-navy-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-px mx-auto max-w-7xl py-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
            <div className="flex min-h-[360px] items-center justify-center bg-[linear-gradient(135deg,#eef7ff,#ffffff_50%,#d8f5ff)] p-8 text-center">
              <div>
                <MapPin className="mx-auto h-10 w-10 text-navy-800" />
                <h2 className="mt-4 text-2xl font-bold text-navy-950">
                  Google Maps placeholder
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  Add the confirmed Haratan Google Maps embed once the public
                  location link is ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
