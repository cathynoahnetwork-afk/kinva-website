/* @ds-bundle: {"format":3,"namespace":"KinvaDesignSystem_573cf8","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"PriceTag","sourcePath":"components/data-display/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/data-display/ProductCard.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"3f04a0df1432","components/buttons/IconButton.jsx":"19513485995a","components/data-display/Badge.jsx":"003dac73847d","components/data-display/Card.jsx":"e3411738b115","components/data-display/PriceTag.jsx":"8d743a152db8","components/data-display/ProductCard.jsx":"9d9034a2cb54","components/data-display/Tag.jsx":"2bc862df8eb1","components/feedback/Alert.jsx":"307202c7f5c2","components/forms/Checkbox.jsx":"847aee49d188","components/forms/Input.jsx":"5f32ec45e0fc","components/forms/QuantityStepper.jsx":"27ab3fed8c8b","components/forms/Select.jsx":"8c8fefc2ce82","components/navigation/Tabs.jsx":"b550ccbc706c","ui_kits/storefront/Cart.jsx":"1b2aa34ea399","ui_kits/storefront/Footer.jsx":"9d68013d8e4a","ui_kits/storefront/Header.jsx":"f60dab1653ad","ui_kits/storefront/Home.jsx":"5f2782aabd9c","ui_kits/storefront/ProductDetail.jsx":"4222910ebb0f","ui_kits/storefront/ProductListing.jsx":"f71e400ae39c","ui_kits/storefront/data.js":"70186be9389a","ui_kits/storefront/icons.jsx":"1f57a282cc40"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KinvaDesignSystem_573cf8 = window.KinvaDesignSystem_573cf8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kinva Button — the primary action primitive.
 * Variants: primary (red), accent (orange), secondary (outline), ghost, inverse.
 * Sizes: sm / md / lg. Optional leading/trailing icon nodes.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: "8px 14px",
      gap: 6,
      radius: "var(--radius-sm)",
      icon: 16
    },
    md: {
      fontSize: 15,
      padding: "11px 20px",
      gap: 8,
      radius: "var(--radius-md)",
      icon: 18
    },
    lg: {
      fontSize: 17,
      padding: "15px 28px",
      gap: 10,
      radius: "var(--radius-md)",
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--color-brand)",
      color: "var(--color-text-onbrand)",
      border: "var(--border-2) solid transparent",
      "--hov": "var(--color-brand-hover)",
      "--prs": "var(--color-brand-press)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--kinva-ink-900)",
      border: "var(--border-2) solid transparent",
      "--hov": "var(--color-accent-hover)",
      "--prs": "var(--color-accent-hover)"
    },
    secondary: {
      background: "var(--color-surface-raised)",
      color: "var(--color-text-strong)",
      border: "var(--border-2) solid var(--kinva-ink-900)",
      "--hov": "var(--kinva-cream-100)",
      "--prs": "var(--kinva-cream-200)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-brand)",
      border: "var(--border-2) solid transparent",
      "--hov": "var(--kinva-red-050)",
      "--prs": "var(--kinva-red-100)"
    },
    inverse: {
      background: "var(--kinva-white)",
      color: "var(--kinva-ink-900)",
      border: "var(--border-2) solid transparent",
      "--hov": "var(--kinva-cream-100)",
      "--prs": "var(--kinva-cream-200)"
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const bg = disabled ? "var(--kinva-cream-200)" : press ? v["--prs"] : hover ? v["--hov"] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      padding: s.padding,
      borderRadius: s.radius,
      background: bg,
      color: disabled ? "var(--kinva-ink-300)" : v.color,
      border: disabled ? "var(--border-2) solid transparent" : v.border,
      cursor: disabled ? "not-allowed" : "pointer",
      transform: press && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kinva IconButton — square/round icon-only action.
 * Variants mirror Button. Used for cart, quantity, close, nav.
 */
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  shape = "square",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const dim = sizes[size] || sizes.md;
  const iconSize = Math.round(dim * 0.46);
  const variants = {
    primary: {
      background: "var(--color-brand)",
      color: "#fff",
      border: "transparent",
      hov: "var(--color-brand-hover)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--kinva-ink-900)",
      border: "transparent",
      hov: "var(--color-accent-hover)"
    },
    secondary: {
      background: "var(--color-surface-raised)",
      color: "var(--kinva-ink-900)",
      border: "var(--kinva-ink-900)",
      hov: "var(--kinva-cream-100)"
    },
    ghost: {
      background: "transparent",
      color: "var(--kinva-ink-700)",
      border: "transparent",
      hov: "var(--kinva-cream-200)"
    }
  };
  const v = variants[variant] || variants.secondary;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "none",
      borderRadius: shape === "round" ? "var(--radius-pill)" : "var(--radius-md)",
      background: disabled ? "var(--kinva-cream-200)" : hover ? v.hov : v.background,
      color: disabled ? "var(--kinva-ink-300)" : v.color,
      border: `var(--border-2) solid ${v.border === "transparent" ? "transparent" : "var(--kinva-ink-900)"}`,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: iconSize,
      height: iconSize
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/**
 * Kinva Badge — compact status / label pill.
 * tones: brand, accent, success, warning, danger, info, neutral.
 * variant: solid | soft (default).
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  iconLeft = null,
  style = {}
}) {
  const map = {
    brand: {
      solid: ["var(--kinva-red-500)", "#fff"],
      soft: ["var(--kinva-red-100)", "var(--kinva-red-700)"]
    },
    accent: {
      solid: ["var(--kinva-orange-500)", "var(--kinva-ink-900)"],
      soft: ["var(--kinva-orange-100)", "var(--kinva-orange-600)"]
    },
    success: {
      solid: ["var(--kinva-success-500)", "#fff"],
      soft: ["var(--kinva-success-100)", "#1d6b40"]
    },
    warning: {
      solid: ["var(--kinva-warning-500)", "var(--kinva-ink-900)"],
      soft: ["var(--kinva-warning-100)", "#8a5a06"]
    },
    danger: {
      solid: ["var(--kinva-danger-500)", "#fff"],
      soft: ["var(--kinva-danger-100)", "var(--kinva-red-700)"]
    },
    info: {
      solid: ["var(--kinva-info-500)", "#fff"],
      soft: ["var(--kinva-info-100)", "#1c4f8a"]
    },
    neutral: {
      solid: ["var(--kinva-ink-900)", "#fff"],
      soft: ["var(--kinva-cream-200)", "var(--kinva-ink-700)"]
    }
  };
  const [bg, fg] = (map[tone] || map.neutral)[variant] || map.neutral.soft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: bg,
      color: fg,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 11.5,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      padding: "4px 9px",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 13,
      height: 13
    }
  }, iconLeft) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
/**
 * Kinva Card — surface container.
 * variant: raised (shadow) | outline (beige hairline) | sticker (chunky ink offset).
 */
function Card({
  children,
  variant = "raised",
  padding = "var(--space-5)",
  interactive = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    raised: {
      background: "var(--color-surface-card)",
      border: "var(--border-hair) solid var(--color-border-subtle)",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)"
    },
    outline: {
      background: "var(--color-surface-raised)",
      border: "var(--border-2) solid var(--color-border-strong)",
      boxShadow: "none"
    },
    sticker: {
      background: "var(--color-surface-raised)",
      border: "var(--border-3) solid var(--kinva-ink-900)",
      boxShadow: "var(--shadow-sticker)"
    }
  };
  const v = variants[variant] || variants.raised;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      ...v,
      cursor: interactive ? "pointer" : "default",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/PriceTag.jsx
try { (() => {
/**
 * Kinva PriceTag — Ringgit price display with optional strikethrough & unit.
 * The signature retail price look. size: sm | md | lg.
 */
function PriceTag({
  amount,
  was,
  unit,
  currency = "RM",
  size = "md",
  tone = "brand",
  style = {}
}) {
  const sizes = {
    sm: {
      cur: 11,
      main: 17,
      dec: 11,
      was: 12
    },
    md: {
      cur: 13,
      main: 24,
      dec: 14,
      was: 13
    },
    lg: {
      cur: 16,
      main: 36,
      dec: 18,
      was: 15
    }
  };
  const s = sizes[size] || sizes.md;
  const color = tone === "ink" ? "var(--kinva-ink-900)" : "var(--kinva-red-600)";
  const [intPart, decPart] = Number(amount).toFixed(2).split(".");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 8,
      fontFamily: "var(--font-heading)",
      whiteSpace: "nowrap",
      flexWrap: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      color,
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.cur,
      marginRight: 2,
      alignSelf: "flex-start",
      marginTop: 2
    }
  }, currency), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.main,
      lineHeight: 1,
      letterSpacing: "-0.01em"
    }
  }, intPart), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.dec
    }
  }, ".", decPart)), was != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: s.was,
      color: "var(--color-text-muted)",
      textDecoration: "line-through",
      whiteSpace: "nowrap"
    }
  }, currency, " ", Number(was).toFixed(2)) : null, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: s.was,
      fontWeight: 500,
      color: "var(--color-text-muted)"
    }
  }, unit) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProductCard.jsx
try { (() => {
/**
 * Kinva ProductCard — catalog tile. Composes PriceTag, Badge and Button.
 * Pass a real product photo via `image`; otherwise a neutral placeholder shows.
 */
function ProductCard({
  image,
  brand,
  title,
  sku,
  price,
  was,
  unit = "/ box",
  badge,
  badgeTone = "brand",
  inStock = true,
  onAdd,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "var(--color-surface-card)",
      border: "var(--border-hair) solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      background: "var(--kinva-white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "10%"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--kinva-cream-400)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m7.5 4.27 9 5.15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3.3 7 8.7 5 8.7-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22V12"
  }))), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    variant: "solid"
  }, badge)) : null, !inStock ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    variant: "solid"
  }, "Out of stock")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "var(--space-4)"
    }
  }, brand ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--color-accent-hover)"
    }
  }, brand) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 15.5,
      lineHeight: 1.25,
      color: "var(--color-text-strong)"
    }
  }, title), sku ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--color-text-muted)"
    }
  }, sku) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    was: was,
    unit: unit,
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    fullWidth: true,
    disabled: !inStock,
    onClick: onAdd,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-cart"
    })
  }, inStock ? "Add to cart" : "Notify me"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
/** Kinva Tag — filter / category chip. Optionally selectable or removable. */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style = {}
}) {
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    role: clickable ? "button" : undefined,
    tabIndex: clickable ? 0 : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      padding: "7px 13px",
      borderRadius: "var(--radius-pill)",
      border: `var(--border-1) solid ${selected ? "var(--kinva-ink-900)" : "var(--color-border-strong)"}`,
      background: selected ? "var(--kinva-ink-900)" : "var(--color-surface-raised)",
      color: selected ? "var(--kinva-white)" : "var(--color-text-body)",
      cursor: clickable ? "pointer" : "default",
      whiteSpace: "nowrap",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    "aria-label": "Remove",
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/**
 * Kinva Alert — inline message banner.
 * tone: info | success | warning | danger | brand.
 */
function Alert({
  tone = "info",
  title,
  children,
  icon = null,
  onClose,
  style = {}
}) {
  const map = {
    info: ["var(--kinva-info-100)", "var(--kinva-info-500)", "#1c4f8a"],
    success: ["var(--kinva-success-100)", "var(--kinva-success-500)", "#1d6b40"],
    warning: ["var(--kinva-warning-100)", "var(--kinva-warning-500)", "#8a5a06"],
    danger: ["var(--kinva-danger-100)", "var(--kinva-danger-500)", "var(--kinva-red-700)"],
    brand: ["var(--kinva-red-050)", "var(--kinva-red-500)", "var(--kinva-red-700)"]
  };
  const [bg, accent, fg] = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${accent}`,
      padding: "14px 16px",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 20,
      height: 20,
      color: accent,
      flex: "none",
      marginTop: 1
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14.5,
      color: fg,
      marginBottom: children ? 3 : 0
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-text-body)",
      lineHeight: 1.45
    }
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: fg,
      display: "inline-flex",
      padding: 2,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Kinva Checkbox — sturdy ink-outline box with red check. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isOn = onChange ? checked : internal;
  const uid = id || React.useId();
  const toggle = () => {
    if (disabled) return;
    if (onChange) onChange(!isOn);else setInternal(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: uid,
    type: "checkbox",
    checked: isOn,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: `var(--border-2) solid ${isOn ? "var(--kinva-red-500)" : "var(--kinva-ink-900)"}`,
      background: isOn ? "var(--kinva-red-500)" : "var(--color-surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, isOn ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--color-text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kinva Input — labelled text field with optional leading icon, helper & error.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  helper,
  error,
  disabled = false,
  required = false,
  prefix,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const invalid = Boolean(error);
  const borderColor = invalid ? "var(--kinva-danger-500)" : focus ? "var(--kinva-ink-900)" : "var(--color-border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--color-text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--kinva-red-500)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: disabled ? "var(--kinva-cream-200)" : "var(--color-surface-raised)",
      border: `var(--border-2) solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: "0 14px",
      height: 46,
      transition: "border-color var(--dur-fast) var(--ease-out)",
      boxShadow: focus && !invalid ? "0 0 0 3px var(--kinva-orange-100)" : "none"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      color: "var(--color-text-muted)"
    }
  }, iconLeft) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--color-text-muted)"
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--color-text-strong)",
      padding: "12px 0"
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--kinva-danger-500)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--color-text-muted)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
/** Kinva QuantityStepper — bulk-order quantity control with −/+ . */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 9999,
  step = 1,
  onChange,
  size = "md",
  style = {}
}) {
  const [internal, setInternal] = React.useState(value);
  const val = onChange ? value : internal;
  const set = n => {
    const clamped = Math.max(min, Math.min(max, n));
    if (onChange) onChange(clamped);else setInternal(clamped);
  };
  const dim = size === "sm" ? 34 : 42;
  const btn = (label, fn, disabled) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: fn,
    style: {
      width: dim,
      height: dim,
      flex: "none",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      background: "transparent",
      color: disabled ? "var(--kinva-ink-300)" : "var(--kinva-ink-900)",
      fontSize: 20,
      fontWeight: 700,
      fontFamily: "var(--font-heading)",
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, label === "Decrease" ? "\u2212" : "+");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "var(--border-2) solid var(--kinva-ink-900)",
      borderRadius: "var(--radius-md)",
      background: "var(--color-surface-raised)",
      overflow: "hidden",
      ...style
    }
  }, btn("Decrease", () => set(val - step), val <= min), /*#__PURE__*/React.createElement("input", {
    value: val,
    onChange: e => {
      const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
      set(Number.isNaN(n) ? min : n);
    },
    inputMode: "numeric",
    style: {
      width: 46,
      height: dim,
      textAlign: "center",
      border: "none",
      outline: "none",
      borderLeft: "var(--border-2) solid var(--color-border-subtle)",
      borderRight: "var(--border-2) solid var(--color-border-subtle)",
      background: "transparent",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: 15,
      color: "var(--color-text-strong)"
    }
  }), btn("Increase", () => set(val + step), val >= max));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Kinva Select — labelled dropdown built on a native <select> for reliability. */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  style = {}
}) {
  const uid = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--color-text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: uid,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: 46,
      padding: "0 42px 0 14px",
      borderRadius: "var(--radius-md)",
      border: `var(--border-2) solid ${focus ? "var(--kinva-ink-900)" : "var(--color-border-strong)"}`,
      background: disabled ? "var(--kinva-cream-200)" : "var(--color-surface-raised)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--color-text-strong)",
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--kinva-orange-100)" : "none"
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--kinva-ink-700)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Kinva Tabs — underline tab navigation.
 * items: [{ id, label, badge? }]. Controlled via value + onChange.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (onChange) onChange(id);else setInternal(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "var(--border-2) solid var(--color-border-subtle)",
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-heading)",
        fontWeight: on ? 700 : 600,
        fontSize: 15,
        color: on ? "var(--color-text-strong)" : "var(--color-text-muted)",
        padding: "12px 16px",
        marginBottom: -2,
        borderBottom: `3px solid ${on ? "var(--kinva-red-500)" : "transparent"}`,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, it.label, it.badge != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 500,
        background: on ? "var(--kinva-red-100)" : "var(--kinva-cream-200)",
        color: on ? "var(--kinva-red-700)" : "var(--color-text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "2px 7px",
        lineHeight: 1.4
      }
    }, it.badge) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Cart.jsx
try { (() => {
// Kinva storefront — Cart / checkout summary view
const Icon = window.KINVA.Icon;
const {
  Button,
  QuantityStepper,
  PriceTag,
  Alert,
  IconButton
} = window.KinvaDesignSystem_573cf8;
function Cart({
  items,
  onQty,
  onRemove,
  onBack,
  onCheckout
}) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const FREE_AT = 150;
  const shipping = subtotal >= FREE_AT || subtotal === 0 ? 0 : 12;
  const total = subtotal + shipping;
  const toFree = Math.max(0, FREE_AT - subtotal);
  if (items.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: "0 auto",
        padding: "80px 24px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      style: {
        width: 48,
        height: 48,
        color: "var(--kinva-cream-400)"
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: 16
      }
    }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--color-text-muted)",
        marginBottom: 20
      }
    }, "Add some bulk deals to get started."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: onBack,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left"
      })
    }, "Browse catalog"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "28px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      margin: "0 0 24px"
    }
  }, "Your cart ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-muted)",
      fontWeight: 600,
      fontSize: 22
    }
  }, "(", items.length, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, toFree > 0 ? /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "truck"
    })
  }, "Add ", /*#__PURE__*/React.createElement("strong", null, "RM ", toFree.toFixed(2)), " more to unlock ", /*#__PURE__*/React.createElement("strong", null, "free shipping"), ".") : /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle"
    })
  }, "You've unlocked ", /*#__PURE__*/React.createElement("strong", null, "free shipping"), "!"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      background: "var(--color-surface-card)",
      border: "var(--border-hair) solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      flex: "none",
      background: "#fff",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      border: "var(--border-hair) solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: it.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--color-accent-hover)"
    }
  }, it.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 15.5,
      color: "var(--color-text-strong)"
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--color-text-muted)"
    }
  }, it.sku, " \xB7 ", it.unit)), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: it.qty,
    min: 1,
    onChange: n => onQty(it.id, n),
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    amount: it.price * it.qty,
    size: "md",
    tone: "ink"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2"
    }),
    label: "Remove",
    variant: "ghost",
    size: "sm",
    onClick: () => onRemove(it.id)
  })))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--color-surface-raised)",
      border: "var(--border-2) solid var(--kinva-ink-900)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      position: "sticky",
      top: 96,
      boxShadow: "var(--shadow-sticker)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 16px"
    }
  }, "Order summary"), /*#__PURE__*/React.createElement(Row, {
    k: "Subtotal",
    v: `RM ${subtotal.toFixed(2)}`
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Shipping",
    v: shipping === 0 ? "FREE" : `RM ${shipping.toFixed(2)}`,
    accent: shipping === 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--color-border-subtle)",
      margin: "14px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 18
    }
  }, "Total"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: total,
    size: "lg"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onCheckout,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Checkout"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--color-text-muted)",
      textAlign: "center",
      marginTop: 12,
      marginBottom: 0
    }
  }, "Buy-back guarantee on all items \xB7 Pay on delivery available"))));
}
function Row({
  k,
  v,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14,
      color: accent ? "var(--kinva-success-500)" : "var(--color-text-strong)"
    }
  }, v));
}
window.KINVA.Cart = Cart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Footer.jsx
try { (() => {
// Kinva storefront — footer
const Icon = window.KINVA.Icon;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--kinva-ink-900)",
      color: "var(--kinva-cream-200)",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "48px 24px 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/kinva-logo-badge.png",
    alt: "Kinva",
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kinva-display",
    style: {
      color: "#fff",
      fontSize: 26
    }
  }, "KINVA")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-zh)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--kinva-amber-400)",
      margin: "0 0 6px"
    }
  }, "\u4F4E\u95E8\u69DB\u6279\u53D1\uFF0C\u521B\u4E1A\u66F4\u6709\u4FDD\u969C\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--kinva-ink-300)",
      margin: 0,
      maxWidth: 320
    }
  }, "\u5E86\u534E\u4E00\u7AD9\u5F0F\u6279\u53D1\u5546 \xB7 Your one-stop stationery wholesale in Kapar, Klang. Trusted since 2004.")), /*#__PURE__*/React.createElement(FootCol, {
    title: "Shop",
    links: ["Pens & writing", "Paper & notebooks", "Art & colour", "Office & filing"]
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Wholesale",
    links: ["Bulk pricing", "Buy-back guarantee", "Free shipping", "Become a reseller"]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 14,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      margin: "0 0 14px"
    }
  }, "Visit us"), /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      gap: 8,
      fontSize: 14,
      color: "var(--kinva-ink-300)",
      margin: "0 0 8px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    style: {
      width: 16,
      height: 16,
      flex: "none",
      marginTop: 2
    }
  }), " Kapar, Klang, Selangor"), /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      gap: 8,
      fontSize: 14,
      color: "var(--kinva-ink-300)",
      margin: "0 0 8px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    style: {
      width: 16,
      height: 16,
      flex: "none",
      marginTop: 2
    }
  }), " +60 3-XXXX XXXX"), /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      gap: 8,
      fontSize: 14,
      color: "var(--kinva-ink-300)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    style: {
      width: 16,
      height: 16,
      flex: "none",
      marginTop: 2
    }
  }), " Mon\u2013Sat \xB7 9am\u20136pm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8,
      fontSize: 12.5,
      color: "var(--kinva-ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Kinva Wholesale. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Free shipping \xB7 Buy-back guarantee \xB7 Genuine brands"))));
}
function FootCol({
  title,
  links
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 14,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      margin: "0 0 14px"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: "var(--kinva-ink-300)",
      textDecoration: "none"
    }
  }, l)))));
}
window.KINVA.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
// Kinva storefront — top header / nav bar
const Icon = window.KINVA.Icon;
const {
  IconButton
} = window.KinvaDesignSystem_573cf8;
function Header({
  cartCount,
  onNav,
  onCart,
  query,
  onQuery,
  view
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--color-surface-raised)",
      borderBottom: "var(--border-hair) solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--kinva-ink-900)",
      color: "var(--kinva-cream-100)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      textAlign: "center",
      padding: "7px 16px",
      letterSpacing: ".01em"
    }
  }, "Free shipping on bulk orders \xB7 Buy-back guarantee \xB7 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--kinva-amber-400)"
    }
  }, "\u4F4E\u95E8\u69DB\u6279\u53D1\uFF0C\u521B\u4E1A\u66F4\u6709\u4FDD\u969C")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 24px",
      height: 76,
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/kinva-logo-badge.png",
    alt: "Kinva",
    style: {
      width: 52,
      height: 52,
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kinva-display",
    style: {
      fontSize: 26
    }
  }, "KINVA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--color-text-muted)",
      letterSpacing: ".12em",
      textTransform: "uppercase"
    }
  }, "Stationery Wholesale"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 520,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      width: 18,
      height: 18,
      color: "var(--color-text-muted)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "Search pens, boxes, brands\u2026",
    style: {
      width: "100%",
      height: 46,
      paddingLeft: 42,
      paddingRight: 14,
      border: "var(--border-2) solid var(--color-border-strong)",
      borderRadius: "var(--radius-pill)",
      background: "var(--kinva-cream-100)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--color-text-strong)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("listing"),
    style: navBtn(view === "listing")
  }, "Catalog"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("home"),
    style: navBtn(false)
  }, "Deals"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart"
    }),
    label: "Cart",
    variant: "primary",
    onClick: onCart
  }), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -6,
      right: -6,
      minWidth: 20,
      height: 20,
      padding: "0 5px",
      background: "var(--kinva-amber-400)",
      color: "var(--kinva-ink-900)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      borderRadius: "var(--radius-pill)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid var(--color-surface-raised)"
    }
  }, cartCount) : null))));
}
function navBtn(active) {
  return {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: 14.5,
    color: active ? "var(--kinva-red-600)" : "var(--color-text-body)",
    padding: "10px 12px",
    borderRadius: "var(--radius-sm)"
  };
}
window.KINVA.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Kinva storefront — Home / landing view
const Icon = window.KINVA.Icon;
const {
  Button,
  Badge,
  ProductCard
} = window.KinvaDesignSystem_573cf8;
function Guarantee({
  icon,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--kinva-red-050)",
      color: "var(--kinva-red-500)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--color-text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-text-muted)"
    }
  }, sub)));
}
function Home({
  onOpenProduct,
  onShopAll,
  onAdd
}) {
  const featured = window.KINVA.PRODUCTS.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--kinva-red-500)",
      color: "#fff",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "56px 24px 64px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(255,255,255,.16)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: ".08em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    style: {
      width: 15,
      height: 15
    }
  }), " Kapar, Klang \xB7 Est. 2004"), /*#__PURE__*/React.createElement("h1", {
    className: "kinva-display",
    style: {
      color: "#fff",
      fontSize: 72,
      margin: "18px 0 8px"
    }
  }, "Your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--kinva-amber-400)"
    }
  }, "one-stop"), /*#__PURE__*/React.createElement("br", null), "stationery wholesale"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-zh)",
      fontWeight: 700,
      fontSize: 22,
      margin: "0 0 8px",
      color: "var(--kinva-cream-100)"
    }
  }, "\u4F4E\u95E8\u69DB\u6279\u53D1\uFF0C\u521B\u4E1A\u66F4\u6709\u4FDD\u969C\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.5,
      maxWidth: 460,
      color: "rgba(255,255,255,.92)",
      margin: "0 0 24px"
    }
  }, "High-value bulk buying for shops, schools and new entrepreneurs \u2014 with free shipping and a buy-back guarantee."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onShopAll,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Shop the catalog"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onShopAll
  }, "See bulk deals"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      padding: 18,
      boxShadow: "var(--shadow-xl)",
      transform: "rotate(-2deg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/fc-click.jpg",
    alt: "Faber-Castell",
    style: {
      width: "100%",
      borderRadius: "var(--radius-lg)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: -16,
      left: -16,
      background: "var(--kinva-amber-400)",
      color: "var(--kinva-ink-900)",
      fontFamily: "var(--font-display)",
      fontSize: 26,
      padding: "12px 18px",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sticker)",
      border: "var(--border-3) solid var(--kinva-ink-900)",
      transform: "rotate(-6deg)"
    }
  }, "SAVE MORE")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-raised)",
      borderBottom: "var(--border-hair) solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "24px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Guarantee, {
    icon: "truck",
    title: "Free shipping",
    sub: "On qualifying bulk orders"
  }), /*#__PURE__*/React.createElement(Guarantee, {
    icon: "rotate-ccw",
    title: "Buy-back guarantee",
    sub: "Return unsold stock"
  }), /*#__PURE__*/React.createElement(Guarantee, {
    icon: "badge-percent",
    title: "Low minimums",
    sub: "Start small, scale up"
  }), /*#__PURE__*/React.createElement(Guarantee, {
    icon: "shield-check",
    title: "21 years trusted",
    sub: "Genuine brands only"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kinva-overline"
  }, "Save more with bulk"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      margin: "4px 0 0"
    }
  }, "Bestsellers this month")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onShopAll,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, featured.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, p, {
    onAdd: e => {
      if (e && e.stopPropagation) e.stopPropagation();
      onAdd(p);
    }
  })))))));
}
window.KINVA.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
// Kinva storefront — Product detail view
const Icon = window.KINVA.Icon;
const {
  Button,
  Badge,
  PriceTag,
  QuantityStepper,
  Alert,
  Tag
} = window.KinvaDesignSystem_573cf8;
function Spec({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "11px 0",
      borderBottom: "var(--border-hair) solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--color-text-strong)"
    }
  }, v));
}
function ProductDetail({
  product,
  onBack,
  onAdd
}) {
  const p = product;
  const [qty, setQty] = React.useState(p.moq || 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "24px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--color-text-muted)",
      padding: "8px 0",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " Back to catalog"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      border: "var(--border-hair) solid var(--color-border-subtle)",
      padding: 24,
      position: "relative",
      boxShadow: "var(--shadow-sm)"
    }
  }, p.badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badgeTone,
    variant: "solid"
  }, p.badge)) : null, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.title,
    style: {
      width: "100%",
      borderRadius: "var(--radius-lg)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 12
    }
  }, [p.image, p.image, p.image].map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 80,
      height: 80,
      borderRadius: "var(--radius-md)",
      background: "#fff",
      overflow: "hidden",
      border: `var(--border-2) solid ${i === 0 ? "var(--kinva-ink-900)" : "var(--color-border-subtle)"}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: 6
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kinva-overline",
    style: {
      color: "var(--color-accent-hover)"
    }
  }, p.brand), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      margin: "6px 0 10px",
      lineHeight: 1.1
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--color-text-muted)"
    }
  }, "SKU ", p.sku), /*#__PURE__*/React.createElement(Badge, {
    tone: p.inStock ? "success" : "neutral",
    variant: "soft"
  }, p.inStock ? "In stock" : "Out of stock")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    amount: p.price,
    was: p.was,
    size: "lg"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-text-muted)",
      margin: "0 0 20px"
    }
  }, p.unit, " \xB7 MOQ ", p.moq, " ", p.moq > 1 ? "boxes" : "box", " \xB7 pack of ", p.pack), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--color-text-body)",
      margin: "0 0 24px"
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    min: p.moq || 1,
    step: 1,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !p.inStock,
    onClick: () => onAdd(p, qty),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart"
    }),
    style: {
      flex: 1
    }
  }, p.inStock ? `Add ${qty} to cart` : "Notify me")), /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "truck"
    }),
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Free shipping"), " when your order reaches RM 150."), /*#__PURE__*/React.createElement(Alert, {
    tone: "brand",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-ccw"
    }),
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Buy-back guarantee"), " \u2014 return unsold stock within 60 days."), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 4px"
    }
  }, "Specifications"), /*#__PURE__*/React.createElement(Spec, {
    k: "Brand",
    v: p.brand
  }), /*#__PURE__*/React.createElement(Spec, {
    k: "Pack size",
    v: p.pack
  }), /*#__PURE__*/React.createElement(Spec, {
    k: "Min. order qty",
    v: `${p.moq} ${p.moq > 1 ? "boxes" : "box"}`
  }), /*#__PURE__*/React.createElement(Spec, {
    k: "Category",
    v: p.cat === "art" ? "Art & colour" : "Pens & writing"
  }))));
}
window.KINVA.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductListing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Kinva storefront — Catalog / product listing view
const Icon = window.KINVA.Icon;
const {
  Tabs,
  Tag,
  Select,
  Checkbox,
  ProductCard,
  Badge
} = window.KinvaDesignSystem_573cf8;
function ProductListing({
  products,
  cat,
  onCat,
  query,
  onOpenProduct,
  onAdd
}) {
  const [brandSel, setBrandSel] = React.useState([]);
  const [inStockOnly, setInStockOnly] = React.useState(false);
  const [sort, setSort] = React.useState("popular");
  const toggleBrand = b => setBrandSel(s => s.includes(b) ? s.filter(x => x !== b) : [...s, b]);
  let list = products.filter(p => cat === "all" || p.cat === cat);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(p => (p.title + p.brand + p.sku).toLowerCase().includes(q));
  }
  if (brandSel.length) list = list.filter(p => brandSel.includes(p.brand));
  if (inStockOnly) list = list.filter(p => p.inStock);
  list = [...list].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "28px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kinva-overline"
  }, "Catalog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      margin: "4px 0 20px"
    }
  }, "Browse wholesale stationery"), /*#__PURE__*/React.createElement(Tabs, {
    value: cat,
    onChange: onCat,
    items: window.KINVA.CATEGORIES.map(c => ({
      id: c.id,
      label: c.label,
      badge: c.count
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "248px 1fr",
      gap: 32,
      marginTop: 28,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--color-surface-card)",
      border: "var(--border-hair) solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 12px"
    }
  }, "Brand"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 22
    }
  }, window.KINVA.BRANDS.map(b => /*#__PURE__*/React.createElement(Tag, {
    key: b,
    selected: brandSel.includes(b),
    onClick: () => toggleBrand(b)
  }, b))), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 12px"
    }
  }, "Availability"), /*#__PURE__*/React.createElement(Checkbox, {
    label: "In stock only",
    checked: inStockOnly,
    onChange: setInStockOnly
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--color-border-subtle)",
      margin: "22px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--kinva-orange-050)",
      borderRadius: "var(--radius-md)",
      padding: 14,
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    style: {
      width: 18,
      height: 18,
      color: "var(--kinva-orange-600)",
      flex: "none",
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--kinva-ink-700)"
    }
  }, "Spend RM 150+ for ", /*#__PURE__*/React.createElement("strong", null, "free shipping"), " across Klang Valley."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-text-strong)"
    }
  }, list.length), " products"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: sort,
    onChange: e => setSort(e.target.value),
    options: [{
      value: "popular",
      label: "Most popular"
    }, {
      value: "low",
      label: "Lowest price"
    }, {
      value: "high",
      label: "Highest price"
    }]
  }))), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px 0",
      textAlign: "center",
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package-search",
    style: {
      width: 40,
      height: 40
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, "No products match your filters.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, list.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, p, {
    onAdd: e => {
      if (e && e.stopPropagation) e.stopPropagation();
      onAdd(p);
    }
  }))))))));
}
window.KINVA.ProductListing = ProductListing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductListing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
// Kinva storefront sample catalog — fake data for the UI kit.
window.KINVA = window.KINVA || {};
window.KINVA.PRODUCTS = [{
  id: "fc-click-x7",
  brand: "Faber-Castell",
  title: "Click X7 Ball Pen 0.7mm",
  sku: "FC-CLICK-X7",
  image: "../../assets/products/fc-click.jpg",
  price: 38.90,
  was: 46.00,
  unit: "/ box 60",
  cat: "pens",
  badge: "Bestseller",
  badgeTone: "brand",
  inStock: true,
  moq: 1,
  pack: "60 pcs / box",
  desc: "Retractable ballpoint, smooth 0.7mm tip. Classroom & office favourite — buy by the box and save."
}, {
  id: "fc-grip-x5",
  brand: "Faber-Castell",
  title: "Grip X5 Ball Pen 0.5mm",
  sku: "FC-GRIP-X5",
  image: "../../assets/products/fc-grip.jpg",
  price: 41.50,
  unit: "/ box 40",
  cat: "pens",
  inStock: true,
  moq: 1,
  pack: "40 pcs / box",
  desc: "Triangular soft-grip barrel, fine 0.5mm line. Comfortable for long writing sessions."
}, {
  id: "mg-r3",
  brand: "M&G",
  title: "R3 Retractable Gel Pen 0.5mm",
  sku: "AGP02372",
  image: "../../assets/products/mg-r3.jpg",
  price: 22.80,
  was: 27.00,
  unit: "/ box 12",
  cat: "pens",
  badge: "−15%",
  badgeTone: "danger",
  inStock: true,
  moq: 2,
  pack: "12 pcs / box",
  desc: "Comfortable rubber grip, super-smooth blue gel ink. Best-selling everyday gel pen."
}, {
  id: "mg-r5",
  brand: "M&G",
  title: "R5 Retractable Gel Pen 0.7mm",
  sku: "AGP12371",
  image: "../../assets/products/mg-r5.jpg",
  price: 24.50,
  unit: "/ box 12",
  cat: "pens",
  inStock: true,
  moq: 2,
  pack: "12 pcs / box",
  desc: "Soft rubber grip, smooth medium 0.7mm line. Reliable blue ink gel pen."
}, {
  id: "stabilo-pens",
  brand: "STABILO",
  title: "Liner 808 Ball Pen (Asst.)",
  sku: "ST-808-50",
  image: "../../assets/products/stabilo-pens.jpg",
  price: 33.00,
  unit: "/ box 50",
  cat: "pens",
  badge: "Popular",
  badgeTone: "accent",
  inStock: true,
  moq: 1,
  pack: "50 pcs / box",
  desc: "Ultra-smooth, less-smudging, water-proof ink. Assorted barrel colours."
}, {
  id: "nieki-ball",
  brand: "Nieki",
  title: "No.9002 Ball Point Pen 0.7mm",
  sku: "NK-9002",
  image: "../../assets/products/nieki.jpg",
  price: 14.90,
  was: 18.00,
  unit: "/ box 50",
  cat: "pens",
  inStock: true,
  moq: 4,
  pack: "50 pcs / box",
  desc: "Budget workhorse ballpoint. Writes on any surface, vividly. Lowest cost per pen."
}, {
  id: "stabilo-pencils",
  brand: "STABILO",
  title: "Swans 24+2 Colour Pencils",
  sku: "ST-SWANS-24",
  image: "../../assets/products/stabilo-pencils.jpg",
  price: 9.80,
  unit: "/ pack",
  cat: "art",
  badge: "Back to school",
  badgeTone: "accent",
  inStock: true,
  moq: 6,
  pack: "26 pencils / pack",
  desc: "24 colours + 2 metallic. Bright, break-resistant leads. Hugely popular for schools."
}, {
  id: "pilot-g2",
  brand: "Pilot",
  title: "G-2 Gel Pen 0.5/0.7/1.0mm",
  sku: "BL-G2",
  image: "../../assets/products/pilot-g2.jpg",
  price: 52.00,
  was: 60.00,
  unit: "/ box 12",
  cat: "pens",
  badge: "Premium",
  badgeTone: "neutral",
  inStock: false,
  moq: 1,
  pack: "12 pcs / box",
  desc: "The iconic G-2 rollerball gel. Extra-fine to broad. Blue, black & red ink available."
}];
window.KINVA.CATEGORIES = [{
  id: "all",
  label: "All products",
  count: "1.2k"
}, {
  id: "pens",
  label: "Pens & writing",
  count: 128
}, {
  id: "paper",
  label: "Paper & notebooks",
  count: 96
}, {
  id: "art",
  label: "Art & colour",
  count: 64
}, {
  id: "office",
  label: "Office & filing",
  count: 210
}];
window.KINVA.BRANDS = ["Faber-Castell", "M&G", "STABILO", "Pilot", "Nieki"];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/icons.jsx
try { (() => {
// Inline-SVG Lucide icon for React apps (stable across re-renders, unlike data-lucide + createIcons).
function toPascal(name) {
  return name.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
}
function Icon({
  name,
  size = 20,
  stroke = 2,
  color,
  style = {}
}) {
  const reg = window.lucide && window.lucide.icons || {};
  const node = reg[toPascal(name)] || reg[name];
  const css = {
    display: "inline-flex",
    verticalAlign: "middle",
    flex: "none",
    ...style
  };
  if (!node) return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      ...css
    }
  });
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: css
  }, node.map((child, i) => React.createElement(child[0], {
    key: i,
    ...child[1]
  })));
}
window.KINVA = window.KINVA || {};
window.KINVA.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
