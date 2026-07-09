// Animated customization: a mini chat widget whose brand color, launcher icon
// and header cycle live as "settings" toggle beside it. Pure CSS, `shcz-` prefix.
const css = `
.shcz-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/420;margin:0 auto;display:flex;gap:12px;align-items:stretch}
.shcz-panel{flex:1;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex;flex-direction:column}

.shcz-set{width:44%;padding:14px;display:flex;flex-direction:column;gap:8px;border-right:1px solid var(--border);background:var(--muted)}
.shcz-setlbl{font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-foreground);margin-bottom:2px}
.shcz-row{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--border);border-radius:9px;background:var(--background);padding:7px 9px}
.shcz-rowname{font-size:10px;font-weight:600;color:var(--foreground)}
.shcz-sw{display:flex;gap:4px}
.shcz-dot{width:14px;height:14px;border-radius:50%;border:2px solid transparent}
.shcz-c1{background:#4f46e5}.shcz-c2{background:#0d9488}.shcz-c3{background:#dc2626}
.shcz-dot.shcz-c1{animation:shcz-sel1 9s infinite}.shcz-dot.shcz-c2{animation:shcz-sel2 9s infinite}.shcz-dot.shcz-c3{animation:shcz-sel3 9s infinite}
@keyframes shcz-sel1{0%,30%{border-color:var(--foreground)}33%,100%{border-color:transparent}}
@keyframes shcz-sel2{0%,30%{border-color:transparent}33%,63%{border-color:var(--foreground)}66%,100%{border-color:transparent}}
@keyframes shcz-sel3{0%,63%{border-color:transparent}66%,97%{border-color:var(--foreground)}100%{border-color:transparent}}
.shcz-icons{display:flex;gap:4px}
.shcz-ic{width:18px;height:18px;border-radius:6px;border:1px solid var(--border);font-size:9px;display:flex;align-items:center;justify-content:center;color:var(--muted-foreground)}
.shcz-ic.on{animation:shcz-icon 9s infinite}
@keyframes shcz-icon{0%,45%{background:hsl(221,83%,53%,.14);color:var(--primary);border-color:hsl(221,83%,53%,.4)}50%,95%{background:transparent;color:var(--muted-foreground);border-color:var(--border)}100%{background:hsl(221,83%,53%,.14)}}
.shcz-ic.on2{animation:shcz-icon2 9s infinite}
@keyframes shcz-icon2{0%,45%{background:transparent;color:var(--muted-foreground);border-color:var(--border)}50%,95%{background:hsl(221,83%,53%,.14);color:var(--primary);border-color:hsl(221,83%,53%,.4)}100%{background:transparent}}
.shcz-tog{width:26px;height:14px;border-radius:999px;background:var(--primary);position:relative}
.shcz-tog::after{content:"";position:absolute;top:2px;right:2px;width:10px;height:10px;border-radius:50%;background:#fff}
.shcz-note{font-size:8.5px;line-height:1.5;color:var(--muted-foreground);margin-top:auto}

.shcz-prev{flex:1;position:relative;background:linear-gradient(180deg,var(--background),var(--muted));display:flex;flex-direction:column;justify-content:flex-end;padding:12px}
.shcz-wg{border:1px solid var(--border);border-radius:12px;overflow:hidden;background:var(--background);box-shadow:0 16px 34px -20px rgba(15,23,42,.4)}
.shcz-wghead{display:flex;align-items:center;gap:7px;padding:9px 10px;color:#fff;animation:shcz-brand 9s infinite}
@keyframes shcz-brand{0%,30%{background:#4f46e5}33%,63%{background:#0d9488}66%,97%{background:#dc2626}100%{background:#4f46e5}}
.shcz-wgav{width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.22);display:flex;align-items:center;justify-content:center;font-size:10px}
.shcz-wgtitle{font-size:10px;font-weight:700}.shcz-wgsub{font-size:7.5px;opacity:.85}
.shcz-wgbody{padding:9px 10px;display:flex;flex-direction:column;gap:6px}
.shcz-wgmsg{font-size:9.5px;line-height:1.45;padding:7px 9px;border-radius:10px;background:var(--muted);color:var(--foreground);max-width:92%}
.shcz-launch{position:absolute;right:12px;top:12px;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;box-shadow:0 10px 22px -10px rgba(15,23,42,.5);animation:shcz-brand 9s infinite}
@media (prefers-reduced-motion:reduce){.shcz-scene *{animation:none!important}}
`;

export default function ShopifyCustomizeCreative() {
  return (
    <div className="shcz-scene">
      <style>{css}</style>
      <div className="shcz-panel" style={{ flexDirection: "row" }}>
        <div className="shcz-set">
          <div className="shcz-setlbl">Widget settings</div>
          <div className="shcz-row">
            <span className="shcz-rowname">Brand color</span>
            <span className="shcz-sw">
              <i className="shcz-dot shcz-c1" />
              <i className="shcz-dot shcz-c2" />
              <i className="shcz-dot shcz-c3" />
            </span>
          </div>
          <div className="shcz-row">
            <span className="shcz-rowname">Launcher icon</span>
            <span className="shcz-icons">
              <i className="shcz-ic on">💬</i>
              <i className="shcz-ic on2">✦</i>
              <i className="shcz-ic">🛍</i>
            </span>
          </div>
          <div className="shcz-row">
            <span className="shcz-rowname">Auto-match theme</span>
            <span className="shcz-tog" />
          </div>
          <div className="shcz-row">
            <span className="shcz-rowname">Proactive nudges</span>
            <span className="shcz-tog" />
          </div>
          <p className="shcz-note">Header, welcome message, position, timing, sound &amp; badge — all merchant-tunable, live in ~1 minute.</p>
        </div>
        <div className="shcz-prev">
          <span className="shcz-launch">💬</span>
          <div className="shcz-wg">
            <div className="shcz-wghead">
              <span className="shcz-wgav">💬</span>
              <div>
                <div className="shcz-wgtitle">Frido Assistant</div>
                <div className="shcz-wgsub">Always here to help</div>
              </div>
            </div>
            <div className="shcz-wgbody">
              <div className="shcz-wgmsg">Hi! 👋 Looking for the right cushion? I can compare, check stock, and answer sizing questions.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
