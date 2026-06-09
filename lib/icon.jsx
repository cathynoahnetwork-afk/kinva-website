// Lucide icon as inline SVG (stable across re-renders).
(function () {
  function toPascal(name) {
    return name.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
  }
  function Icon({ name, size = 24, stroke = 2, color, style = {} }) {
    const reg = (window.lucide && window.lucide.icons) || {};
    const node = reg[toPascal(name)] || reg[name];
    const css = { display: "inline-flex", verticalAlign: "middle", flex: "none", ...style };
    if (!node) return React.createElement("span", { style: { width: size, height: size, ...css } });
    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24",
        fill: "none", stroke: color || "currentColor", strokeWidth: stroke,
        strokeLinecap: "round", strokeLinejoin: "round", style: css,
      },
      node.map((child, i) => React.createElement(child[0], { key: i, ...child[1] }))
    );
  }
  window.KV = window.KV || {};
  window.KV.Icon = Icon;
})();
