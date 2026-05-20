import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import { site } from "@/lib/site-data";

type CTASectionProps = {
  title: string;
  text: string;
};

export default function CTASection({ title, text }: CTASectionProps) {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
        <div className="overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white shadow-soft sm:p-12 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyanSoft">
                Contact Haratan
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                {text}
              </p>
            </div>
            <ButtonLink href={site.whatsappUrl} variant="light">
              WhatsApp Us
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
