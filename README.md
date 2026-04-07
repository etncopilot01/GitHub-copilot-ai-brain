# etnet AI — Product Website

A polished static marketing website for **etnet AI**, promoting the company's AI solutions:
**AI Stock Analysis** and **AI Chatbot**.

---

## 🚀 Live Site

Deployed via GitHub Pages:
**https://etncopilot01.github.io/GitHub-copilot-ai-brain/**

---

## 📁 Project Structure

```
.
├── index.html          # Main single-page site
├── css/
│   └── styles.css      # All styles (responsive, dark theme)
├── js/
│   └── main.js         # Interactivity (nav, FAQ accordion, scroll reveal)
├── favicon.svg         # SVG favicon
├── sitemap.xml         # SEO sitemap
├── robots.txt          # SEO robots file
└── README.md
```

---

## 🖥️ Local Preview

You need a simple HTTP server (opening `index.html` directly won't load fonts correctly over `file://`).

### Option 1 — Python (built-in, no install needed)

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Then open **http://localhost:8080** in your browser.

### Option 2 — Node.js (`npx`)

```bash
npx serve .
```

### Option 3 — VS Code Live Server

Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

---

## 🌐 Deploy to GitHub Pages

1. Push this branch (or merge to `main`).
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**.

GitHub Pages will build and publish the site automatically. The URL will be:
`https://<your-github-username>.github.io/<repo-name>/`

> **Tip:** Update the canonical URL and OG image paths in `index.html` and `sitemap.xml`
> to match your final GitHub Pages URL once it's live.

---

## ✨ Features

| Section | Description |
|---------|-------------|
| **Hero** | Animated gradient hero with key stats and CTAs |
| **Products** | Overview cards for both AI products |
| **AI Stock Analysis** | Feature list, live signal demo panel, use cases |
| **AI Chatbot** | Feature list, animated chat window demo, use cases |
| **Benefits** | 6-card benefits grid |
| **Pricing** | 3 tiers (Starter free, Pro HK$288/mo, Enterprise custom) with monthly/annual toggle |
| **Testimonials** | 6 testimonials + company logos bar |
| **FAQ** | 7-question accordion |
| **Contact / Book Demo** | Contact info + form (wired to `mailto:sales@etnet.com`) |
| **Footer** | Links, social icons, company info |

### SEO & Accessibility

- `<meta>` title, description, keywords, canonical
- Open Graph + Twitter Card tags
- SVG favicon
- `sitemap.xml` + `robots.txt`
- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels and roles throughout
- `focus-visible` outlines for keyboard navigation
- Scroll-reveal animations via `IntersectionObserver`

---

## 🎨 Customisation

- **Colours:** Edit CSS custom properties at the top of `css/styles.css` (`:root` block).
- **Fonts:** Swap the Google Fonts `<link>` in `index.html` and update `--font-sans`.
- **Content:** All copy is in `index.html` — find sections by their `id` attribute.
- **CTA email:** Search for `sales@etnet.com` and replace with your address.
- **OG image:** Add a real `assets/og-image.png` (1200×630 px) and update the path in `index.html`.

---

## 📄 License

© etnet Limited. All rights reserved.

