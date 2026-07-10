// Hero creative — realistic storefront in a browser frame (real product page:
// image, price, variants, ATC) with the real SalesHQ widget sliding in on a
// comparison-intent nudge. Style follows the shipped widget exactly.
// Pure CSS, `shpx-` prefix.
const css = `
.shpx-scene{position:relative;width:100%;max-width:540px;aspect-ratio:540/430;margin:0 auto}
.shpx-store{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:#fff;box-shadow:0 30px 70px -34px rgba(15,23,42,.35);overflow:hidden}
.shpx-chrome{display:flex;align-items:center;gap:6px;height:32px;padding:0 12px;background:#f3f4f6;border-bottom:1px solid #e5e7eb}
.shpx-chrome i{width:8px;height:8px;border-radius:50%;display:block}
.shpx-chrome i:nth-child(1){background:#fca5a5}.shpx-chrome i:nth-child(2){background:#fcd34d}.shpx-chrome i:nth-child(3){background:#86efac}
.shpx-url{font-family:var(--font-jetbrains),monospace;font-size:9.5px;color:#6b7280;margin-left:8px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:2px 10px}
.shpx-body{display:grid;grid-template-columns:1.1fr 1fr;gap:16px;padding:16px 18px}
.shpx-imgwrap{border-radius:12px;background:linear-gradient(140deg,#eef1f6 0%,#dde3ec 50%,#ccd4e2 100%);aspect-ratio:1/1.02;position:relative;overflow:hidden}
.shpx-imgwrap::after{content:"";position:absolute;left:50%;top:52%;width:62%;height:46%;transform:translate(-50%,-50%) rotate(-5deg);border-radius:34px 34px 26px 26px;background:linear-gradient(155deg,#98a3b8 0%,#67718a 60%,#525c74 100%);box-shadow:0 18px 30px -14px rgba(30,41,59,.45)}
.shpx-sale{position:absolute;top:10px;left:10px;background:#dc2626;color:#fff;font-size:8px;font-weight:800;padding:3px 8px;border-radius:99px;letter-spacing:.05em}
.shpx-pt{font-family:var(--font-bricolage),sans-serif;font-size:15px;font-weight:800;color:#111;line-height:1.2}
.shpx-stars{color:#f59e0b;font-size:9px;margin-top:4px;letter-spacing:1px}
.shpx-stars b{color:#6b7280;font-weight:500;margin-left:4px;font-size:8.5px}
.shpx-price{margin-top:8px;font-size:16px;font-weight:800;color:#111}
.shpx-price s{font-size:11px;color:#9ca3af;font-weight:500;margin-left:6px}
.shpx-lbl{font-size:8.5px;font-weight:600;color:#6b7280;margin:10px 0 4px;text-transform:uppercase;letter-spacing:.05em}
.shpx-vars{display:flex;gap:5px}
.shpx-var{border:1px solid #d1d5db;border-radius:7px;padding:4px 9px;font-size:9px;font-weight:600;color:#374151}
.shpx-var.on{border-color:#111;background:#111;color:#fff}
.shpx-atc{margin-top:12px;background:#111;color:#fff;font-size:10.5px;font-weight:700;text-align:center;border-radius:9px;padding:9px 0}
.shpx-buy{margin-top:6px;border:1.5px solid #111;color:#111;font-size:10.5px;font-weight:700;text-align:center;border-radius:9px;padding:8px 0}

.shpx-launch{position:absolute;right:16px;bottom:16px;width:44px;height:44px;border-radius:50%;background:var(--primary);color:#fff;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 26px -10px hsl(221,83%,40%,.6);animation:shpx-hide 11s infinite}
@keyframes shpx-hide{0%,38%{opacity:1;transform:scale(1)}42%,92%{opacity:0;transform:scale(.6)}96%,100%{opacity:1;transform:scale(1)}}
.shpx-badge{position:absolute;top:-3px;right:-3px;width:15px;height:15px;border-radius:50%;background:#dc2626;color:#fff;font-size:8.5px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #fff;opacity:0;animation:shpx-badge 11s infinite}
@keyframes shpx-badge{0%,18%{opacity:0;transform:scale(.4)}22%,38%{opacity:1;transform:scale(1)}42%,100%{opacity:0}}

.shpx-pop{position:absolute;right:14px;bottom:14px;width:250px;border-radius:16px;background:#fff;box-shadow:0 30px 60px -24px rgba(15,23,42,.5);overflow:hidden;opacity:0;transform:translateY(22px) scale(.95);animation:shpx-pop 11s infinite}
@keyframes shpx-pop{0%,40%{opacity:0;transform:translateY(22px) scale(.95)}46%,90%{opacity:1;transform:translateY(0) scale(1)}96%,100%{opacity:0;transform:translateY(14px) scale(.97)}}
.shpx-ph{display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--primary)}
.shpx-pav{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.22);color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center}
.shpx-pn{color:#fff;font-size:11px;font-weight:700}
.shpx-ps{display:flex;align-items:center;gap:4px;color:rgba(255,255,255,.85);font-size:8px}
.shpx-pd{width:5px;height:5px;border-radius:50%;background:#4ade80}
.shpx-pb{padding:10px 11px;background:#f6f7f9}
.shpx-bub{background:#fff;border-radius:11px 11px 11px 4px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:#1f2226;box-shadow:0 1px 2px rgba(15,23,42,.06)}
.shpx-cta{display:flex;gap:5px;margin-top:8px}
.shpx-c1{flex:1;background:var(--primary);color:#fff;font-size:9px;font-weight:700;text-align:center;border-radius:8px;padding:6px 0}
.shpx-c2{flex:1;border:1px solid #d1d5db;color:#374151;font-size:9px;font-weight:600;text-align:center;border-radius:8px;padding:6px 0;background:#fff}
@media (prefers-reduced-motion:reduce){.shpx-scene *{animation:none!important}.shpx-pop{opacity:1!important;transform:none!important}.shpx-launch,.shpx-badge{opacity:0!important}}
`;

export default function ShopifyCreative() {
  return (
    <div className="shpx-scene">
      <style>{css}</style>
      <div className="shpx-store">
        <div className="shpx-chrome">
          <i /><i /><i />
          <span className="shpx-url">yourstore.com/products/ergo-seat-cushion</span>
        </div>
        <div className="shpx-body">
          <div className="shpx-imgwrap"><span className="shpx-sale">-28%</span></div>
          <div>
            <div className="shpx-pt">Ergo Seat Cushion Pro</div>
            <div className="shpx-stars">★★★★★ <b>4.8 (2,314)</b></div>
            <div className="shpx-price">₹2,499 <s>₹3,499</s></div>
            <div className="shpx-lbl">Color</div>
            <div className="shpx-vars"><span className="shpx-var on">Graphite</span><span className="shpx-var">Sand</span></div>
            <div className="shpx-lbl">Size</div>
            <div className="shpx-vars"><span className="shpx-var">Standard</span><span className="shpx-var on">Wide</span></div>
            <div className="shpx-atc">Add to Cart</div>
            <div className="shpx-buy">Buy It Now</div>
          </div>
        </div>
        <div className="shpx-launch">💬<span className="shpx-badge">1</span></div>
        <div className="shpx-pop">
          <div className="shpx-ph">
            <span className="shpx-pav">💬</span>
            <div>
              <div className="shpx-pn">SalesHQ Assistant</div>
              <div className="shpx-ps"><i className="shpx-pd" />Always here to help</div>
            </div>
          </div>
          <div className="shpx-pb">
            <div className="shpx-bub">
              You&apos;ve been comparing this with the Standard cushion — want a quick side-by-side of support, size and price?
              <div className="shpx-cta">
                <span className="shpx-c1">Compare them</span>
                <span className="shpx-c2">No thanks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
