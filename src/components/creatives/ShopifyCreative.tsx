// Animated abstract: Shopify storefront → shopper clicks multiple product
// intents → intent chips stack + meter fills → assistant auto-popup slides in.
// Pure CSS animation (no JS), namespaced with `shpx-` to avoid global clashes.
const css = `
.shpx-scene{position:relative;width:100%;max-width:512px;aspect-ratio:512/412;margin:0 auto}
.shpx-store{position:absolute;inset:0 96px 24px 0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden}
.shpx-chrome{display:flex;align-items:center;gap:6px;height:34px;padding:0 12px;background:var(--muted);border-bottom:1px solid var(--border)}
.shpx-chrome i{width:8px;height:8px;border-radius:50%;background:var(--border);display:block}
.shpx-url{font-family:var(--font-jetbrains),monospace;font-size:10px;color:var(--muted-foreground);margin-left:8px}
.shpx-body{padding:14px}
.shpx-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.shpx-brand{font-family:var(--font-bricolage),sans-serif;font-weight:700;font-size:14px;color:var(--foreground)}
.shpx-nav{display:flex;gap:10px}.shpx-nav span{width:26px;height:6px;border-radius:3px;background:var(--muted)}
.shpx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.shpx-tile{border:1px solid var(--border);border-radius:10px;padding:8px;position:relative}
.shpx-thumb{height:52px;border-radius:7px;background:linear-gradient(135deg,hsl(221,83%,53%,.14),hsl(221,83%,53%,.04));margin-bottom:7px}
.shpx-pn{height:6px;width:70%;border-radius:3px;background:var(--muted);margin-bottom:5px}
.shpx-pp{height:6px;width:40%;border-radius:3px;background:hsl(240,6%,86%)}
.shpx-tile::after{content:"";position:absolute;inset:-1px;border-radius:11px;border:2px solid var(--primary);opacity:0;transform:scale(.9)}
.shpx-tile.shpx-t1::after{animation:shpx-ring 9s infinite .8s}
.shpx-tile.shpx-t2::after{animation:shpx-ring 9s infinite 2.3s}
.shpx-tile.shpx-t3::after{animation:shpx-ring 9s infinite 3.8s}
@keyframes shpx-ring{0%,4%{opacity:0;transform:scale(.85)}8%{opacity:1;transform:scale(1)}18%{opacity:1;transform:scale(1)}30%,100%{opacity:0;transform:scale(1)}}
.shpx-cursor{position:absolute;width:20px;height:20px;z-index:6;filter:drop-shadow(0 2px 3px rgba(0,0,0,.25));animation:shpx-move 9s infinite}
.shpx-cursor svg{width:100%;height:100%}
@keyframes shpx-move{0%{left:8%;top:60%;transform:scale(1)}8%{left:14%;top:36%}10%{transform:scale(.82)}12%{transform:scale(1)}24%{left:41%;top:36%}26%{transform:scale(.82)}28%{transform:scale(1)}40%{left:66%;top:36%}42%{transform:scale(.82)}44%{transform:scale(1)}58%{left:59%;top:73%}100%{left:59%;top:78%}}
.shpx-rail{position:absolute;right:0;top:40px;width:84px;display:flex;flex-direction:column;gap:8px}
.shpx-rl{font-family:var(--font-jetbrains),monospace;font-size:8.5px;letter-spacing:.06em;color:var(--muted-foreground);text-transform:uppercase}
.shpx-chip{border:1px solid var(--border);background:var(--background);border-radius:999px;padding:4px 8px;font-size:10px;font-weight:600;color:var(--primary);display:flex;align-items:center;gap:5px;opacity:0;transform:translateX(10px)}
.shpx-chip .shpx-d{width:5px;height:5px;border-radius:50%;background:var(--primary)}
.shpx-chip.shpx-c1{animation:shpx-chip 9s infinite 1.1s}
.shpx-chip.shpx-c2{animation:shpx-chip 9s infinite 2.6s}
.shpx-chip.shpx-c3{animation:shpx-chip 9s infinite 4.1s}
@keyframes shpx-chip{0%,8%{opacity:0;transform:translateX(10px)}14%{opacity:1;transform:translateX(0)}70%{opacity:1;transform:translateX(0)}80%,100%{opacity:0;transform:translateX(10px)}}
.shpx-meter{height:6px;border-radius:3px;background:var(--muted);overflow:hidden;margin-top:2px}
.shpx-meter i{display:block;height:100%;width:0;background:var(--primary);border-radius:3px;animation:shpx-fill 9s infinite}
@keyframes shpx-fill{0%,8%{width:8%}20%{width:38%}36%{width:70%}48%{width:100%}72%{width:100%}82%,100%{width:8%}}
.shpx-pop{position:absolute;right:78px;bottom:8px;width:230px;border:1px solid var(--border);border-radius:14px;background:var(--background);box-shadow:0 26px 50px -22px rgba(15,23,42,.4);overflow:hidden;opacity:0;transform:translateY(18px) scale(.96);animation:shpx-pop 9s infinite}
@keyframes shpx-pop{0%,52%{opacity:0;transform:translateY(18px) scale(.96)}60%{opacity:1;transform:translateY(0) scale(1)}90%{opacity:1;transform:translateY(0) scale(1)}96%,100%{opacity:0;transform:translateY(10px) scale(.98)}}
.shpx-ph{display:flex;align-items:center;gap:7px;padding:9px 11px;border-bottom:1px solid var(--border);background:var(--muted)}
.shpx-pav{width:20px;height:20px;border-radius:50%;background:hsl(221,83%,53%,.14);color:var(--primary);display:flex;align-items:center;justify-content:center}
.shpx-pav svg{width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:2}
.shpx-pt{font-size:11px;font-weight:700;color:var(--foreground)}
.shpx-pb{padding:11px}
.shpx-bubble{background:var(--muted);border-radius:11px 11px 11px 3px;padding:8px 10px;font-size:11px;line-height:1.4;color:var(--foreground)}
.shpx-typing{display:inline-flex;gap:3px;margin-top:8px;padding-left:2px}
.shpx-typing i{width:5px;height:5px;border-radius:50%;background:var(--primary);opacity:.5;animation:shpx-blink 1s infinite}
.shpx-typing i:nth-child(2){animation-delay:.15s}.shpx-typing i:nth-child(3){animation-delay:.3s}
@keyframes shpx-blink{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-2px)}}
@media (prefers-reduced-motion:reduce){.shpx-scene *{animation:none!important}.shpx-pop,.shpx-chip,.shpx-tile::after{opacity:1!important;transform:none!important}.shpx-meter i{width:100%!important}}
`;

export default function ShopifyCreative() {
  return (
    <div className="shpx-scene">
      <style>{css}</style>
      <div className="shpx-store">
        <div className="shpx-chrome"><i /><i /><i /><span className="shpx-url">savorstore.myshopify.com</span></div>
        <div className="shpx-body">
          <div className="shpx-head"><span className="shpx-brand">Savor</span><span className="shpx-nav"><span /><span /><span /></span></div>
          <div className="shpx-grid">
            <div className="shpx-tile shpx-t1"><div className="shpx-thumb" /><div className="shpx-pn" /><div className="shpx-pp" /></div>
            <div className="shpx-tile"><div className="shpx-thumb" /><div className="shpx-pn" /><div className="shpx-pp" /></div>
            <div className="shpx-tile shpx-t2"><div className="shpx-thumb" /><div className="shpx-pn" /><div className="shpx-pp" /></div>
            <div className="shpx-tile"><div className="shpx-thumb" /><div className="shpx-pn" /><div className="shpx-pp" /></div>
            <div className="shpx-tile shpx-t3"><div className="shpx-thumb" /><div className="shpx-pn" /><div className="shpx-pp" /></div>
            <div className="shpx-tile"><div className="shpx-thumb" /><div className="shpx-pn" /><div className="shpx-pp" /></div>
          </div>
        </div>
      </div>

      <div className="shpx-rail">
        <span className="shpx-rl">Intent</span>
        <div className="shpx-chip shpx-c1"><span className="shpx-d" />Viewed</div>
        <div className="shpx-chip shpx-c2"><span className="shpx-d" />Compared</div>
        <div className="shpx-chip shpx-c3"><span className="shpx-d" />Budget ₹1.5k</div>
        <div className="shpx-meter"><i /></div>
      </div>

      <div className="shpx-cursor">
        <svg viewBox="0 0 24 24" fill="#fff" stroke="hsl(240,10%,20%)" strokeWidth="1.5"><path d="M4 3l7 17 2.5-6.5L20 11 4 3z" /></svg>
      </div>

      <div className="shpx-pop">
        <div className="shpx-ph"><span className="shpx-pav"><svg viewBox="0 0 24 24"><path d="m12 3 1.9 5.8L20 10l-5.8 1.9L12 18l-1.9-5.8L4 10z" /></svg></span><span className="shpx-pt">Shopping assistant</span></div>
        <div className="shpx-pb">
          <div className="shpx-bubble">Comparing travel pillows under ₹1.5k? I found 2 that pack small — want to see them side by side?</div>
          <div className="shpx-typing"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}
