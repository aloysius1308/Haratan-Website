import type { Metadata } from "next";
import LegalContent from "@/components/LegalContent";
import { legalPages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Compliance / AML / KYC",
  description:
    "Compliance, anti-money laundering, and KYC information for Haratan Servicing Pte Ltd."
};

export default function ComplianceAmlKycPage() {
  return (
    <LegalContent
      eyebrow="Compliance"
      title={legalPages.compliance.title}
      intro={legalPages.compliance.intro}
      sections={legalPages.compliance.sections}
    />
  );
}
