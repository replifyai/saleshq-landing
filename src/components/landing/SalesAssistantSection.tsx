import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Headphones, FileText, Swords, MessageSquare } from "lucide-react";
import SalesAssistantCreative from "@/components/creatives/SalesAssistantCreative";

const BULLETS = [
  "Live call assist with real-time transcription",
  "Every answer cited back to your source of truth",
  "Works across calls, chat, and email",
] as const;

const FEATURES = [
  {
    icon: Headphones,
    title: "Real-time call assist",
    text: "Live transcription surfaces the right answer the moment a question is asked.",
  },
  {
    icon: FileText,
    title: "Source-backed answers",
    text: "95% accuracy with citations to your docs and pricing — reps quote with confidence.",
  },
  {
    icon: Swords,
    title: "Battlecards & objections",
    text: "Competitive positioning surfaced exactly when a rival comes up on a call.",
  },
  {
    icon: MessageSquare,
    title: "Every channel",
    text: "Same assistant on live calls, chat, and email — one source of truth everywhere.",
  },
] as const;

type Props = {
  compact?: boolean;
};

export default function SalesAssistantSection({ compact = false }: Props) {
  return (
    <section
      id="sales-assistant"
      aria-label="Sales Assistant"
      className="border-y border-border px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
              For revenue teams
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-foreground text-balance mb-4">
              Sales Assistant — instant answers on every live call
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 text-pretty">
              Turn your product docs, pricing, and battlecards into an AI assistant that gives reps
              source-backed answers in under a second — so they never lose momentum mid-conversation.
            </p>

            <ul className="mb-8 space-y-3">
              {BULLETS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-foreground/80">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <Link href="/contact">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 transition-transform hover:-translate-y-0.5"
              >
                <Link href="/products/sales-assistant">Explore Sales Assistant</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-[-8%_4%_-12%_4%] bg-[radial-gradient(50%_60%_at_50%_40%,hsl(221,83%,53%,0.14),transparent_72%)] blur-lg" />
            <SalesAssistantCreative />
          </div>
        </div>

        {!compact && (
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mb-1.5 text-[15px] font-semibold text-foreground">{title}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
