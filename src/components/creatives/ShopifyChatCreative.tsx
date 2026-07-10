// Faithful replica of the real SalesHQ storefront widget (chrome, bubbles,
// product card, comparison table match the shipped theme-extension design) —
// real copy and prices, no wireframe placeholders. Animated as a live
// conversation: question → typing → comparison → product card + chips.
// Pure CSS, `shch-` prefix.
const css = `
.shch-scene{position:relative;width:100%;max-width:400px;margin:0 auto}
.shch-win{border:1px solid var(--border);border-radius:18px;background:#fff;box-shadow:0 34px 80px -36px rgba(15,23,42,.45),0 8px 24px -12px rgba(15,23,42,.18);overflow:hidden;display:flex;flex-direction:column}
.shch-head{display:flex;align-items:center;gap:10px;padding:13px 14px;background:var(--primary)}
.shch-av{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.22);color:#fff;font-size:15px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.shch-ht{color:#fff;font-size:13px;font-weight:700;line-height:1.2}
.shch-hs{display:flex;align-items:center;gap:5px;color:rgba(255,255,255,.85);font-size:9.5px}
.shch-dot{width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 0 2px rgba(74,222,128,.3)}
.shch-x{margin-left:auto;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center}
.shch-body{background:#f6f7f9;padding:13px;display:flex;flex-direction:column;gap:9px;min-height:340px}
.shch-msg{max-width:88%;font-size:11.5px;line-height:1.5;padding:9px 11px;opacity:0;transform:translateY(8px)}
.shch-user{align-self:flex-end;background:var(--primary);color:#fff;border-radius:12px 12px 5px 12px}
.shch-u1{animation:shch-u1 16s infinite .4s}
.shch-u2{animation:shch-u2 16s infinite 6.2s}
.shch-bot{align-self:flex-start;background:#fff;color:#1f2226;border-radius:12px 12px 12px 5px;box-shadow:0 1px 2px rgba(15,23,42,.06)}
.shch-m1{animation:shch-b1 16s infinite 2.6s}
.shch-m2{animation:shch-b2 16s infinite 8s}
@keyframes shch-u1{0%,2%{opacity:0;transform:translateY(8px)}5%,95%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes shch-u2{0%,38%{opacity:0;transform:translateY(8px)}41%,95%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes shch-b1{0%,15%{opacity:0;transform:translateY(8px)}19%,95%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes shch-b2{0%,49%{opacity:0;transform:translateY(8px)}53%,95%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.shch-typ{align-self:flex-start;display:flex;gap:4px;padding:10px 13px;background:#fff;border-radius:12px;box-shadow:0 1px 2px rgba(15,23,42,.06);opacity:0;animation:shch-typ 16s infinite 1.2s}
.shch-typ i{width:5px;height:5px;border-radius:50%;background:var(--primary);opacity:.5;animation:shch-blink 1s infinite}
.shch-typ i:nth-child(2){animation-delay:.15s}.shch-typ i:nth-child(3){animation-delay:.3s}
@keyframes shch-typ{0%,7%{opacity:0}9%,15%{opacity:1}17%,100%{opacity:0}}
@keyframes shch-blink{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-2px)}}
.shch-tbl{width:100%;border-collapse:collapse;font-size:9.5px;margin-top:7px;background:#fff}
.shch-tbl th,.shch-tbl td{border:1px solid #e5e7eb;padding:5px 7px;text-align:left;color:#1f2226}
.shch-tbl th{background:#f6f7f9;font-weight:700}
.shch-tbl td:first-child,.shch-tbl th:first-child{font-weight:600;background:#fafbfc}
.shch-card{align-self:flex-start;width:200px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px -6px rgba(15,23,42,.14);opacity:0;transform:translateY(10px);animation:shch-card 16s infinite 9.6s}
@keyframes shch-card{0%,58%{opacity:0;transform:translateY(10px)}62%,95%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.shch-img{height:86px;background:linear-gradient(140deg,#e8ecf3 0%,#d7dde8 45%,#c6cedd 100%);position:relative}
.shch-img::after{content:"";position:absolute;left:50%;top:50%;width:84px;height:44px;transform:translate(-50%,-50%) rotate(-4deg);border-radius:22px 22px 18px 18px;background:linear-gradient(160deg,#8792a8,#5d6880)}
.shch-best{position:absolute;top:7px;left:7px;background:var(--primary);color:#fff;font-size:7.5px;font-weight:700;padding:2px 7px;border-radius:99px;letter-spacing:.04em}
.shch-cb{padding:9px 10px}
.shch-cn{font-size:11px;font-weight:700;color:#1f2226;line-height:1.3}
.shch-cp{font-size:11.5px;font-weight:700;color:#1f2226;margin-top:3px}
.shch-atc{margin-top:7px;background:#111;color:#fff;font-size:10px;font-weight:600;text-align:center;border-radius:8px;padding:7px 0}
.shch-chips{display:flex;flex-wrap:wrap;gap:5px;opacity:0;animation:shch-card 16s infinite 10.2s}
.shch-chip{border:1px solid var(--border);border-radius:999px;padding:4px 9px;font-size:9.5px;font-weight:600;color:var(--primary);background:#fff}
.shch-foot{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#f6f7f9;border-top:1px solid #eceef1}
.shch-in{flex:1;height:34px;border-radius:17px;background:#fff;border:1px solid #e5e7eb;font-size:10.5px;color:#9aa1ab;display:flex;align-items:center;padding:0 12px}
.shch-send{width:34px;height:34px;border-radius:50%;background:var(--primary);color:#fff;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.shch-pow{text-align:center;font-size:8px;color:#9aa1ab;padding:0 0 8px;background:#f6f7f9}
.shch-pow b{color:#6b7280}
@media (prefers-reduced-motion:reduce){.shch-scene *{animation:none!important}.shch-msg,.shch-card,.shch-chips{opacity:1!important;transform:none!important}.shch-typ{display:none}}
`;

export default function ShopifyChatCreative() {
  return (
    <div className="shch-scene">
      <style>{css}</style>
      <div className="shch-win">
        <div className="shch-head">
          <span className="shch-av">💬</span>
          <div>
            <div className="shch-ht">SalesHQ Assistant</div>
            <div className="shch-hs"><i className="shch-dot" />Always here to help</div>
          </div>
          <span className="shch-x">✕</span>
        </div>
        <div className="shch-body">
          <div className="shch-msg shch-user shch-u1">I get neck pain on long flights</div>
          <div className="shch-typ"><i /><i /><i /></div>
          <div className="shch-msg shch-bot shch-m1">
            For neck pain on long flights I&apos;d go with the <b>Travel Neck</b> — memory foam keeps your neck
            upright even when you doze off. The Cuddle Sleep is softer, better for side-sleeping at home:
            <table className="shch-tbl">
              <thead>
                <tr><th /><th>Travel Neck</th><th>Cuddle Sleep</th></tr>
              </thead>
              <tbody>
                <tr><td>Best for</td><td>Long flights</td><td>Side sleepers</td></tr>
                <tr><td>Support</td><td>Firm, upright</td><td>Soft, plush</td></tr>
                <tr><td>Price</td><td>₹1,699</td><td>₹1,499</td></tr>
              </tbody>
            </table>
          </div>
          <div className="shch-msg shch-user shch-u2">And if it doesn&apos;t help my neck?</div>
          <div className="shch-msg shch-bot shch-m2">No risk — you can return it within 30 days for a full refund, straight from our returns policy. Want it in your cart?</div>
          <div className="shch-card">
            <div className="shch-img"><span className="shch-best">BEST MATCH</span></div>
            <div className="shch-cb">
              <div className="shch-cn">Frido Travel Neck Pillow</div>
              <div className="shch-cp">₹1,699</div>
              <div className="shch-atc">Add to Cart</div>
            </div>
          </div>
          <div className="shch-chips">
            <span className="shch-chip">Add to cart</span>
            <span className="shch-chip">Show colors</span>
            <span className="shch-chip">Return policy?</span>
          </div>
        </div>
        <div className="shch-foot">
          <div className="shch-in">Type your message…</div>
          <div className="shch-send">➤</div>
        </div>
        <div className="shch-pow">Powered by <b>SalesHQ</b></div>
      </div>
    </div>
  );
}
