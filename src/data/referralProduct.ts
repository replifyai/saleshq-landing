export const REFERRAL_SEO_DESCRIPTION =
  "SalesHQ Referral & Affiliate turns customers and creators into a 24/7 sales channel for India's D2C brands — WhatsApp-first sharing, instant UPI payouts, and TDS/PAN/GST compliance built in. Launch in under 30 minutes.";

export const REFERRAL_HERO_BULLETS = [
  "Go live in under 30 minutes — no engineering",
  "Same-day UPI payouts with TDS handled",
  "₹0 platform fee during beta for early partners",
] as const;

export const REFERRAL_STEPS = [
  {
    title: "Launch your program",
    text: "Set reward rules, branding, and payout terms in a no-code dashboard. Go live in under 30 minutes.",
  },
  {
    title: "Customers & creators share",
    text: "Unique links and codes spread over WhatsApp, Instagram, and SMS. Every click and conversion is tracked.",
  },
  {
    title: "Rewards pay out instantly",
    text: "Confirmed conversions trigger same-day UPI payouts, with TDS deducted and documented automatically.",
  },
] as const;

export const REFERRAL_FEATURES = [
  {
    title: "Customer referrals",
    text: "Turn buyers into advocates the moment they check out — WhatsApp, SMS, email, QR on packaging.",
  },
  {
    title: "Affiliate & creator program",
    text: "Branded landing pages, custom codes, tiered commissions — no spreadsheets.",
  },
  {
    title: "WhatsApp-first",
    text: "Onboarding, status updates, and reward notifications run natively on WhatsApp.",
  },
  {
    title: "UPI payouts & compliance",
    text: "Same-day UPI rewards with automatic TDS, PAN/GST verification, and ITR-ready exports.",
  },
] as const;

export const REFERRAL_AFFILIATE_PERKS = [
  "Your own link, code, and branded landing page",
  "Live earnings dashboard — clicks & commissions in real time",
  "Same-day UPI payouts with TDS certificates",
  "Transparent tier rules and per-order breakdowns",
] as const;

export const REFERRAL_PLANS = [
  {
    name: "Starter",
    price: "₹2,999",
    blurb: "Early-stage brands",
    revenue: "Up to ₹20L",
    commission: "1.8%",
    features: ["Basic reports", "Email support", "Limited affiliates"],
  },
  {
    name: "Growth",
    price: "₹5,999",
    blurb: "Growing brands",
    revenue: "Up to ₹50L",
    commission: "1.8% → 1%",
    features: ["Advanced analytics", "Priority support", "Medium affiliates"],
  },
  {
    name: "Scale",
    price: "₹9,999",
    blurb: "High-volume brands",
    revenue: "Up to ₹1Cr",
    commission: "1.8% → 0.75%",
    features: ["API access", "Priority + onboarding", "Unlimited affiliates"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Large businesses",
    revenue: "Unlimited",
    commission: "0.5%",
    features: ["White label", "Dedicated manager", "Custom SLA"],
  },
] as const;

export const REFERRAL_SLABS = [
  { slab: "Up to ₹20,00,000", rate: "1.8%" },
  { slab: "₹20,00,001 – ₹50,00,000", rate: "1.0%" },
  { slab: "₹50,00,001 – ₹1,00,00,000", rate: "0.75%" },
  { slab: "Above ₹1,00,00,000", rate: "0.5%" },
] as const;

export const REFERRAL_EXAMPLE_ROWS = [
  { slab: "First ₹20L", amount: "₹20,00,000", rate: "1.8%", commission: "₹36,000" },
  { slab: "Next ₹30L", amount: "₹30,00,000", rate: "1.0%", commission: "₹30,000" },
  { slab: "Next ₹25L", amount: "₹25,00,000", rate: "0.75%", commission: "₹18,750" },
] as const;

export const REFERRAL_FAQS = [
  {
    q: "How quickly can I launch?",
    a: "Go live in under 30 minutes. No technical setup or engineering time required.",
  },
  {
    q: "What payout methods are supported?",
    a: "Instant UPI payouts to any Indian bank account, with bank transfer available for affiliates.",
  },
  {
    q: "How does TDS compliance work?",
    a: "We automatically deduct TDS on payouts above ₹20,000 per year and generate certificates for every payee.",
  },
  {
    q: "Can I run my program entirely on WhatsApp?",
    a: "Yes. Referral sharing, status updates, and reward notifications all run natively on WhatsApp.",
  },
  {
    q: "How are affiliates onboarded?",
    a: "Invite them with a link. They verify PAN and bank details once, get their branded page and code, and start sharing.",
  },
  {
    q: "What does the beta include?",
    a: "Beta partners get the full platform with no platform fee — only usage-based commission applies. Beta pricing locked for early adopters.",
  },
] as const;
