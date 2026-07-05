const css = `
.sak-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/340;margin:0 auto}
.sak-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);padding:18px}
.sak-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.sak-title{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground)}
.sak-sync{font-family:var(--font-jetbrains),monospace;font-size:9px;color:var(--primary);background:hsl(221,83%,53%,.1);padding:3px 8px;border-radius:999px}
.sak-docs{display:grid;gap:8px;margin-bottom:14px}
.sak-doc{display:flex;align-items:center;gap:10px;border:1px solid var(--border);border-radius:10px;padding:10px 12px;opacity:0;transform:translateX(-8px);animation:sak-doc 6s infinite}
.sak-doc:nth-child(1){animation-delay:0s}.sak-doc:nth-child(2){animation-delay:.4s}.sak-doc:nth-child(3){animation-delay:.8s}
@keyframes sak-doc{0%,8%{opacity:0;transform:translateX(-8px)}16%,88%{opacity:1;transform:translateX(0)}100%{opacity:0}}
.sak-doc i{width:28px;height:28px;border-radius:8px;background:var(--muted);display:flex;align-items:center;justify-content:center;font-size:14px}
.sak-doc span{font-size:12px;font-weight:600;color:var(--foreground)}
.sak-doc small{display:block;font-size:10px;color:var(--muted-foreground);font-weight:400}
.sak-ans{border:1px solid var(--border);border-radius:12px;padding:12px;background:var(--muted);opacity:0;animation:sak-ans 6s infinite 1.2s}
@keyframes sak-ans{0%,30%{opacity:0;transform:translateY(8px)}40%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.sak-ans p{font-size:11.5px;line-height:1.55;color:var(--foreground);margin-bottom:8px}
.sak-cite{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);border-radius:999px;padding:4px 9px;font-size:9px;font-weight:600;color:var(--primary);background:var(--background)}
@media (prefers-reduced-motion:reduce){.sak-scene *{animation:none!important}.sak-doc,.sak-ans{opacity:1!important;transform:none!important}}
`;

export default function SalesAssistantKnowledgeCreative() {
  return (
    <div className="sak-scene">
      <style>{css}</style>
      <div className="sak-win">
        <div className="sak-top">
          <span className="sak-title">Knowledge base</span>
          <span className="sak-sync">Syncing live</span>
        </div>
        <div className="sak-docs">
          {[
            { icon: "📄", name: "Product specs v3.2", meta: "Updated 2h ago" },
            { icon: "💰", name: "Pricing & packaging", meta: "Updated today" },
            { icon: "⚔️", name: "Competitor battlecards", meta: "Updated yesterday" },
          ].map((d) => (
            <div key={d.name} className="sak-doc">
              <i>{d.icon}</i>
              <span>{d.name}<small>{d.meta}</small></span>
            </div>
          ))}
        </div>
        <div className="sak-ans">
          <p>
            <strong>Enterprise plan</strong> includes SSO, audit logs, and dedicated support — starting at $49/user/mo billed annually.
          </p>
          <span className="sak-cite">Pricing sheet · row 14</span>
        </div>
      </div>
    </div>
  );
}
