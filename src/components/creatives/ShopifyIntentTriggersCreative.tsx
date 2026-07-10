// Intent triggers — static 2×2 grid so all four triggers read at a glance.
// (Was an auto-cycling carousel: only one trigger visible at a time with blank
// gaps between slides — scanned as slow and hid 3/4 of the feature set.)
// Pure CSS, `shit-` prefix; the only motion is a one-shot stagger-in.
const css = `
.shit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;width:100%;max-width:960px;margin:0 auto}
@media (max-width:640px){.shit-grid{grid-template-columns:1fr}}
.shit-card{border:1px solid var(--border);border-radius:16px;background:var(--background);padding:18px;display:flex;flex-direction:column;box-shadow:0 18px 40px -30px rgba(15,23,42,.25);transition:transform .2s,box-shadow .2s;opacity:0;transform:translateY(10px);animation:shit-in .5s ease-out forwards}
.shit-card:nth-child(1){animation-delay:.05s}.shit-card:nth-child(2){animation-delay:.15s}
.shit-card:nth-child(3){animation-delay:.25s}.shit-card:nth-child(4){animation-delay:.35s}
@keyframes shit-in{to{opacity:1;transform:translateY(0)}}
.shit-card:hover{transform:translateY(-3px);box-shadow:0 24px 48px -28px rgba(15,23,42,.35)}
.shit-k{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-jetbrains),monospace;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:8px}
.shit-k i{width:5px;height:5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px hsl(221,83%,53%,.15)}
.shit-h{font-family:var(--font-bricolage),sans-serif;font-size:15.5px;font-weight:700;color:var(--foreground);margin-bottom:5px;line-height:1.3}
.shit-d{font-size:12.5px;line-height:1.5;color:var(--muted-foreground);margin-bottom:12px}
.shit-pop{margin-top:auto;border:1px solid var(--border);border-radius:12px;background:var(--muted);padding:10px}
.shit-ph{display:flex;align-items:center;gap:6px;margin-bottom:7px}
.shit-av{width:18px;height:18px;border-radius:50%;background:hsl(221,83%,53%,.14);color:var(--primary);font-size:9px;display:flex;align-items:center;justify-content:center}
.shit-pt{font-size:10px;font-weight:700;color:var(--foreground)}
.shit-live{margin-left:auto;display:inline-flex;align-items:center;gap:4px;font-size:8.5px;font-weight:700;color:hsl(152,60%,36%)}
.shit-live i{width:5px;height:5px;border-radius:50%;background:hsl(152,60%,42%);animation:shit-pulse 2s infinite}
@keyframes shit-pulse{0%,100%{opacity:1}50%{opacity:.35}}
.shit-bub{background:var(--background);border-radius:10px 10px 10px 3px;padding:8px 10px;font-size:11.5px;line-height:1.45;color:var(--foreground)}
@media (prefers-reduced-motion:reduce){.shit-card{animation:none;opacity:1;transform:none}.shit-live i{animation:none}}
`;

const slides = [
  {
    tag: "Product dwell",
    title: "Helpful details when shoppers linger",
    desc: "10+ seconds on a product page → specs, variants, and why it's a fit.",
    bubble: "You've been looking at this travel pillow — in stock in both colors. Want key specs?",
  },
  {
    tag: "Comparison loop",
    title: "Side-by-side when they're torn",
    desc: "Ping-pong between two product pages → instant in-chat comparison table.",
    bubble: "Side-by-side on the two pillows you've been comparing — want my pick?",
  },
  {
    tag: "Cart recovery",
    title: "Reassurance for hesitant buyers",
    desc: "Idle cart or exit intent → gentle nudge with policy answers, not spam.",
    bubble: "Still deciding? Happy to help with sizing or a matching accessory.",
  },
  {
    tag: "Search refinement",
    title: "Narrowing when search stalls",
    desc: "Repeated searches → in-stock picks and one question to narrow intent.",
    bubble: "What matters most — support level, fit, or pack size?",
  },
];

export default function ShopifyIntentTriggersCreative() {
  return (
    <div>
      <style>{css}</style>
      <div className="shit-grid">
        {slides.map((s) => (
          <div key={s.tag} className="shit-card">
            <span className="shit-k"><i />{s.tag}</span>
            <div className="shit-h">{s.title}</div>
            <div className="shit-d">{s.desc}</div>
            <div className="shit-pop">
              <div className="shit-ph">
                <span className="shit-av">✦</span>
                <span className="shit-pt">SalesHQ assistant</span>
                <span className="shit-live"><i />LIVE</span>
              </div>
              <div className="shit-bub">{s.bubble}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
