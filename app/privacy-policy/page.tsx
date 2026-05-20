import type { Metadata } from "next";
import LegalContent from "@/components/LegalContent";
import { legalPages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy information for Haratan Servicing Pte Ltd customers and website visitors."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalContent
      eyebrow="Privacy"
      title={legalPages.privacy.title}
      intro={legalPages.privacy.intro}
      sections={legalPages.privacy.sections}
    />
  );
}
