// Static sample rates for the public website.
// Replace these values when Haratan wants to update displayed indicative rates.
// These are not live rates and are labelled as indicative on the website.

export type CurrencyCode = "SGD" | "USD" | "IDR" | "MYR" | "CNY" | "AUD";

export type Currency = {
  code: CurrencyCode;
  name: string;
  flag: string;
};

export const currencies: Currency[] = [
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾" },
  { code: "CNY", name: "Chinese Yuan Renminbi", flag: "🇨🇳" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" }
];

// Conversion values are expressed as "1 fromCurrency = rate toCurrency".
export const conversionRates: Record<CurrencyCode, Record<CurrencyCode, number>> = {
  SGD: { SGD: 1, USD: 0.74, IDR: 11542, MYR: 3.32, CNY: 5.32, AUD: 1.13 },
  USD: { SGD: 1.35, USD: 1, IDR: 17533, MYR: 4.49, CNY: 7.19, AUD: 1.52 },
  IDR: { SGD: 0.000087, USD: 0.000057, IDR: 1, MYR: 0.00026, CNY: 0.00041, AUD: 0.000087 },
  MYR: { SGD: 0.3, USD: 0.22, IDR: 3905, MYR: 1, CNY: 1.6, AUD: 0.34 },
  CNY: { SGD: 0.19, USD: 0.14, IDR: 2438, MYR: 0.63, CNY: 1, AUD: 0.21 },
  AUD: { SGD: 0.88, USD: 0.66, IDR: 15485, MYR: 2.93, CNY: 4.7, AUD: 1 }
};

export const remittanceRates = [
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", sendRate: "11,542", fee: "from S$5", change: "+0.3%" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", sendRate: "3.32", fee: "from S$5", change: "+0.3%" },
  { code: "CNY", name: "Chinese Yuan Renminbi", flag: "🇨🇳", sendRate: "5.32", fee: "from S$5", change: "+0.2%" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", sendRate: "0.74", fee: "from S$5", change: "+0.2%" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", sendRate: "1.13", fee: "from S$10", change: "+0.1%" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", sendRate: "1.00", fee: "base", change: "0%" }
];

export const moneyChangerRates = [
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", buy: "11,420", sell: "11,542", change: "+0.3%" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", buy: "0.735", sell: "0.740", change: "+0.2%" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", buy: "3.29", sell: "3.32", change: "+0.3%" },
  { code: "CNY", name: "Chinese Yuan Renminbi", flag: "🇨🇳", buy: "5.28", sell: "5.32", change: "+0.2%" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", buy: "1.11", sell: "1.13", change: "+0.1%" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", buy: "1.00", sell: "1.00", change: "0%" }
];
