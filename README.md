# ✦ LUMIÈRE ESSENCE — Luxury Perfumes & Skincare Website

> *"Wear Your Story. Own Your Glow."*

A fully responsive, frontend-only luxury eCommerce website built for a perfume and skincare brand. Designed with an editorial fashion aesthetic — think Chanel meets Glossier — using pure HTML, CSS, and vanilla JavaScript. No frameworks. No dependencies. No backend required.

---

## 🌐 Live Demo

https://dominionai.github.io/Beauty-Personal-Care-Demo-Website/

---

## 📁 Project Structure

```
Beauty-Personal-Care-Demo-Website/
├── index.html       # All page structure and content
├── script.js        # Interactivity — nav, cart, slider, scroll reveal
└── style.css        # All styling, animations, and responsive layout
```
---

## ✨ Features

- **Cinematic Hero Section** — Full-viewport slow-zoom background with animated text entrance
- **Featured Collections** — 3 hover-animated collection cards with gold border effects
- **Product Grid** — 6 product cards with Bestseller/New Arrival badges, star ratings, and ₦ pricing
- **Brand Story Section** — Split layout with decorative gold accent frame
- **Why Choose Us** — 4 trust badges on a dark background
- **Testimonials Carousel** — Auto-rotating slider with 3 customer reviews and dot navigation
- **Instagram Strip** — 6-tile photo grid with gold gradient hover overlay
- **Newsletter Signup** — Email capture form with validation
- **Sticky Navigation** — Shrinks on scroll, with cart icon and mobile hamburger menu
- **Mobile Menu** — Full-screen overlay navigation for smaller screens
- **Scroll Reveal Animations** — Elements fade and rise into view as you scroll
- **Cart Counter** — Live item count with animated button feedback
- **Social Media Ready** — Open Graph meta tags for rich link previews on Facebook, Instagram, Pinterest, WhatsApp, and Twitter/X

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#FDF8F3` | Page background |
| `--gold` | `#C9A96E` | Accents, highlights, CTAs |
| `--gold-light` | `#e8d5b0` | Hover states |
| `--text` | `#1A1A1A` | Body text |
| `--blush` | `#E8C5B5` | Soft accents |
| `--black` | `#0F0F0F` | Buttons, dark sections |
| `--muted` | `#8a7a72` | Subtext, captions |

**Typography**
- Display / Headings: `Cormorant Garamond` (Google Fonts) — elegant serif
- Body / UI: `Jost` (Google Fonts) — refined light sans-serif

---

## 🚀 Getting Started

No build step or package installation needed.

**Option 1 — Open locally:**
```bash
git clone https://github.com/your-username/lumiere-essence.git
cd lumiere-essence
open index.html
```

**Option 2 — Deploy instantly (free):**

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Your site is live with a shareable link in seconds ✅

---

## 🛒 Adding Real Payments (Optional)

This site is frontend-only. To accept real payments, you can integrate either of the following with no backend:

**Paystack (recommended for Nigeria)**
```html
<script src="https://js.paystack.co/v1/inline.js"></script>
```
Replace the `addToCart` button logic in `script.js` with a Paystack popup using your public key from [paystack.com](https://paystack.com).

**WhatsApp Orders**
Replace the cart button href with:
```
https://wa.me/234XXXXXXXXXX?text=Hi!%20I%20want%20to%20order%20[Product%20Name]
```

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|---|---|
| Desktop (`> 1024px`) | 3-column grid, full navigation |
| Tablet (`768px – 1024px`) | 2-column grid, condensed layout |
| Mobile (`< 768px`) | Single column, hamburger menu |
| Small Mobile (`< 480px`) | Stacked newsletter form, 2-column Instagram grid |

---

## 🔗 Social Sharing

The site includes Open Graph and Twitter Card meta tags so every shared link renders a beautiful preview card on:

- Facebook
- Instagram (bio link)
- Pinterest
- WhatsApp
- Twitter / X

To customise the preview, update these tags in the `<head>` of `index.html`:

```html
<meta property="og:title" content="Your Brand Name">
<meta property="og:description" content="Your tagline here">
<meta property="og:image" content="URL to your preview image">
<meta property="og:url" content="https://your-live-url.com">
```

---

## 🗂️ Page Sections

| Section | ID / Class | Description |
|---|---|---|
| Navigation | `#navbar` | Sticky top bar with logo, links, cart |
| Hero | `.hero` | Full-screen banner with CTA |
| Collections | `#collections` | 3 featured collection cards |
| Best Sellers | `#bestsellers` | 6-product grid with badges |
| Brand Story | `#story` | Split layout brand narrative |
| Why Choose Us | `#why` | 4 trust badges |
| Testimonials | `.testimonials` | Auto-sliding customer reviews |
| Instagram Strip | `.ig-strip` | Social photo grid |
| Newsletter | `#newsletter` | Email signup form |
| Footer | `footer` | Links, social icons, copyright |

---

## 🤝 Customisation Guide

To personalise this template for a client:

1. **Brand name** — Find and replace `LUMIÈRE ESSENCE` in `index.html`
2. **Colours** — Update CSS variables in the `:root` block inside `style.css`
3. **Products** — Edit the `.product-card` blocks in `index.html` with real names, prices, and image URLs
4. **Images** — Replace Unsplash URLs with your own hosted images
5. **WhatsApp number** — Add your number to the footer social icon href
6. **Social handles** — Update all `href="#"` social links in the footer
7. **Live URL** — Update `og:url` meta tag with your deployed domain

---

## 📄 License

This project is open for personal and client use. Attribution appreciated but not required.

---

<p align="center">Made with ✦ for the woman who glows.</p>
