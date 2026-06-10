const metrics = [
  {
    value: "3+ hrs",
    label: "saved per rep, per day",
    description: "No more digging through drives and threads for answers that should take seconds.",
  },
  {
    value: "40%",
    label: "faster deal cycles",
    description: "Objections answered on the call instead of in next week's follow-up email.",
  },
  {
    value: "95%",
    label: "answer accuracy",
    description: "Source-backed responses mean reps quote the right specs and pricing, every time.",
  },
  {
    value: "<1 day",
    label: "to get fully live",
    description: "Upload your docs in the morning, answer customer questions with AI by afternoon.",
  },
];

export default function ROISection() {
  return (
    <section id="roi" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-eyebrow">The payoff</p>
          <h2 className="section-title mb-4">Less searching. More selling.</h2>
          <p className="section-subtitle">
            What teams measure after putting SalesHQ behind every rep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl border border-border bg-border overflow-hidden">
          {metrics.map(({ value, label, description }) => (
            <div key={label} className="bg-card p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-1">
                {value}
              </div>
              <div className="text-sm font-medium text-primary mb-3">{label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
