// WhatsApp referral flow with link preview, timestamps, read receipts. `rwa-` prefix.
const css = `
.rwa-scene{position:relative;width:100%;max-width:380px;aspect-ratio:380/480;margin:0 auto}
.rwa-phone{position:absolute;inset:0;border:3px solid hsl(240,6%,22%);border-radius:28px;background:#111;box-shadow:0 40px 80px -36px rgba(15,23,42,.45);overflow:hidden;display:flex;flex-direction:column}
.rwa-notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:90px;height:22px;background:#111;border-radius:0 0 12px 12px;z-index:3}
.rwa-status{height:28px;padding:8px 16px 0;display:flex;justify-content:space-between;font-size:9px;color:rgba(255,255,255,.8);font-weight:600}
.rwa-head{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#128c3e;color:#fff;margin-top:4px}
.rwa-head-av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#fff3,#fff1);font-size:13px;display:flex;align-items:center;justify-content:center;font-weight:700;border:1px solid rgba(255,255,255,.3)}
.rwa-head-info{flex:1}.rwa-head-info b{display:block;font-size:13px}.rwa-head-info span{font-size:9px;opacity:.85}
.rwa-head-icons{font-size:14px;opacity:.9}
.rwa-chat{flex:1;padding:10px 10px 14px;display:flex;flex-direction:column;gap:6px;background:#0b141a url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h30v30H0zm30 30h30v30H30z'/%3E%3C/g%3E%3C/svg%3E");overflow:hidden}
.rwa-date{align-self:center;background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);font-size:9px;padding:4px 10px;border-radius:6px;margin-bottom:4px}
.rwa-msg{max-width:88%;font-size:11px;line-height:1.45;opacity:0;transform:translateY(8px) scale(.98)}
.rwa-out{align-self:flex-end;background:#005c4b;color:#e9edef;border-radius:10px 10px 2px 10px;padding:6px 8px 4px;animation:rwa-m1 14s infinite 1s}
.rwa-in{align-self:flex-start;background:#202c33;color:#e9edef;border-radius:10px 10px 10px 2px;padding:6px 8px 4px}
.rwa-m2{animation:rwa-m2 14s infinite 4s}.rwa-m3{animation:rwa-m3 14s infinite 7s}.rwa-m4{animation:rwa-m4 14s infinite 9.5s}.rwa-m5{animation:rwa-m5 14s infinite 11.5s}
@keyframes rwa-m1{0%,4%{opacity:0;transform:translateY(8px) scale(.98)}8%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
@keyframes rwa-m2{0%,26%{opacity:0;transform:translateY(8px) scale(.98)}30%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
@keyframes rwa-m3{0%,48%{opacity:0;transform:translateY(8px) scale(.98)}52%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
@keyframes rwa-m4{0%,64%{opacity:0;transform:translateY(8px) scale(.98)}68%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
@keyframes rwa-m5{0%,78%{opacity:0;transform:translateY(8px) scale(.98)}82%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
.rwa-meta{text-align:right;font-size:8px;color:rgba(255,255,255,.45);margin-top:2px;display:flex;align-items:center;justify-content:flex-end;gap:3px}
.rwa-ticks{color:#53bdeb;font-size:10px;letter-spacing:-2px}
.rwa-preview{border-left:3px solid #25d366;background:rgba(0,0,0,.15);border-radius:4px;padding:6px 8px;margin-top:6px}
.rwa-preview b{display:block;font-size:10px;color:#53bdeb;margin-bottom:2px}
.rwa-preview span{font-size:9px;color:rgba(255,255,255,.55);line-height:1.3}
.rwa-preview-img{height:48px;border-radius:4px;margin-top:4px;background:linear-gradient(135deg,hsl(221,83%,53%,.4),hsl(221,83%,53%,.15))}
.rwa-link{color:#53bdeb;text-decoration:none;font-weight:500}
.rwa-reward{background:#064e3b!important;border:1px solid #059669}
.rwa-reward .rwa-meta{color:rgba(255,255,255,.5)}
.rwa-input{margin-top:auto;border-top:1px solid #222d34;padding:8px 10px;background:#202c33;display:flex;align-items:center;gap:8px}
.rwa-input span{flex:1;background:#2a3942;border-radius:20px;padding:8px 14px;font-size:10px;color:rgba(255,255,255,.4)}
.rwa-send{width:32px;height:32px;border-radius:50%;background:#128c3e;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px}
@media (prefers-reduced-motion:reduce){.rwa-scene *{animation:none!important}.rwa-msg{opacity:1!important;transform:none!important}}
`;

export default function ReferralWhatsAppCreative() {
  return (
    <div className="rwa-scene">
      <style>{css}</style>
      <div className="rwa-phone">
        <div className="rwa-notch" />
        <div className="rwa-status"><span>9:41</span><span>●●● ▮▮▮</span></div>
        <div className="rwa-head">
          <span className="rwa-head-av">S</span>
          <div className="rwa-head-info">
            <b>Savor Store Referrals</b>
            <span>Business account · online</span>
          </div>
          <span className="rwa-head-icons">📹 📞</span>
        </div>
        <div className="rwa-chat">
          <div className="rwa-date">Today</div>
          <div className="rwa-msg rwa-out rwa-m1">
            Hey! Just ordered from Savor — use my link for 15% off 🎁
            <div className="rwa-preview">
              <b>savor.store</b>
              <span>Priya&apos;s picks · Clean skincare for Indian skin</span>
              <div className="rwa-preview-img" />
            </div>
            <span className="rwa-link">savor.store/r/priya-k</span>
            <div className="rwa-meta">9:38 AM <span className="rwa-ticks">✓✓</span></div>
          </div>
          <div className="rwa-msg rwa-in rwa-m2">
            Thanks! Ordering the serum now 👍
            <div className="rwa-meta">9:41 AM</div>
          </div>
          <div className="rwa-msg rwa-in rwa-m3">
            Done — got 15% off with PRIYA20 ✓
            <div className="rwa-meta">9:52 AM</div>
          </div>
          <div className="rwa-msg rwa-out rwa-m4">
            Order #4821 confirmed on our end 🎉
            <div className="rwa-meta">10:01 AM <span className="rwa-ticks">✓✓</span></div>
          </div>
          <div className="rwa-msg rwa-out rwa-reward rwa-m5">
            🎉 You earned ₹250! UPI sent to priya.k@okhdfcbank
            <br />
            <span style={{ fontSize: 9, opacity: 0.8 }}>TDS ₹25 deducted · Certificate ready</span>
            <div className="rwa-meta">10:02 AM <span className="rwa-ticks">✓✓</span></div>
          </div>
        </div>
        <div className="rwa-input">
          <span>Type a message</span>
          <div className="rwa-send">➤</div>
        </div>
      </div>
    </div>
  );
}
