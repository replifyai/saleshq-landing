// Animated abstract: live call → waveform + transcript → AI answer card pops
// in with a source citation. Pure CSS, namespaced `sax-`.
const css = `
.sax-scene{position:relative;width:100%;max-width:512px;aspect-ratio:512/412;margin:0 auto}
.sax-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden}
.sax-chrome{display:flex;align-items:center;gap:8px;height:36px;padding:0 14px;background:var(--muted);border-bottom:1px solid var(--border);font-family:var(--font-jetbrains),monospace;font-size:10px;color:var(--muted-foreground)}
.sax-rec{margin-left:auto;display:flex;align-items:center;gap:6px;font-weight:600}
.sax-rec i{width:7px;height:7px;border-radius:50%;background:#ef4444;animation:sax-pulse 1.4s infinite}
@keyframes sax-pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(239,68,68,.35)}50%{opacity:.6;box-shadow:0 0 0 5px rgba(239,68,68,0)}}
.sax-body{display:grid;grid-template-columns:1fr 1.25fr;height:calc(100% - 36px)}
.sax-left{border-right:1px solid var(--border);background:var(--muted);padding:16px}
.sax-k{font-family:var(--font-jetbrains),monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-foreground);margin-bottom:12px}
.sax-wave{display:flex;align-items:center;gap:3px;height:44px;margin-bottom:18px}
.sax-wave b{flex:1;background:var(--primary);border-radius:2px;opacity:.5;animation:sax-eq 1.1s infinite ease-in-out}
.sax-wave b:nth-child(2n){animation-duration:.9s}.sax-wave b:nth-child(3n){animation-duration:1.3s;opacity:.35}
@keyframes sax-eq{0%,100%{height:20%}50%{height:90%}}
.sax-tline{opacity:0;transform:translateY(6px);font-size:11.5px;line-height:1.5;color:var(--foreground);margin-bottom:10px}
.sax-tline .sax-who{font-family:var(--font-jetbrains),monospace;font-size:8.5px;color:var(--muted-foreground);display:block;margin-bottom:3px}
.sax-tline.sax-a{animation:sax-rise 7s infinite .4s}.sax-tline.sax-b{animation:sax-rise 7s infinite 1.6s}
@keyframes sax-rise{0%,3%{opacity:0;transform:translateY(6px)}9%{opacity:1;transform:translateY(0)}92%{opacity:1}100%{opacity:0}}
.sax-right{padding:16px;display:flex;flex-direction:column}
.sax-prompt{font-size:12px;color:var(--muted-foreground);margin-bottom:12px}
.sax-prompt b{color:var(--foreground)}
.sax-ans{border:1px solid var(--border);border-radius:12px;background:var(--background);box-shadow:0 20px 40px -22px rgba(15,23,42,.3);padding:13px;opacity:0;transform:translateY(14px) scale(.97);animation:sax-card 7s infinite}
@keyframes sax-card{0%,40%{opacity:0;transform:translateY(14px) scale(.97)}48%{opacity:1;transform:translateY(0) scale(1)}94%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
.sax-ah{display:flex;align-items:center;gap:7px;margin-bottom:9px}
.sax-aic{width:22px;height:22px;border-radius:6px;background:hsl(221,83%,53%,.12);color:var(--primary);display:flex;align-items:center;justify-content:center}
.sax-aic svg{width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2}
.sax-at{font-family:var(--font-bricolage),sans-serif;font-size:12px;font-weight:700;color:var(--foreground)}
.sax-ap{font-size:11.5px;line-height:1.55;color:var(--foreground);margin-bottom:10px}
.sax-cite{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--border);border-radius:999px;padding:4px 9px;font-size:9.5px;font-weight:600;color:var(--primary);background:hsl(221,83%,53%,.05)}
.sax-cite svg{width:10px;height:10px;stroke:currentColor;fill:none;stroke-width:2}
.sax-sug{margin-top:auto;font-family:var(--font-jetbrains),monospace;font-size:9px;color:var(--muted-foreground);letter-spacing:.04em}
@media (prefers-reduced-motion:reduce){.sax-scene *{animation:none!important}.sax-ans,.sax-tline{opacity:1!important;transform:none!important}}
`;

export default function SalesAssistantCreative() {
  return (
    <div className="sax-scene">
      <style>{css}</style>
      <div className="sax-win">
        <div className="sax-chrome">saleshq.ai — live call<span className="sax-rec"><i />Recording</span></div>
        <div className="sax-body">
          <div className="sax-left">
            <div className="sax-k">Live transcript</div>
            <div className="sax-wave">{Array.from({ length: 14 }).map((_, i) => <b key={i} />)}</div>
            <div className="sax-tline sax-a"><span className="sax-who">Prospect</span>Do you integrate with Salesforce out of the box?</div>
            <div className="sax-tline sax-b"><span className="sax-who">Rep</span>Great question — let me confirm the exact plan…</div>
          </div>
          <div className="sax-right">
            <div className="sax-prompt"><b>SalesHQ</b> heard the question and answered instantly:</div>
            <div className="sax-ans">
              <div className="sax-ah"><span className="sax-aic"><svg viewBox="0 0 24 24"><path d="m12 3 1.9 5.8L20 10l-5.8 1.9L12 18l-1.9-5.8L4 10z" /></svg></span><span className="sax-at">Instant answer</span></div>
              <div className="sax-ap">Yes — native Salesforce sync is included on <b>Growth</b> and above (two-way, real-time). Starter uses CSV import.</div>
              <span className="sax-cite"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>Integrations doc · p.4</span>
            </div>
            <div className="sax-sug">Source-backed · answered in 0.8s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
