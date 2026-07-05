const css = `
.sab-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/340;margin:0 auto}
.sab-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);padding:18px;display:flex;flex-direction:column}
.sab-top{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground);margin-bottom:14px}
.sab-q{border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:12px;background:var(--muted);opacity:0;animation:sab-q 7s infinite}
@keyframes sab-q{0%,5%{opacity:0;transform:translateY(6px)}12%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.sab-q k{font-family:var(--font-jetbrains),monospace;font-size:9px;color:var(--muted-foreground);display:block;margin-bottom:4px}
.sab-q p{font-size:12px;color:var(--foreground);font-style:italic}
.sab-card{border:1px solid hsl(221,83%,53%,.35);border-radius:12px;padding:14px;background:hsl(221,83%,53%,.04);flex:1;opacity:0;animation:sab-card 7s infinite .8s}
@keyframes sab-card{0%,25%{opacity:0;transform:translateY(10px)}35%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.sab-h{display:flex;align-items:center;gap:8px;margin-bottom:10px}
.sab-h span{font-family:var(--font-bricolage),sans-serif;font-size:12px;font-weight:700;color:var(--primary)}
.sab-row{display:flex;justify-content:space-between;font-size:11px;padding:6px 0;border-bottom:1px solid var(--border)}
.sab-row:last-child{border-bottom:0}
.sab-row b{color:var(--foreground)}.sab-row em{color:var(--muted-foreground);font-style:normal}
@media (prefers-reduced-motion:reduce){.sab-scene *{animation:none!important}.sab-q,.sab-card{opacity:1!important;transform:none!important}}
`;

export default function SalesAssistantBattlecardCreative() {
  return (
    <div className="sab-scene">
      <style>{css}</style>
      <div className="sab-win">
        <div className="sab-top">Competitive moment</div>
        <div className="sab-q">
          <span className="block font-mono text-[9px] text-muted-foreground mb-1">Prospect on call</span>
          <p>&ldquo;We&apos;re also looking at CompetitorX — why should we pick you?&rdquo;</p>
        </div>
        <div className="sab-card">
          <div className="sab-h">
            <span>⚔️ Battlecard · vs CompetitorX</span>
          </div>
          {[
            ["Real-time sync", "Us ✓", "Them ✗"],
            ["Source citations", "Us ✓", "Them partial"],
            ["Live call assist", "Us ✓", "Them ✗"],
          ].map(([label, us, them]) => (
            <div key={label} className="sab-row">
              <b>{label}</b>
              <span><em>{us}</em> · <em>{them}</em></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
