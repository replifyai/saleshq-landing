// Compliance flow: PAN form → TDS certificate → UPI confirmation. Auto-cycling. `rco-` prefix.
const css = `
.rco-scene{position:relative;width:100%;max-width:460px;aspect-ratio:460/340;margin:0 auto;padding-bottom:24px}
.rco-slide{position:absolute;inset:0;opacity:0;pointer-events:none}
.rco-slide:nth-child(1){animation:rco-cycle 15s infinite 0s}
.rco-slide:nth-child(2){animation:rco-cycle 15s infinite 5s}
.rco-slide:nth-child(3){animation:rco-cycle 15s infinite 10s}
@keyframes rco-cycle{0%,2%{opacity:0}5%,30%{opacity:1}33%,100%{opacity:0}}
.rco-card{height:100%;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex;flex-direction:column}
.rco-head{padding:12px 16px;border-bottom:1px solid var(--border);background:var(--muted);display:flex;align-items:center;justify-content:space-between}
.rco-head b{font-family:var(--font-bricolage),sans-serif;font-size:13px;color:var(--foreground)}
.rco-step{font-family:var(--font-jetbrains),monospace;font-size:9px;color:var(--primary);font-weight:600}
.rco-body{padding:16px;flex:1;display:flex;flex-direction:column}
.rco-field{margin-bottom:10px}
.rco-field label{display:block;font-size:9px;color:var(--muted-foreground);margin-bottom:4px;font-weight:500}
.rco-input{border:1px solid var(--border);border-radius:8px;padding:8px 10px;font-size:11px;color:var(--foreground);background:var(--background);display:flex;align-items:center;justify-content:space-between}
.rco-input.filled{border-color:#128c3e;background:#ecfdf5}
.rco-check{color:#128c3e;font-size:12px;font-weight:700}
.rco-input.typing::after{content:"|";animation:rco-blink 1s infinite;color:var(--primary)}
@keyframes rco-blink{0%,100%{opacity:1}50%{opacity:0}}
.rco-btn{margin-top:auto;border-radius:8px;background:var(--primary);color:var(--primary-foreground);text-align:center;padding:10px;font-size:11px;font-weight:600;opacity:0;animation:rco-btn 15s infinite}
.rco-slide:nth-child(1) .rco-btn{animation-delay:2s}
.rco-slide:nth-child(3) .rco-btn{animation-delay:12s}
@keyframes rco-btn{0%,8%{opacity:0}12%,28%{opacity:1}32%,100%{opacity:0}}
.rco-cert{border:1px solid var(--border);border-radius:10px;padding:14px;background:var(--muted);flex:1}
.rco-cert-h{font-family:var(--font-bricolage),sans-serif;font-size:14px;font-weight:700;color:var(--foreground);margin-bottom:4px;text-align:center}
.rco-cert-sub{font-size:9px;color:var(--muted-foreground);text-align:center;margin-bottom:12px}
.rco-row{display:flex;justify-content:space-between;font-size:10px;padding:6px 0;border-bottom:1px solid var(--border)}
.rco-row:last-child{border:none;font-weight:600;color:var(--foreground)}
.rco-row span:first-child{color:var(--muted-foreground)}
.rco-stamp{margin-top:10px;text-align:center;font-size:9px;color:#128c3e;font-weight:600;border:1px dashed #128c3e;border-radius:6px;padding:6px;opacity:0;animation:rco-stamp 15s infinite 7s}
@keyframes rco-stamp{0%,44%{opacity:0;transform:scale(.95)}48%,80%{opacity:1;transform:scale(1)}84%,100%{opacity:0}}
.rco-upi{text-align:center;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}
.rco-upi-icon{width:56px;height:56px;border-radius:50%;background:#ecfdf5;color:#128c3e;font-size:24px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;animation:rco-pop 15s infinite 10.5s}
@keyframes rco-pop{0%,68%{transform:scale(.8);opacity:.5}72%,85%{transform:scale(1);opacity:1}90%,100%{opacity:1}}
.rco-upi-amt{font-family:var(--font-bricolage),sans-serif;font-size:26px;font-weight:700;color:#128c3e;margin-bottom:4px}
.rco-upi-d{font-size:11px;color:var(--muted-foreground);line-height:1.5}
.rco-dots{position:absolute;bottom:0;left:50%;transform:translateX(-50%);display:flex;gap:6px}
.rco-dots i{width:6px;height:6px;border-radius:50%;background:var(--border);animation:rco-dot 15s infinite}
.rco-dots i:nth-child(1){animation-delay:0s}.rco-dots i:nth-child(2){animation-delay:5s}.rco-dots i:nth-child(3){animation-delay:10s}
@keyframes rco-dot{0%,2%{background:var(--border)}5%,28%{background:var(--primary);transform:scale(1.2)}31%,100%{background:var(--border);transform:scale(1)}}
@media (prefers-reduced-motion:reduce){.rco-scene *{animation:none!important}.rco-slide:first-child{opacity:1!important}.rco-btn,.rco-stamp{opacity:1!important}}
`;

export default function ReferralComplianceCreative() {
  return (
    <div className="rco-scene">
      <style>{css}</style>

      <div className="rco-slide">
        <div className="rco-card">
          <div className="rco-head"><b>Affiliate onboarding</b><span className="rco-step">Step 1 of 3</span></div>
          <div className="rco-body">
            <div className="rco-field">
              <label>PAN number</label>
              <div className="rco-input filled">ABCPK1234F <span className="rco-check">✓ Verified</span></div>
            </div>
            <div className="rco-field">
              <label>GSTIN (optional)</label>
              <div className="rco-input filled">27ABCPK1234F1Z5 <span className="rco-check">✓</span></div>
            </div>
            <div className="rco-field">
              <label>UPI ID for payouts</label>
              <div className="rco-input typing">priya.k@okhdfcbank</div>
            </div>
            <div className="rco-btn">Verify &amp; continue →</div>
          </div>
        </div>
      </div>

      <div className="rco-slide">
        <div className="rco-card">
          <div className="rco-head"><b>Tax documents</b><span className="rco-step">Step 2 of 3</span></div>
          <div className="rco-body">
            <div className="rco-cert">
              <div className="rco-cert-h">Form 16A · TDS Certificate</div>
              <div className="rco-cert-sub">FY 2025–26 · Q1 · Generated automatically</div>
              <div className="rco-row"><span>Payee</span><span>Priya Kumari</span></div>
              <div className="rco-row"><span>PAN</span><span>ABCPK1234F</span></div>
              <div className="rco-row"><span>Gross payout</span><span>₹11,750</span></div>
              <div className="rco-row"><span>TDS @ 10%</span><span>₹1,175</span></div>
              <div className="rco-row"><span>Net paid via UPI</span><span>₹10,575</span></div>
              <div className="rco-stamp">✓ Digitally signed · ITR-ready export</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rco-slide">
        <div className="rco-card">
          <div className="rco-head"><b>Payout confirmed</b><span className="rco-step">Step 3 of 3</span></div>
          <div className="rco-body">
            <div className="rco-upi">
              <div className="rco-upi-icon">✓</div>
              <div className="rco-upi-amt">₹250.00</div>
              <div className="rco-upi-d">
                Sent to priya.k@okhdfcbank
                <br />
                Order #4821 · TDS ₹25 deducted
                <br />
                Same-day UPI · Certificate attached
              </div>
            </div>
            <div className="rco-btn">Download TDS certificate</div>
          </div>
        </div>
      </div>

      <div className="rco-dots" aria-hidden><i /><i /><i /></div>
    </div>
  );
}
