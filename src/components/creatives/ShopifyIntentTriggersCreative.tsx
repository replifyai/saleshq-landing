// Auto-cycling intent triggers: dwell → compare → cart → search. Pure CSS, `shit-` prefix.
const css = `
.shit-scene{position:relative;width:100%;max-width:520px;aspect-ratio:520/380;margin:0 auto}
.shit-card{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;padding:20px;display:flex;flex-direction:column}
.shit-k{font-family:var(--font-jetbrains),monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px}
.shit-h{font-family:var(--font-bricolage),sans-serif;font-size:17px;font-weight:700;color:var(--foreground);margin-bottom:8px;line-height:1.25}
.shit-d{font-size:12px;line-height:1.5;color:var(--muted-foreground);margin-bottom:auto}
.shit-pop{margin-top:14px;border:1px solid var(--border);border-radius:12px;background:var(--muted);padding:12px;opacity:0;transform:translateY(10px)}
.shit-ph{display:flex;align-items:center;gap:6px;margin-bottom:8px}
.shit-av{width:20px;height:20px;border-radius:50%;background:hsl(221,83%,53%,.14);color:var(--primary);font-size:10px;display:flex;align-items:center;justify-content:center}
.shit-pt{font-size:11px;font-weight:700;color:var(--foreground)}
.shit-bub{background:var(--background);border-radius:10px 10px 10px 3px;padding:9px 11px;font-size:11.5px;line-height:1.45;color:var(--foreground)}
.shit-slide{position:absolute;inset:0;opacity:0;pointer-events:none}
.shit-slide:nth-child(1){animation:shit-cycle 16s infinite 0s}
.shit-slide:nth-child(2){animation:shit-cycle 16s infinite 4s}
.shit-slide:nth-child(3){animation:shit-cycle 16s infinite 8s}
.shit-slide:nth-child(4){animation:shit-cycle 16s infinite 12s}
@keyframes shit-cycle{0%,2%{opacity:0}5%,22%{opacity:1}25%,100%{opacity:0}}
.shit-slide:nth-child(1) .shit-pop{animation:shit-pop 16s infinite 0.6s}
.shit-slide:nth-child(2) .shit-pop{animation:shit-pop 16s infinite 4.6s}
.shit-slide:nth-child(3) .shit-pop{animation:shit-pop 16s infinite 8.6s}
.shit-slide:nth-child(4) .shit-pop{animation:shit-pop 16s infinite 12.6s}
@keyframes shit-pop{0%,4%{opacity:0;transform:translateY(10px)}8%,20%{opacity:1;transform:translateY(0)}24%,100%{opacity:0;transform:translateY(6px)}}
.shit-dots{position:absolute;bottom:-28px;left:50%;transform:translateX(-50%);display:flex;gap:6px}
.shit-dots i{width:6px;height:6px;border-radius:50%;background:var(--border);animation:shit-dot 16s infinite}
.shit-dots i:nth-child(1){animation-delay:0s}.shit-dots i:nth-child(2){animation-delay:4s}.shit-dots i:nth-child(3){animation-delay:8s}.shit-dots i:nth-child(4){animation-delay:12s}
@keyframes shit-dot{0%,2%{background:var(--border);transform:scale(1)}5%,22%{background:var(--primary);transform:scale(1.2)}25%,100%{background:var(--border);transform:scale(1)}}
@media (prefers-reduced-motion:reduce){.shit-scene *{animation:none!important}.shit-slide:first-child,.shit-slide:first-child .shit-pop{opacity:1!important;transform:none!important}.shit-slide:not(:first-child){opacity:0!important}}
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
    desc: "Ping-pong between two PDPs → in-chat comparison table.",
    bubble: "Side-by-side on the two pillows you've been comparing — want my pick?",
  },
  {
    tag: "Cart recovery",
    title: "Reassurance for hesitant buyers",
    desc: "Idle cart or exit intent → gentle nudge, not spam.",
    bubble: "Still deciding? Happy to help with sizing or a matching accessory.",
  },
  {
    tag: "Search refinement",
    title: "Narrowing when search stalls",
    desc: "Repeated searches → in-stock picks and a narrowing question.",
    bubble: "What matters most — support level, fit, or pack size?",
  },
];

export default function ShopifyIntentTriggersCreative() {
  return (
    <div className="shit-scene pb-8">
      <style>{css}</style>
      {slides.map((s) => (
        <div key={s.tag} className="shit-slide">
          <div className="shit-card">
            <div className="shit-k">{s.tag}</div>
            <div className="shit-h">{s.title}</div>
            <div className="shit-d">{s.desc}</div>
            <div className="shit-pop">
              <div className="shit-ph">
                <span className="shit-av">✦</span>
                <span className="shit-pt">Shopping assistant</span>
              </div>
              <div className="shit-bub">{s.bubble}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="shit-dots" aria-hidden>
        <i /><i /><i /><i />
      </div>
    </div>
  );
}
