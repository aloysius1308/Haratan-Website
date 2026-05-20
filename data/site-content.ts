import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  HandCoins,
  HeartHandshake,
  Landmark,
  MapPin,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards
} from "lucide-react";

// Official company details. Replace values here when contact details change.
export const company = {
  name: "Haratan Servicing Pte Ltd",
  shortName: "Haratan",
  email: "corporate@haratan.com.sg",
  phone: "+(65) 6748 6004",
  whatsapp: "+(65) 9772 6365",
  whatsappUrl:
    "https://wa.me/6597726365?text=Hello%20Haratan%2C%20I%20would%20like%20to%20ask%20about%20your%20remittance%20or%20money%20changer%20services.",
  address: "City Plaza Branch, Singapore",
  hours: "Mon-Fri: 9AM-6PM SGT",
  domain: "https://haratan.com.sg"
};

// Hero copy on the home page.
export const hero = {
  eyebrow: "Instant & secure transfers",
  headline: "Send Money with Confidence",
  subheadline:
    "Fast, reliable remittance and currency exchange services in Singapore, supported by clear rates, compliance checks, and real people who can help."
};

// Experience numbers shown in About/Trust sections.
export const experienceStats = [
  { value: "20+", label: "Years of experience" },
  { value: "$1.8B+", label: "Total transferred" },
  { value: "150+", label: "Countries served" },
  { value: "70+", label: "Currencies supported" }
];

export const trustBadges = [
  { icon: Building2, title: "Singapore-Based", text: "Local service for customers in Singapore." },
  { icon: BadgeCheck, title: "KYC Verified", text: "Customer checks where required." },
  { icon: ShieldCheck, title: "Secure Processing", text: "Screened and compliance-focused." }
];

export const services = [
  {
    icon: Globe2,
    title: "Overseas Remittance",
    text: "Personal and business overseas transfers with transparent fee guidance.",
    href: "/remittance"
  },
  {
    icon: Banknote,
    title: "Money Changing",
    text: "Walk-in foreign currency exchange with market-aware cash rates.",
    href: "/money-changer"
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Transfers",
    text: "Payments for suppliers, partners, agencies, and overseas operations.",
    href: "/remittance"
  },
  {
    icon: UsersRound,
    title: "Indonesia Corridor",
    text: "Focused support for Indonesian communities sending money home.",
    href: "/remittance"
  }
];

export const whyChoose = [
  {
    icon: Clock3,
    title: "20+ Years of Experience",
    text: "A long-standing remittance and money-changing company strengthening its foundation with today’s technology."
  },
  {
    icon: ReceiptText,
    title: "Transparent & Clear Rates",
    text: "No complicated pricing. Staff confirm final exchange rates and remittance values before processing."
  },
  {
    icon: HeartHandshake,
    title: "High-Tech, Yet Human",
    text: "Modern digital tools supported by real people who care about your transaction."
  },
  {
    icon: Sparkles,
    title: "One Ecosystem for Everyone",
    text: "Personal, corporate, and walk-in customers connected in one reliable service experience."
  },
  {
    icon: WalletCards,
    title: "Walk-In + Online Convenience",
    text: "Visit us in store or contact us digitally before sending or exchanging."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    text: "Singapore-based and committed to responsible financial operations."
  }
];

export const processSteps = [
  {
    title: "Contact Haratan",
    text: "Tell us the amount, destination, and service you need."
  },
  {
    title: "Verify Your Identity",
    text: "Complete required KYC or supporting document checks."
  },
  {
    title: "Confirm Rate & Fee",
    text: "Our staff confirms the applicable rate and charges."
  },
  {
    title: "Make Payment",
    text: "Pay using the method confirmed by our team."
  },
  {
    title: "Transfer Processed",
    text: "We process the transfer after checks and partner requirements."
  }
];

export const journey = [
  {
    year: "2000s",
    title: "Founded as a traditional remittance storefront",
    text: "Started our journey serving the local community."
  },
  {
    year: "2010s",
    title: "Expanded money-changing services",
    text: "Grew our offerings to include currency exchange."
  },
  {
    year: "2015",
    title: "Served thousands across Singapore",
    text: "Became a trusted name in remittance services."
  },
  {
    year: "2020",
    title: "Began digital transformation",
    text: "Invested in technology to modernize our platform."
  },
  {
    year: "2024",
    title: "Launched modern digital platform direction",
    text: "Unveiled our tech-enabled remittance solution."
  },
  {
    year: "Today",
    title: "Building a comprehensive fintech ecosystem",
    text: "Continuing to innovate and expand our services."
  }
];

export const aboutStory = {
  headline: "Connecting People Across Borders",
  intro:
    "Since 2006, we have been on a mission to make international money transfers simple, fast, and affordable for everyone.",
  paragraphs: [
    "Haratan Servicing was born from a simple observation: sending money home should not be complicated or expensive.",
    "For over 20 years, we have helped individuals and businesses move money safely, transparently, and efficiently, starting as a humble remittance counter and evolving into a modern, tech-enabled platform.",
    "Our mission is clear: make international transfers simple, accessible, and human. Whether you are sending money to family or paying overseas suppliers, we combine real support, responsible compliance, and technology that removes friction."
  ]
};

export const complianceItems = [
  { icon: FileCheck2, title: "Identity verification", text: "KYC and customer due diligence where required." },
  { icon: ShieldCheck, title: "Transaction screening", text: "Checks may apply before processing." },
  { icon: CheckCircle2, title: "Responsible processing", text: "Transactions may be delayed or rejected due to obligations." }
];

export const complianceText =
  "Haratan may conduct identity verification, customer due diligence, transaction screening, and request supporting documents where required. Transactions may be delayed or rejected due to compliance checks, bank processing, payment partner requirements, or regulatory obligations.";

export const industries = [
  {
    icon: Landmark,
    title: "Manufacturing",
    text: "Pay suppliers across borders with competitive rates and fast settlement.",
    points: ["Supplier Payments", "Import/Export", "Raw Materials"]
  },
  {
    icon: Building2,
    title: "E-Commerce",
    text: "Manage international sales, marketplace payouts, and vendor payments.",
    points: ["Marketplace Payouts", "Vendor Payments", "Refunds"]
  },
  {
    icon: UsersRound,
    title: "Maid Agencies",
    text: "Support salary remittances and family support transfers for domestic workers.",
    points: ["Salary Remittances", "Agency Settlements", "Family Support"]
  },
  {
    icon: Globe2,
    title: "Marine Industries",
    text: "Support crew salary, port fee, and supplier settlement needs.",
    points: ["Crew Salaries", "Port Fees", "Supplier Settlement"]
  },
  {
    icon: HandCoins,
    title: "BPO & Outsourcing",
    text: "Pay remote teams, freelancers, and contractors globally.",
    points: ["Payroll", "Contractor Payments", "Bonuses"]
  }
];

export const faqs = [
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
      "Cancellation depends on the processing status, payment partner rules, banking requirements, and compliance checks. Contact Haratan immediately if you need help."
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
      "The fastest way is to WhatsApp us. You can also use phone, email, address, and operating hours shown on the Contact Us page."
  }
];
