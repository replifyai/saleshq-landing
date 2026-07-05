const metrics = [
  { value: "3", label: "products, one platform", sub: "storefront to sales team" },
  { value: "+28%", label: "assisted-order conversion", sub: "on the storefront" },
  { value: "40%", label: "faster deal closure", sub: "for sales teams" },
  { value: "<30min", label: "from install to live", sub: "no engineering" },
];

export default function ROISection() {
  return (
    <section
      id="results"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#0B1120] text-slate-100"
    >
      {/* Blue glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_84%_0%,rgba(37,99,235,0.20),transparent_64%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono-label mb-4 text-primary">Why SalesHQ</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.04] tracking-[-0.025em] text-slate-50 text-balance">
            Built for the way you actually sell
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
            Whether you run a Shopify store, a D2C referral program, or a B2B sales team — SalesHQ
            gives you AI that converts visitors, grows word-of-mouth, and closes deals faster.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, label, sub }) => (
            <div key={label} className="bg-[#0F1A2E] p-7 sm:p-8">
              <div className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-none text-primary">
                {value}
              </div>
              <div className="mt-2.5 text-sm font-medium text-slate-200">
                {label}
              </div>
              <div className="mt-0.5 text-[13px] text-slate-500">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
