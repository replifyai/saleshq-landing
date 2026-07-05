// Merchant admin dashboard with sidebar, KPIs, affiliate table. `rmd-` prefix.
const css = `
.rmd-scene{position:relative;width:100%;max-width:520px;aspect-ratio:520/380;margin:0 auto}
.rmd-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex}
.rmd-side{width:72px;border-right:1px solid var(--border);background:var(--muted);padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:10px}
.rmd-logo{width:32px;height:32px;border-radius:8px;background:var(--primary);color:var(--primary-foreground);font-family:var(--font-bricolage),sans-serif;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;margin-bottom:6px}
.rmd-nav{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--muted-foreground)}
.rmd-nav.on{background:hsl(221,83%,53%,.12);color:var(--primary)}
.rmd-main{flex:1;padding:14px;overflow:hidden;display:flex;flex-direction:column}
.rmd-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.rmd-title{font-family:var(--font-bricolage),sans-serif;font-size:13px;font-weight:700;color:var(--foreground)}
.rmd-live{font-family:var(--font-jetbrains),monospace;font-size:8px;background:#ecfdf5;color:#128c3e;padding:3px 7px;border-radius:999px;font-weight:600}
.rmd-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:12px}
.rmd-kpi{border:1px solid var(--border);border-radius:8px;padding:8px;text-align:center}
.rmd-kpi k{display:block;font-size:8px;color:var(--muted-foreground);margin-bottom:2px}
.rmd-kpi v{font-family:var(--font-bricolage),sans-serif;font-size:13px;font-weight:700;color:var(--foreground)}
.rmd-kpi v.up{color:var(--primary);animation:rmd-pulse 3s infinite}
@keyframes rmd-pulse{0%,100%{opacity:1}50%{opacity:.75}}
.rmd-tbl{flex:1;border:1px solid var(--border);border-radius:10px;overflow:hidden;font-size:10px}
.rmd-th{display:grid;grid-template-columns:1.4fr .8fr .7fr .8fr;background:var(--muted);padding:7px 10px;font-weight:600;color:var(--muted-foreground);border-bottom:1px solid var(--border)}
.rmd-row{display:grid;grid-template-columns:1.4fr .8fr .7fr .8fr;padding:7px 10px;border-bottom:1px solid var(--border);align-items:center;opacity:0;transform:translateX(-6px)}
.rmd-row:nth-child(2){animation:rmd-row 10s infinite 1s}
.rmd-row:nth-child(3){animation:rmd-row 10s infinite 1.4s}
.rmd-row:nth-child(4){animation:rmd-row 10s infinite 1.8s}
.rmd-row:nth-child(5){animation:rmd-row 10s infinite 2.2s}
@keyframes rmd-row{0%,8%{opacity:0;transform:translateX(-6px)}14%,92%{opacity:1;transform:translateX(0)}100%{opacity:0}}
.rmd-aff{display:flex;align-items:center;gap:6px}
.rmd-av{width:22px;height:22px;border-radius:50%;background:hsl(221,83%,53%,.15);color:var(--primary);font-size:8px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.rmd-aff b{color:var(--foreground);font-weight:600;display:block;line-height:1.2}
.rmd-aff small{color:var(--muted-foreground);font-size:8px}
.rmd-pill{font-size:8px;font-weight:600;padding:2px 6px;border-radius:999px;background:#ecfdf5;color:#128c3e;text-align:center}
.rmd-pill.wait{background:hsl(45,90%,50%,.15);color:hsl(35,80%,35%)}
.rmd-bar{height:4px;border-radius:2px;background:var(--muted);margin-top:10px;overflow:hidden}
.rmd-bar i{display:block;height:100%;width:0;background:var(--primary);border-radius:2px;animation:rmd-fill 10s infinite 2.5s}
@keyframes rmd-fill{0%,24%{width:0}40%,92%{width:68%}100%{width:0}}
@media (prefers-reduced-motion:reduce){.rmd-scene *{animation:none!important}.rmd-row{opacity:1!important;transform:none!important}.rmd-bar i{width:68%!important}}
`;

const affiliates = [
  { init: "PK", name: "Priya K.", code: "PRIYA20", orders: 47, earned: "₹11,750", status: "paid" },
  { init: "AR", name: "Arjun R.", code: "ARJUN15", orders: 31, earned: "₹7,750", status: "paid" },
  { init: "NS", name: "Neha S.", code: "NEHA10", orders: 18, earned: "₹4,500", status: "pending" },
  { init: "VM", name: "Vikram M.", code: "VIKRAM", orders: 12, earned: "₹3,000", status: "paid" },
];

export default function ReferralMerchantDashboardCreative() {
  return (
    <div className="rmd-scene">
      <style>{css}</style>
      <div className="rmd-win">
        <div className="rmd-side">
          <div className="rmd-logo">S</div>
          <span className="rmd-nav on">📊</span>
          <span className="rmd-nav">👥</span>
          <span className="rmd-nav">💸</span>
          <span className="rmd-nav">⚙️</span>
        </div>
        <div className="rmd-main">
          <div className="rmd-top">
            <span className="rmd-title">Referral program · Savor</span>
            <span className="rmd-live">● Live</span>
          </div>
          <div className="rmd-kpis">
            <div className="rmd-kpi"><span className="block text-[8px] text-muted-foreground mb-0.5">Referred rev.</span><span className="font-display text-[13px] font-bold up">₹8.2L</span></div>
            <div className="rmd-kpi"><span className="block text-[8px] text-muted-foreground mb-0.5">Affiliates</span><span className="font-display text-[13px] font-bold">142</span></div>
            <div className="rmd-kpi"><span className="block text-[8px] text-muted-foreground mb-0.5">Conv. rate</span><span className="font-display text-[13px] font-bold">5.6%</span></div>
            <div className="rmd-kpi"><span className="block text-[8px] text-muted-foreground mb-0.5">Paid out</span><span className="font-display text-[13px] font-bold">₹1.4L</span></div>
          </div>
          <div className="rmd-tbl">
            <div className="rmd-th"><span>Affiliate</span><span>Orders</span><span>Earned</span><span>Status</span></div>
            {affiliates.map((a) => (
              <div key={a.code} className="rmd-row">
                <div className="rmd-aff">
                  <span className="rmd-av">{a.init}</span>
                  <span><b>{a.name}</b><small>{a.code}</small></span>
                </div>
                <span>{a.orders}</span>
                <span>{a.earned}</span>
                <span className={`rmd-pill ${a.status === "pending" ? "wait" : ""}`}>{a.status === "paid" ? "UPI sent" : "Processing"}</span>
              </div>
            ))}
          </div>
          <div className="rmd-bar"><i /></div>
        </div>
      </div>
    </div>
  );
}
