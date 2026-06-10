'use client'
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SalesHQ and how does it work?",
    answer:
      "SalesHQ is an AI sales assistant built on your own knowledge base. You upload product docs, pricing sheets, FAQs, and battlecards; SalesHQ indexes them and answers your team's questions in plain language, with citations back to the source document.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most teams are live the same day. Sign up, upload documents or connect Google Drive, Shopify, or your CRM, and start asking questions — no technical setup required.",
  },
  {
    question: "How is this different from searching our drive or wiki?",
    answer:
      "Search returns documents; SalesHQ returns answers. Instead of opening five PDFs to find a warranty clause, reps ask a question and get the specific answer with the source cited — fast enough to use mid-call.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "Google Drive, Shopify, WhatsApp Business, Slack, and major CRMs including Salesforce and HubSpot. A REST API and webhooks are available for custom integrations.",
  },
  {
    question: "Is our data secure?",
    answer:
      "Yes. Data is encrypted in transit and at rest, access is controlled with role-based permissions, and your content is never used to train shared models. SOC 2 certification is in progress.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes — a 14-day free trial with full features and no credit card required. You can upgrade, downgrade, or cancel at any time.",
  },
  {
    question: "What is the Referral & Affiliate platform?",
    answer:
      "It's our growth product for D2C brands: run customer referral and creator affiliate programs over WhatsApp with instant UPI payouts and built-in TDS/PAN/GST compliance. It's currently in beta — you can join from the Referral & Affiliate page.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow justify-center">FAQ</p>
          <h2 className="section-title mb-4">Frequently asked questions</h2>
          <p className="section-subtitle">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline underline-offset-4">
              Talk to us
            </Link>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
