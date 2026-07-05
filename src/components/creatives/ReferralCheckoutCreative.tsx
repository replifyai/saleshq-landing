// Post-purchase referral widget on a realistic storefront checkout success page. `rck-` prefix.
const css = `
.rck-scene{position:relative;width:100%;max-width:500px;aspect-ratio:500/400;margin:0 auto}
.rck-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex;flex-direction:column}
.rck-chrome{display:flex;align-items:center;gap:6px;height:34px;padding:0 12px;background:var(--muted);border-bottom:1px solid var(--border)}
.rck-chrome i{width:8px;height:8px;border-radius:50%;background:var(--border);display:block}
.rck-url{font-family:var(--font-jetbrains),monospace;font-size:10px;color:var(--muted-foreground);margin-left:8px}
.rck-body{flex:1;padding:16px;overflow:hidden}
.rck-ok{display:flex;align-items:center;gap:10px;margin-bottom:14px;opacity:0;animation:rck-ok 10s infinite .4s}
@keyframes rck-ok{0%,4%{opacity:0;transform:translateY(6px)}8%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.rck-check{width:36px;height:36px;border-radius:50%;background:#ecfdf5;color:#128c3e;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0}
.rck-ok h3{font-family:var(--font-bricolage),sans-serif;font-size:15px;font-weight:700;color:var(--foreground);margin:0 0 2px}
.rck-ok p{font-size:11px;color:var(--muted-foreground);margin:0}
.rck-order{border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:11px;opacity:0;animation:rck-ok 10s infinite .8s}
.rck-order b{color:var(--foreground)}.rck-order span{color:var(--muted-foreground)}
.rck-ref{border:2px solid hsl(221,83%,53%,.35);border-radius:14px;background:linear-gradient(135deg,hsl(221,83%,53%,.06),hsl(221,83%,53%,.02));padding:14px;opacity:0;transform:translateY(10px);animation:rck-ref 10s infinite 1.4s}
@keyframes rck-ref{0%,12%{opacity:0;transform:translateY(10px)}18%,92%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(6px)}}
.rck-ref-k{font-family:var(--font-jetbrains),monospace;font-size:9px;letter-spacing:.05em;text-transform:uppercase;color:var(--primary);margin-bottom:6px}
.rck-ref h4{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground);margin:0 0 4px}
.rck-ref p{font-size:11px;color:var(--muted-foreground);margin:0 0 10px;line-height:1.4}
.rck-link{display:flex;align-items:center;gap:8px;border:1px solid var(--border);border-radius:8px;background:var(--background);padding:8px 10px;margin-bottom:10px}
.rck-link code{flex:1;font-family:var(--font-jetbrains),monospace;font-size:10px;color:var(--foreground);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rck-copy{font-size:10px;font-weight:600;color:var(--primary);padding:4px 8px;border-radius:6px;background:hsl(221,83%,53%,.1);animation:rck-flash 10s infinite 2.2s}
@keyframes rck-flash{0%,20%{background:hsl(221,83%,53%,.1)}22%,26%{background:hsl(221,83%,53%,.25)}28%,100%{background:hsl(221,83%,53%,.1)}}
.rck-btns{display:flex;gap:8px}
.rck-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:5px;border-radius:8px;padding:8px;font-size:10px;font-weight:600}
.rck-wa{background:#25d366;color:#fff;animation:rck-pulse 10s infinite 3s}
.rck-share{background:var(--primary);color:var(--primary-foreground);animation:rck-pulse 10s infinite 3.4s}
@keyframes rck-pulse{0%,28%{transform:scale(1)}30%{transform:scale(.96)}32%{transform:scale(1.02)}34%,100%{transform:scale(1)}}
.rck-toast{position:absolute;bottom:16px;right:16px;border:1px solid #128c3e;background:#ecfdf5;border-radius:10px;padding:8px 12px;font-size:10px;color:#065f46;font-weight:600;display:flex;align-items:center;gap:6px;opacity:0;animation:rck-toast 10s infinite 4s;box-shadow:0 12px 28px -12px rgba(18,140,62,.35)}
@keyframes rck-toast{0%,38%{opacity:0;transform:translateY(8px)}42%,88%{opacity:1;transform:translateY(0)}92%,100%{opacity:0}}
@media (prefers-reduced-motion:reduce){.rck-scene *{animation:none!important}.rck-ok,.rck-order,.rck-ref,.rck-toast{opacity:1!important;transform:none!important}}
`;

export default function ReferralCheckoutCreative() {
  return (
    <div className="rck-scene">
      <style>{css}</style>
      <div className="rck-win">
        <div className="rck-chrome"><i /><i /><i /><span className="rck-url">savor.store/thank-you</span></div>
        <div className="rck-body">
          <div className="rck-ok">
            <div className="rck-check">✓</div>
            <div>
              <h3>Order confirmed!</h3>
              <p>Arriving in 3–5 days · Order #4821</p>
            </div>
          </div>
          <div className="rck-order">
            <span>Total paid </span><b>₹1,899</b>
            <span> · Mango Glow Serum × 1</span>
          </div>
          <div className="rck-ref">
            <div className="rck-ref-k">Refer &amp; earn</div>
            <h4>Give 15% off, earn ₹250 per friend</h4>
            <p>Share your link — when they buy, reward hits your UPI same day.</p>
            <div className="rck-link">
              <code>savor.store/r/priya-k</code>
              <span className="rck-copy">Copied!</span>
            </div>
            <div className="rck-btns">
              <span className="rck-btn rck-wa">WhatsApp</span>
              <span className="rck-btn rck-share">Share link</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rck-toast">✓ Link copied — share on WhatsApp</div>
    </div>
  );
}
