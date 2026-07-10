// Intent triggers — 2×2 grid; each card carries a mini real-UI scene of the
// friction moment (dwell timer, comparison ping-pong, idle cart, search
// retries) above the assistant's nudge bubble. Pure CSS, `shit-` prefix.
const css = `
.shit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;width:100%;max-width:960px;margin:0 auto}
@media (max-width:640px){.shit-grid{grid-template-columns:1fr}}
.shit-card{border:1px solid var(--border);border-radius:16px;background:var(--background);padding:16px;display:flex;flex-direction:column;box-shadow:0 18px 40px -30px rgba(15,23,42,.25);transition:transform .2s,box-shadow .2s;opacity:0;transform:translateY(10px);animation:shit-in .5s ease-out forwards}
.shit-card:nth-child(1){animation-delay:.05s}.shit-card:nth-child(2){animation-delay:.15s}
.shit-card:nth-child(3){animation-delay:.25s}.shit-card:nth-child(4){animation-delay:.35s}
@keyframes shit-in{to{opacity:1;transform:translateY(0)}}
.shit-card:hover{transform:translateY(-3px);box-shadow:0 24px 48px -28px rgba(15,23,42,.35)}
.shit-k{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-jetbrains),monospace;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:8px}
.shit-k i{width:5px;height:5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px hsl(221,83%,53%,.15)}
.shit-h{font-family:var(--font-bricolage),sans-serif;font-size:15px;font-weight:700;color:var(--foreground);margin-bottom:4px;line-height:1.3}
.shit-d{font-size:12px;line-height:1.5;color:var(--muted-foreground);margin-bottom:11px}

/* --- mini scene frame (shared) --- */
.shit-scene{border:1px solid var(--border);border-radius:11px;background:#fff;overflow:hidden;margin-bottom:10px}
.shit-bar{display:flex;align-items:center;gap:4px;height:18px;padding:0 8px;background:#f3f4f6;border-bottom:1px solid #e9eaee}
.shit-bar i{width:5px;height:5px;border-radius:50%;background:#d6d9df;display:block}
.shit-view{position:relative;height:88px;padding:9px 10px;display:flex;gap:9px}

/* scene 1 — dwell: product + ticking timer */
.shit-ph1{width:56px;height:56px;border-radius:8px;background:linear-gradient(140deg,#eef1f6,#ccd4e2);position:relative;flex-shrink:0}
.shit-ph1::after{content:"";position:absolute;left:50%;top:52%;width:60%;height:44%;transform:translate(-50%,-50%) rotate(-5deg);border-radius:12px;background:linear-gradient(155deg,#98a3b8,#525c74)}
.shit-t1{font-size:9.5px;font-weight:700;color:#111}
.shit-t2{font-size:8.5px;color:#6b7280;margin-top:2px}
.shit-t3{font-size:9.5px;font-weight:800;color:#111;margin-top:4px}
.shit-timer{position:absolute;right:9px;top:9px;display:flex;align-items:center;gap:4px;border:1px solid hsl(221,83%,53%,.35);background:hsl(221,83%,53%,.07);border-radius:99px;padding:2.5px 8px;font-family:var(--font-jetbrains),monospace;font-size:8.5px;font-weight:700;color:var(--primary)}
.shit-timer b{display:inline-block;width:20px}
.shit-timer b::after{content:"0:04";animation:shit-tick 8s steps(1) infinite}
@keyframes shit-tick{0%{content:"0:04"}25%{content:"0:07"}50%{content:"0:10"}75%{content:"0:13"}}
.shit-pulse{width:5px;height:5px;border-radius:50%;background:var(--primary);animation:shit-pl 1.2s infinite}
@keyframes shit-pl{0%,100%{opacity:1}50%{opacity:.3}}

/* scene 2 — comparison ping-pong between two tabs */
.shit-two{display:flex;gap:8px;width:100%;align-items:center}
.shit-mini{flex:1;border:1.5px solid #e9eaee;border-radius:9px;padding:7px;position:relative}
.shit-mini .shit-ph2{height:32px;border-radius:6px;background:linear-gradient(140deg,#eef1f6,#d3dae5);margin-bottom:5px;position:relative}
.shit-mini .shit-ph2::after{content:"";position:absolute;left:50%;top:50%;width:55%;height:52%;transform:translate(-50%,-50%) rotate(-4deg);border-radius:8px;background:linear-gradient(155deg,#9aa5ba,#5d6880)}
.shit-mn{font-size:8px;font-weight:700;color:#111}
.shit-mp{font-size:8px;color:#6b7280}
.shit-mini.shit-a{animation:shit-focus 4s infinite}
.shit-mini.shit-b{animation:shit-focus 4s infinite 2s}
@keyframes shit-focus{0%,45%{border-color:var(--primary);box-shadow:0 0 0 3px hsl(221,83%,53%,.12)}50%,95%{border-color:#e9eaee;box-shadow:none}100%{border-color:var(--primary)}}
.shit-arr{font-size:12px;color:var(--primary);flex-shrink:0;animation:shit-swap 4s infinite}
@keyframes shit-swap{0%,45%{transform:scaleX(1)}50%,95%{transform:scaleX(-1)}100%{transform:scaleX(1)}}

/* scene 3 — idle cart drawer */
.shit-cart{width:100%;display:flex;flex-direction:column;gap:6px}
.shit-crow{display:flex;align-items:center;gap:7px}
.shit-cimg{width:26px;height:26px;border-radius:6px;background:linear-gradient(140deg,#eef1f6,#ccd4e2);flex-shrink:0}
.shit-cn{font-size:8.5px;font-weight:700;color:#111}
.shit-cp{font-size:8px;color:#6b7280}
.shit-cq{margin-left:auto;font-size:8px;color:#374151;border:1px solid #e5e7eb;border-radius:5px;padding:1.5px 6px}
.shit-idle{display:flex;align-items:center;gap:5px;font-family:var(--font-jetbrains),monospace;font-size:8px;font-weight:700;color:#b45309;background:#fffbeb;border:1px solid #fde68a;border-radius:99px;padding:2.5px 8px;width:fit-content;animation:shit-idlep 2.4s infinite}
@keyframes shit-idlep{0%,100%{opacity:1}50%{opacity:.55}}
.shit-co{margin-top:1px;background:#111;color:#fff;font-size:8.5px;font-weight:700;text-align:center;border-radius:6px;padding:5px 0;opacity:.35}

/* scene 4 — search retries */
.shit-srch{width:100%;display:flex;flex-direction:column;gap:6px}
.shit-sbar{display:flex;align-items:center;gap:6px;border:1.5px solid #e5e7eb;border-radius:8px;padding:6px 9px;font-size:9px;color:#111}
.shit-sq{font-weight:600;display:inline-block}
.shit-sq::after{content:"pillow for neck pain";animation:shit-q 7.5s steps(1) infinite}
@keyframes shit-q{0%{content:"pillow for neck pain"}33%{content:"cervical pillow firm"}66%{content:"best pillow side sleeper"}}
.shit-scur{display:inline-block;width:1px;height:10px;background:#111;animation:shit-cur .9s steps(1) infinite;vertical-align:middle}
@keyframes shit-cur{50%{opacity:0}}
.shit-tries{display:flex;gap:4px}
.shit-try{font-family:var(--font-jetbrains),monospace;font-size:7.5px;font-weight:700;color:#6b7280;background:#f3f4f6;border-radius:99px;padding:2px 7px}
.shit-try.hot{color:#b45309;background:#fffbeb;border:1px solid #fde68a}

/* nudge bubble (shared) */
.shit-pop{margin-top:auto;border:1px solid var(--border);border-radius:12px;background:var(--muted);padding:9px}
.shit-ph{display:flex;align-items:center;gap:6px;margin-bottom:6px}
.shit-av{width:17px;height:17px;border-radius:50%;background:var(--primary);color:#fff;font-size:8px;display:flex;align-items:center;justify-content:center}
.shit-pt{font-size:9.5px;font-weight:700;color:var(--foreground)}
.shit-live{margin-left:auto;display:inline-flex;align-items:center;gap:4px;font-size:8px;font-weight:700;color:hsl(152,60%,36%)}
.shit-live i{width:4.5px;height:4.5px;border-radius:50%;background:hsl(152,60%,42%);animation:shit-pl 2s infinite}
.shit-bub{background:var(--background);border-radius:9px 9px 9px 3px;padding:7px 9px;font-size:10.5px;line-height:1.45;color:var(--foreground)}
@media (prefers-reduced-motion:reduce){.shit-grid *{animation:none!important}.shit-card{opacity:1;transform:none}.shit-timer b::after{content:"0:10"}.shit-sq::after{content:"pillow for neck pain"}}
`;

export default function ShopifyIntentTriggersCreative() {
  return (
    <div>
      <style>{css}</style>
      <div className="shit-grid">
        {/* 1 — Product dwell */}
        <div className="shit-card">
          <span className="shit-k"><i />Product dwell</span>
          <div className="shit-h">Helpful details when shoppers linger</div>
          <div className="shit-d">10+ seconds on a product page → specs, variants, and why it&apos;s a fit.</div>
          <div className="shit-scene">
            <div className="shit-bar"><i /><i /><i /></div>
            <div className="shit-view">
              <div className="shit-ph1" />
              <div>
                <div className="shit-t1">Frido Travel Neck Pillow</div>
                <div className="shit-t2">★★★★★ 4.8 · Wine / Grey</div>
                <div className="shit-t3">₹1,699</div>
              </div>
              <span className="shit-timer"><i className="shit-pulse" />dwell <b /></span>
            </div>
          </div>
          <div className="shit-pop">
            <div className="shit-ph"><span className="shit-av">💬</span><span className="shit-pt">SalesHQ assistant</span><span className="shit-live"><i />LIVE</span></div>
            <div className="shit-bub">You&apos;ve been looking at this travel pillow — in stock in both colors. Want key specs?</div>
          </div>
        </div>

        {/* 2 — Comparison loop */}
        <div className="shit-card">
          <span className="shit-k"><i />Comparison loop</span>
          <div className="shit-h">Side-by-side when they&apos;re torn</div>
          <div className="shit-d">Ping-pong between two product pages → instant in-chat comparison table.</div>
          <div className="shit-scene">
            <div className="shit-bar"><i /><i /><i /></div>
            <div className="shit-view">
              <div className="shit-two">
                <div className="shit-mini shit-a">
                  <div className="shit-ph2" />
                  <div className="shit-mn">Cuddle Sleep</div>
                  <div className="shit-mp">₹1,499</div>
                </div>
                <span className="shit-arr">⇄</span>
                <div className="shit-mini shit-b">
                  <div className="shit-ph2" />
                  <div className="shit-mn">Travel Neck</div>
                  <div className="shit-mp">₹1,699</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shit-pop">
            <div className="shit-ph"><span className="shit-av">💬</span><span className="shit-pt">SalesHQ assistant</span><span className="shit-live"><i />LIVE</span></div>
            <div className="shit-bub">Side-by-side on the two pillows you&apos;ve been comparing — want my pick?</div>
          </div>
        </div>

        {/* 3 — Cart recovery */}
        <div className="shit-card">
          <span className="shit-k"><i />Cart recovery</span>
          <div className="shit-h">Reassurance for hesitant buyers</div>
          <div className="shit-d">Idle cart or exit intent → gentle nudge with policy answers, not spam.</div>
          <div className="shit-scene">
            <div className="shit-bar"><i /><i /><i /></div>
            <div className="shit-view">
              <div className="shit-cart">
                <div className="shit-crow">
                  <div className="shit-cimg" />
                  <div>
                    <div className="shit-cn">Ergo Seat Cushion Pro</div>
                    <div className="shit-cp">₹2,499 · Graphite / Wide</div>
                  </div>
                  <span className="shit-cq">Qty 1</span>
                </div>
                <span className="shit-idle">⏳ idle 2:41 — no checkout</span>
                <div className="shit-co">Checkout</div>
              </div>
            </div>
          </div>
          <div className="shit-pop">
            <div className="shit-ph"><span className="shit-av">💬</span><span className="shit-pt">SalesHQ assistant</span><span className="shit-live"><i />LIVE</span></div>
            <div className="shit-bub">Still deciding? Happy to help with sizing or a matching accessory.</div>
          </div>
        </div>

        {/* 4 — Search refinement */}
        <div className="shit-card">
          <span className="shit-k"><i />Search refinement</span>
          <div className="shit-h">Narrowing when search stalls</div>
          <div className="shit-d">Repeated searches → in-stock picks and one question to narrow intent.</div>
          <div className="shit-scene">
            <div className="shit-bar"><i /><i /><i /></div>
            <div className="shit-view">
              <div className="shit-srch">
                <div className="shit-sbar">🔍 <span className="shit-sq" /><span className="shit-scur" /></div>
                <div className="shit-tries">
                  <span className="shit-try">search #1</span>
                  <span className="shit-try">search #2</span>
                  <span className="shit-try hot">search #3 — no click</span>
                </div>
              </div>
            </div>
          </div>
          <div className="shit-pop">
            <div className="shit-ph"><span className="shit-av">💬</span><span className="shit-pt">SalesHQ assistant</span><span className="shit-live"><i />LIVE</span></div>
            <div className="shit-bub">What matters most — support level, fit, or pack size?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
