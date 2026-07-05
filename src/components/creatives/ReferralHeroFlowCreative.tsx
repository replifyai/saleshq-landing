// Hero flow: post-checkout referral widget + phone WhatsApp share + UPI toast. `rhf-` prefix.
const css = `
.rhf-scene{position:relative;width:100%;max-width:540px;aspect-ratio:540/420;margin:0 auto}
.rhf-store{position:absolute;left:0;top:0;width:72%;height:78%;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;z-index:1}
.rhf-chrome{display:flex;align-items:center;gap:6px;height:32px;padding:0 12px;background:var(--muted);border-bottom:1px solid var(--border)}
.rhf-chrome i{width:7px;height:7px;border-radius:50%;background:var(--border);display:block}
.rhf-url{font-family:var(--font-jetbrains),monospace;font-size:9px;color:var(--muted-foreground);margin-left:6px}
.rhf-body{padding:12px}
.rhf-ok{font-size:11px;color:#128c3e;font-weight:600;margin-bottom:8px;display:flex;align-items:center;gap:6px;opacity:0;animation:rhf-a 12s infinite .5s}
@keyframes rhf-a{0%,4%{opacity:0}8%,92%{opacity:1}100%{opacity:0}}
.rhf-ref{border:2px solid hsl(221,83%,53%,.3);border-radius:12px;padding:12px;background:hsl(221,83%,53%,.04);opacity:0;animation:rhf-b 12s infinite 1s}
@keyframes rhf-b{0%,6%{opacity:0;transform:translateY(8px)}12%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.rhf-ref h4{font-family:var(--font-bricolage),sans-serif;font-size:12px;font-weight:700;margin:0 0 4px;color:var(--foreground)}
.rhf-ref p{font-size:10px;color:var(--muted-foreground);margin:0 0 8px;line-height:1.35}
.rhf-link{font-family:var(--font-jetbrains),monospace;font-size:9px;background:var(--background);border:1px solid var(--border);border-radius:6px;padding:6px 8px;color:var(--primary);font-weight:600}
.rhf-phone{position:absolute;right:0;bottom:0;width:46%;aspect-ratio:340/480;border:3px solid hsl(240,6%,22%);border-radius:22px;background:#111;box-shadow:0 36px 72px -32px rgba(15,23,42,.45);overflow:hidden;z-index:2;animation:rhf-phone 12s infinite 2s}
@keyframes rhf-phone{0%,14%{opacity:0;transform:translateY(16px) scale(.95)}20%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
.rhf-wahead{padding:8px 10px;background:#128c3e;color:#fff;font-size:9px;font-weight:600;display:flex;align-items:center;gap:6px}
.rhf-wav{width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.2);font-size:8px;display:flex;align-items:center;justify-content:center}
.rhf-wchat{padding:8px;background:#0b141a;flex:1;min-height:120px}
.rhf-wmsg{background:#005c4b;color:#e9edef;font-size:8px;padding:6px 8px;border-radius:8px 8px 2px 8px;margin-left:auto;max-width:90%;opacity:0;animation:rhf-msg 12s infinite 3.5s}
@keyframes rhf-msg{0%,28%{opacity:0;transform:translateY(6px)}34%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.rhf-wlink{color:#53bdeb;font-size:8px;margin-top:4px;display:block}
.rhf-upi{position:absolute;left:8%;bottom:4%;border:1px solid #128c3e;background:#ecfdf5;border-radius:12px;padding:10px 14px;z-index:3;min-width:160px;opacity:0;animation:rhf-upi 12s infinite 6s;box-shadow:0 20px 40px -16px rgba(18,140,62,.35)}
@keyframes rhf-upi{0%,48%{opacity:0;transform:translateY(10px) scale(.95)}54%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
.rhf-upi-k{font-size:8px;color:#065f46;font-weight:600;margin-bottom:2px}
.rhf-upi v{font-family:var(--font-bricolage),sans-serif;font-size:20px;font-weight:700;color:#128c3e}
.rhf-upi s{font-size:9px;color:#065f46;display:block;margin-top:2px}
.rhf-cursor{position:absolute;width:18px;height:18px;z-index:4;filter:drop-shadow(0 2px 3px rgba(0,0,0,.3));animation:rhf-cur 12s infinite}
@keyframes rhf-cur{0%{left:30%;top:55%}12%{left:35%;top:42%}18%{left:35%;top:42%;transform:scale(.85)}22%{transform:scale(1)}40%{left:72%;top:68%}48%{left:72%;top:68%;transform:scale(.85)}52%{transform:scale(1)}70%,100%{left:72%;top:72%}}
.rhf-cursor svg{width:100%;height:100%}
@media (prefers-reduced-motion:reduce){.rhf-scene *{animation:none!important}.rhf-ok,.rhf-ref,.rhf-phone,.rhf-wmsg,.rhf-upi{opacity:1!important;transform:none!important}}
`;

export default function ReferralHeroFlowCreative() {
  return (
    <div className="rhf-scene">
      <style>{css}</style>
      <div className="rhf-store">
        <div className="rhf-chrome"><i /><i /><i /><span className="rhf-url">savor.store/thank-you</span></div>
        <div className="rhf-body">
          <div className="rhf-ok">✓ Order #4821 confirmed · ₹1,899</div>
          <div className="rhf-ref">
            <h4>Share &amp; earn ₹250 per friend</h4>
            <p>Give friends 15% off. Reward hits your UPI when they buy.</p>
            <div className="rhf-link">savor.store/r/priya-k</div>
          </div>
        </div>
      </div>
      <div className="rhf-phone">
        <div className="rhf-wahead"><span className="rhf-wav">S</span> Savor Referrals</div>
        <div className="rhf-wchat">
          <div className="rhf-wmsg">
            Hey! 15% off at Savor 🎁
            <span className="rhf-wlink">savor.store/r/priya-k</span>
          </div>
        </div>
      </div>
      <div className="rhf-upi">
        <div className="rhf-upi-k">UPI reward · paid instantly</div>
        <div className="rhf-upi v">₹250</div>
        <span className="rhf-upi s">TDS handled · Certificate ready</span>
      </div>
      <div className="rhf-cursor">
        <svg viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-6 1-3 7-5-17z" fill="#fff" stroke="#111" strokeWidth="1.5" /></svg>
      </div>
    </div>
  );
}
