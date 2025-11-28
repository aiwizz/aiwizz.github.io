# Deploying Landing Page to GitHub Pages

## Quick Start

Your landing page is ready to deploy! Follow these steps:

### 1. Create GitHub Repository (if not already done)

```bash
# Navigate to your project root
cd /Users/desiby/summizethat

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Add landing page for GitHub Pages"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/summizethat.git
git push -u origin main
```

### 2. Enable GitHub Pages

**Option A: Deploy landing-page folder directly**

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select branch: `main`
4. Under **Folder**, select: `/ (root)`
5. Click **Save**
6. Your site will be at: `https://YOUR_USERNAME.github.io/summizethat/landing-page/`

**Option B: Use docs folder (recommended)**

```bash
# Move landing-page to docs (GitHub Pages convention)
mv landing-page docs

# Update repository
git add .
git commit -m "Move landing page to docs folder"
git push
```

Then in GitHub Settings → Pages:
- Select branch: `main`
- Select folder: `/docs`
- Your site will be at: `https://YOUR_USERNAME.github.io/summizethat/`

**Option C: Create separate gh-pages branch**

```bash
# Create orphan branch
git checkout --orphan gh-pages

# Remove all files except landing-page
git rm -rf .
mv landing-page/* .
rm -rf landing-page

# Commit and push
git add .
git commit -m "Deploy landing page"
git push origin gh-pages

# Switch back to main
git checkout main
```

Then in GitHub Settings → Pages:
- Select branch: `gh-pages`
- Select folder: `/ (root)`

### 3. Custom Domain (Optional)

If you own a domain like `recapdat.com`:

1. Add a `CNAME` file in your landing-page directory:
```bash
echo "recapdat.com" > landing-page/CNAME
git add landing-page/CNAME
git commit -m "Add custom domain"
git push
```

2. Configure your DNS provider:

**For apex domain (recapdat.com):**
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

3. In GitHub Settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS" (wait for SSL certificate)

### 4. Update Extension Download Links

Once deployed, update the actual store links in `index.html`:

```html
<!-- Replace these with your actual store URLs -->

<!-- Chrome Web Store -->
<a href="https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID">

<!-- Firefox Add-ons -->
<a href="https://addons.mozilla.org/firefox/addon/recap-dat">

<!-- Edge Add-ons -->
<a href="https://microsoftedge.microsoft.com/addons/detail/YOUR_EXTENSION_ID">
```

### 5. Add Favicon and OG Images

Create and add these images to `landing-page/images/`:

```bash
# Favicon (32x32 or 64x64)
# Create: images/favicon.png

# Open Graph image for social sharing (1200x630)
# Create: images/og-image.png

# Update index.html references
```

Example files to create:
- `favicon.png` - Small logo for browser tab
- `og-image.png` - Preview image when sharing on social media
- `screenshot-1.png` - Extension screenshot for hero section
- `logo.svg` - Vector logo for better quality

### 6. Test Deployment

1. Wait 2-5 minutes for GitHub Pages to build
2. Visit your URL
3. Test on mobile devices
4. Check all links work
5. Verify download buttons redirect correctly

### 7. Add Analytics (Optional but Recommended)

**Google Analytics:**

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 8. SEO Optimization

Update these in `index.html`:

```html
<!-- Update with your actual URLs -->
<meta property="og:url" content="https://recapdat.com">
<meta property="og:image" content="https://recapdat.com/images/og-image.png">

<!-- Add Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@recapdat">
<meta name="twitter:title" content="Recap Dat - AI-Powered Web Summarizer">
<meta name="twitter:description" content="Get instant AI-powered summaries of any web page in seconds.">
<meta name="twitter:image" content="https://recapdat.com/images/og-image.png">

<!-- Add canonical URL -->
<link rel="canonical" href="https://recapdat.com">
```

### 9. Create sitemap.xml (Optional)

Create `landing-page/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://recapdat.com/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 10. Submit to Search Engines

- **Google Search Console**: [search.google.com/search-console](https://search.google.com/search-console)
- **Bing Webmaster Tools**: [www.bing.com/webmasters](https://www.bing.com/webmasters)

## Maintenance

### Updating Content

```bash
# Edit files in landing-page/
# Then commit and push
git add landing-page/
git commit -m "Update landing page content"
git push
```

GitHub Pages will automatically rebuild in 1-5 minutes.

### Checking Build Status

1. Go to repository → Actions tab
2. See deployment status
3. View build logs if errors occur

### Cache Issues

If changes don't appear:

```bash
# Add cache-busting query parameter
<link rel="stylesheet" href="css/styles.css?v=2">
<script src="js/script.js?v=2"></script>
```

Or clear GitHub Pages cache:
```bash
# Make empty commit to force rebuild
git commit --allow-empty -m "Force GitHub Pages rebuild"
git push
```

## Troubleshooting

**404 Error:**
- Check Settings → Pages shows green checkmark
- Verify branch and folder are correct
- Wait full 5 minutes for first deployment

**CSS Not Loading:**
- Use relative paths: `css/styles.css` not `/css/styles.css`
- Check file names are case-sensitive

**Custom Domain Not Working:**
- Verify DNS settings (use `dig recapdat.com` to check)
- Wait up to 48 hours for DNS propagation
- Ensure CNAME file contains only domain name

## Performance Tips

```bash
# Optimize images before adding
brew install imageoptim-cli
imageoptim landing-page/images/*.png

# Minify CSS and JS for production
npm install -g clean-css-cli uglify-js
cleancss -o css/styles.min.css css/styles.css
uglifyjs js/script.js -o js/script.min.js -c -m

# Then update HTML to use .min versions
```

## Next Steps

1. ✅ Deploy to GitHub Pages
2. ⬜ Add real screenshots and images
3. ⬜ Update download links with actual store URLs
4. ⬜ Set up custom domain (if purchased)
5. ⬜ Configure Google Analytics
6. ⬜ Test on all devices and browsers
7. ⬜ Submit to search engines
8. ⬜ Share on social media
9. ⬜ Monitor analytics and user feedback
10. ⬜ A/B test different headlines and CTAs

---

Your landing page is production-ready! 🚀
