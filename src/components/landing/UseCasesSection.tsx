import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Swords, RefreshCcw, ArrowRight, Check } from "lucide-react";

const items = [
  {
    title: "Answer product questions instantly",
    description:
      "Ask in plain English and get source-backed answers with links — no more tab-hopping mid-conversation.",
    icon: Search,
    features: ["Natural-language search", "Citations on every answer", "Works during live calls"],
  },
  {
    title: "Win competitive deals",
    description:
      "Pull up-to-date battlecards and competitor comparisons the moment a rival comes up on a call.",
    icon: Swords,
    features: ["Always-current battlecards", "Objection handling", "Side-by-side comparisons"],
  },
  {
    title: "Keep specs and pricing current",
    description:
      "SalesHQ re-learns as your docs change, so reps never quote last quarter's pricing or retired SKUs.",
    icon: RefreshCcw,
    features: ["Auto-syncing knowledge", "Single source of truth", "Gap detection"],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" aria-label="Use cases" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">Use cases</p>
          <h2 className="section-title mb-4">Built for the moments that decide deals</h2>
          <p className="section-subtitle">
            Wherever a rep needs the right answer fast — SalesHQ is already there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map(({ title, description, icon: Icon, features }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-foreground/20 transition-colors"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
              <ul className="mt-auto space-y-2.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="/features">
              Explore all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
