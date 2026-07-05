"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const faqs = [
  {
    question: "What is SalesHQ?",
    answer:
      "SalesHQ is an AI platform for commerce and revenue, made up of three products: SalesHQ for Shopify (an intent-driven AI shopping assistant for your storefront), Referral & Affiliate (a growth platform for D2C brands), and Sales Assistant (real-time, source-backed answers for sales teams). Together they're one AI layer from the first click to the closed deal.",
  },
  {
    question: "What products does SalesHQ offer?",
    answer:
      "Three. SalesHQ for Shopify turns storefront browsers into buyers with an AI shopping assistant. Referral & Affiliate turns customers and creators into a sales channel with WhatsApp-first sharing and instant UPI payouts. Sales Assistant gives reps instant, source-backed answers live on calls and in chat.",
  },
  {
    question: "What is SalesHQ for Shopify?",
    answer:
      "SalesHQ for Shopify is an AI shopping assistant you add in one click. It reads shopper intent live, finds products from your catalog, compares options, fires proactive popups on real friction, tracks orders, and gives you intent analytics — grounded in your catalog with no hallucinated products.",
  },
  {
    question: "Who is SalesHQ for?",
    answer:
      "Shopify merchants who want to convert more storefront visitors, D2C brands running referral and affiliate programs, and B2B revenue teams who need instant answers on live calls. You can use any one product on its own, or all three.",
  },
  {
    question: "How is SalesHQ priced?",
    answer:
      "Each product has its own plans. SalesHQ for Shopify is reply-based, starting at $29/month with a 7-day free trial billed through Shopify. Referral & Affiliate uses a platform fee plus a progressive commission. Sales Assistant offers a free trial — talk to us for team pricing.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "SalesHQ for Shopify installs in one click from your theme editor. Referral & Affiliate programs launch in under 30 minutes. Sales Assistant is live in minutes once you connect your docs, pricing, and battlecards — no engineering required for any of them.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="border-t border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-mono-label mb-4 flex justify-center text-primary">
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-foreground">
            Questions, answered
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = i === open;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-[17px] font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
