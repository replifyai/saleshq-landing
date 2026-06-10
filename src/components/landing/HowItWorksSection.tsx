import { FileUp, Brain, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    title: "Connect your knowledge",
    description:
      "Drag in PDFs, decks, and spreadsheets, or sync Google Drive, Shopify, and your CRM. Setup takes minutes, not weeks.",
  },
  {
    icon: Brain,
    title: "AI learns your business",
    description:
      "SalesHQ indexes everything into a knowledge graph — products, pricing, policies, competitors — and keeps it current as docs change.",
  },
  {
    icon: MessageSquare,
    title: "Reps ask, AI answers",
    description:
      "Plain-language questions get instant answers with source citations, so reps respond confidently on live calls and chats.",
  },
  {
    icon: TrendingUp,
    title: "It gets smarter every day",
    description:
      "Unanswered questions surface knowledge gaps. Team feedback tunes responses. Accuracy compounds over time.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title mb-4">From scattered docs to instant answers in four steps</h2>
          <p className="section-subtitle">
            No technical setup, no data team required. Most teams are live the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative rounded-xl border border-border bg-card p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
