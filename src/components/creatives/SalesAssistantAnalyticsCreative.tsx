const css = `
.saa-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/360;margin:0 auto}
.saa-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);padding:18px}
.saa-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.saa-title{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground)}
.saa-period{font-family:var(--font-jetbrains),monospace;font-size:9px;color:var(--muted-foreground)}
.saa-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.saa-stat{border:1px solid var(--border);border-radius:11px;padding:12px}
.saa-stat k{display:block;font-size:10px;color:var(--muted-foreground);margin-bottom:4px}
.saa-stat v{font-family:var(--font-bricolage),sans-serif;font-size:22px;font-weight:700;color:var(--foreground)}
.saa-stat v.accent{color:var(--primary)}
.saa-gap{border:1px solid var(--border);border-radius:11px;padding:12px;background:var(--muted);opacity:0;animation:saa-gap 5s infinite 1s}
@keyframes saa-gap{0%,15%{opacity:0;transform:translateY(6px)}25%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.saa-gap k{font-size:10px;color:var(--muted-foreground);display:block;margin-bottom:6px}
.saa-gap p{font-size:12px;color:var(--foreground)}
.saa-gap strong{color:var(--primary)}
@media (prefers-reduced-motion:reduce){.saa-scene *{animation:none!important}.saa-gap{opacity:1!important;transform:none!important}}
`;

export default function SalesAssistantAnalyticsCreative() {
  return (
    <div className="saa-scene">
      <style>{css}</style>
      <div className="saa-win">
        <div className="saa-top">
          <span className="saa-title">Team insights</span>
          <span className="saa-period">This week</span>
        </div>
        <div className="saa-grid">
          <div className="saa-stat">
            <span className="block text-[10px] text-muted-foreground mb-1">Questions answered</span>
            <span className="font-display text-[22px] font-bold text-foreground">847</span>
          </div>
          <div className="saa-stat">
            <span className="block text-[10px] text-muted-foreground mb-1">Avg. response</span>
            <span className="font-display text-[22px] font-bold text-primary">0.8s</span>
          </div>
          <div className="saa-stat">
            <span className="block text-[10px] text-muted-foreground mb-1">Source-backed</span>
            <span className="font-display text-[22px] font-bold text-foreground">95%</span>
          </div>
          <div className="saa-stat">
            <span className="block text-[10px] text-muted-foreground mb-1">Time saved</span>
            <span className="font-display text-[22px] font-bold text-foreground">3.2h/rep</span>
          </div>
        </div>
        <div className="saa-gap">
          <span className="block text-[10px] text-muted-foreground mb-1.5">Top knowledge gap</span>
          <p>
            <strong>&ldquo;SOC 2 &amp; data residency&rdquo;</strong> — asked 34× this week. Update your security FAQ to close this gap.
          </p>
        </div>
      </div>
    </div>
  );
}
