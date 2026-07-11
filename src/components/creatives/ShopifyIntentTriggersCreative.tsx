// Intent triggers — single row of 4 cards. Each card explains a friction moment
// (dwell, comparison, idle cart, search retries) and shows it inside a faithful
// SalesHQ widget window (blue header, store-context mini-scene, assistant nudge,
// powered-by footer) — matching the Shopper-experience chat creative. Pure CSS,
// `shit-` prefix.
const css = `
.shit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;width:100%;margin:0 auto}
@media (max-width:1024px){.shit-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.shit-grid{grid-template-columns:1fr}}
.shit-card{display:flex;flex-direction:column;opacity:0;transform:translateY(10px);animation:shit-in .5s ease-out forwards}
.shit-card:nth-child(1){animation-delay:.05s}.shit-card:nth-child(2){animation-delay:.15s}
.shit-card:nth-child(3){animation-delay:.25s}.shit-card:nth-child(4){animation-delay:.35s}
@keyframes shit-in{to{opacity:1;transform:translateY(0)}}
.shit-k{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-jetbrains),monospace;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:8px}
.shit-k i{width:5px;height:5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px hsl(221,83%,53%,.15)}
.shit-h{font-family:var(--font-bricolage),sans-serif;font-size:15px;font-weight:700;color:var(--foreground);margin-bottom:4px;line-height:1.3}
.shit-d{font-size:12px;line-height:1.5;color:var(--muted-foreground);margin-bottom:12px}

/* --- widget window (matches the Shopper-experience chat creative) --- */
.shit-win{border:1px solid var(--border);border-radius:16px;background:#fff;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 24px 50px -30px rgba(15,23,42,.32),0 4px 14px -8px rgba(15,23,42,.12)}
.shit-whead{display:flex;align-items:center;gap:8px;padding:9px 11px;background:var(--primary)}
.shit-wav{width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.22);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.shit-wt{color:#fff;font-size:11.5px;font-weight:700;line-height:1.2}
.shit-ws{display:flex;align-items:center;gap:4px;color:rgba(255,255,255,.85);font-size:8.5px}
.shit-wdot{width:5px;height:5px;border-radius:50%;background:#4ade80;box-shadow:0 0 0 2px rgba(74,222,128,.3)}
.shit-wx{margin-left:auto;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font-size:10px;display:flex;align-items:center;justify-content:center}
.shit-wbody{background:#f6f7f9;padding:10px;display:flex;flex-direction:column;gap:9px}
.shit-wfoot{text-align:center;font-size:8px;color:#9aa1ab;padding:7px 0;background:#f6f7f9;border-top:1px solid #eceef1}
.shit-wfoot b{color:#6b7280}
/* assistant reply — scripted like the chat creative: typing dots, then the
   nudge bubble slides in, holds, resets. 7s loop, shared by all four cards. */
.shit-reply{position:relative;display:flex;flex-direction:column;align-items:flex-start}
.shit-typ{position:absolute;top:0;left:0;display:flex;gap:4px;padding:8px 11px;background:#fff;border-radius:11px 11px 11px 4px;box-shadow:0 1px 2px rgba(15,23,42,.06);opacity:0;animation:shit-typ 7s infinite}
.shit-typ i{width:5px;height:5px;border-radius:50%;background:var(--primary);opacity:.5;animation:shit-blink 1s infinite}
.shit-typ i:nth-child(2){animation-delay:.15s}.shit-typ i:nth-child(3){animation-delay:.3s}
@keyframes shit-typ{0%,7%{opacity:0}11%,26%{opacity:1}30%,100%{opacity:0}}
@keyframes shit-blink{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-2px)}}
.shit-bub{max-width:94%;background:#fff;color:#1f2226;border-radius:11px 11px 11px 4px;padding:8px 10px;font-size:10.5px;line-height:1.45;box-shadow:0 1px 2px rgba(15,23,42,.06);opacity:0;transform:translateY(6px);animation:shit-bub 7s infinite}
@keyframes shit-bub{0%,30%{opacity:0;transform:translateY(6px)}34%,92%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(6px)}}

/* --- store-context mini scene (inside the widget body) --- */
.shit-scene{border:1px solid #e5e7eb;border-radius:9px;background:#fff;overflow:hidden}
.shit-view{position:relative;height:80px;padding:9px 10px;display:flex;align-items:center;gap:9px}

/* scene 1 — dwell: product + ticking timer */
.shit-ph1{width:52px;height:52px;border-radius:8px;background:linear-gradient(140deg,#eef1f6,#ccd4e2);position:relative;flex-shrink:0}
.shit-ph1::after{content:"";position:absolute;left:50%;top:52%;width:60%;height:44%;transform:translate(-50%,-50%) rotate(-5deg);border-radius:12px;background:linear-gradient(155deg,#98a3b8,#525c74)}
.shit-t1{font-size:9.5px;font-weight:700;color:#111}
.shit-t2{font-size:8.5px;color:#6b7280;margin-top:2px}
.shit-t3{font-size:9.5px;font-weight:800;color:#111;margin-top:4px}
.shit-timer{position:absolute;right:9px;bottom:9px;display:flex;align-items:center;gap:4px;border:1px solid hsl(221,83%,53%,.35);background:hsl(221,83%,53%,.07);border-radius:99px;padding:2.5px 8px;font-family:var(--font-jetbrains),monospace;font-size:8.5px;font-weight:700;color:var(--primary)}
.shit-timer b{display:inline-block;width:20px}
.shit-timer b::after{content:"0:04";animation:shit-tick 8s steps(1) infinite}
@keyframes shit-tick{0%{content:"0:04"}25%{content:"0:07"}50%{content:"0:10"}75%{content:"0:13"}}
.shit-pulse{width:5px;height:5px;border-radius:50%;background:var(--primary);animation:shit-pl 1.2s infinite}
@keyframes shit-pl{0%,100%{opacity:1}50%{opacity:.3}}

/* scene 2 — comparison ping-pong between two tabs */
.shit-two{display:flex;gap:8px;width:100%;align-items:center}
.shit-mini{flex:1;border:1.5px solid #e9eaee;border-radius:9px;padding:7px;position:relative}
.shit-mini .shit-ph2{height:30px;border-radius:6px;background:linear-gradient(140deg,#eef1f6,#d3dae5);margin-bottom:5px;position:relative}
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

@media (prefers-reduced-motion:reduce){.shit-grid *{animation:none!important}.shit-card{opacity:1;transform:none}.shit-bub{opacity:1;transform:none}.shit-typ{display:none}.shit-timer b::after{content:"0:10"}.shit-sq::after{content:"pillow for neck pain"}}
`;

function Win({ children, msg }: { children: React.ReactNode; msg: React.ReactNode }) {
  return (
    <div className="shit-win">
      <div className="shit-whead">
        <span className="shit-wav">💬</span>
        <div>
          <div className="shit-wt">SalesHQ Assistant</div>
          <div className="shit-ws"><i className="shit-wdot" />Always here to help</div>
        </div>
        <span className="shit-wx">✕</span>
      </div>
      <div className="shit-wbody">
        <div className="shit-scene"><div className="shit-view">{children}</div></div>
        <div className="shit-reply">
          <div className="shit-typ"><i /><i /><i /></div>
          <div className="shit-bub">{msg}</div>
        </div>
      </div>
      <div className="shit-wfoot">Powered by <b>SalesHQ</b></div>
    </div>
  );
}

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
          <Win msg={<>You&apos;ve been looking at this travel pillow — in stock in both colors. Want key specs?</>}>
            <div className="shit-ph1" />
            <div>
              <div className="shit-t1">Frido Travel Neck Pillow</div>
              <div className="shit-t2">★★★★★ 4.8 · Wine / Grey</div>
              <div className="shit-t3">₹1,699</div>
            </div>
            <span className="shit-timer"><i className="shit-pulse" />dwell <b /></span>
          </Win>
        </div>

        {/* 2 — Comparison loop */}
        <div className="shit-card">
          <span className="shit-k"><i />Comparison loop</span>
          <div className="shit-h">Side-by-side when they&apos;re torn</div>
          <div className="shit-d">Ping-pong between two product pages → instant in-chat comparison table.</div>
          <Win msg={<>Side-by-side on the two pillows you&apos;ve been comparing — want my pick?</>}>
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
          </Win>
        </div>

        {/* 3 — Cart recovery */}
        <div className="shit-card">
          <span className="shit-k"><i />Cart recovery</span>
          <div className="shit-h">Reassurance for hesitant buyers</div>
          <div className="shit-d">Idle cart or exit intent → gentle nudge with policy answers, not spam.</div>
          <Win msg={<>Still deciding? Happy to help with sizing or a matching accessory.</>}>
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
          </Win>
        </div>

        {/* 4 — Search refinement */}
        <div className="shit-card">
          <span className="shit-k"><i />Search refinement</span>
          <div className="shit-h">Narrowing when search stalls</div>
          <div className="shit-d">Repeated searches → in-stock picks and one question to narrow intent.</div>
          <Win msg={<>What matters most — support level, fit, or pack size?</>}>
            <div className="shit-srch">
              <div className="shit-sbar">🔍 <span className="shit-sq" /><span className="shit-scur" /></div>
              <div className="shit-tries">
                <span className="shit-try">search #1</span>
                <span className="shit-try">search #2</span>
                <span className="shit-try hot">search #3 — no click</span>
              </div>
            </div>
          </Win>
        </div>
      </div>
    </div>
  );
}
