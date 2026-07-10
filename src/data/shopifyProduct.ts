// Shared copy + pricing for SalesHQ for Shopify (aligned with saleshq-chatbot/app/intent/plans.ts).

export const SHOPIFY_SEO_DESCRIPTION =
  "SalesHQ is the AI sales associate for Shopify: it reads each shopper's buying intent in real time, recommends products with reasons from your live catalog, compares options side by side, answers objections from your own policies and FAQs (upload a PDF — done), rescues hesitating carts, and shows you exactly why shoppers do or don't buy — one-click install with a 7-day free trial billed through Shopify.";

export const SHOPIFY_TRIAL_DAYS = 7;

export const SHOPIFY_HERO_BULLETS = [
  "More conversions — nudges fire at the exact moment of buying friction",
  "Higher order values — reasons-based recommendations, comparisons & cross-sell in chat",
  "Fewer support tickets — grounded answers from your live catalog and your own policies",
  "One-click install · 7-day free trial · billed through Shopify",
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
    title: "Your store's knowledge base",
    text: "Returns, shipping, warranty, FAQs, live offers — the assistant answers from your own documents, word for word.",
  },
  {
    title: "PDF import, AI-converted",
    text: "Drop in your policy or FAQ PDF — it's converted to clean, editable sections you review before publishing.",
  },
  {
    title: "Proactive, never pushy",
    text: "Nudges only on real friction — not in the first 8s, per-trigger cooldown, one dismissal quiets the session.",
  },
  {
    title: "Cart-aware, one-tap add",
    text: "Adds to cart from chat (variant-aware), reads what's in the cart, and updates your cart UI live — no refresh.",
  },
  {
    title: "Order tracking & reorder",
    text: "Signed-in shoppers check status, get tracking links, and re-order past purchases right in chat.",
  },
  {
    title: "Streams like a human",
    text: "Replies stream word by word with a typing indicator — no dead air, no loading spinners.",
  },
  {
    title: "Matches your brand",
    text: "Auto-matches your theme's colors, or pick your own — plus launcher icon, position, header, and welcome message.",
  },
  {
    title: "Merchant intent analytics",
    text: "Intent cohorts, conversion funnel, assisted orders, and an analytics assistant you can ask.",
  },
] as const;

export const SHOPIFY_KNOWLEDGE_BULLETS = [
  "Upload a PDF — AI converts it to clean, editable sections you approve",
  "Grounded answers: your exact return window, shipping times, warranty terms",
  "Offers auto-expire — the assistant never quotes a dead promo",
  "Drafts stay invisible until you publish; edit anything, anytime",
] as const;

export const SHOPIFY_CUSTOMIZE_BULLETS = [
  "Auto-matches your theme's brand color — or set your own",
  "Launcher icon, position, header title & welcome message — all yours",
  "Brand voice grounding: it sells the way you talk",
  "Full nudge control: timing, cooldowns, caps, sound, badge",
  "Privacy switch for customer data · master kill switch",
] as const;

export const SHOPIFY_STEPS = [
  {
    title: "One-click install",
    text: "Enable the app embed in your theme editor — no code, no theme file changes, disable anytime.",
  },
  {
    title: "Teach it your store",
    text: "It syncs live products, stock, and variants automatically — then add your policies and FAQs (or just upload the PDF).",
  },
  {
    title: "Shoppers get an assistant",
    text: "Every visitor can ask, compare, get nudged, and track orders — while intent analytics fill in for you.",
  },
] as const;

export const SHOPIFY_PRICING = [
  {
    name: "Starter",
    price: "$29",
    blurb: "For new stores getting started",
    detail: "500 AI replies / month",
    knowledge: "200 PDF pages / month",
  },
  {
    name: "Growth",
    price: "$79",
    blurb: "For growing stores with steady traffic",
    detail: "1,500 AI replies / month",
    knowledge: "600 PDF pages / month",
    featured: true,
  },
  {
    name: "Pro",
    price: "$199",
    blurb: "For high-volume stores",
    detail: "4,000 AI replies / month",
    knowledge: "2,000 PDF pages / month",
  },
] as const;

export const SHOPIFY_TOPUP_NOTE =
  "Busy month? Top-up packs from $35 for 500 extra replies — they stack on your plan and never expire.";

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
    q: "How does it answer policy and FAQ questions?",
    a: "You add your own documents — returns, shipping, warranty, FAQs, offers — in a built-in editor, or upload a PDF and AI converts it into clean sections you review before publishing. The assistant answers from your exact text and says so when it doesn't know, instead of guessing.",
  },
  {
    q: "Can I make it match my brand?",
    a: "Yes. It auto-matches your theme's colors out of the box, and everything is adjustable: brand color, launcher icon, position, header title, welcome message, and a brand-voice description that grounds every reply.",
  },
  {
    q: "What triggers the proactive popups?",
    a: "Real intent signals: product dwell, comparison loops, cart idle, search refinement, browse friction, and exit intent — never generic spam. You control timing, cooldowns, and per-session caps.",
  },
  {
    q: "How is billing measured?",
    a: "Plans are based on AI replies — one assistant answer counts as one reply. Billed through Shopify with a 7-day free trial on every plan, and one-time top-up packs if you need more mid-month.",
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
