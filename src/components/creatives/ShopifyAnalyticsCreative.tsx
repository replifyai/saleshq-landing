// Merchant analytics — faithful replica of the real SalesHQ dashboard (stat
// tiles + conversion funnel, real proportions from a live store). Funnel bars
// animate in once. Pure CSS, `shan-` prefix.
const css = `
.shan-scene{width:100%;max-width:500px;margin:0 auto}
.shan-win{border:1px solid var(--border);border-radius:16px;background:#0d0d12;box-shadow:0 30px 70px -34px rgba(15,23,42,.5);overflow:hidden;padding:18px}
.shan-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.shan-title{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;color:#f4f4f6}
.shan-ic{width:22px;height:22px;border-radius:6px;background:rgba(99,102,241,.16);color:#a5b4fc;font-size:11px;display:flex;align-items:center;justify-content:center}
.shan-pill{font-size:9px;font-weight:700;color:#34d399;background:rgba(52,211,153,.12);border-radius:99px;padding:3px 9px}
.shan-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px}
.shan-stat{border:1px solid rgba(255,255,255,.08);border-radius:10px;background:rgba(255,255,255,.03);padding:9px 10px}
.shan-sl{font-size:8.5px;color:#8b8fa3;font-weight:500}
.shan-sv{font-size:15px;font-weight:800;color:#f4f4f6;margin-top:3px}
.shan-ss{font-size:8px;color:#34d399;margin-top:2px;font-weight:600}
.shan-fl{font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8b8fa3;margin-bottom:8px}
.shan-row{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.shan-rl{width:86px;text-align:right;font-size:9px;color:#b7b7c2;flex-shrink:0}
.shan-track{flex:1;height:20px;border-radius:5px;background:rgba(255,255,255,.04);overflow:hidden}
.shan-bar{height:100%;border-radius:5px;display:flex;align-items:center;padding-left:8px;font-size:9px;font-weight:700;color:#fff;width:0;animation:shan-grow 1.2s ease-out forwards}
.shan-b1{background:linear-gradient(90deg,#6366f1,#818cf8)}
.shan-b2{background:linear-gradient(90deg,#8b5cf6,#a78bfa);animation-delay:.15s}
.shan-b3{background:linear-gradient(90deg,#a855f7,#c084fc);animation-delay:.3s}
.shan-b4{background:linear-gradient(90deg,#06b6d4,#22d3ee);animation-delay:.45s}
.shan-b5{background:linear-gradient(90deg,#10b981,#34d399);animation-delay:.6s}
@keyframes shan-grow{to{width:var(--w)}}
.shan-pc{width:34px;font-size:8.5px;color:#8b8fa3;text-align:right;flex-shrink:0}
@media (prefers-reduced-motion:reduce){.shan-bar{animation:none;width:var(--w)}}
`;

export default function ShopifyAnalyticsCreative() {
  return (
    <div className="shan-scene">
      <style>{css}</style>
      <div className="shan-win">
        <div className="shan-top">
          <span className="shan-title"><i className="shan-ic">📊</i>Store performance</span>
          <span className="shan-pill">LIVE</span>
        </div>
        <div className="shan-stats">
          <div className="shan-stat"><div className="shan-sl">Orders influenced</div><div className="shan-sv">12</div><div className="shan-ss">44% step conv.</div></div>
          <div className="shan-stat"><div className="shan-sl">Revenue influenced</div><div className="shan-sv">₹2.1L</div><div className="shan-ss">↑ this month</div></div>
          <div className="shan-stat"><div className="shan-sl">Engaged shoppers</div><div className="shan-sv">118</div><div className="shan-ss">74% of popups</div></div>
        </div>
        <div className="shan-fl">Conversion funnel · visitor → order</div>
        <div className="shan-row"><span className="shan-rl">Visitors</span><div className="shan-track"><div className="shan-bar shan-b1" style={{"--w":"100%"} as React.CSSProperties}>218</div></div><span className="shan-pc"></span></div>
        <div className="shan-row"><span className="shan-rl">Popups shown</span><div className="shan-track"><div className="shan-bar shan-b2" style={{"--w":"73%"} as React.CSSProperties}>160</div></div><span className="shan-pc">73%</span></div>
        <div className="shan-row"><span className="shan-rl">Engaged bot</span><div className="shan-track"><div className="shan-bar shan-b3" style={{"--w":"54%"} as React.CSSProperties}>118</div></div><span className="shan-pc">74%</span></div>
        <div className="shan-row"><span className="shan-rl">Bot carts</span><div className="shan-track"><div className="shan-bar shan-b4" style={{"--w":"18%"} as React.CSSProperties}>27</div></div><span className="shan-pc">23%</span></div>
        <div className="shan-row"><span className="shan-rl">Orders</span><div className="shan-track"><div className="shan-bar shan-b5" style={{"--w":"9%"} as React.CSSProperties}>12</div></div><span className="shan-pc">44%</span></div>
      </div>
    </div>
  );
}
