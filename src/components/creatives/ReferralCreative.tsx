// Animated abstract: customer shares link → spreads to WhatsApp contacts →
// ₹ coin drops into wallet, paid instantly. Pure CSS, namespaced `rfx-`.
const css = `
.rfx-scene{position:relative;width:100%;max-width:512px;aspect-ratio:512/412;margin:0 auto}
.rfx-wires{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.rfx-wire{stroke:var(--primary);stroke-width:2;fill:none;stroke-dasharray:6 6;opacity:.5;stroke-dashoffset:80;animation:rfx-flow 3s linear infinite}
@keyframes rfx-flow{to{stroke-dashoffset:0}}
.rfx-hub{position:absolute;left:50%;top:17%;transform:translateX(-50%);text-align:center;z-index:3}
.rfx-av{width:64px;height:64px;border-radius:50%;background:hsl(221,83%,53%,.12);border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;color:var(--primary)}
.rfx-av svg{width:30px;height:30px;stroke:currentColor;fill:none;stroke-width:2}
.rfx-share{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--border);background:var(--background);border-radius:999px;padding:5px 11px;font-size:11px;font-weight:600;color:var(--foreground);box-shadow:0 8px 20px -10px rgba(15,23,42,.25);animation:rfx-bob 3s ease-in-out infinite}
.rfx-share svg{width:12px;height:12px;stroke:var(--primary);fill:none;stroke-width:2}
@keyframes rfx-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.rfx-node{position:absolute;width:52px;text-align:center;z-index:3;opacity:0;transform:scale(.6);animation:rfx-pop 6s infinite}
.rfx-node .rfx-bub{width:44px;height:44px;border-radius:50%;background:var(--background);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 5px;box-shadow:0 10px 22px -12px rgba(15,23,42,.3)}
.rfx-node .rfx-bub svg{width:22px;height:22px}
.rfx-node small{font-size:9px;color:var(--muted-foreground);font-family:var(--font-jetbrains),monospace}
.rfx-n1{left:8%;top:61%;animation-delay:.6s}
.rfx-n2{left:45%;top:73%;animation-delay:1s}
.rfx-n3{left:82%;top:61%;animation-delay:1.4s}
@keyframes rfx-pop{0%,6%{opacity:0;transform:scale(.6)}14%{opacity:1;transform:scale(1)}84%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(.7)}}
.rfx-wallet{position:absolute;right:5%;bottom:3%;border:1px solid var(--border);border-radius:14px;background:var(--background);box-shadow:0 22px 44px -22px rgba(15,23,42,.34);padding:12px 14px;z-index:4;min-width:150px}
.rfx-wk{font-family:var(--font-jetbrains),monospace;font-size:8.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground);margin-bottom:5px;display:flex;align-items:center;gap:6px}
.rfx-wk b{color:#128c3e}
.rfx-amt{font-family:var(--font-bricolage),sans-serif;font-weight:700;font-size:22px;display:flex;align-items:baseline;gap:2px;color:var(--foreground)}
.rfx-amt small{font-size:11px;color:var(--muted-foreground);font-weight:500}
.rfx-paid{font-size:10px;color:#128c3e;font-weight:600;display:flex;align-items:center;gap:5px;margin-top:4px}
.rfx-coin{position:absolute;right:14%;bottom:29%;width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--primary),hsl(221,83%,45%));color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-bricolage),sans-serif;font-weight:700;font-size:15px;z-index:5;box-shadow:0 8px 18px -6px hsl(221,83%,53%,.6);opacity:0;animation:rfx-drop 6s infinite}
@keyframes rfx-drop{0%,48%{opacity:0;transform:translateY(-10px) scale(.8)}54%{opacity:1;transform:translateY(0) scale(1)}68%{opacity:1;transform:translateY(60px) scale(.9)}74%,100%{opacity:0;transform:translateY(70px) scale(.6)}}
@media (prefers-reduced-motion:reduce){.rfx-scene *{animation:none!important}.rfx-node,.rfx-coin{opacity:1!important;transform:none!important}}
`;

const WA = (
  <svg viewBox="0 0 32 32"><path fill="#25d366" d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3z" /><path fill="#fff" d="M22 19c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6 0-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 2.6 1.1 3.1.9 3.7.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" /></svg>
);

export default function ReferralCreative() {
  return (
    <div className="rfx-scene">
      <style>{css}</style>
      <svg className="rfx-wires" viewBox="0 0 512 412" preserveAspectRatio="none">
        <path className="rfx-wire" d="M256 150 C 160 200, 110 220, 66 250" />
        <path className="rfx-wire" d="M256 150 C 256 230, 256 260, 256 300" style={{ animationDelay: ".3s" }} />
        <path className="rfx-wire" d="M256 150 C 352 200, 402 220, 446 250" style={{ animationDelay: ".6s" }} />
      </svg>

      <div className="rfx-hub">
        <div className="rfx-av"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg></div>
        <span className="rfx-share"><svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>Shares their link</span>
      </div>

      <div className="rfx-node rfx-n1"><div className="rfx-bub">{WA}</div><small>Priya</small></div>
      <div className="rfx-node rfx-n2"><div className="rfx-bub">{WA}</div><small>Arjun</small></div>
      <div className="rfx-node rfx-n3"><div className="rfx-bub">{WA}</div><small>Neha</small></div>

      <div className="rfx-coin">₹</div>
      <div className="rfx-wallet">
        <div className="rfx-wk">UPI reward · <b>paid instantly</b></div>
        <div className="rfx-amt">₹250<small>.00</small></div>
        <div className="rfx-paid"><svg viewBox="0 0 24 24" style={{ width: 11, height: 11, stroke: "#128c3e", fill: "none", strokeWidth: 2.5 }}><path d="M20 6 9 17l-5-5" /></svg>Sent to Priya · TDS handled</div>
      </div>
    </div>
  );
}
