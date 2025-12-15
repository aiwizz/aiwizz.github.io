# Recap Dat Landing Page

A modern, responsive landing page for the Recap Dat browser extension - an AI-powered web summarization tool.

## 🚀 Live Demo

Visit: [https://yourusername.github.io/recapdat](https://yourusername.github.io/recapdat)

## 📁 Project Structure

```
landing-page/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── script.js       # Interactive features and animations
├── images/             # Images and assets (to be added)
└── README.md           # This file
```

## ✨ Features

- **Modern Design**: Clean, gradient-based design with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Interactive Elements**: Hover effects, scroll animations, and parallax effects
- **Browser Detection**: Automatically highlights the user's browser download button
- **Performance Optimized**: Lazy loading, smooth scrolling, and efficient animations
- **SEO Friendly**: Semantic HTML, meta tags, and structured content

## 🎨 Design Features

### Sections Included

1. **Hero Section**: Eye-catching headline with extension mockup
2. **Browser Support**: Icons for Chrome, Firefox, Edge, and Safari
3. **Features Grid**: 6 key features with icons and descriptions
4. **How It Works**: 3-step process visualization
5. **Pricing**: Free, Monthly, and Yearly plans comparison
6. **Testimonials**: User reviews and ratings
7. **Download CTA**: Browser-specific download buttons
8. **Footer**: Links, social media, and copyright

### Color Palette

- Primary Gradient: `#667eea` → `#764ba2`
- Text Primary: `#1a202c`
- Text Secondary: `#4a5568`
- Background: `#ffffff`, `#f7fafc`

## 🛠️ Setup & Deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/summizethat.git
cd summizethat/landing-page
```

2. Open `index.html` in your browser:
```bash
open index.html  # macOS
# or simply double-click index.html
```

3. Use a local server for best results (optional):
```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

### GitHub Pages Deployment

1. **Push to GitHub**:
```bash
git add landing-page/
git commit -m "Add landing page"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select the branch (usually `main`)
   - Set the folder to `/` (root) or `/landing-page` (if you want just this folder)
   - Click **Save**

3. **Configure Custom Domain** (optional):
   - Add a `CNAME` file to the landing-page directory with your domain:
   ```
   recapdat.com
   ```
   - Configure your DNS settings to point to GitHub Pages

4. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/summizethat`
   - Or with custom domain: `https://recapdat.com`

### Using Subdirectory

If you want to keep the landing page in a subdirectory:

1. Move `landing-page` to `docs` folder (GitHub Pages convention):
```bash
mkdir docs
mv landing-page/* docs/
```

2. Update GitHub Pages settings to use `/docs` folder

3. Your site will be at: `https://yourusername.github.io/summizethat`

## 📝 Customization

### Update Download Links

Edit `index.html` and replace placeholder URLs with actual store links:

```html
<!-- Chrome Web Store -->
<a href="https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID">

<!-- Firefox Add-ons -->
<a href="https://addons.mozilla.org/firefox/addon/YOUR_ADDON_NAME">

<!-- Edge Add-ons -->
<a href="https://microsoftedge.microsoft.com/addons/detail/YOUR_EXTENSION_ID">
```

### Add Images

Place images in the `images/` folder and update references:

```html
<!-- Example: Adding screenshots -->
<img src="images/screenshot-1.png" alt="Extension in action">

<!-- Example: Favicon -->
<link rel="icon" type="image/png" href="images/favicon.png">

<!-- Example: OG Image for social sharing -->
<meta property="og:image" content="images/og-image.png">
```

### Update Content

- **Hero Section**: Edit the headline, description, and stats in `index.html`
- **Features**: Modify the 6 feature cards with your own icons and text
- **Pricing**: Update pricing tiers and features in the pricing section
- **Testimonials**: Add real user testimonials
- **Footer**: Update links, email, and social media handles

### Modify Colors

Update CSS variables in `styles.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --primary-color: #667eea;
  --primary-dark: #764ba2;
  /* ... */
}
```

## 📊 Analytics (Optional)

Add Google Analytics by inserting this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Browser Compatibility

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## 📱 Responsive Breakpoints

- Desktop: `> 1024px`
- Tablet: `768px - 1024px`
- Mobile: `< 768px`
- Small Mobile: `< 480px`

## 🎯 Performance Tips

1. **Optimize Images**: Compress images before adding to `images/` folder
   ```bash
   # Use tools like ImageOptim, TinyPNG, or:
   brew install imageoptim-cli
   imageoptim images/*.png
   ```

2. **Minify CSS/JS**: For production, minify your files
   ```bash
   # Using online tools or:
   npm install -g clean-css-cli uglify-js
   cleancss -o css/styles.min.css css/styles.css
   uglifyjs js/script.js -o js/script.min.js
   ```

3. **Enable Caching**: Add `.htaccess` for Apache or configure Nginx

4. **CDN**: Consider using Cloudflare for better global performance

## 🐛 Troubleshooting

### GitHub Pages Not Updating

1. Clear GitHub Pages cache by making a commit
2. Wait 2-5 minutes for deployment
3. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### CSS Not Loading

1. Check file paths are correct (case-sensitive)
2. Ensure `css/styles.css` exists
3. Check browser console for 404 errors

### Images Not Showing

1. Verify images are in `images/` folder
2. Check file extensions match (`.png`, `.jpg`, `.svg`)
3. Use relative paths: `images/logo.png` not `/images/logo.png`

## 📄 License

This landing page is part of the Recap Dat project. See parent directory LICENSE file.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

For questions or support:
- Email: info@atom8.info