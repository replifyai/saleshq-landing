// Shared copy + pricing for SalesHQ for Shopify (aligned with saleshq-chatbot/app/intent/plans.ts).

export const SHOPIFY_SEO_DESCRIPTION =
  "SalesHQ for Shopify is an intent-driven AI shopping assistant that reads each shopper's intent in real time, finds products from your live catalog, compares options, nudges on real friction, tracks orders, and gives merchants intent analytics — one-click install with a 7-day free trial billed through Shopify.";

export const SHOPIFY_TRIAL_DAYS = 7;

export const SHOPIFY_HERO_BULLETS = [
  "One-click install — no theme edits",
  "Grounded in your live catalog — zero hallucinated products",
  "7-day free trial · billed through Shopify",
] as const;

export const SHOPIFY_INTENT_TRIGGERS = [
  {
    id: "dwell",
    label: "Product dwell",
    icon: "⏱",
    headline: "Helpful details when shoppers linger",
    description:
      "A shopper spends 10+ seconds on a product page — SalesHQ surfaces specs, variants, and why it's a fit before they bounce.",
    popup: "You've been looking at this travel pillow — it's in stock in both colors. Want the key differences?",
  },
  {
    id: "compare",
    label: "Comparison loop",
    icon: "⇄",
    headline: "Side-by-side when they're torn",
    description:
      "Ping-ponging between two product pages signals comparison intent — a popup opens with a clean in-chat comparison table.",
    popup: "Here's the side-by-side on the two cushions you've been going back and forth on — want my pick?",
  },
  {
    id: "cart",
    label: "Cart recovery",
    icon: "🛒",
    headline: "Reassurance for hesitant buyers",
    description:
      "Idle cart and exit-intent nudges fire on real hesitation — returns policy, variant checks, complementary picks.",
    popup: "Still deciding? This item is in your cart — happy to help with sizing or a matching accessory.",
  },
  {
    id: "search",
    label: "Search refinement",
    icon: "🔍",
    headline: "Narrowing when search stalls",
    description:
      "Repeated searches and scroll-thrash trigger refinement help — in-stock picks and a question to narrow intent.",
    popup: "Found several in-stock options — what matters most: support level, fit, or pack size?",
  },
] as const;

export const SHOPIFY_FEATURES = [
  {
    title: "Reads shopper intent live",
    text: "Every search, view, dwell, and cart signal builds a real-time picture of what each shopper wants.",
  },
  {
    title: "Grounded product discovery",
    text: "Real titles, stock, and variants from your catalog. No hallucinated products, ever.",
  },
  {
    title: "Side-by-side comparisons",
    text: "In-chat comparison tables — specs, best-for, recommendations — without leaving the page.",
  },
  {
    title: "Personalized recommendations",
    text: "Semantic ranking with in-budget cues and what similar shoppers actually bought.",
  },
  {
    title: "Proactive, never pushy",
    text: "Nudges only on real friction — not in the first 8s, per-trigger cooldown, one dismissal quiets the session.",
  },
  {
    title: "Order tracking",
    text: "Signed-in shoppers check order status and tracking links right in chat.",
  },
  {
    title: "Cross-sell & add to cart",
    text: "Grounded product cards with one-tap add — cross-sell from cart context and chat.",
  },
  {
    title: "Merchant intent analytics",
    text: "Intent cohorts, conversion funnel, assisted orders, and an analytics assistant you can ask.",
  },
] as const;

export const SHOPIFY_STEPS = [
  {
    title: "One-click install",
    text: "Enable the app embed in your theme editor — no code, no theme file changes, disable anytime.",
  },
  {
    title: "It learns your catalog",
    text: "SalesHQ syncs live products, stock, and variants — and picks up your brand voice automatically.",
  },
  {
    title: "Shoppers get an assistant",
    text: "Every visitor can ask, compare, get nudged, and track orders — while intent analytics fill in for you.",
  },
] as const;

export const SHOPIFY_PRICING = [
  { name: "Starter", price: "$29", blurb: "For new stores getting started", detail: "500 AI replies / month" },
  {
    name: "Growth",
    price: "$79",
    blurb: "For growing stores with steady traffic",
    detail: "1,500 AI replies / month",
    featured: true,
  },
  { name: "Pro", price: "$199", blurb: "For high-volume stores", detail: "4,000 AI replies / month" },
] as const;

export const SHOPIFY_FAQS = [
  {
    q: "Does it change my theme code?",
    a: "No. It runs as a Shopify app embed — enable it in the theme editor, disable it anytime. Nothing is written to your theme files.",
  },
  {
    q: "Can it recommend out-of-stock products?",
    a: "No. Answers are grounded in your live catalog including stock and variants, so shoppers only see what they can actually buy.",
  },
  {
    q: "How is billing measured?",
    a: "Plans are based on AI replies — one assistant answer counts as one reply. Billed through Shopify with a 7-day free trial on every plan.",
  },
  {
    q: "What triggers the proactive popups?",
    a: "Real intent signals: product dwell, comparison loops, cart idle, search refinement, browse friction, and exit intent — never generic spam.",
  },
  {
    q: "Do I get analytics?",
    a: "Yes. Intent cohorts, shopper funnel, top intents, assisted orders, and an ask-anything analytics assistant in your merchant dashboard.",
  },
] as const;

export const SHOPIFY_MERCHANT_BULLETS = [
  "Intent cohorts & shopper mindset mix",
  "Conversion funnel & assisted orders",
  "Ask-anything analytics assistant",
] as const;
