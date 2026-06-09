/* 联系 Contact */
const { useState } = React;
const KV = window.KV;
const DS = window.KinvaDesignSystem_573cf8;
const { Button, Card, Input, Select, Checkbox, Alert } = DS;
const Icon = KV.Icon;
const CONFIG = KV.CONFIG;

function PageHead({ t }) {
  const h = t.contact.head;
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

function InfoItem({ icon, label, value, href, mono }) {
  const val = href
    ? <a className={"val" + (mono ? " mono" : "")} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" style={{ textDecoration: "none", color: "var(--color-text-strong)" }}>{value}</a>
    : <div className={"val" + (mono ? " mono" : "")}>{value}</div>;
  return (
    <div className="kv-info-item">
      <span className="kv-info-ic"><Icon name={icon} size={22} /></span>
      <div>
        <div className="lbl">{label}</div>
        {val}
      </div>
    </div>
  );
}

function ContactInfo({ t, lang }) {
  const c = t.contact.info;
  const addr = lang === "zh" ? CONFIG.addressZh : CONFIG.addressEn;
  const hrs = lang === "zh" ? CONFIG.hoursZh : CONFIG.hoursEn;
  return (
    <div>
      <h2 className="kv-h2" style={{ fontSize: "clamp(26px,2.4vw,34px)", marginBottom: 8 }}>{c.title}</h2>
      <div className="kv-info-list" style={{ marginTop: 14 }}>
        <InfoItem icon="message-circle" label={c.whatsapp} value={CONFIG.mobile} href={KV.waLink()} mono />
        <InfoItem icon="smartphone" label={c.mobile} value={CONFIG.mobile} href={"tel:" + CONFIG.mobile.replace(/\s/g, "")} mono />
        <InfoItem icon="phone" label={c.tel} value={CONFIG.tel} href={"tel:" + CONFIG.tel.replace(/\s/g, "")} mono />
        <InfoItem icon="mail" label={c.email} value={CONFIG.email} href={"mailto:" + CONFIG.email} />
        <InfoItem icon="map-pin" label={c.address} value={addr} />
        <InfoItem icon="clock" label={c.hours} value={hrs} />
      </div>
      <div className="kv-photo-frame" style={{ aspectRatio: "16 / 9", marginTop: 28 }}>
        <image-slot id="contact-map" style={{ width: "100%", height: "100%" }} shape="rect" fit="cover" placeholder={t.contact.locationLabel}></image-slot>
      </div>
    </div>
  );
}

function ContactForm({ t }) {
  const f = t.contact.form;
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: f.typeOptions[0], message: "", consent: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = f.errRequired;
    if (!form.phone.trim()) err.phone = f.errRequired;
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = f.errEmail;
    if (!form.consent) err.consent = f.errRequired;
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <Card variant="raised" padding="var(--space-7)">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18 }}>
          <span className="kv-info-ic" style={{ width: 56, height: 56, background: "var(--kinva-success-050)", color: "var(--kinva-success-500)", borderColor: "var(--kinva-success-500)" }}><Icon name="check" size={28} /></span>
          <Alert tone="success" title={f.successTitle} icon={<Icon name="party-popper" size={20} />} style={{ width: "100%" }}>{f.successBody}</Alert>
          <Button variant="primary" size="lg" iconLeft={<KV.WaGlyph size={20} color="#fff" />} onClick={() => window.open(KV.waLink(), "_blank")}>{t.cta.whatsapp}</Button>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="raised" padding="var(--space-7)">
      <h2 className="kv-h2" style={{ fontSize: "clamp(24px,2.2vw,30px)", marginBottom: 6 }}>{f.title}</h2>
      <p className="kv-body" style={{ marginBottom: 26 }}>{f.lead}</p>
      <form onSubmit={submit} noValidate>
        <div className="kv-form-grid">
          <Input label={f.name} required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder={f.namePh} error={errors.name} iconLeft={<Icon name="user" size={18} />} />
          <Input label={f.phone} required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder={f.phonePh} error={errors.phone} iconLeft={<Icon name="phone" size={18} />} />
          <Input label={f.email} type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder={f.emailPh} error={errors.email} iconLeft={<Icon name="mail" size={18} />} style={{ gridColumn: "1 / -1" }} />
          <Select label={f.type} value={form.type} onChange={(e) => set("type", e.target.value)} options={f.typeOptions} style={{ gridColumn: "1 / -1" }} />
          <div className="kv-form-full">
            <label className="kv-textarea-label">{f.message}</label>
            <textarea className="kv-textarea" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder={f.messagePh}></textarea>
          </div>
          <div className="kv-form-full">
            <Checkbox label={f.consent} checked={form.consent} onChange={(v) => set("consent", v)} />
            {errors.consent ? <div style={{ color: "var(--kinva-danger-500)", fontSize: 12.5, marginTop: 6, fontFamily: "var(--font-zh)" }}>{errors.consent}</div> : null}
          </div>
          <div className="kv-form-full" style={{ marginTop: 6 }}>
            <Button type="submit" variant="primary" size="lg" fullWidth iconRight={<Icon name="send" size={18} />}>{f.submit}</Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

function App() {
  const [lang, setLang] = KV.useLang();
  const t = KV.I18N[lang];
  return (
    <React.Fragment>
      <KV.SiteHeader active="contact" lang={lang} setLang={setLang} />
      <main style={{ flex: 1 }}>
        <PageHead t={t} />
        <section className="kv-section" style={{ paddingTop: 64 }}>
          <div className="kv-container">
            <div className="kv-contact-grid">
              <ContactInfo t={t} lang={lang} />
              <ContactForm t={t} />
            </div>
          </div>
        </section>
      </main>
      <KV.SiteFooter lang={lang} />
      <KV.WhatsAppFab lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
