# 📷 How to Change Your Favicon

## Current Status
Your site currently shows the React logo favicon. Let's replace it with a photography-themed icon!

## Quick Method (Recommended)

### Option 1: Camera Emoji Favicon
1. Visit: **https://favicon.io/emoji-favicons/camera/**
2. Click **Download**
3. Extract the ZIP file
4. Copy these files to your `public/` folder:
   - `favicon.ico` (replace existing)
   - `favicon-16x16.png` (replace existing logo192.png)
   - `favicon-32x32.png` (replace existing logo512.png)
   - `apple-touch-icon.png` (optional, for iOS)

### Option 2: Custom Photography Icon
1. Visit: **https://www.flaticon.com/search?word=camera**
2. Choose a camera/photography icon you like
3. Download as ICO format (or PNG and convert)
4. Replace `public/favicon.ico`

### Option 3: Use Your Initials/Logo
1. Visit: **https://favicon.io/favicon-generator/**
2. Enter "M" or "MAKZIBS" or your logo
3. Choose colors (black/white for professional look)
4. Download and replace files

## Manual Steps

Once you have your favicon files:

1. **Replace the files in `/public/` folder:**
   ```
   public/
   ├── favicon.ico          (your new favicon)
   ├── logo192.png          (192x192 version)
   └── logo512.png          (512x512 version)
   ```

2. **Update `public/index.html` if needed:**
   The file already references favicon.ico, so it should work automatically.

3. **Update `public/manifest.json`:**
   Make sure the icons array points to your new files.

## After Replacing Files

1. **Clear browser cache** (Cmd+Shift+R on Mac)
2. **Test locally:** `npm start`
3. **Commit and push:**
   ```bash
   git add public/favicon.ico public/logo192.png public/logo512.png
   git commit -m "Update favicon to photography theme"
   git push origin main
   ```

## Recommended Icons

For a photography portfolio, consider:
- 📷 Camera icon
- 🎨 Aperture/lens icon
- 🖼️ Frame icon
- Your initials in a stylish font
- Your actual logo

## Pro Tip

For best results, use:
- **ICO format** for `favicon.ico` (supports multiple sizes)
- **PNG format** for logo192.png and logo512.png
- **Square images** (1:1 aspect ratio)
- **Simple designs** (favicons are tiny!)

---

**Need help?** Let me know which option you prefer and I can guide you through it!
