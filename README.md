# Haratan Servicing Pte Ltd Website

Production-ready public marketing website for Haratan Servicing Pte Ltd, built with Next.js App Router and Tailwind CSS.

## Pages

- Home
- About Us
- Remittance
- Money Changer
- Rates & Fees
- FAQ
- Contact Us

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push this repository to GitHub.
2. In Vercel, create a new project and import `aloysius1308/Haratan-Website`.
3. Use the default Next.js framework settings.
4. Deploy.

## Connect `haratan.com.sg`

1. In Vercel, open the Haratan project.
2. Go to **Settings > Domains**.
3. Add `haratan.com.sg` and `www.haratan.com.sg`.
4. Follow the DNS instructions Vercel shows for your registrar.
5. Typical setup:
   - Apex domain `haratan.com.sg`: add Vercel's A record or ALIAS/ANAME if your DNS supports it.
   - `www.haratan.com.sg`: add a CNAME pointing to Vercel.
6. Wait for DNS propagation, then confirm both domains show as valid in Vercel.

## Launch Placeholders To Replace

- WhatsApp number in `lib/site-data.ts`
- Phone number in `lib/site-data.ts`
- Email in `lib/site-data.ts`
- Address and operating hours in `lib/site-data.ts`
- Google Maps embed or link on the Contact Us page
