/* Shared site chrome: useLang, SiteHeader, SiteFooter, WhatsAppFab, WaGlyph */
(function () {
  const { useState, useEffect } = React;
  const Icon = window.KV.Icon;
  const I18N = window.KV.I18N;
  const CONFIG = window.KV.CONFIG;
  const Btn = window.KinvaDesignSystem_573cf8.Button;

  // ---- language hook -----------------------------------------------------
  function useLang() {
    const [lang, setLangState] = useState(() => {
      try { return localStorage.getItem("kv-lang") || "zh"; } catch (e) { return "zh"; }
    });
    useEffect(() => {
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    }, [lang]);
    const setLang = (l) => {
      try { localStorage.setItem("kv-lang", l); } catch (e) {}
      setLangState(l);
    };
    return [lang, setLang];
  }

  // ---- WhatsApp glyph ----------------------------------------------------
  function WaGlyph({ size = 22, color = "currentColor" }) {
    return React.createElement(
      "svg",
      { viewBox: "0 0 24 24", width: size, height: size, fill: color, "aria-hidden": "true", style: { display: "block" } },
      React.createElement("path", {
        d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 10.41c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z",
      })
    );
  }

  const PAGES = [
    { key: "home", href: "index.html" },
    { key: "about", href: "about.html" },
    { key: "services", href: "services.html" },
    { key: "contact", href: "contact.html" },
  ];

  // ---- header ------------------------------------------------------------
  function SiteHeader({ active, lang, setLang }) {
    const t = I18N[lang];
    const [open, setOpen] = useState(false);
    return React.createElement(
      "header", { className: "kv-header" },
      React.createElement(
        "div", { className: "kv-container kv-header-inner" },
        React.createElement(
          "a", { className: "kv-brand", href: "index.html" },
          React.createElement("img", { src: "assets/kinva-logo-badge.png", alt: "Kinva 庆华批发商" }),
          React.createElement(
            "span", { className: "kv-brand-name" },
            React.createElement("span", { className: "kv-brand-zh" }, t.brand.zh),
            React.createElement("span", { className: "kv-brand-en" }, "Kinva Wholesale")
          )
        ),
        React.createElement(
          "nav", { className: "kv-nav" },
          PAGES.map((p) =>
            React.createElement("a", { key: p.key, href: p.href, className: active === p.key ? "is-active" : "" }, t.nav[p.key]))
        ),
        React.createElement(
          "div", { className: "kv-header-actions" },
          React.createElement(
            "div", { className: "kv-lang", role: "group", "aria-label": "Language" },
            React.createElement("button", { className: lang === "zh" ? "is-on" : "", onClick: () => setLang("zh") }, "中"),
            React.createElement("button", { className: lang === "en" ? "is-on" : "", onClick: () => setLang("en") }, "EN")
          ),
          React.createElement(
            "span", { className: "kv-desktop-cta" },
            React.createElement(
              Btn, { variant: "primary", size: "md", iconLeft: React.createElement(WaGlyph, { size: 18, color: "#fff" }), onClick: () => window.open(window.KV.waLink(), "_blank") },
              t.cta.whatsapp
            )
          ),
          React.createElement(
            "button", { className: "kv-burger", "aria-label": "Menu", onClick: () => setOpen((v) => !v) },
            React.createElement(Icon, { name: open ? "x" : "menu", size: 24 })
          )
        )
      ),
      open
        ? React.createElement(
            "div", { className: "kv-container" },
            React.createElement(
              "div", { className: "kv-mobile-menu", style: { display: "flex" } },
              PAGES.map((p) =>
                React.createElement("a", { key: p.key, href: p.href, className: active === p.key ? "is-active" : "" }, t.nav[p.key])),
              React.createElement(
                "a", { href: window.KV.waLink(), target: "_blank", style: { color: "#25D366" } },
                t.cta.whatsapp + " →"
              )
            )
          )
        : null
    );
  }

  // ---- WhatsApp floating button -----------------------------------------
  function WhatsAppFab({ lang }) {
    const t = I18N[lang];
    return React.createElement(
      "a", { className: "kv-wa-fab", href: window.KV.waLink(), target: "_blank", rel: "noopener", "aria-label": t.cta.whatsapp },
      React.createElement("span", { className: "kv-wa-ic" }, React.createElement(WaGlyph, { size: 20, color: "#25D366" })),
      React.createElement("span", { className: "txt" }, t.cta.whatsappShort)
    );
  }

  // ---- footer ------------------------------------------------------------
  function FootRow({ icon, children, nowrap }) {
    return React.createElement(
      "div", { className: nowrap ? "nowrap" : "" },
      React.createElement("span", { className: "kv-ic" }, React.createElement(Icon, { name: icon, size: 18 })),
      React.createElement("span", null, children)
    );
  }

  function SiteFooter({ lang }) {
    const t = I18N[lang];
    const addr = lang === "zh" ? CONFIG.addressZh : CONFIG.addressEn;
    const hrs = lang === "zh" ? CONFIG.hoursZh : CONFIG.hoursEn;
    return React.createElement(
      "footer", { className: "kv-footer" },
      React.createElement(
        "div", { className: "kv-container" },
        React.createElement(
          "div", { className: "kv-footer-top" },
          // brand col
          React.createElement(
            "div", null,
            React.createElement(
              "div", { className: "kv-footer-brand" },
              React.createElement("img", { src: "assets/kinva-logo-badge.png", alt: "Kinva" }),
              React.createElement(
                "span", null,
                React.createElement("div", { className: "zh" }, t.brand.zh),
                React.createElement("div", { className: "en" }, "Kinva Wholesale")
              )
            ),
            React.createElement("p", null, t.footer.tagline)
          ),
          // quick links
          React.createElement(
            "div", null,
            React.createElement("h4", null, t.footer.linksTitle),
            React.createElement(
              "div", { className: "kv-footer-links" },
              PAGES.map((p) => React.createElement("a", { key: p.key, href: p.href }, t.nav[p.key]))
            )
          ),
          // contact
          React.createElement(
            "div", null,
            React.createElement("h4", null, t.footer.contactTitle),
            React.createElement(
              "div", { className: "kv-footer-contact" },
              React.createElement(FootRow, { icon: "smartphone", nowrap: true }, CONFIG.mobile),
              React.createElement(FootRow, { icon: "phone", nowrap: true }, CONFIG.tel),
              React.createElement(FootRow, { icon: "mail", nowrap: true }, CONFIG.email),
              React.createElement(FootRow, { icon: "map-pin" }, addr),
              React.createElement(FootRow, { icon: "clock" }, hrs)
            )
          ),
          // brands
          React.createElement(
            "div", null,
            React.createElement("h4", null, t.footer.brandsTitle),
            React.createElement(
              "div", { className: "kv-footer-links" },
              CONFIG.brands.map((b) => React.createElement("span", { key: b, style: { color: "var(--kinva-cream-100)", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15.5px" } }, b))
            )
          )
        ),
        React.createElement(
          "div", { className: "kv-footer-bottom" },
          React.createElement("span", null, t.footer.rights),
          React.createElement("span", null, t.footer.note)
        )
      )
    );
  }

  window.KV.useLang = useLang;
  window.KV.SiteHeader = SiteHeader;
  window.KV.SiteFooter = SiteFooter;
  window.KV.WhatsAppFab = WhatsAppFab;
  window.KV.WaGlyph = WaGlyph;
})();
