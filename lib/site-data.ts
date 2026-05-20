import {
  Banknote,
  BriefcaseBusiness,
  Building2,
  Globe2,
  HandCoins,
  Landmark,
  RefreshCcw,
  Send,
  ShieldCheck,
  UsersRound,
  WalletCards
} from "lucide-react";
import type { FAQItem } from "@/components/FAQList";

export const site = {
  phone: "+65 XXXX XXXX",
  email: "hello@haratan.com.sg",
  address: "Singapore address placeholder",
  hours: "Operating hours placeholder",
  whatsappUrl:
    "https://wa.me/6590000000?text=Hello%20Haratan%2C%20I%20would%20like%20to%20ask%20about%20your%20remittance%20or%20money%20changer%20services."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Remittance", href: "/remittance" },
  { label: "Money Changer", href: "/money-changer" },
  { label: "Rates & Fees", href: "/rates-fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" }
];

export const services = [
  {
    icon: Send,
    title: "Overseas Remittance",
    text: "Send funds overseas with guidance on rate confirmation, fees, and required checks.",
    href: "/remittance"
  },
  {
    icon: Banknote,
    title: "Money Changing",
    text: "Walk-in foreign currency exchange with rates subject to market movement and availability.",
    href: "/money-changer"
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Transfers",
    text: "Support for business customers making overseas supplier or partner payments.",
    href: "/remittance"
  },
  {
    icon: UsersRound,
    title: "Indonesia Corridor",
    text: "Friendly service for Indonesian communities in Singapore sending money home.",
    href: "/remittance"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "How long does a transfer take?",
    answer:
      "Processing time depends on the destination country, receiving bank, compliance checks, payment partners, and whether all required information has been provided."
  },
  {
    question: "When is my exchange rate confirmed?",
    answer:
      "The exchange rate is confirmed only after funds are received or when Haratan staff explicitly agrees to a rate with you."
  },
  {
    question: "What documents are needed?",
    answer:
      "You may be asked to provide identity documents, beneficiary details, proof of source of funds, or other supporting documents depending on the transaction."
  },
  {
    question: "Can I cancel a transaction?",
    answer:
      "Cancellation depends on the processing status, payment partner rules, banking requirements, and compliance checks. Please contact Haratan immediately if you need help."
  },
  {
    question: "What if beneficiary details are wrong?",
    answer:
      "Tell Haratan as soon as possible. Incorrect beneficiary details may delay or prevent the transaction, and correction options depend on bank or partner rules."
  },
  {
    question: "Do you support Indonesia transfers?",
    answer:
      "Yes. Haratan supports customers sending money to Indonesia, including family support and business-related payments, subject to checks and service availability."
  },
  {
    question: "Do you offer money changing?",
    answer:
      "Yes. Haratan offers foreign currency exchange services. Rates and currency availability may change, so contact us before visiting for larger amounts."
  },
  {
    question: "How do I contact Haratan?",
    answer:
      "The fastest way is to WhatsApp us. You can also use the phone, email, address, and operating hours shown on the Contact Us page."
  }
];

export const aboutValues = [
  {
    icon: ShieldCheck,
    title: "Trust-first service",
    text: "We handle remittance and currency exchange with careful verification, screening, and customer guidance."
  },
  {
    icon: Building2,
    title: "Singapore-based",
    text: "Haratan is built for customers in Singapore who need dependable support for overseas money movement."
  },
  {
    icon: HandCoins,
    title: "Clear pricing",
    text: "Our team explains applicable fees and confirms rates before processing transactions."
  },
  {
    icon: Globe2,
    title: "Overseas reach",
    text: "We support personal and business overseas payment needs, with a strong focus on Indonesia."
  },
  {
    icon: WalletCards,
    title: "Walk-in exchange",
    text: "Customers can contact us for currency availability and visit for money changer services."
  },
  {
    icon: RefreshCcw,
    title: "Digital-ready mindset",
    text: "Haratan presents a modern customer experience while keeping support personal and practical."
  }
];

export const remittanceItems = [
  {
    icon: Landmark,
    title: "Personal remittance",
    text: "Send money overseas for family support, education, living costs, and personal obligations."
  },
  {
    icon: BriefcaseBusiness,
    title: "Business remittance",
    text: "Support for overseas payments to suppliers, partners, or business beneficiaries."
  },
  {
    icon: UsersRound,
    title: "Indonesia-focused service",
    text: "Practical guidance for Indonesian migrant workers and customers sending money to Indonesia."
  }
];
