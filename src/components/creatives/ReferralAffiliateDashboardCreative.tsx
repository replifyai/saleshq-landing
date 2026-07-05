// Affiliate earnings dashboard — realistic portal UI with sidebar & order table. `rad-` prefix.
const css = `
.rad-scene{position:relative;width:100%;max-width:500px;aspect-ratio:500/380;margin:0 auto}
.rad-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex}
.rad-side{width:140px;border-right:1px solid var(--border);background:var(--muted);padding:14px 10px;display:flex;flex-direction:column}
.rad-brand{font-family:var(--font-bricolage),sans-serif;font-size:12px;font-weight:700;color:var(--foreground);margin-bottom:2px}
.rad-sub{font-size:8px;color:var(--muted-foreground);margin-bottom:14px}
.rad-nav{font-size:10px;padding:7px 8px;border-radius:7px;color:var(--muted-foreground);margin-bottom:3px}
.rad-nav.on{background:var(--background);color:var(--primary);font-weight:600;box-shadow:0 1px 3px rgba(15,23,42,.08)}
.rad-user{margin-top:auto;display:flex;align-items:center;gap:6px;padding-top:10px;border-top:1px solid var(--border)}
.rad-uav{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--primary),hsl(221,83%,45%));color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center}
.rad-uname{font-size:9px;font-weight:600;color:var(--foreground);line-height:1.2}
.rad-uname small{display:block;font-weight:400;color:var(--muted-foreground)}
.rad-main{flex:1;padding:14px;overflow:hidden;display:flex;flex-direction:column}
.rad-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}
.rad-title{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground)}
.rad-code{font-family:var(--font-jetbrains),monospace;font-size:10px;background:hsl(221,83%,53%,.1);padding:4px 8px;border-radius:6px;color:var(--primary);font-weight:600;margin-top:4px;display:inline-block}
.rad-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:10px}
.rad-stat{border:1px solid var(--border);border-radius:9px;padding:9px 8px}
.rad-stat k{display:block;font-size:8px;color:var(--muted-foreground);margin-bottom:2px}
.rad-stat v{font-family:var(--font-bricolage),sans-serif;font-size:16px;font-weight:700;color:var(--foreground)}
.rad-stat v.accent{color:var(--primary);animation:rad-pulse 4s infinite ease-in-out}
@keyframes rad-pulse{0%,100%{opacity:1}50%{opacity:.8;transform:scale(1.03)}}
.rad-bars{display:flex;align-items:flex-end;gap:3px;height:48px;border-top:1px solid var(--border);padding-top:8px;margin-bottom:8px}
.rad-bars i{flex:1;border-radius:2px 2px 0 0;background:var(--primary);opacity:.3;transform-origin:bottom;animation:rad-bar 3s infinite ease-in-out}
.rad-bars i:nth-child(1){height:30%}.rad-bars i:nth-child(2){height:50%;animation-delay:.1s;opacity:.5}
.rad-bars i:nth-child(3){height:40%;animation-delay:.2s}.rad-bars i:nth-child(4){height:65%;animation-delay:.3s;opacity:1}
.rad-bars i:nth-child(5){height:55%;animation-delay:.4s}.rad-bars i:nth-child(6){height:80%;animation-delay:.5s;opacity:1}
@keyframes rad-bar{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.08)}}
.rad-tbl{border:1px solid var(--border);border-radius:9px;overflow:hidden;font-size:9px;flex:1}
.rad-th{display:grid;grid-template-columns:1.2fr .7fr .8fr;background:var(--muted);padding:6px 8px;font-weight:600;color:var(--muted-foreground)}
.rad-tr{display:grid;grid-template-columns:1.2fr .7fr .8fr;padding:6px 8px;border-top:1px solid var(--border);align-items:center;opacity:0;animation:rad-row 10s infinite}
.rad-tr:nth-child(2){animation-delay:1.5s}.rad-tr:nth-child(3){animation-delay:2s}.rad-tr:nth-child(4){animation-delay:2.5s}
@keyframes rad-row{0%,12%{opacity:0;transform:translateX(-4px)}18%,92%{opacity:1;transform:translateX(0)}100%{opacity:0}}
.rad-tr b{color:var(--foreground);font-weight:600;display:block}
.rad-tr small{color:var(--muted-foreground);font-size:8px}
.rad-earn{color:#128c3e;font-weight:600;text-align:right}
@media (prefers-reduced-motion:reduce){.rad-scene *{animation:none!important}.rad-tr{opacity:1!important;transform:none!important}}
`;

export default function ReferralAffiliateDashboardCreative() {
  return (
    <div className="rad-scene">
      <style>{css}</style>
      <div className="rad-win">
        <div className="rad-side">
          <div className="rad-brand">Savor</div>
          <div className="rad-sub">Affiliate portal</div>
          <div className="rad-nav on">Dashboard</div>
          <div className="rad-nav">Links &amp; codes</div>
          <div className="rad-nav">Payouts</div>
          <div className="rad-nav">Tax docs</div>
          <div className="rad-user">
            <span className="rad-uav">PK</span>
            <span className="rad-uname">Priya K.<small>priya.k@okhdfcbank</small></span>
          </div>
        </div>
        <div className="rad-main">
          <div className="rad-top">
            <div>
              <div className="rad-title">Your earnings</div>
              <span className="rad-code">PRIYA20 · savor.store/r/priya-k</span>
            </div>
          </div>
          <div className="rad-grid">
            <div className="rad-stat"><span className="block text-[8px] text-muted-foreground mb-0.5">Clicks</span><span className="font-display text-base font-bold">842</span></div>
            <div className="rad-stat"><span className="block text-[8px] text-muted-foreground mb-0.5">Orders</span><span className="font-display text-base font-bold">47</span></div>
            <div className="rad-stat"><span className="block text-[8px] text-muted-foreground mb-0.5">Earned</span><span className="font-display text-base font-bold text-primary accent">₹11,750</span></div>
          </div>
          <div className="rad-bars"><i /><i /><i /><i /><i /><i /></div>
          <div className="rad-tbl">
            <div className="rad-th"><span>Order</span><span>Date</span><span>Reward</span></div>
            <div className="rad-tr"><span><b>#4821</b><small>Mango Glow Serum</small></span><span>Today</span><span className="rad-earn">+ ₹250 UPI ✓</span></div>
            <div className="rad-tr"><span><b>#4816</b><small>Monsoon Mist Toner</small></span><span>Yesterday</span><span className="rad-earn">+ ₹250 UPI ✓</span></div>
            <div className="rad-tr"><span><b>#4798</b><small>Rosehip Night Oil</small></span><span>3 Jul</span><span className="rad-earn">+ ₹250 UPI ✓</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
