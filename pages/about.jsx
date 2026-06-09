/* 介绍 About */
const KV = window.KV;
const DS = window.KinvaDesignSystem_573cf8;
const { Button, Card } = DS;
const Icon = KV.Icon;

function go(href) { window.location.href = href; }

function PageHead({ t }) {
  const h = t.about.head;
  return (
    <section className="kv-pagehead">
      <div className="kv-container kv-section-head">
        <p className="kv-overline kv-eyebrow-row">{h.overline}</p>
        <h1 className="kv-h1" style={{ fontSize: "clamp(34px,4vw,56px)", marginTop: 16 }}>{h.title}</h1>
        <p className="kv-lead" style={{ marginTop: 18 }}>{h.lead}</p>
      </div>
    </section>
  );
}

function Story({ t }) {
  const s = t.about.story;
  return (
    <section className="kv-section">
      <div className="kv-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="kv-story-grid">
          <div>
            <h2 className="kv-h2" style={{ marginBottom: 24 }}>{s.title}</h2>
            {s.paras.map((p, i) => <p className="kv-lead" key={i} style={{ marginBottom: 18, fontSize: 18 }}>{p}</p>)}
            <div className="kv-cta-row" style={{ marginTop: 28 }}>
              <Button variant="primary" size="lg" iconLeft={<KV.WaGlyph size={20} color="#fff" />} onClick={() => window.open(KV.waLink(), "_blank")}>{t.cta.whatsapp}</Button>
            </div>
          </div>
          <div className="kv-photo-frame" style={{ aspectRatio: "4 / 5" }}>
            <image-slot id="about-store" style={{ width: "100%", height: "100%" }} shape="rect" fit="cover" placeholder={s.photoLabel}></image-slot>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promise({ t }) {
  const p = t.about.promise;
  return (
    <section className="kv-section" style={{ background: "var(--kinva-cream-050)", borderTop: "var(--border-hair) solid var(--color-border-subtle)", borderBottom: "var(--border-hair) solid var(--color-border-subtle)" }}>
      <div className="kv-container">
        <div className="kv-section-head" style={{ marginBottom: 52 }}>
          <p className="kv-overline kv-eyebrow-row">{p.overline}</p>
          <h2 className="kv-h2">{p.title}</h2>
        </div>
        <div className="kv-grid kv-grid-3">
          {p.items.map((it, i) => (
            <Card key={i} variant="raised" padding="var(--space-6)" style={{ borderTop: i === 1 ? '4px solid var(--kinva-orange-500)' : '4px solid var(--color-brand)' }}>
              <div className="kv-feature">
                <span className={"kv-feature-ic" + (i === 1 ? " accent" : "")}><Icon name={it.icon} size={26} /></span>
                <h3 className="kv-h3">{it.title}</h3>
                <p className="kv-body" style={{ fontSize: 16 }}>{it.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStrip({ t }) {
  return (
    <div className="kv-brandstrip" style={{ background: "var(--color-bg-page)" }}>
      <div className="kv-container kv-brandstrip-inner">
        <span className="kv-brandstrip-label">{t.common.brandsLabel}</span>
        {KV.CONFIG.brands.map((b) => <span key={b} className="kv-brandstrip-name">{b}</span>)}
      </div>
    </div>
  );
}

function CtaBand({ t }) {
  const c = t.about.cta;
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
      <KV.SiteHeader active="about" lang={lang} setLang={setLang} />
      <main style={{ flex: 1 }}>
        <PageHead t={t} />
        <Story t={t} />
        <Promise t={t} />
        <BrandStrip t={t} />
        <CtaBand t={t} />
      </main>
      <KV.SiteFooter lang={lang} />
      <KV.WhatsAppFab lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
