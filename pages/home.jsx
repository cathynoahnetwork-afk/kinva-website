/* 首页 Home */
const { useState } = React;
const KV = window.KV;
const DS = window.KinvaDesignSystem_573cf8;
const { Button, Card, Badge } = DS;
const Icon = KV.Icon;

function go(href) { window.location.href = href; }

function Hero({ t }) {
  const h = t.home.hero;
  return (
    <section className="kv-hero">
      <div className="kv-container">
        <div className="kv-hero-grid">
          <div>
            <p className="kv-overline kv-eyebrow-row">{h.eyebrow}</p>
            <h1 className="kv-h1" style={{ marginTop: 22 }}>{t === KV.I18N.en
              ? <React.Fragment><span style={{ color: 'var(--color-brand)' }}>Low-barrier</span> wholesale, a more <span style={{ color: 'var(--kinva-orange-500)' }}>secure</span> start.</React.Fragment>
              : <React.Fragment><span style={{ color: 'var(--color-brand)' }}>低门槛</span>批发<br />创业更有<span style={{ color: 'var(--kinva-orange-500)' }}>保障</span>。</React.Fragment>
            }</h1>
            <p className="kv-lead" style={{ marginTop: 26, maxWidth: 560 }}>{t === KV.I18N.en
              ? <React.Fragment>Kinva helps small shops, sundry stores and first-time entrepreneurs buy stationery in bulk at high value. Free shipping and a buy-back guarantee let you start trading at <strong className="kv-mark">lower cost</strong> and <strong className="kv-mark">lower risk</strong>.</React.Fragment>
              : <React.Fragment>庆华批发商为小本生意、杂货店或初创业者提供性价比的文具采购。以<strong className="kv-mark">低成本</strong>、更<strong className="kv-mark">低风险</strong>开始你的生意！</React.Fragment>
            }</p>
            <div className="kv-cta-row" style={{ marginTop: 36 }}>
              <Button variant="primary" size="lg"
                iconLeft={<KV.WaGlyph size={20} color="#fff" />}
                onClick={() => window.open(KV.waLink(), "_blank")}>
                {t.cta.whatsapp}
              </Button>
              <Button variant="secondary" size="lg"
                iconRight={<Icon name="arrow-right" size={20} />}
                onClick={() => go("services.html")}>
                {t.cta.viewServices}
              </Button>
            </div>
            <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 14, background: 'var(--kinva-ink-900)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '14px 28px', boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: 'var(--kinva-orange-500)', flexShrink: 0 }}>
                <Icon name="shield-check" size={22} color="#fff" />
              </span>
              <span style={{ fontFamily: 'var(--font-zh)', fontWeight: 800, fontSize: 21, letterSpacing: '0.02em' }}>
                {t === KV.I18N.en
                  ? <React.Fragment><span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--kinva-orange-500)', marginRight: 4 }}>25+</span> years in business</React.Fragment>
                  : <React.Fragment>超过 <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--kinva-orange-500)' }}>25</span> 年经营</React.Fragment>}
              </span>
            </div>
          </div>

          <div className="kv-hero-panel">
            <span className="kv-sticker-chip cream kv-chip-tl">
              <Icon name="truck" size={18} />{t.common.free}
            </span>
            <img className="kv-hero-badge" src="assets/kinva-logo-badge.png" alt="Kinva 庆华批发商" />
            <div className="kv-hero-panel-cap">
              <div className="en">{h.panelEn}</div>
              <div className="zh">{h.panelZh}</div>
            </div>
            <span className="kv-sticker-chip kv-chip-br">
              <Icon name="rotate-ccw" size={18} />{t.common.buyback}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStrip({ t }) {
  return (
    <div className="kv-brandstrip">
      <div className="kv-container kv-brandstrip-inner">
        <span className="kv-brandstrip-label">{t.common.brandsLabel}</span>
        <div className="kv-brandstrip-logos">
          {KV.CONFIG.brands.map((b) => (
            <image-slot key={b} id={"brand-logo-" + b.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              class="kv-brand-logo-slot" shape="rect" fit="contain" placeholder={b}></image-slot>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyUs({ t }) {
  const w = t.home.why;
  return (
    <section className="kv-section">
      <div className="kv-container">
        <div className="kv-section-head" style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-zh)', fontWeight: 900, fontSize: 'clamp(52px, 5.5vw, 80px)', lineHeight: 0.88, color: 'var(--color-brand)', letterSpacing: '-0.01em' }}>
              {t === KV.I18N.en ? "WHY" : "为什么"}
            </span>
            <span style={{ fontFamily: 'var(--font-zh)', fontWeight: 900, fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 0.95, color: 'var(--kinva-orange-500)' }}>
              {t === KV.I18N.en ? "choose us?" : "选择我们？"}
            </span>
          </div>
          <div style={{ width: 56, height: 5, background: 'var(--kinva-orange-500)', borderRadius: 3, marginTop: 18 }}></div>
          <h2 className="kv-h2" style={{ marginTop: 16 }}>{w.title}</h2>
          <p className="kv-lead">{w.lead}</p>
        </div>
        <div className="kv-grid kv-grid-3">
          {w.items.map((it, i) => (
            <Card key={i} variant="raised" padding="var(--space-6)" style={{ borderTop: i % 2 ? '4px solid var(--kinva-orange-500)' : '4px solid var(--color-brand)' }}>
              <div className="kv-feature">
                <span className={"kv-feature-ic" + (i % 2 ? " accent" : "")}><Icon name={it.icon} size={26} /></span>
                <h3 className="kv-h3">{it.title}</h3>
                <p className="kv-body" style={{ fontSize: 15.5 }}>{it.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview({ t }) {
  const s = t.home.services;
  return (
    <section className="kv-section" style={{ background: "var(--kinva-cream-050)", borderTop: "var(--border-hair) solid var(--color-border-subtle)", borderBottom: "var(--border-hair) solid var(--color-border-subtle)" }}>
      <div className="kv-container">
        <div className="kv-section-head" style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-zh)', fontWeight: 900, fontSize: 'clamp(52px, 5.5vw, 80px)', lineHeight: 0.88, color: 'var(--kinva-orange-500)' }}>
              {t === KV.I18N.en ? "Our" : "我们的"}
            </span>
            <span style={{ fontFamily: 'var(--font-zh)', fontWeight: 900, fontSize: 'clamp(52px, 5.5vw, 80px)', lineHeight: 0.88, color: 'var(--color-brand)' }}>
              {t === KV.I18N.en ? "Services" : "服务"}
            </span>
          </div>
          <div style={{ width: 56, height: 5, background: 'var(--color-brand)', borderRadius: 3, marginTop: 18 }}></div>
          <h2 className="kv-h2" style={{ marginTop: 16 }}>{s.title}</h2>
          <p className="kv-lead">{s.lead}</p>
        </div>
        <div className="kv-grid kv-grid-4">
          {s.items.map((it, i) => (
            <Card key={i} variant="raised" interactive padding="var(--space-6)" onClick={() => go("services.html")}>
              <div className="kv-feature">
                <span className="kv-feature-ic"><Icon name={it.icon} size={26} /></span>
                <h3 className="kv-h3">{it.title}</h3>
                <p className="kv-body" style={{ fontSize: 15.5 }}>{it.text}</p>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Button variant="ghost" size="lg" iconRight={<Icon name="arrow-right" size={20} />} onClick={() => go("services.html")}>{s.link}</Button>
        </div>
      </div>
    </section>
  );
}

function StatsBand({ t }) {
  const items = t.home.stats.items;
  return (
    <section className="kv-section kv-band-dark">
      <div className="kv-container">
        <div className="kv-stats">
          {items.map((it, i) => (
            <div className="kv-stat" key={i}>
              <div className="kv-stat-num">{it.num}<span className="unit">{it.unit}</span></div>
              <div className="kv-stat-label">{it.label}</div>
              <div className="kv-stat-sub">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ t }) {
  const c = t.home.cta;
  return (
    <section className="kv-section-tight kv-band-red">
      <div className="kv-container">
        <div className="kv-cta-wrap">
          <div>
            <h2 className="kv-h2">{c.title}</h2>
            <p className="lead">{c.lead}</p>
          </div>
          <div className="kv-cta-row">
            <Button variant="inverse" size="lg" iconLeft={<KV.WaGlyph size={20} color="#25D366" />} onClick={() => window.open(KV.waLink(), "_blank")}>{t.cta.whatsapp}</Button>
            <Button variant="accent" size="lg" onClick={() => go("contact.html")}>{t.cta.contact}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = KV.useLang();
  const t = KV.I18N[lang];
  return (
    <React.Fragment>
      <KV.SiteHeader active="home" lang={lang} setLang={setLang} />
      <main style={{ flex: 1 }}>
        <Hero t={t} />
        <BrandStrip t={t} />
        <WhyUs t={t} />
        <ServicesPreview t={t} />
        <StatsBand t={t} />
        <CtaBand t={t} />
      </main>
      <KV.SiteFooter lang={lang} />
      <KV.WhatsAppFab lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
