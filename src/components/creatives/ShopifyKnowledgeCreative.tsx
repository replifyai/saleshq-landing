// Animated knowledge pipeline: PDF drops in → AI converts → sections appear →
// the assistant answers a policy question from the merchant's exact text.
// Pure CSS, `shkn-` prefix.
const css = `
.shkn-scene{position:relative;width:100%;max-width:480px;aspect-ratio:480/420;margin:0 auto}
.shkn-win{position:absolute;inset:0;border:1px solid var(--border);border-radius:16px;background:var(--background);box-shadow:0 30px 70px -34px rgba(15,23,42,.32);overflow:hidden;display:flex;flex-direction:column}
.shkn-head{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid var(--border);background:var(--muted)}
.shkn-av{width:28px;height:28px;border-radius:8px;background:hsl(221,83%,53%,.14);color:var(--primary);font-size:13px;display:flex;align-items:center;justify-content:center}
.shkn-title{font-size:12px;font-weight:700;color:var(--foreground)}.shkn-sub{font-size:9px;color:var(--muted-foreground)}
.shkn-body{flex:1;padding:14px;display:flex;flex-direction:column;gap:9px;overflow:hidden}

.shkn-pdf{display:flex;align-items:center;gap:9px;border:1px dashed hsl(221,83%,53%,.45);border-radius:10px;padding:9px 11px;background:hsl(221,83%,53%,.05);opacity:0;transform:translateY(-8px);animation:shkn-drop 11s infinite .4s}
.shkn-pdficon{width:26px;height:26px;border-radius:6px;background:#ef4444;color:#fff;font-size:8px;font-weight:800;display:flex;align-items:center;justify-content:center;letter-spacing:.03em}
.shkn-pdfname{font-size:11px;font-weight:600;color:var(--foreground)}.shkn-pdfmeta{font-size:9px;color:var(--muted-foreground)}
@keyframes shkn-drop{0%,2%{opacity:0;transform:translateY(-8px)}6%,94%{opacity:1;transform:translateY(0)}100%{opacity:0}}

.shkn-bar{height:4px;border-radius:2px;background:var(--muted);overflow:hidden;opacity:0;animation:shkn-barin 11s infinite 1.2s}
.shkn-bar i{display:block;height:100%;width:0;background:var(--primary);border-radius:2px;animation:shkn-fill 11s infinite 1.2s}
@keyframes shkn-barin{0%,10%{opacity:0}12%,30%{opacity:1}34%,100%{opacity:0}}
@keyframes shkn-fill{0%,12%{width:0}28%,100%{width:100%}}

.shkn-secs{display:flex;flex-direction:column;gap:6px}
.shkn-sec{display:flex;align-items:center;gap:8px;border:1px solid var(--border);border-radius:9px;padding:7px 10px;background:var(--muted);opacity:0;transform:translateX(-8px)}
.shkn-s1{animation:shkn-sec 11s infinite 3.4s}.shkn-s2{animation:shkn-sec 11s infinite 3.8s}.shkn-s3{animation:shkn-sec 11s infinite 4.2s}
@keyframes shkn-sec{0%,2%{opacity:0;transform:translateX(-8px)}6%,88%{opacity:1;transform:translateX(0)}94%,100%{opacity:0}}
.shkn-check{width:16px;height:16px;border-radius:50%;background:hsl(152,60%,42%,.15);color:hsl(152,60%,36%);font-size:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.shkn-secname{font-size:10.5px;font-weight:600;color:var(--foreground)}
.shkn-badge{margin-left:auto;font-size:8px;font-weight:700;color:var(--primary);border:1px solid hsl(221,83%,53%,.35);border-radius:999px;padding:2px 7px}

.shkn-q{align-self:flex-end;max-width:82%;font-size:11px;line-height:1.45;padding:8px 11px;border-radius:12px 12px 4px 12px;background:var(--primary);color:var(--primary-foreground);opacity:0;transform:translateY(8px);animation:shkn-q 11s infinite 5.6s}
@keyframes shkn-q{0%,2%{opacity:0;transform:translateY(8px)}6%,88%{opacity:1;transform:translateY(0)}94%,100%{opacity:0}}
.shkn-a{align-self:flex-start;max-width:88%;font-size:11px;line-height:1.5;padding:9px 11px;border-radius:12px 12px 12px 4px;background:var(--muted);color:var(--foreground);opacity:0;transform:translateY(8px);animation:shkn-a 11s infinite 6.8s}
@keyframes shkn-a{0%,2%{opacity:0;transform:translateY(8px)}6%,88%{opacity:1;transform:translateY(0)}94%,100%{opacity:0}}
.shkn-src{display:inline-flex;align-items:center;gap:4px;margin-top:6px;font-size:8.5px;font-weight:600;color:var(--muted-foreground);border:1px solid var(--border);border-radius:999px;padding:2px 8px;background:var(--background)}
@media (prefers-reduced-motion:reduce){.shkn-scene *{animation:none!important}.shkn-pdf,.shkn-sec,.shkn-q,.shkn-a{opacity:1!important;transform:none!important}.shkn-bar{display:none}}
`;

export default function ShopifyKnowledgeCreative() {
  return (
    <div className="shkn-scene">
      <style>{css}</style>
      <div className="shkn-win">
        <div className="shkn-head">
          <span className="shkn-av">📚</span>
          <div>
            <div className="shkn-title">Store knowledge</div>
            <div className="shkn-sub">Your policies, FAQs &amp; offers — the assistant&apos;s source of truth</div>
          </div>
        </div>
        <div className="shkn-body">
          <div className="shkn-pdf">
            <span className="shkn-pdficon">PDF</span>
            <div>
              <div className="shkn-pdfname">Returns-and-Shipping-Policy.pdf</div>
              <div className="shkn-pdfmeta">14 pages · converting to sections…</div>
            </div>
          </div>
          <div className="shkn-bar"><i /></div>
          <div className="shkn-secs">
            <div className="shkn-sec shkn-s1"><span className="shkn-check">✓</span><span className="shkn-secname">Returns — 30-day window</span><span className="shkn-badge">POLICY</span></div>
            <div className="shkn-sec shkn-s2"><span className="shkn-check">✓</span><span className="shkn-secname">Refund timing — 5–7 business days</span><span className="shkn-badge">POLICY</span></div>
            <div className="shkn-sec shkn-s3"><span className="shkn-check">✓</span><span className="shkn-secname">Monsoon Sale — 20% off chairs</span><span className="shkn-badge">OFFER</span></div>
          </div>
          <div className="shkn-q">What&apos;s your return policy?</div>
          <div className="shkn-a">
            You can return any unused item within 30 days of delivery for a full refund — it lands back on your card in 5&ndash;7 business days.
            <br />
            <span className="shkn-src">⚡ From: Returns &amp; Shipping Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
