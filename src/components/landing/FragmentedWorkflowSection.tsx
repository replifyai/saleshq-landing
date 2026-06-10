import { Clock, FileQuestion, MessagesSquare, Zap, Database, BadgeCheck, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Slow answers lose deals",
    description:
      "Prospects don't wait. When a rep says \"let me get back to you\" on pricing or specs, momentum dies.",
  },
  {
    icon: FileQuestion,
    title: "Knowledge lives everywhere",
    description:
      "Answers are buried across PDFs, spreadsheets, Slack threads, and the heads of your best reps.",
  },
  {
    icon: MessagesSquare,
    title: "Every rep tells a different story",
    description:
      "Outdated decks and improvised answers mean inconsistent messaging that erodes trust.",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "Real-time answers",
    description: "Ask in plain language, get an answer in seconds — even mid-call.",
  },
  {
    icon: Database,
    title: "One knowledge base",
    description: "Docs, catalogs, FAQs, and battlecards unified in a single searchable brain.",
  },
  {
    icon: BadgeCheck,
    title: "Source-backed responses",
    description: "Every answer cites the document it came from, so reps can trust it.",
  },
  {
    icon: BarChart3,
    title: "Built-in analytics",
    description: "See what reps ask, where knowledge gaps are, and what's working.",
  },
];

export default function FragmentedWorkflowSection() {
  return (
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Problem */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">The problem</p>
          <h2 className="section-title mb-4">
            Your team knows the answers. Finding them fast is the problem.
          </h2>
          <p className="section-subtitle">
            Scattered knowledge, slow lookups, and inconsistent messaging quietly cost you
            deals every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 sm:mb-28">
          {problems.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="w-5 h-5 text-muted-foreground mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">The fix</p>
          <h2 className="section-title mb-4">
            One platform that puts your entire knowledge base behind every rep
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 hover:border-foreground/20 transition-colors">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="w-5 h-5" />
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
