// Animated chat: user question → typing → comparison table → follow-up. Pure CSS, `shch-` prefix.
const css = `
.shch-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/420;margin:0 auto}
.shch-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex;flex-direction:column}
.shch-head{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid var(--border);background:var(--muted)}
.shch-av{width:28px;height:28px;border-radius:50%;background:hsl(221,83%,53%,.14);color:var(--primary);font-size:13px;display:flex;align-items:center;justify-content:center}
.shch-title{font-size:12px;font-weight:700;color:var(--foreground)}.shch-sub{font-size:9px;color:var(--muted-foreground)}
.shch-body{flex:1;padding:14px;display:flex;flex-direction:column;gap:10px;overflow:hidden}
.shch-msg{max-width:88%;font-size:11.5px;line-height:1.45;padding:9px 11px;border-radius:12px;opacity:0;transform:translateY(8px)}
.shch-user{align-self:flex-end;background:var(--primary);color:var(--primary-foreground);border-radius:12px 12px 4px 12px;animation:shch-u 10s infinite .5s}
.shch-bot{align-self:flex-start;background:var(--muted);color:var(--foreground);border-radius:12px 12px 12px 4px}
.shch-m1{animation:shch-b1 10s infinite 1.2s}
.shch-m2{animation:shch-b2 10s infinite 3.8s}
.shch-m3{animation:shch-b3 10s infinite 6.8s}
@keyframes shch-u{0%,4%{opacity:0;transform:translateY(8px)}8%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes shch-b1{0%,10%{opacity:0;transform:translateY(8px)}14%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes shch-b2{0%,36%{opacity:0;transform:translateY(8px)}40%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes shch-b3{0%,64%{opacity:0;transform:translateY(8px)}68%,92%{opacity:1;transform:translateY(0)}100%{opacity:0}}
.shch-typ{align-self:flex-start;display:flex;gap:4px;padding:10px 14px;background:var(--muted);border-radius:12px;opacity:0;animation:shch-typ 10s infinite 2.2s}
.shch-typ i{width:5px;height:5px;border-radius:50%;background:var(--primary);opacity:.5;animation:shch-blink 1s infinite}
.shch-typ i:nth-child(2){animation-delay:.15s}.shch-typ i:nth-child(3){animation-delay:.3s}
@keyframes shch-typ{0%,18%{opacity:0}22%,32%{opacity:1}36%,100%{opacity:0}}
@keyframes shch-blink{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-2px)}}
.shch-tbl{width:100%;border-collapse:collapse;font-size:10px;margin-top:6px}
.shch-tbl th,.shch-tbl td{border:1px solid var(--border);padding:5px 7px;text-align:left}
.shch-tbl th{background:var(--background);font-weight:600}
.shch-chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
.shch-chip{border:1px solid hsl(221,83%,53%,.35);border-radius:999px;padding:3px 8px;font-size:9px;font-weight:600;color:var(--primary);background:var(--background)}
@media (prefers-reduced-motion:reduce){.shch-scene *{animation:none!important}.shch-msg,.shch-typ{opacity:1!important;transform:none!important}}
`;

export default function ShopifyChatCreative() {
  return (
    <div className="shch-scene">
      <style>{css}</style>
      <div className="shch-win">
        <div className="shch-head">
          <span className="shch-av">✦</span>
          <div>
            <div className="shch-title">Shopping assistant</div>
            <div className="shch-sub">Grounded in your catalog</div>
          </div>
        </div>
        <div className="shch-body">
          <div className="shch-msg shch-user">Compare travel pillows</div>
          <div className="shch-typ"><i /><i /><i /></div>
          <div className="shch-msg shch-bot shch-m1">
            Side-by-side on the two you&apos;ve been viewing:
            <table className="shch-tbl">
              <thead>
                <tr><th /><th>Pillow A</th><th>Pillow B</th></tr>
              </thead>
              <tbody>
                <tr><td>Best for</td><td>Neck support</td><td>Compact pack</td></tr>
                <tr><td>Stock</td><td>In stock</td><td>In stock</td></tr>
              </tbody>
            </table>
          </div>
          <div className="shch-msg shch-bot shch-m2">
            Pillow A wins on support; B packs smaller.
            <div className="shch-chips">
              <span className="shch-chip">Add Pillow A</span>
              <span className="shch-chip">Tell me more</span>
            </div>
          </div>
          <div className="shch-msg shch-bot shch-m3">Track my order? Sign in and I&apos;ll pull up status &amp; tracking.</div>
        </div>
      </div>
    </div>
  );
}
