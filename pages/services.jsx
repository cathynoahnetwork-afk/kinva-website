/* 服务 Services */
const KV = window.KV;
const DS = window.KinvaDesignSystem_573cf8;
const { Button, Card, Badge } = DS;
const Icon = KV.Icon;

function go(href) { window.location.href = href; }

function PageHead({ t }) {
  const h = t.services.head;
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

function ServiceList({ t }) {
  return (
    <section className="kv-section">
      <div className="kv-container">
        <div className="kv-grid kv-grid-3">
          {t.services.list.map((it, i) => (
            <Card key={i} variant="raised" padding="var(--space-6)">
              <div className="kv-feature">
                <span className={"kv-feature-ic" + (i % 2 === 0 ? " accent" : "")}><Icon name={it.icon} size={26} /></span>
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

function Featured({ t }) {
  const f = t.services.featured;
  return (
    <section className="kv-section" style={{ background: "var(--kinva-cream-050)", borderTop: "var(--border-hair) solid var(--color-border-subtle)", borderBottom: "var(--border-hair) solid var(--color-border-subtle)" }}>
      <div className="kv-container">
        <Card variant="raised" padding="0" style={{ overflow: "hidden", borderTop: '4px solid var(--kinva-orange-500)' }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr" }} className="kv-featured-grid">
            <div style={{ padding: "52px 48px" }}>
              <Badge tone="accent" variant="solid">{f.badge}</Badge>
              <h2 className="kv-h2" style={{ marginTop: 18, marginBottom: 18 }}>{f.title}</h2>
              <p className="kv-lead" style={{ fontSize: 18, marginBottom: 26 }}>{f.lead}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {f.points.map((p, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ color: "var(--color-brand)", flex: "none", marginTop: 2 }}><Icon name="check-circle" size={22} /></span>
                    <span className="kv-body" style={{ fontSize: 16.5, fontWeight: 600, color: "var(--color-text-strong)" }}>{p}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="lg" iconLeft={<KV.WaGlyph size={20} color="#fff" />} onClick={() => window.open(KV.waLink(), "_blank")}>{f.cta}</Button>
            </div>
            <div style={{ background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", padding: 48, position: "relative" }} className="kv-featured-side">
              <Icon name="rocket" size={132} color="rgba(255,255,255,0.92)" stroke={1.4} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Process({ t }) {
  const p = t.services.process;
  return (
    <section className="kv-section">
      <div className="kv-container">
        <div className="kv-section-head" style={{ marginBottom: 52 }}>
          <p className="kv-overline kv-eyebrow-row">{p.overline}</p>
          <h2 className="kv-h2">{p.title}</h2>
        </div>
        <div className="kv-steps">
          {p.steps.map((s, i) => (
            <div className="kv-step" key={i}>
              <div className="kv-step-num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="kv-h3">{s.title}</h3>
              <p className="kv-body">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ t }) {
  const c = t.services.cta;
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
      <KV.SiteHeader active="services" lang={lang} setLang={setLang} />
      <main style={{ flex: 1 }}>
        <PageHead t={t} />
        <ServiceList t={t} />
        <Featured t={t} />
        <Process t={t} />
        <CtaBand t={t} />
      </main>
      <KV.SiteFooter lang={lang} />
      <KV.WhatsAppFab lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
