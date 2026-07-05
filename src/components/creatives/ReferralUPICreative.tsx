// Phone lock screen with realistic UPI payment notification. `rup-` prefix.
const css = `
.rup-scene{position:relative;width:100%;max-width:340px;aspect-ratio:340/420;margin:0 auto}
.rup-phone{position:absolute;inset:0;border:3px solid hsl(240,6%,20%);border-radius:32px;background:linear-gradient(180deg,#1a1a2e 0%,#16213e 100%);box-shadow:0 40px 80px -36px rgba(15,23,42,.5);overflow:hidden}
.rup-notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:100px;height:24px;background:hsl(240,6%,20%);border-radius:0 0 14px 14px;z-index:2}
.rup-status{padding:36px 20px 12px;display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,.7);font-weight:600}
.rup-time{font-size:48px;font-weight:200;color:#fff;letter-spacing:-2px;padding:0 20px 8px;font-family:var(--font-bricolage),sans-serif}
.rup-date{font-size:11px;color:rgba(255,255,255,.55);padding:0 20px 20px}
.rup-notif{margin:0 12px;border-radius:16px;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);padding:12px;box-shadow:0 20px 40px -16px rgba(0,0,0,.4);opacity:0;transform:translateY(-20px) scale(.95);animation:rup-drop 8s infinite 1s}
@keyframes rup-drop{0%,8%{opacity:0;transform:translateY(-20px) scale(.95)}14%,85%{opacity:1;transform:translateY(0) scale(1)}92%,100%{opacity:0;transform:translateY(-10px) scale(.98)}}
.rup-nhead{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.rup-gpay{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#4285f4,#34a853,#fbbc05,#ea4335);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700}
.rup-nmeta{flex:1}
.rup-nmeta b{display:block;font-size:11px;color:#111;font-weight:600}
.rup-nmeta span{font-size:9px;color:#666}
.rup-namt{font-family:var(--font-bricolage),sans-serif;font-size:28px;font-weight:700;color:#128c3e;text-align:center;margin:8px 0 4px;animation:rup-amt 8s infinite 1.4s}
@keyframes rup-amt{0%,12%{opacity:0;transform:scale(.9)}16%,85%{opacity:1;transform:scale(1)}92%,100%{opacity:0}}
.rup-ndetail{font-size:10px;color:#444;text-align:center;line-height:1.5;margin-bottom:8px}
.rup-ndetail b{color:#111}
.rup-nfoot{display:flex;justify-content:space-between;border-top:1px solid #eee;padding-top:8px;font-size:9px;color:#888}
.rup-nfoot span:last-child{color:#128c3e;font-weight:600}
.rup-stack{margin:12px;display:flex;flex-direction:column;gap:8px}
.rup-mini{border-radius:12px;background:rgba(255,255,255,.12);padding:10px 12px;font-size:10px;color:rgba(255,255,255,.7);opacity:0;animation:rup-mini 8s infinite}
.rup-mini:nth-child(1){animation-delay:2.5s}
.rup-mini:nth-child(2){animation-delay:3s}
@keyframes rup-mini{0%,30%{opacity:0;transform:translateY(4px)}36%,80%{opacity:1;transform:translateY(0)}88%,100%{opacity:0}}
.rup-mini b{color:#fff;display:block;font-size:11px;margin-bottom:2px}
@media (prefers-reduced-motion:reduce){.rup-scene *{animation:none!important}.rup-notif,.rup-namt,.rup-mini{opacity:1!important;transform:none!important}}
`;

export default function ReferralUPICreative() {
  return (
    <div className="rup-scene">
      <style>{css}</style>
      <div className="rup-phone">
        <div className="rup-notch" />
        <div className="rup-status"><span>9:41</span><span>●●● ▮▮▮ 100%</span></div>
        <div className="rup-time">9:41</div>
        <div className="rup-date">Sunday, 5 July</div>
        <div className="rup-notif">
          <div className="rup-nhead">
            <div className="rup-gpay">G</div>
            <div className="rup-nmeta">
              <b>Google Pay</b>
              <span>now</span>
            </div>
          </div>
          <div className="rup-namt">+ ₹250.00</div>
          <div className="rup-ndetail">
            Received from <b>Savor Store Pvt Ltd</b>
            <br />
            Referral reward · Order #4821 · TDS ₹25 deducted
          </div>
          <div className="rup-nfoot">
            <span>UPI ID: priya.k@okhdfcbank</span>
            <span>✓ Success</span>
          </div>
        </div>
        <div className="rup-stack">
          <div className="rup-mini"><b>TDS certificate ready</b>Download from affiliate dashboard</div>
          <div className="rup-mini"><b>Total earned this month</b>₹11,750 · 47 conversions</div>
        </div>
      </div>
    </div>
  );
}
