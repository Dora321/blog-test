# Fragments of Time | Personal Space

A minimalist, literary-styled personal website template.

## Features
- **Design**: "Warm paper" aesthetic, clean serif typography, smooth scroll animations.
- **Structure**: Single-page portfolio + standalone blog post template.
- **Tech**: HTML5, Tailwind CSS, Vanilla JS.

## Customization

1. **Images**: Replace image URLs in `index.html` and `post.html`. High-quality black & white or film-style photos work best.
2. **Colors & Fonts**: Modified in `assets/css/style.css` and `assets/js/main.js` (Tailwind config).
3. **Content**: Edit the text directly in the HTML files.

## How to Publish to GitHub

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create Repository**:
   - Go to GitHub and create a new repository (e.g., `my-blog`).

3. **Push Code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/my-blog.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to **Settings** > **Pages**.
   - Under **Source**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - Your site will be live at `https://YOUR_USERNAME.github.io/my-blog/`.
