// Static sample rates for the public website.
// Replace these values when Haratan wants to update displayed indicative rates.
// These are not live rates and are labelled as indicative on the website.

export type CurrencyCode =
  | "SGD"
  | "USD"
  | "IDR"
  | "MYR"
  | "CNY"
  | "AUD"
  | "HKD"
  | "PHP"
  | "THB";

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
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭" }
];

export const calculatorCurrencies = currencies.filter((currency) =>
  ["SGD", "USD", "IDR", "MYR", "CNY", "AUD"].includes(currency.code)
);

// Conversion values are expressed as "1 fromCurrency = rate toCurrency".
export const conversionRates: Record<CurrencyCode, Record<CurrencyCode, number>> = {
  SGD: { SGD: 1, USD: 0.74, IDR: 11542, MYR: 3.32, CNY: 5.32, AUD: 1.13, HKD: 5.78, PHP: 43.2, THB: 25.67 },
  USD: { SGD: 1.35, USD: 1, IDR: 17533, MYR: 4.49, CNY: 7.19, AUD: 1.52, HKD: 7.81, PHP: 58.37, THB: 34.68 },
  IDR: { SGD: 0.000087, USD: 0.000057, IDR: 1, MYR: 0.00026, CNY: 0.00041, AUD: 0.000087, HKD: 0.00045, PHP: 0.0033, THB: 0.002 },
  MYR: { SGD: 0.3, USD: 0.22, IDR: 3905, MYR: 1, CNY: 1.6, AUD: 0.34, HKD: 1.74, PHP: 13.01, THB: 7.73 },
  CNY: { SGD: 0.19, USD: 0.14, IDR: 2438, MYR: 0.63, CNY: 1, AUD: 0.21, HKD: 1.09, PHP: 8.13, THB: 4.83 },
  AUD: { SGD: 0.88, USD: 0.66, IDR: 15485, MYR: 2.93, CNY: 4.7, AUD: 1, HKD: 5.11, PHP: 38.17, THB: 22.69 },
  HKD: { SGD: 0.17, USD: 0.13, IDR: 2246, MYR: 0.57, CNY: 0.92, AUD: 0.2, HKD: 1, PHP: 7.47, THB: 4.44 },
  PHP: { SGD: 0.023, USD: 0.017, IDR: 301, MYR: 0.077, CNY: 0.12, AUD: 0.026, HKD: 0.13, PHP: 1, THB: 0.59 },
  THB: { SGD: 0.039, USD: 0.029, IDR: 683, MYR: 0.13, CNY: 0.21, AUD: 0.044, HKD: 0.23, PHP: 1.69, THB: 1 }
};

export const remittanceRates = [
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", sendRate: "11,542", fee: "from S$5", change: "+0.3%" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", sendRate: "3.32", fee: "from S$5", change: "+0.3%" },
  { code: "CNY", name: "Chinese Yuan Renminbi", flag: "🇨🇳", sendRate: "5.32", fee: "from S$5", change: "+0.2%" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", sendRate: "0.74", fee: "from S$5", change: "+0.2%" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", sendRate: "1.13", fee: "from S$10", change: "+0.1%" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", sendRate: "5.78", fee: "from S$10", change: "+0.1%" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", sendRate: "43.20", fee: "from S$5", change: "+0.2%" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭", sendRate: "25.67", fee: "from S$5", change: "+0.4%" }
];

export const moneyChangerRates = [
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", buy: "11,420", sell: "11,542", change: "+0.3%" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", buy: "0.735", sell: "0.740", change: "+0.2%" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", buy: "3.29", sell: "3.32", change: "+0.3%" },
  { code: "CNY", name: "Chinese Yuan Renminbi", flag: "🇨🇳", buy: "5.28", sell: "5.32", change: "+0.2%" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", buy: "1.11", sell: "1.13", change: "+0.1%" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", buy: "5.72", sell: "5.78", change: "+0.1%" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", buy: "42.80", sell: "43.20", change: "+0.2%" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭", buy: "25.40", sell: "25.67", change: "+0.4%" }
];
