import type { Metadata } from "next";
import LegalContent from "@/components/LegalContent";
import { legalPages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Haratan Servicing Pte Ltd website and service enquiries."
};

export default function TermsConditionsPage() {
  return (
    <LegalContent
      eyebrow="Terms"
      title={legalPages.terms.title}
      intro={legalPages.terms.intro}
      sections={legalPages.terms.sections}
    />
  );
}
