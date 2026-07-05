// Animated merchant analytics dashboard. Pure CSS, `shan-` prefix.
const css = `
.shan-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/360;margin:0 auto}
.shan-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);padding:18px}
.shan-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.shan-title{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground)}
.shan-live{font-family:var(--font-jetbrains),monospace;font-size:9px;background:hsl(221,83%,53%,.12);color:var(--primary);padding:3px 8px;border-radius:999px}
.shan-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.shan-stat{border:1px solid var(--border);border-radius:11px;padding:12px}
.shan-stat k{display:block;font-size:10px;color:var(--muted-foreground);margin-bottom:4px}
.shan-stat v{font-family:var(--font-bricolage),sans-serif;font-size:22px;font-weight:700;color:var(--foreground)}
.shan-stat v.accent{color:var(--primary)}
.shan-stat v.pulse,.shan-pulse{animation:shan-pulse 3s infinite ease-in-out}
@keyframes shan-pulse{0%,100%{opacity:1}50%{opacity:.75;transform:scale(1.02)}}
.shan-bars{display:flex;align-items:flex-end;gap:5px;height:72px;border-top:1px solid var(--border);padding-top:12px;margin-bottom:12px}
.shan-bars i{flex:1;border-radius:3px 3px 0 0;background:var(--primary);transform-origin:bottom;animation:shan-bar 4s infinite ease-in-out}
.shan-bars i:nth-child(1){animation-delay:0s;height:40%;opacity:.35}
.shan-bars i:nth-child(2){animation-delay:.2s;height:65%;opacity:.35}
.shan-bars i:nth-child(3){animation-delay:.4s;height:50%;opacity:.35}
.shan-bars i:nth-child(4){animation-delay:.6s;height:80%;opacity:1}
.shan-bars i:nth-child(5){animation-delay:.8s;height:70%;opacity:.35}
.shan-bars i:nth-child(6){animation-delay:1s;height:90%;opacity:1}
@keyframes shan-bar{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.12)}}
.shan-foot{border-radius:10px;background:var(--muted);padding:10px 12px;font-size:11px;color:var(--muted-foreground);opacity:0;animation:shan-foot 8s infinite 1s}
@keyframes shan-foot{0%,10%{opacity:0;transform:translateY(6px)}15%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.shan-cohort{position:absolute;top:18px;right:18px;font-size:9px;font-weight:600;color:var(--primary);opacity:0;animation:shan-cohort 8s infinite}
@keyframes shan-cohort{0%,5%{opacity:0}10%,45%{opacity:1;content:'Comparers'}50%,85%{opacity:1}90%,100%{opacity:0}}
@media (prefers-reduced-motion:reduce){.shan-scene *{animation:none!important}.shan-foot{opacity:1!important;transform:none!important}}
`;

export default function ShopifyAnalyticsCreative() {
  return (
    <div className="shan-scene">
      <style>{css}</style>
      <div className="shan-win">
        <div className="shan-top">
          <span className="shan-title">Intent overview</span>
          <span className="shan-live">Live</span>
        </div>
        <div className="shan-grid">
          <div className="shan-stat"><span className="block text-[10px] text-muted-foreground mb-1">Sessions</span><span className="font-display text-[22px] font-bold text-foreground">4,182</span></div>
          <div className="shan-stat"><span className="block text-[10px] text-muted-foreground mb-1">Conversations</span><span className="font-display text-[22px] font-bold text-foreground">1,067</span></div>
          <div className="shan-stat"><span className="block text-[10px] text-muted-foreground mb-1">Assisted orders</span><span className="font-display text-[22px] font-bold text-primary shan-pulse">312</span></div>
          <div className="shan-stat"><span className="block text-[10px] text-muted-foreground mb-1">Popup reply rate</span><span className="font-display text-[22px] font-bold text-foreground">38%</span></div>
        </div>
        <div className="shan-bars">
          <i /><i /><i /><i /><i /><i />
        </div>
        <div className="shan-foot">
          Top intent: <strong className="text-foreground font-medium">comparison · targeted purchase</strong>
        </div>
      </div>
    </div>
  );
}
