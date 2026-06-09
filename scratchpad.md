# Kinva 品牌网站 — 设计稿

## 客户决定
- 结构：四个独立页面（首页 · 介绍 · 服务 · 联系）
- 语言：单语展示 + 顶部切换（默认中文，可切 EN）
- 经营年数：超过 25 年
- 联系方式：占位（手机 / 电话 / 邮箱 / 地址 Kapar, Klang）
- 商品：不展示具体商品，展示「服务类型」（如 低门槛创业配套）
- Hero：一个最佳方向（不做多方案）
- 必须：WhatsApp 按钮（悬浮 FAB + header CTA）、联系表单

## 视觉系统（来自 Kinva Design System）
- 底色 cream-100；卡片 cream-050/white；深色带 ink-900；CTA 带 red-500
- 红主导、橙点缀 (~70/30)、绿仅用于 WhatsApp FAB 与成功态
- 字体：Anton（英文/数字 display），Archivo（标题UI），Figtree（英文正文），
  Noto Sans SC 700-900（中文标题/正文），JetBrains Mono（电话/编号）
- 形状：sticker 卡（3px ink 轮廓 + 4px offset 阴影）用于「为什么选择我们」高亮；
  raised 卡用于次级；pill 用于 chip / CTA；radius-xl 用于 hero 面板
- overline 橙色大写小标题；icons 用 Lucide（2px outline，红/ink）
- DS 组件：Button / Card / Badge / Input / Select / Checkbox / Alert / Tag

## 页面标题风格：短名词短语（教科书式）
- 首页 Hero H1 = 品牌 slogan「低门槛批发，创业更有保障」
- 介绍 关于庆华批发商
- 服务 我们的服务
- 联系 联系我们

## 站点结构
header（全页）: logo+wordmark | 首页 介绍 服务 联系 | 中/EN 切换 | WhatsApp CTA
footer（全页，深色）: 品牌+slogan / 快速链接 / 联系方式 / 合作品牌 / 版权
悬浮 WhatsApp FAB（绿，全页右下）

### 首页 index
1. Hero：eyebrow + slogan H1 + 副文 + 双CTA + 信任行；右侧红色面板放大 logo + sticker chips
2. 合作品牌条：Faber-Castell · M&G · STABILO · Pilot · Nieki
3. 为什么选择我们：4 张 sticker 卡（免费送货 / 可退回保障 / 低门槛批发 / 超过25年）
4. 服务概览：3-4 服务预览卡 → 链接服务页
5. 数字带（深色 ink）：25+ 年 / 5 大品牌 / 免费送货 / 可退回（真实可支撑的点，避免编数据）
6. CTA 带（红）：准备好开始了吗 + WhatsApp + 联系
7. footer

### 介绍 about
- page header：关于庆华批发商
- 品牌故事（Kapar Klang，超过25年，使命：低门槛批发）+ image-slot 店面照
- 我们的承诺：免费送货 / 可退回保障 / 低起订量（卡）
- 合作品牌
- CTA

### 服务 services
- page header：我们的服务
- 服务卡：批发供货 / 零售 / 免费送货 / 可退回保障 / 校园·商铺供应 / 低门槛创业配套
- 特色块「低门槛创业配套」（featured，sticker 大块）
- 流程：联系 → 选货 → 下单 → 免费送货 → 卖不出可退（步骤）
- CTA

### 联系 contact
- page header：联系我们
- 左：联系信息（WhatsApp / 手机 / 电话 / 邮箱 / 地址 / 营业时间）+ 地点 image-slot
- 右：表单（姓名 / 电话 / 邮箱 / 咨询类型 select / 留言 / 同意）→ 成功 Alert
- footer

## 文件
- site.css（布局 + 排版类）
- lib/icon.jsx（Lucide Icon）
- lib/i18n.js（CONFIG 占位联系方式 + I18N.zh / I18N.en）
- lib/site.jsx（SiteHeader / SiteFooter / WhatsAppFab / useLang，挂 window）
- pages/home.jsx / about.jsx / services.jsx / contact.jsx
- index.html / about.html / services.html / contact.html
