# 庆华批发商 Kinva Wholesale 官网

一站式文具批发与零售商官网（Kapar, Klang）。

## 技术说明

- 纯静态网站，**无需构建步骤**（no build step）
- 通过 CDN 加载 React + Babel，浏览器内即时渲染 JSX
- 多页面：`index.html`（首页）、`about.html`、`services.html`、`contact.html`

## 部署（Vercel）

直接将本仓库导入 Vercel 即可：
- Framework Preset：**Other**
- Build Command：留空
- Output Directory：留空（根目录）

## 本地预览

任意静态服务器即可，例如：

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```
