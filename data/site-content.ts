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
    text: "A long-standing remittance and money-changing company strengthening its foundation with today's technology."
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

// Legal page content. Keep this practical, readable, and review with counsel
// before treating it as final legal advice.
export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "Haratan respects customer privacy and handles personal information with care for remittance, money changing, compliance, and customer support purposes.",
    sections: [
      {
        title: "Information we may collect",
        body: "We may collect identity details, contact information, transaction details, beneficiary information, supporting documents, source-of-funds information, communications, and records needed to provide services or meet legal and regulatory obligations."
      },
      {
        title: "How information is used",
        body: "Information may be used to verify identity, process transactions, conduct customer due diligence, screen transactions, respond to enquiries, maintain records, prevent fraud, and comply with applicable laws, banking requirements, and payment partner requirements."
      },
      {
        title: "Sharing and retention",
        body: "Where necessary, Haratan may share information with banks, payment partners, compliance service providers, regulators, law enforcement agencies, professional advisers, or technology vendors. Records may be retained for business, audit, legal, and regulatory purposes."
      },
      {
        title: "Customer responsibilities",
        body: "Customers should provide accurate and complete information, notify Haratan of changes, and avoid sending documents or personal data through insecure channels unless requested by our staff."
      }
    ]
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "These terms explain the general conditions for using Haratan's public website and enquiring about remittance or money changing services.",
    sections: [
      {
        title: "Indicative information",
        body: "Rates, fees, delivery timing, and availability shown on this website are indicative only. Final rates, fees, service availability, and processing requirements will be confirmed by Haratan staff before a transaction is processed."
      },
      {
        title: "Transaction processing",
        body: "Transfers and currency exchange may be subject to identity verification, customer due diligence, transaction screening, receiving bank requirements, payment partner rules, market conditions, and currency stock availability."
      },
      {
        title: "Cancellations and amendments",
        body: "Cancellation, refund, or amendment requests depend on transaction status, payment partner rules, banking requirements, and compliance checks. Customers should contact Haratan immediately if details are incorrect or if they wish to request a change."
      },
      {
        title: "Customer responsibilities",
        body: "Customers are responsible for providing complete and accurate sender, beneficiary, transaction, and supporting document information. Incorrect information may cause delays, rejection, additional charges, or failed transactions."
      }
    ]
  },
  compliance: {
    title: "Compliance / AML / KYC",
    intro:
      "Haratan takes compliance seriously and may perform checks to protect customers, prevent misuse, and meet regulatory and partner requirements.",
    sections: [
      {
        title: "KYC and customer due diligence",
        body: "Customers may be required to provide identity documents, address details, beneficiary information, source-of-funds information, purpose of transfer, business documents, or other supporting records before a transaction can proceed."
      },
      {
        title: "Transaction monitoring and screening",
        body: "Haratan may screen transactions, names, beneficiaries, destinations, and payment details. Transactions may be delayed, rejected, cancelled, or reported where required by law, regulation, internal policy, bank requirements, or payment partner requirements."
      },
      {
        title: "Anti-fraud measures",
        body: "Customers should only transact for lawful purposes and should not send money on behalf of unknown third parties. Haratan may ask additional questions where a transaction appears unusual, incomplete, high risk, or inconsistent with known customer information."
      },
      {
        title: "Processing delays",
        body: "Processing times depend on destination country, receiving bank, payment partner, operating hours, public holidays, compliance review, and completeness of customer information. Haratan will guide customers where further action is required."
      }
    ]
  }
};
