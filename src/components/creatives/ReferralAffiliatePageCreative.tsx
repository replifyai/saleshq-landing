// Branded affiliate landing page in a browser frame. `rap-` prefix.
const css = `
.rap-scene{position:relative;width:100%;max-width:500px;aspect-ratio:500/420;margin:0 auto}
.rap-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex;flex-direction:column}
.rap-chrome{display:flex;align-items:center;gap:6px;height:34px;padding:0 12px;background:var(--muted);border-bottom:1px solid var(--border)}
.rap-chrome i{width:8px;height:8px;border-radius:50%;background:var(--border);display:block}
.rap-url{font-family:var(--font-jetbrains),monospace;font-size:10px;color:var(--muted-foreground);margin-left:8px}
.rap-scroll{flex:1;overflow:hidden}
.rap-hero{background:linear-gradient(135deg,hsl(221,83%,53%,.12),hsl(221,83%,53%,.04));padding:16px;text-align:center;border-bottom:1px solid var(--border)}
.rap-av{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--primary),hsl(221,83%,45%));color:#fff;font-family:var(--font-bricolage),sans-serif;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;border:3px solid var(--background);box-shadow:0 8px 20px -8px hsl(221,83%,53%,.5)}
.rap-name{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground)}
.rap-handle{font-size:10px;color:var(--muted-foreground);margin-bottom:8px}
.rap-badge{display:inline-block;background:var(--primary);color:var(--primary-foreground);font-size:11px;font-weight:700;padding:5px 12px;border-radius:999px;animation:rap-glow 4s infinite ease-in-out}
@keyframes rap-glow{0%,100%{box-shadow:0 0 0 0 hsl(221,83%,53%,.3)}50%{box-shadow:0 0 0 6px hsl(221,83%,53%,0)}}
.rap-code{margin-top:8px;font-family:var(--font-jetbrains),monospace;font-size:10px;color:var(--primary);font-weight:600}
.rap-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px}
.rap-prod{border:1px solid var(--border);border-radius:10px;padding:8px;opacity:0;transform:translateY(6px)}
.rap-prod:nth-child(1){animation:rap-prod 8s infinite .6s}
.rap-prod:nth-child(2){animation:rap-prod 8s infinite .9s}
.rap-prod:nth-child(3){animation:rap-prod 8s infinite 1.2s}
.rap-prod:nth-child(4){animation:rap-prod 8s infinite 1.5s}
@keyframes rap-prod{0%,6%{opacity:0;transform:translateY(6px)}12%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.rap-img{height:56px;border-radius:7px;margin-bottom:6px;background:linear-gradient(135deg,hsl(221,83%,53%,.18),hsl(221,83%,53%,.06))}
.rap-img.g2{background:linear-gradient(135deg,hsl(280,60%,55%,.18),hsl(280,60%,55%,.06))}
.rap-img.g3{background:linear-gradient(135deg,hsl(160,50%,45%,.18),hsl(160,50%,45%,.06))}
.rap-img.g4{background:linear-gradient(135deg,hsl(35,80%,55%,.18),hsl(35,80%,55%,.06))}
.rap-pn{font-size:10px;font-weight:600;color:var(--foreground);margin-bottom:3px;line-height:1.2}
.rap-pr{font-size:10px;color:var(--muted-foreground)}.rap-pr s{opacity:.6;margin-right:4px}.rap-pr b{color:var(--primary)}
.rap-cta{margin:0 12px 12px;border-radius:10px;background:var(--foreground);color:var(--background);text-align:center;padding:10px;font-size:11px;font-weight:700;opacity:0;animation:rap-prod 8s infinite 2s}
.rap-float{position:absolute;bottom:14px;right:14px;border:1px solid var(--border);border-radius:10px;background:var(--background);padding:8px 10px;font-size:10px;box-shadow:0 16px 32px -16px rgba(15,23,42,.3);opacity:0;animation:rap-float 8s infinite 3.2s}
@keyframes rap-float{0%,38%{opacity:0;transform:translateY(8px)}42%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.rap-float b{display:block;color:var(--foreground);font-size:11px;margin-bottom:2px}
.rap-float span{color:#128c3e;font-weight:600}
@media (prefers-reduced-motion:reduce){.rap-scene *{animation:none!important}.rap-prod,.rap-cta,.rap-float{opacity:1!important;transform:none!important}}
`;

const products = [
  { name: "Mango Glow Serum", was: "₹2,199", now: "₹1,869", cls: "" },
  { name: "Monsoon Mist Toner", was: "₹899", now: "₹764", cls: "g2" },
  { name: "Turmeric Face Pack", was: "₹649", now: "₹552", cls: "g3" },
  { name: "Rosehip Night Oil", was: "₹1,499", now: "₹1,274", cls: "g4" },
];

export default function ReferralAffiliatePageCreative() {
  return (
    <div className="rap-scene">
      <style>{css}</style>
      <div className="rap-win">
        <div className="rap-chrome"><i /><i /><i /><span className="rap-url">savor.store/r/priya-k</span></div>
        <div className="rap-scroll">
          <div className="rap-hero">
            <div className="rap-av">PK</div>
            <div className="rap-name">Priya&apos;s picks · Savor</div>
            <div className="rap-handle">@priya.skincare · 48K followers</div>
            <div className="rap-badge">15% off with code PRIYA20</div>
            <div className="rap-code">Auto-applied at checkout</div>
          </div>
          <div className="rap-grid">
            {products.map((p) => (
              <div key={p.name} className="rap-prod">
                <div className={`rap-img ${p.cls}`} />
                <div className="rap-pn">{p.name}</div>
                <div className="rap-pr"><s>{p.was}</s><b>{p.now}</b></div>
              </div>
            ))}
          </div>
          <div className="rap-cta">Shop with Priya&apos;s discount →</div>
        </div>
      </div>
      <div className="rap-float">
        <b>New order via your link</b>
        <span>+ ₹250 earned · UPI sent</span>
      </div>
    </div>
  );
}
