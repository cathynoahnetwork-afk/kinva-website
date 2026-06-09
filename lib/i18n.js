/* ==========================================================================
   Kinva 品牌网站 — 配置 + 双语文案
   编辑文案 / 联系方式只需改这个文件。
   ⚠️ 联系方式为占位，请替换为真实信息。
   ========================================================================== */

window.KV = window.KV || {};

window.KV.CONFIG = {
  // ⚠️ 占位联系方式 —— 请替换 ----------------------------------------------
  whatsapp: "60123456789",            // 不含 + 号，用于 wa.me 链接
  whatsappMsg: "您好，我想咨询 Kinva 批发。",
  mobile: "xxx-xxx-xxxx",
  tel: "xxx-xxx-xxxx",
  email: "xxx@xxx.com",
  addressZh: "Kapar, Klang, Selangor, 马来西亚",
  addressEn: "Kapar, Klang, Selangor, Malaysia",
  hoursZh: "周一至周六 · 9:00 – 18:00",
  hoursEn: "Mon – Sat · 9:00 – 18:00",
  brands: ["Faber-Castell", "M&G", "STABILO", "Pilot"],
};

window.KV.waLink = function () {
  const c = window.KV.CONFIG;
  return "https://wa.me/" + c.whatsapp + "?text=" + encodeURIComponent(c.whatsappMsg);
};

window.KV.I18N = {
  /* ===================== 简体中文 ===================== */
  zh: {
    nav: { home: "首页", about: "介绍", services: "服务", contact: "联系" },
    brand: { zh: "庆华批发商", en: "Kinva Wholesale", tagline: "一站式文具批发" },
    cta: {
      whatsapp: "马上咨询",
      whatsappShort: "WhatsApp",
      contact: "联系我们",
      viewServices: "查看服务",
      learnMore: "了解更多",
      getStarted: "立即开始批发",
      send: "发送留言",
    },
    common: {
      brandsLabel: "供应品牌",
      free: "免费送货",
      buyback: "可退回保障",
      years: "超过 25 年",
    },
    home: {
      hero: {
        eyebrow: "庆华一站式批发商",
        title: "低门槛批发，创业更有保障。",
        sub: "庆华批发商为小本生意、杂货店与初创业者提供高性价比的文具批量采购。免费送货、卖不出可退回，让你以更低成本、更低风险开始你的生意。",
        panelEn: "EST. 2004",
        panelZh: "超过 25 年值得信赖",
      },
      why: {
        overline: "为什么选择我们",
        title: "低门槛 有保障",
        lead: "",
        items: [
          { icon: "rocket", title: "低门槛批发", text: "我们提供低门槛文具批发，适合小型企业、杂货店老板和创业者，不需要大量资金也能开始拿货经营。" },
          { icon: "shield-check", title: "可退货 更保障", text: "我们提供\u201c卖不出可退回\u201d的保障，帮助客户降低压货风险，让创业和补货更安心。" },
          { icon: "trophy", title: "25年经营经验", text: "我们拥有超过25年经验，提供高性价比文具与家具、免费运输服务，让客户用更低成本获得更完整的采购支持。" },
        ],
      },
      services: {
        overline: "我们的服务",
        title: "从入货到开店，一站搞定",
        lead: "批发、零售、创业配套与售后保障，全部在庆华。",
        items: [
          { icon: "package", title: "批发供货", text: "Faber-Castell、M&G、Pilot、STABILO 等品牌，批量更省。" },
          { icon: "store", title: "零售选购", text: "小量也欢迎，灵活补货，满足日常门店需求。" },
          { icon: "rocket", title: "低门槛创业配套", text: "为新手准备的入门组合，低成本起步开你的第一间店。" },
          { icon: "handshake", title: "售后与退换保障", text: "免费送货 + 可退回，全程为你的生意护航。" },
        ],
        link: "查看全部服务",
      },
      stats: {
        items: [
          { num: "25", unit: "年+", label: "值得信赖", sub: "服务本地小商家二十余载" },
          { num: "5", unit: "大品牌", label: "正货供应", sub: "Faber-Castell · M&G · Pilot…" },
          { num: "100", unit: "%", label: "免费送货", sub: "批量订单送货上门" },
          { num: "0", unit: "风险", label: "可退回保障", sub: "卖不出可退回" },
        ],
      },
      cta: { title: "准备好开始你的生意了吗？", lead: "WhatsApp 一条信息，我们帮你算清成本、配好货品、安排免费送货。" },
    },
    about: {
      head: {
        overline: "关于我们",
        title: "庆华批发商 · Kinva Wholesale",
        lead: "扎根 Kapar, Klang 的一站式文具批发与零售商，超过 25 年陪伴本地小本生意成长。",
      },
      story: {
        title: "让创业的门槛，低一点",
        paras: [
          "庆华批发商专注文具批发与零售，长期服务小本生意、杂货店东主与初次创业者。我们相信，开一间店不该需要庞大的资金与库存压力。",
          "因此，我们把门槛降到最低：低起订量、友好的批发价、免费送货，再加上卖不出可退回的保障——让你以更低成本、更低风险开始经营。",
          "我们供应 Faber-Castell、M&G、STABILO、Pilot、Nieki 等可靠品牌的正货，稳定货源，长期合作。专业、可信赖，是我们二十多年不变的承诺。",
        ],
        photoLabel: "拖入店面 / 仓库照片",
      },
      promise: {
        overline: "我们的承诺",
        title: "三件事，我们一直坚持",
        items: [
          { icon: "truck", title: "免费送货", text: "批量订单免运费，货送到门口。" },
          { icon: "rotate-ccw", title: "可退回保障", text: "卖不出可退回，入货零负担。" },
          { icon: "badge-check", title: "正货 · 低起订", text: "品牌正货，起订量低，价格友好。" },
        ],
      },
      cta: { title: "想了解更多？", lead: "随时 WhatsApp 我们，或到店面看看。我们就在 Kapar, Klang。" },
    },
    services: {
      head: {
        overline: "我们的服务",
        title: "一站式文具批发与创业支持",
        lead: "无论你是补货的店东，还是刚起步的创业者，我们都有适合你的方案。",
      },
      list: [
        { icon: "package", title: "批发供货", text: "Faber-Castell、M&G、Pilot、STABILO、Nieki 等品牌批量供应，量大更优惠。" },
        { icon: "store", title: "零售选购", text: "不必大批量也能买，灵活补货，适合门店日常所需。" },
        { icon: "truck", title: "免费送货", text: "批量订单免运费，省去物流安排，货直接送达。" },
        { icon: "rotate-ccw", title: "可退回保障", text: "卖不出可退回，让你放心尝试新品类、扩充货架。" },
        { icon: "graduation-cap", title: "校园 · 商铺供应", text: "为学校、文具店、杂货店提供稳定货源与定期补货。" },
        { icon: "rocket", title: "低门槛创业配套", text: "为新手量身配好的入门货品组合，低成本开第一间店。" },
      ],
      featured: {
        badge: "热门推荐",
        title: "低门槛创业配套",
        lead: "想开店却怕风险太大？这个配套就是为你准备的。我们帮你挑好畅销品类、配好起步货量，用最低的成本把店开起来。",
        points: [
          "低起订量，起步资金压力小",
          "畅销品类组合，省去选货烦恼",
          "免费送货，开箱即可上架",
          "卖不出可退回，零库存负担",
        ],
        cta: "咨询创业配套",
      },
      process: {
        overline: "合作流程",
        title: "五步开始你的批发",
        steps: [
          { title: "联系我们", text: "WhatsApp 或来电，告诉我们你的需求。" },
          { title: "选配货品", text: "我们依你的预算与客群推荐货品。" },
          { title: "确认下单", text: "确认品项与数量，简单几步完成。" },
          { title: "免费送货", text: "批量订单免运费，送货到门口。" },
          { title: "可退回保障", text: "卖不出可退回，安心经营。" },
        ],
      },
      cta: { title: "想知道哪个方案最适合你？", lead: "告诉我们你的生意，我们帮你配出最划算的批发方案。" },
    },
    contact: {
      head: {
        overline: "联系我们",
        title: "随时为你服务",
        lead: "WhatsApp、来电或填写下方表单，我们会尽快回复，帮你算成本、配货品、安排送货。",
      },
      info: {
        title: "联系方式",
        whatsapp: "WhatsApp",
        mobile: "手机",
        tel: "电话",
        email: "邮箱",
        address: "地址",
        hours: "营业时间",
      },
      locationLabel: "拖入店面位置图 / 地图截图",
      form: {
        title: "留下你的联系方式",
        lead: "填写表单，我们会主动联系你。",
        name: "称呼",
        namePh: "你的名字",
        phone: "联系电话",
        phonePh: "方便联系的号码",
        email: "电邮",
        emailPh: "you@shop.my",
        type: "咨询类型",
        typeOptions: ["批发供货", "低门槛创业配套", "零售选购", "其他咨询"],
        message: "留言",
        messagePh: "想咨询的货品、数量或其他需求…",
        consent: "我同意 Kinva 通过电话 / WhatsApp 联系我。",
        submit: "发送留言",
        successTitle: "已收到，谢谢你！",
        successBody: "我们会尽快联系你。若想更快回复，欢迎直接 WhatsApp 我们。",
        errRequired: "请填写此栏。",
        errEmail: "请输入有效的电邮。",
      },
    },
    footer: {
      tagline: "低门槛批发，创业更有保障。一站式文具批发与零售，扎根 Kapar, Klang，超过 25 年值得信赖。",
      linksTitle: "快速链接",
      contactTitle: "联系我们",
      brandsTitle: "合作品牌",
      rights: "© 2026 庆华批发商 Kinva Wholesale. 版权所有.",
      note: "EST. 2004 · 超过 25 年值得信赖",
    },
  },

  /* ===================== English ===================== */
  en: {
    nav: { home: "Home", about: "About", services: "Services", contact: "Contact" },
    brand: { zh: "Kinva Wholesale", en: "Kinva Wholesale", tagline: "One-Stop Stationery Wholesale" },
    cta: {
      whatsapp: "Chat on WhatsApp",
      whatsappShort: "WhatsApp",
      contact: "Contact us",
      viewServices: "View services",
      learnMore: "Learn more",
      getStarted: "Start ordering",
      send: "Send message",
    },
    common: {
      brandsLabel: "Brands we carry",
      free: "Free shipping",
      buyback: "Buy-back guarantee",
      years: "25+ years",
    },
    home: {
      hero: {
        eyebrow: "KINVA ONE-STOP WHOLESALE",
        title: "Low-barrier wholesale, a more secure start.",
        sub: "Kinva helps small shops, sundry stores and first-time entrepreneurs buy stationery in bulk at high value. Free shipping and a buy-back guarantee let you start trading at lower cost and lower risk.",
        panelEn: "EST. 2004",
        panelZh: "25+ years of trusted service",
      },
      why: {
        overline: "Why choose us",
        title: "A lower-barrier, lower-risk wholesale partner",
        lead: "For over two decades we have focused on one thing: making it easy and safe for anyone to stock up and open a shop.",
        items: [
          { icon: "truck", title: "Free shipping", text: "Bulk orders ship free, delivered to your door — no logistics hassle, no extra cost." },
          { icon: "rotate-ccw", title: "Buy-back guarantee", text: "Can't sell it? Return it. Stock new lines and expand your shelves with confidence." },
          { icon: "wallet", title: "Low-barrier bulk", text: "Low minimums and friendly prices. Enjoy wholesale rates without hoarding stock." },
          { icon: "shield-check", title: "25+ years of trust", text: "A stable, dependable local wholesaler that has served countless small shops." },
        ],
      },
      services: {
        overline: "Our services",
        title: "From stocking up to opening shop — sorted",
        lead: "Wholesale, retail, startup bundles and after-sales protection, all at Kinva.",
        items: [
          { icon: "package", title: "Wholesale supply", text: "Faber-Castell, M&G, Pilot, STABILO and more — bulk for less." },
          { icon: "store", title: "Retail purchase", text: "Small quantities welcome, flexible restocking for daily shop needs." },
          { icon: "rocket", title: "Startup bundle", text: "An entry kit for newcomers — open your first shop at low cost." },
          { icon: "handshake", title: "After-sales & returns", text: "Free shipping plus buy-back, protecting your business end to end." },
        ],
        link: "See all services",
      },
      stats: {
        items: [
          { num: "25", unit: "yrs+", label: "Trusted", sub: "Serving local shops for 20+ years" },
          { num: "5", unit: "brands", label: "Genuine supply", sub: "Faber-Castell · M&G · Pilot…" },
          { num: "100", unit: "%", label: "Free shipping", sub: "Bulk orders to your door" },
          { num: "0", unit: "risk", label: "Buy-back", sub: "Return what doesn't sell" },
        ],
      },
      cta: { title: "Ready to start your business?", lead: "One WhatsApp message and we'll cost it out, pack your goods and arrange free delivery." },
    },
    about: {
      head: {
        overline: "About us",
        title: "Kinva Wholesale · 庆华批发商",
        lead: "A one-stop stationery wholesaler and retailer rooted in Kapar, Klang — supporting local small businesses for over 25 years.",
      },
      story: {
        title: "Lowering the barrier to starting up",
        paras: [
          "Kinva specialises in stationery wholesale and retail, serving small shops, sundry-store owners and first-time entrepreneurs. We believe opening a shop shouldn't demand huge capital or stock pressure.",
          "So we keep the barrier low: small minimums, friendly wholesale prices, free shipping, plus a buy-back guarantee on what doesn't sell — letting you start at lower cost and lower risk.",
          "We supply genuine goods from trusted brands like Faber-Castell, M&G, STABILO, Pilot and Nieki, with steady supply and long-term partnership. Professional and dependable — our promise for over two decades.",
        ],
        photoLabel: "Drop a storefront / warehouse photo",
      },
      promise: {
        overline: "Our promise",
        title: "Three things we always stand by",
        items: [
          { icon: "truck", title: "Free shipping", text: "Bulk orders ship free, delivered to your door." },
          { icon: "rotate-ccw", title: "Buy-back guarantee", text: "Return what doesn't sell — zero stocking burden." },
          { icon: "badge-check", title: "Genuine · low minimums", text: "Genuine brands, low minimums, friendly prices." },
        ],
      },
      cta: { title: "Want to know more?", lead: "WhatsApp us anytime, or drop by the shop. We're in Kapar, Klang." },
    },
    services: {
      head: {
        overline: "Our services",
        title: "One-stop wholesale & startup support",
        lead: "Whether you're a shop owner restocking or an entrepreneur just starting out, we have a plan for you.",
      },
      list: [
        { icon: "package", title: "Wholesale supply", text: "Bulk supply of Faber-Castell, M&G, Pilot, STABILO, Nieki and more — more for less." },
        { icon: "store", title: "Retail purchase", text: "Buy without big minimums. Flexible restocking for everyday shop needs." },
        { icon: "truck", title: "Free shipping", text: "Bulk orders ship free — no logistics to arrange, delivered to you." },
        { icon: "rotate-ccw", title: "Buy-back guarantee", text: "Return what doesn't sell, so you can try new lines with confidence." },
        { icon: "graduation-cap", title: "Schools & shops", text: "Steady supply and regular restocking for schools, stationery and sundry stores." },
        { icon: "rocket", title: "Startup bundle", text: "A ready-made entry kit to open your first shop at low cost." },
      ],
      featured: {
        badge: "Most popular",
        title: "Low-barrier startup bundle",
        lead: "Want to open a shop but worried about risk? This bundle is for you. We pick best-selling lines and pack the right starting quantities so you can open at the lowest cost.",
        points: [
          "Low minimums — light on starting capital",
          "Best-selling mix — no guesswork picking goods",
          "Free shipping — ready to shelve on arrival",
          "Buy-back — zero stocking burden",
        ],
        cta: "Ask about the bundle",
      },
      process: {
        overline: "How it works",
        title: "Five steps to start wholesaling",
        steps: [
          { title: "Get in touch", text: "WhatsApp or call us with what you need." },
          { title: "Pick your goods", text: "We recommend goods to fit your budget and customers." },
          { title: "Confirm order", text: "Confirm items and quantities in a few simple steps." },
          { title: "Free delivery", text: "Bulk orders ship free, straight to your door." },
          { title: "Buy-back cover", text: "Return what doesn't sell — trade with peace of mind." },
        ],
      },
      cta: { title: "Not sure which plan fits?", lead: "Tell us about your business and we'll put together the best-value wholesale plan." },
    },
    contact: {
      head: {
        overline: "Contact us",
        title: "Here to help, anytime",
        lead: "WhatsApp, call, or fill in the form below. We'll reply quickly to cost it out, pack your goods and arrange delivery.",
      },
      info: {
        title: "Get in touch",
        whatsapp: "WhatsApp",
        mobile: "Mobile",
        tel: "Phone",
        email: "Email",
        address: "Address",
        hours: "Opening hours",
      },
      locationLabel: "Drop a storefront / map image",
      form: {
        title: "Leave your details",
        lead: "Fill in the form and we'll reach out to you.",
        name: "Name",
        namePh: "Your name",
        phone: "Phone",
        phonePh: "A number we can reach you on",
        email: "Email",
        emailPh: "you@shop.my",
        type: "Enquiry type",
        typeOptions: ["Wholesale supply", "Startup bundle", "Retail purchase", "Other enquiry"],
        message: "Message",
        messagePh: "Goods, quantities or anything else you'd like to ask…",
        consent: "I agree to let Kinva contact me by phone / WhatsApp.",
        submit: "Send message",
        successTitle: "Got it — thank you!",
        successBody: "We'll be in touch shortly. For a faster reply, WhatsApp us directly.",
        errRequired: "This field is required.",
        errEmail: "Please enter a valid email.",
      },
    },
    footer: {
      tagline: "Low-barrier wholesale, a more secure start. One-stop stationery wholesale & retail, rooted in Kapar, Klang — trusted for over 25 years.",
      linksTitle: "Quick links",
      contactTitle: "Contact",
      brandsTitle: "Brands we carry",
      rights: "© 2026 Kinva Wholesale 庆华批发商. All rights reserved.",
      note: "EST. 2004 · 25+ years of trusted service",
    },
  },
};
