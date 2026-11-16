# Fallen Lineage Wiki (fallenlineage.org)

A pure static, high-performance community wiki and player resource for **Fallen Lineage** on Roblox. Built with [Astro](https://astro.build) with zero client-side UI framework overhead.

## Project Structure

```
fallenlineage/
├─ astro.config.mjs          # Site configuration (site: 'https://fallenlineage.org', trailingSlash: 'never', sitemap)
├─ public/
│  ├─ robots.txt             # Search crawler directives + Sitemap link
│  └─ favicon.svg            # Custom SVG game badge
├─ src/
│  ├─ layouts/
│  │  └─ Base.astro          # Universal layout (HTML lang="en", canonical, OG, JSON-LD, Header, Footer)
│  ├─ styles/
│  │  └─ global.css          # Pure CSS responsive dark fantasy styling
│  ├─ components/
│  │  ├─ Header.astro        # Sticky navigation header
│  │  ├─ Footer.astro        # Structured footer with disclaimer & sibling links
│  │  ├─ CodeTable.astro     # Promo code table with active/expired states and copy action
│  │  └─ Faq.astro           # Expandable semantic FAQ component
│  ├─ content/               # Core markdown source files
│  │  ├─ codes.md
│  │  ├─ tier-list.md
│  │  ├─ trello.md
│  │  ├─ classes.md
│  │  ├─ beginner.md
│  │  └─ updates.md
│  └─ pages/                 # Clean routes (no trailing slashes, one-keyword-per-page)
│     ├─ index.astro         # /
│     ├─ codes.astro         # /codes
│     ├─ tier-list.astro     # /tier-list
│     ├─ trello.astro        # /trello
│     ├─ classes.astro       # /classes
│     ├─ updates.astro       # /updates
│     ├─ guides/
│     │  └─ beginner.astro   # /guides/beginner
│     └─ 404.astro           # /404
└─ package.json
```

## Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static bundle (creates /dist)
npm run build

# Preview production build locally
npm run preview
```

## Deployment Steps (Vercel + Cloudflare)

1. **GitHub**:
   ```bash
   cd fallenlineage
   git init
   git add .
   git commit -m "feat: initial commit for fallenlineage wiki"
   git branch -M main
   # Add your remote and push
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. **Vercel**:
   - Go to Vercel Dashboard -> **Add New -> Project** -> Import repository.
   - Framework preset automatically detects **Astro**.
   - Click **Deploy**.
3. **Custom Domains on Vercel**:
   - Go to **Settings -> Domains**.
   - Add `fallenlineage.org` and `www.fallenlineage.org`.
   - Set `www.fallenlineage.org` to redirect (301) to `fallenlineage.org`.
4. **Cloudflare DNS Configuration**:
   - Add apex record: `A` record pointing to Vercel IP (76.76.21.21).
   - Add www record: `CNAME` pointing to `cname.vercel-dns.com`.
   - Set Proxy status to **DNS only (Grey Cloud)**.
   - Set SSL/TLS encryption mode to **Full**.
5. **Google Search Console**:
   - Verify domain property in Google Search Console.
   - Submit sitemap URL: `https://fallenlineage.org/sitemap-index.xml`.
